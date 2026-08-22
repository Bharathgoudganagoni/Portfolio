import React, { useState } from "react";
import "./robotCharacter.css";

export default function RobotCharacter({ onOpenAiAssistant }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      if (onOpenAiAssistant) onOpenAiAssistant();
    }, 200);
  };

  return (
    <div
      className={`robot-companion-widget ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Ask Bharath AI"
    >
      {/* Short Minimal Tooltip */}
      <div className="robot-mini-tooltip">
        <span>Ask Bharath AI</span>
      </div>

      {/* Small Sleek Futuristic Robot Companion SVG */}
      <div className="robot-avatar-container">
        <svg
          viewBox="0 0 80 85"
          className="robot-svg-mini"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Neon Aura */}
          <circle cx="40" cy="42" r="36" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.25" className="aura-ring" />

          {/* Tiny Antenna */}
          <line x1="40" y1="8" x2="40" y2="20" stroke="#00f5d4" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="40" cy="7" r="3.5" fill="#00f5d4" className="antenna-glow" />

          {/* Metallic Head Box */}
          <rect
            x="20"
            y="20"
            width="40"
            height="28"
            rx="10"
            fill="#0b1320"
            stroke="#00f5d4"
            strokeWidth="2"
            className="robot-head"
          />

          {/* Visor Screen */}
          <rect x="25" y="26" width="30" height="16" rx="6" fill="#040812" />

          {/* Sleek Glowing Eyes */}
          {!isHovered ? (
            <g className="robot-eyes">
              <circle cx="33" cy="34" r="3.5" fill="#00f5d4" className="eye-pulse" />
              <circle cx="47" cy="34" r="3.5" fill="#00f5d4" className="eye-pulse" />
            </g>
          ) : (
            /* Hover Brightened Happy Curved Eyes */
            <g className="robot-eyes-hover">
              <path d="M 30 35 Q 33 30 36 35" stroke="#00f5d4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 44 35 Q 47 30 50 35" stroke="#00f5d4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          )}

          {/* Neck Link */}
          <rect x="36" y="48" width="8" height="4" fill="#00f5d4" opacity="0.8" />

          {/* Compact Body Chassis */}
          <rect
            x="24"
            y="52"
            width="32"
            height="24"
            rx="8"
            fill="#0b1320"
            stroke="#00f5d4"
            strokeWidth="2"
          />

          {/* Core LED Reactor Dot */}
          <circle cx="40" cy="64" r="4.5" fill="#7000ff" stroke="#00f5d4" strokeWidth="1.5" className="core-dot" />
          <circle cx="40" cy="64" r="2" fill="#00f5d4" />
        </svg>
      </div>

      <span className="robot-badge-tag">AI</span>
    </div>
  );
}
