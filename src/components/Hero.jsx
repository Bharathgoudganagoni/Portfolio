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
  const [scrolled, setScrolled] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

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

  // Profile scroll-shrink logic
  useEffect(() => {
    const heroEl = document.getElementById("home");
    const handleScroll = () => {
      if (!heroEl) return;
      const heroH = heroEl.offsetHeight;
      const ratio = Math.min(1, Math.max(0, window.scrollY / (heroH * 0.7)));
      setScrollRatio(ratio);
      setScrolled(ratio > 0.35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Compute floating profile styles
  // Large: 280x280 in hero, Small: 52x52 fixed top-right
  const profileSize = scrolled ? 52 : 280;
  const borderRadius = scrolled ? "50%" : "24px";
  const profileFixed = scrolled;

  return (
    <>
      {/* Floating sticky profile (appears after scroll) */}
      {profileFixed && (
        <div
          className="profile-floating"
          style={{
            opacity: scrollRatio > 0.5 ? 1 : 0,
            transform: `scale(${0.5 + scrollRatio * 0.5})`,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}Bharath_profile.png`}
            alt="Ganagoni Bharath Goud"
            className="profile-floating-img"
          />
        </div>
      )}

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
                <a href="https://www.linkedin.com/in/ganagoni-bharath-goud" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-social-link">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/bharathgoudganagoni" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-social-link">
                  <FaGithub />
                </a>
                <a href="mailto:bharathgoudganagoni123@gmail.com" aria-label="Email" className="hero-social-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Large profile — visible only in hero */}
          <div className={`hero-content-right ${scrolled ? "hero-profile-hidden" : ""}`}>
            <div className="hero-profile-frame">
              <div className="hero-profile-glow" />
              <div className="hero-profile-border-animated" />
              <img
                src={`${import.meta.env.BASE_URL}Bharath_profile.png`}
                className="hero-profile-img"
                alt="Ganagoni Bharath Goud"
              />
              <div className="hero-profile-tag">
                <span className="profile-tag-dot" />
                <span>Available for Work</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
