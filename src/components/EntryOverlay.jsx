import React, { useState, useEffect } from "react";

export default function EntryOverlay() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user already entered in this session
    const entered = sessionStorage.getItem("entered_portfolio");
    if (entered) {
      setVisible(false);
      return;
    }

    // Auto dismiss after 2.5s if not clicked
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 2500);

    return () => clearTimeout(autoDismissTimer);
  }, []);

  const handleDismiss = () => {
    setFading(true);
    sessionStorage.setItem("entered_portfolio", "true");
    setTimeout(() => {
      setVisible(false);
    }, 600); // match transition duration
  };

  if (!visible) return null;

  return (
    <div
      className={`entry-overlay ${fading ? "entry-fading" : ""}`}
      onClick={handleDismiss}
      role="button"
      tabIndex={0}
      aria-label="Tap to explore portfolio"
    >
      <div className="entry-content">
        <div className="entry-badge">Interactive Portfolio</div>
        <h1 className="entry-title">Ganagoni Bharath Goud</h1>
        <p className="entry-subtitle">MERN Full Stack Developer & UI/UX Designer</p>
        <div className="entry-cta">
          <span className="entry-pulse-dot"></span>
          <span>Tap to Explore</span>
          <span className="entry-arrow">↓</span>
        </div>
      </div>
    </div>
  );
}
