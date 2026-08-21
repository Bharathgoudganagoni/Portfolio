import React, { useEffect, useRef } from "react";

const storyLines = [
  { type: "label", text: "01 / WHO I AM" },
  { type: "headline", text: "A passionate engineer with a dual focus on code and human-centered design." },
  { type: "body", text: "I am Ganagoni Bharath Goud, a Computer Science student and Full Stack Developer. My approach combines technical rigor with aesthetic precision — turning complex software challenges into elegant, high-performance web solutions." },

  { type: "label", text: "02 / TECHNICAL FOUNDATION" },
  { type: "headline", text: "Mastering the end-to-end web technology ecosystem." },
  { type: "body", text: "I build modern applications using React, Angular, TypeScript, Node.js, Express, and MongoDB. From crafting modular frontend architectures to engineering robust backend APIs — I cover the full application lifecycle with precision." },

  { type: "label", text: "03 / INDUSTRY EXPERIENCE" },
  { type: "headline", text: "Delivering production systems and enterprise-grade solutions." },
  { type: "body", text: "At Keezenix Global LLP, I engineered the official corporate website (www.keezenix.com) from wireframes to live deployment. At Edunet Foundation's NxtGen 3.0, I built a full MERN Spotify Clone with JWT authentication and real-time streaming." },

  { type: "label", text: "04 / DESIGN & CREATIVITY" },
  { type: "headline", text: "Designing interfaces that captivate and convert." },
  { type: "body", text: "Beyond code, I dive into UX research, wireframing, and digital branding in Figma and Canva. I believe every software product should be visually compelling, responsive across all devices, and deeply intuitive." },

  { type: "label", text: "05 / VISION & GOALS" },
  { type: "headline", text: "Driven by continuous learning and breakthrough innovation." },
  { type: "body", text: "With exposure to Python computer vision systems, automation testing (Cypress), and full SDLC workflows, I thrive on new technological frontiers. My goal is to engineer impactful, scalable systems within forward-thinking teams." },
];

export default function About() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("line-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container" id="about" aria-labelledby="about-heading">
      <div className="section-header">
        <span className="section-subtitle">BACKGROUND &amp; IDENTITY</span>
        <h2 id="about-heading" className="section-title">About Me</h2>
      </div>

      <div className="about-lines-container">
        {storyLines.map((line, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`about-line about-line--${line.type}`}
            style={{ transitionDelay: `${(index % 3) * 0.06}s` }}
          >
            {line.type === "label" && (
              <span className="about-label-text">{line.text}</span>
            )}
            {line.type === "headline" && (
              <h3 className="about-headline-text">{line.text}</h3>
            )}
            {line.type === "body" && (
              <p className="about-body-text">{line.text}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
