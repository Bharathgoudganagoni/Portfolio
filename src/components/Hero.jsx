import React, { useEffect, useState } from "react";

const taglines = [
  "Full Stack Developer | MERN | Python",
  "UI/UX Focused Problem Solver",
  "Building Scalable Applications",
  "Web Developer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[index];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
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

  return (
    <header className="hero">
      <div className="hero-left">
        <div className="terminal-container">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">developer.sh</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">ganagoni@bharath:~$</span> <span className="terminal-command">node run-portfolio.js</span>
            </div>
            <div className="terminal-line terminal-output">
              <span className="terminal-arrow">&gt;&gt;</span> <span className="terminal-text">{text}</span>
              <span className="terminal-cursor">█</span>
            </div>
          </div>
        </div>

        <h1 className="name">Ganagoni Bharath Goud</h1>

        <p className="bio">
          Aspiring Full Stack Developer passionate about MERN, Python,
          and building scalable applications with strong UI/UX focus.
        </p>

        <div className="hero-buttons">
          
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-wrapper">
          <img 
            src={`${import.meta.env.BASE_URL}Bharath_profile.png`} 
            className="profile-pic"
            alt="Ganagoni Bharath Goud"
          />
        </div>
      </div>
    </header>
  );
}
