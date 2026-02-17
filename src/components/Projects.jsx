import React from "react";

const projects = [
  {
    title: "Gesture Control System",
    desc: `A real-time gesture recognition system that controls computer actions (media controls, cursor commands, app shortcuts) using hand signs.
Demo & prototype built with webcam input, real-time landmark detection, and customizable gesture-to-action mapping.`,
    tech: "Python · OpenCV · MediaPipe · TensorFlow (optional) · JavaScript (frontend demo)",
    link: "https://drive.google.com/file/d/1IMNEuqDxAF_q8LeBsghonXDGG8qhY9L_/view"
  },
  {
    title: "Netflix Clone",
    desc: "React, Node.js, Express, MongoDB, TMDB API. Custom auth & OTP verification.",
    tech: "React · Node.js · MongoDB · TMDB API",
    link: "https://mern-movie-app-n.onrender.com/"
  },
  {
    title: "Spotify Clone",
    desc: "A music streaming app clone built with React, Node.js, and Spotify API integration.",
    tech: "React · Node.js · Spotify API",
    link: ""
  },
  {
    title: "WhatsApp Emergency Alert System",
    desc: "React frontend with Node.js + Express backend to send quick alerts via WhatsApp.",
    tech: "React · Node.js · Express",
    link: "#"
  },
  {
    title: "Calculator ",
    desc: "Vanilla JS calculator with voice input, theme toggle and animated background.",
    tech: "JavaScript · Web API",
    link: "https://Bharathgoudganagoni.github.io/calculator-project/"
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        My Projects
      </h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <article
            key={p.title}
            className="project-card fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3>{p.title}</h3>
            <p className="small">{p.desc}</p>

            <div className="project-meta">
              <strong>Tech:</strong> {p.tech}
            </div>

            {p.link && p.link !== "#" && (
              <div style={{ marginTop: 15 }}>
                <a
                  className="view-btn"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
