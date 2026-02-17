import React from "react";

const projects = [
  {
    title: "Gesture Control System",
    desc: `A real-time gesture recognition system that controls computer actions 
    using hand signs. Built with webcam input, real-time landmark detection, 
    and customizable gesture-to-action mapping.`,
    tech: "Python · OpenCV · MediaPipe · TensorFlow · JavaScript",
    link: "https://drive.google.com/file/d/1IMNEuqDxAF_q8LeBsghonXDGG8qhY9L_/view"
  },
  {
    title: "Netflix Clone",
    desc: "Full stack movie streaming clone with authentication and OTP verification.",
    tech: "React · Node.js · Express · MongoDB · TMDB API",
    link: "https://mern-movie-app-n.onrender.com/"
  },
  {
    title: "Calculator",
    desc: "Voice-enabled JavaScript calculator with theme toggle and animated UI.",
    tech: "JavaScript · Web API",
    link: "https://bharathgoudganagoni.github.io/calculator-project/"
  },
  {
    title: "Spotify Clone",
    desc: "Music streaming app clone built with React and Spotify API integration.",
    tech: "React · Node.js · Spotify API",
    link: ""   // No live link yet
  },
  {
    title: "WhatsApp Emergency Alert System",
    desc: "Emergency alert system using React frontend and Node.js backend.",
    tech: "React · Node.js · Express",
    link: "#"  // Placeholder
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>

            <p className="project-desc">{p.desc}</p>

            <div className="project-meta">
              <strong>Tech:</strong> {p.tech}
            </div>

            {p.link && p.link !== "#" ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Live Demo
              </a>
            ) : (
              <button className="project-btn disabled-btn" disabled>
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
