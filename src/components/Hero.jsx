import React, { useEffect, useState } from "react";
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const taglines = [
  "Full Stack Developer | MERN | Python",
  "UI/UX Focused Problem Solver",
  "Building Scalable Applications",
  "Web Developer & Digital Innovator",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = taglines[index];
    const speed = isDeleting ? 40 : 90;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setIsDeleting(true), 1400);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const scrollToAbout = () => {
    if (window.__portfolioScrollToSection) {
      window.__portfolioScrollToSection(1);
      return;
    }
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero-container" id="home">
      <div className="hero-inner">
        {/* Left: Text + Terminal */}
        <div className="hero-content-left">
          {/* Terminal */}
          <div className="terminal-container">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">developer.sh</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">ganagoni@bharath:~$</span>{" "}
                <span className="terminal-command">node run-portfolio.js</span>
              </div>
              <div className="terminal-line terminal-output">
                <span className="terminal-arrow">&gt;&gt;</span>{" "}
                <span className="terminal-text">{text}</span>
                <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>

          {/* Name + Role */}
          <div className="hero-title-group">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">Ganagoni Bharath Goud</h1>
            <h2 className="hero-role">Full Stack Developer &amp; UI/UX Innovator</h2>
          </div>

          <p className="hero-bio">
            Passionate computer science engineer crafting scalable MERN applications,
            Python systems, and high-fidelity user experiences. End-to-end engineering
            with clean code and premium design.
          </p>

          <div className="hero-cta-group">
            <button className="hero-primary-btn" onClick={scrollToAbout}>
              Explore Journey <FaArrowDown className="btn-arrow" />
            </button>
            <div className="hero-social-quick">
              <a
                href="https://www.linkedin.com/in/ganagoni-bharath-goud"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hero-social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/bharathgoudganagoni"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hero-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:bharathgoudganagoni123@gmail.com"
                aria-label="Email"
                className="hero-social-link"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Ultra-Premium Developer Profile Showcase */}
        <div className="hero-content-right">
          <div className="hero-profile-showcase">
            {/* Ambient Multi-Layer Backlight Glow */}
            <div className="hps-ambient-glow" />

            {/* Corner Tech HUD Brackets */}
            <span className="hps-corner corner-tl" />
            <span className="hps-corner corner-tr" />
            <span className="hps-corner corner-bl" />
            <span className="hps-corner corner-br" />

            {/* Top HUD Status Bar */}
            <div className="hps-hud-bar">
              <div className="hps-hud-dots">
                <span className="hps-dot red" />
                <span className="hps-dot yellow" />
                <span className="hps-dot green" />
              </div>
              <span className="hps-hud-title">sys.profile // bharath.dev</span>
              <span className="hps-hud-status">
                <span className="hps-pulse-green" /> ONLINE
              </span>
            </div>

            {/* Main Portrait Frame with Image */}
            <div className="hps-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}Bharath_profile.png`}
                alt="Ganagoni Bharath Goud"
                className="hps-portrait-img"
              />
              <div className="hps-image-overlay" />
              <div className="hps-image-shimmer" />
            </div>

            {/* Floating Tech Pill 1 (Top-Left) */}
            <div className="hps-floating-pill pill-top-left">
              <span className="pill-icon-glow">⚡</span>
              <div className="pill-text-col">
                <span className="pill-title">MERN Stack</span>
                <span className="pill-subtitle">Full Stack Engineer</span>
              </div>
            </div>

            {/* Floating Tech Pill 2 (Bottom-Right) */}
            <div className="hps-floating-pill pill-bottom-right">
              <span className="pill-icon-glow">🎨</span>
              <div className="pill-text-col">
                <span className="pill-title">UI/UX Design</span>
                <span className="pill-subtitle">Figma &amp; Modern Web</span>
              </div>
            </div>

            {/* Bottom Status & Quick Badges Bar */}
            <div className="hps-bottom-bar">
              <div className="hps-status-badge">
                <span className="hps-beacon-dot" />
                <span>Available for Opportunities</span>
              </div>
              <div className="hps-tech-tags">
                <span className="hps-tag">React</span>
                <span className="hps-tag">Node</span>
                <span className="hps-tag">Python</span>
                <span className="hps-tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
