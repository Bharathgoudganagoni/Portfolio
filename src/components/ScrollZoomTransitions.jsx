import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCROLL_ZOOM_CONFIG } from "../config/scrollZoomConfig";
import "./ScrollZoomTransitions.css";

// Register ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollZoomTransitions
 *
 * Architecture: Scrub-based cinematic 3D zoom on natural-flow sections.
 *
 * Each section panel retains its natural document position (position: relative).
 * As the user scrolls between panels, GSAP ScrollTrigger scrubs:
 *   - Outgoing panel: scale ↓, translateZ ↓ (recedes into depth), opacity ↓
 *   - Incoming panel: scale ↑, translateZ ↑ (emerges from depth), opacity ↑
 *
 * No full page-pin so tall sections remain scrollable. Smooth reverse scrolling works.
 * Compatible with React 18 StrictMode — gsap.context() cleanup is properly called.
 *
 * Config: Adjust all values in src/config/scrollZoomConfig.js without touching this file.
 */
export default function ScrollZoomTransitions({ children, onActiveSectionChange }) {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  const panelChildren = React.Children.toArray(children).filter(Boolean);

  useLayoutEffect(() => {
    // Respect prefers-reduced-motion — accessibility fallback
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const panels = panelRefs.current.filter(Boolean);
    const numPanels = panels.length;

    if (!container || numPanels < 2) return;

    // Pick responsive config
    const isMobile = window.innerWidth <= SCROLL_ZOOM_CONFIG.mobileBreakpoint;
    const activeCfg = isMobile ? SCROLL_ZOOM_CONFIG.mobile : SCROLL_ZOOM_CONFIG;

    const outScale = activeCfg.outgoing.scale;
    const outZ = activeCfg.outgoing.translateZ;
    const outOpacity = activeCfg.outgoing.opacity;

    const inStartScale = activeCfg.incoming.startScale;
    const inStartZ = activeCfg.incoming.startTranslateZ;
    const inStartOpacity = activeCfg.incoming.startOpacity;

    // perspectiveValue for per-element transform perspective (reinforces CSS perspective)
    const perspectiveValue = parseInt(isMobile ? "800" : "1200", 10);

    const ctx = gsap.context(() => {
      for (let i = 0; i < numPanels - 1; i++) {
        const currentPanel = panels[i];
        const nextPanel = panels[i + 1];

        // ── OUTGOING ─────────────────────────────────────────────────────────
        // Current section scales down and recedes as the user scrolls it out
        ScrollTrigger.create({
          trigger: currentPanel,
          start: "bottom 80%",   // section bottom crosses 80% from viewport top
          end: "bottom 5%",      // section exits almost completely
          scrub: SCROLL_ZOOM_CONFIG.scrub || 1,
          invalidateOnRefresh: true,
          animation: gsap.fromTo(
            currentPanel,
            {
              scale: 1,
              z: 0,
              opacity: 1,
              transformPerspective: perspectiveValue,
            },
            {
              scale: outScale,
              z: outZ,
              opacity: outOpacity,
              transformPerspective: perspectiveValue,
              ease: "none",
            }
          ),
        });

        // ── INCOMING ─────────────────────────────────────────────────────────
        // Next section emerges from depth as it enters viewport
        ScrollTrigger.create({
          trigger: nextPanel,
          start: "top 85%",     // next section just starts entering viewport
          end: "top 15%",       // next section is well into viewport
          scrub: SCROLL_ZOOM_CONFIG.scrub || 1,
          invalidateOnRefresh: true,
          animation: gsap.fromTo(
            nextPanel,
            {
              scale: inStartScale,
              z: inStartZ,
              opacity: inStartOpacity,
              transformPerspective: perspectiveValue,
            },
            {
              scale: 1,
              z: 0,
              opacity: 1,
              transformPerspective: perspectiveValue,
              ease: "none",
            }
          ),
          onEnter: () => {
            if (onActiveSectionChange) onActiveSectionChange(i + 1);
          },
          onEnterBack: () => {
            if (onActiveSectionChange) onActiveSectionChange(i);
          },
        });
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, [panelChildren.length, onActiveSectionChange]);

  // Expose global navigation helper so SideNav/Hero "Explore Journey" button can jump sections
  useEffect(() => {
    window.__portfolioScrollToSection = (index) => {
      const panels = panelRefs.current.filter(Boolean);
      if (index < 0 || index >= panels.length) return;
      const panel = panels[index];
      if (panel) {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return () => {
      delete window.__portfolioScrollToSection;
    };
  }, [panelChildren.length]);

  return (
    <div
      className="scroll-zoom-stage"
      ref={containerRef}
      style={{
        perspective: SCROLL_ZOOM_CONFIG.perspective,
        perspectiveOrigin: "50% 50%",
        WebkitPerspective: SCROLL_ZOOM_CONFIG.perspective,
      }}
    >
      {panelChildren.map((child, index) => (
        <div
          key={index}
          className={`scroll-zoom-panel panel-index-${index}`}
          ref={(el) => (panelRefs.current[index] = el)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
