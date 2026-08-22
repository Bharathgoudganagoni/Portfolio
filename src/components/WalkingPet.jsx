import React, { useState } from "react";
import "./walkingPet.css";
import pet from "../assets/dog.gif";

export default function WalkingPet({ onOpenAiAssistant }) {
  const [paused, setPaused] = useState(false);

  const handleClick = () => {
    if (onOpenAiAssistant) {
      onOpenAiAssistant();
    } else {
      const phoneNumber = "919666809898";
      const message = "Hi Bharath! I saw your portfolio and want to connect 🚀";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <div
      className={`pet-wrapper ${paused ? "paused" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="tooltip">Ask Bharath AI 🤖</div>

      <img src={pet} alt="walking-pet" className="pet-gif" />
    </div>
  );
}

