import React, { useEffect, useState } from "react";

const taglines = [
  "Full Stack Developer | MERN | Python",
  "UI/UX Focused Problem Solver",
  "Building Scalable Applications"
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
        <h2 className="typing">
          {text}
          <span className="cursor">|</span>
        </h2>

        <h1 className="name">Ganagoni Bharath Goud</h1>

        <p className="bio">
          Aspiring Full Stack Developer passionate about MERN, Python,
          and building scalable applications with strong UI/UX focus.
        </p>

        <div className="hero-buttons">
          
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-container">
          <img src={`${import.meta.env.BASE_URL}Bharath_profile.png`} />


        </div>
      </div>
    </header>
  );
}
