import React, { useState } from "react";
import { FaRobot, FaCommentDots } from "react-icons/fa";
import "./robotCharacter.css";

export default function RobotCharacter({ onOpenAiAssistant }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      if (onOpenAiAssistant) onOpenAiAssistant();
    }, 180);
  };

  return (
    <div
      className={`robot-companion-widget ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label="Ask Bharath AI Assistant"
      title="Ask Bharath AI Assistant"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick(e);
        }
      }}
    >
      {/* Sleek Tooltip with Prompt */}
      <div className="robot-mini-tooltip">
        <FaCommentDots className="tooltip-chat-icon" />
        <span>Ask Bharath AI</span>
      </div>

      {/* Lottie Animated Robot Container */}
      <div className="robot-lottie-container">
        {/* Glow Aura behind Lottie */}
        <div className="robot-ambient-glow" />

        {/* Embedded Lottie Robot */}
        <iframe
          src="https://lottie.host/embed/54c0c6d9-8bcc-42fc-9d87-2603b9a3e54c/TURqfOYwPu.lottie"
          title="Bharath AI Companion Robot"
          className="robot-lottie-frame"
          loading="lazy"
        />

        {/* Click Catcher Overlay (Ensures clicks anywhere on the iframe trigger AI assistant) */}
        <div className="robot-click-overlay" />
      </div>

      {/* Futuristic AI Companion Pill */}
      <div className="robot-status-pill">
        <span className="robot-pulse-dot" />
        <FaRobot className="robot-pill-icon" />
        <span className="robot-pill-text">AI ASSISTANT</span>
      </div>
    </div>
  );
}
