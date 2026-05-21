import React, { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Keezenix Corporate Website",
    desc: "The official high-fidelity corporate platform for Keezenix, built to showcase tech services and enterprise solutions.",
    longDesc: "Designed and engineered the complete brand interface and official corporate platform for Keezenix. Built entirely with React, TypeScript, and modern styling architectures, the website features high-end glassmorphic user interface cards, fast page transitions, responsive layouts for all mobile screens, interactive service components, and customized graphics. Optimized for high speed, search engines, and modern touch displays.",
    tech: "React · TypeScript · CSS3 · HSL Palette · Responsive Layout",
    link: "https://www.keezenix.com"
  },
  {
    title: "NN-Clicks Client Website",
    desc: "A professional client website built for NN-Clicks, delivering a polished brand experience with modern web technologies.",
    longDesc: "Developed a complete client-facing website for NN-Clicks featuring a sleek, modern design with smooth animations, responsive layouts, and optimized performance. Built with attention to conversion-focused design principles, the site showcases the client's services with interactive components and professional UI patterns.",
    tech: "React · Vercel · CSS3 · Responsive Design",
    link: "https://nn-clicks.vercel.app"
  },
  {
    title: "Gesture Control System",
    desc: "A real-time gesture recognition system that controls computer actions using hand signs.",
    longDesc: "A highly intelligent computer-vision desktop gesture utility. Utilizes OpenCV to capture raw webcam data feeds, Google MediaPipe to map 21 distinct 3D hand coordinates in real-time, and a customized TensorFlow network to recognize custom hand gestures. Translates real-time signs into OS-level commands, enabling users to adjust volume, trigger desktop windows, or toggle media playback.",
    tech: "Python · OpenCV · MediaPipe · TensorFlow · JavaScript",
    link: "https://drive.google.com/file/d/1IMNEuqDxAF_q8LeBsghonXDGG8qhY9L_/view"
  },
  {
    title: "Netflix Clone",
    desc: "Full stack movie streaming clone with authentication and OTP verification.",
    longDesc: "A high-performance full-stack web cloning project of Netflix. Built with a scalable MERN (MongoDB, Express, React, Node.js) structure, pulling real-time movie and series data feeds from the TMDB API. Includes robust security implementations such as jsonwebtoken (JWT) cookie credentials, secure user registrations, and one-time password (OTP) email validation flows.",
    tech: "React · Node.js · Express · MongoDB · TMDB API",
    link: "https://mern-movie-app-n.onrender.com/"
  },
  {
    title: "Calculator",
    desc: "Voice-enabled JavaScript calculator with theme toggle and animated UI.",
    longDesc: "A beautiful digital calculator featuring highly customizable glowing visual themes, smooth click soundscapes, and advanced voice arithmetic support. Integrates Web Speech Recognition API to parse spoken speech calculations and output audio answers seamlessly.",
    tech: "JavaScript · Web Speech API · CSS Grid · Fluid Animations",
    link: "https://bharathgoudganagoni.github.io/calculator-project/"
  },
  {
    title: "WhatsApp Emergency Alert System",
    desc: "Emergency alert system using React frontend and Node.js backend.",
    longDesc: "A secure incident dashboard designed to dispatch automated emergency notification broadcasts to emergency priority target groups. Connects a React console with a Node/Express backend that maps incidents, triggers WhatsApp business API calls, and runs SMS fallbacks if connections fail.",
    tech: "React · Node.js · Express · Twilio API · Webhooks",
    link: ""
  }
];

function ProjectCard({ p, index, onClick }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card interactive-card ${visible ? "card-visible" : ""}`}
      style={{ animationDelay: `${index * 0.12}s` }}
      onClick={onClick}
    >
      <div className="project-card-header">
        <h3>{p.title}</h3>
        <span className="details-indicator">View ↗</span>
      </div>

      <p className="project-desc">{p.desc}</p>

      <div className="project-meta">
        <strong>Tech:</strong> {p.tech}
      </div>

      <div className="project-footer">
        {p.link && p.link !== "#" ? (
          <span className="project-card-btn has-live">🟢 Live</span>
        ) : (
          <span className="project-card-btn no-live">🔒 In Development</span>
        )}
        <span className="project-card-btn">Explore →</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="projects-subtitle">Click on any project to see full details and live links.</p>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            p={p}
            index={index}
            onClick={() => setActiveProject(p)}
          />
        ))}
      </div>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProject(null)}>✕</button>
            
            <div className="modal-header-section">
              <span className="modal-project-badge">Project Profile</span>
              <h3 className="modal-project-title">{activeProject.title}</h3>
            </div>
            
            <div className="modal-body-section">
              <h4 className="modal-subheading">Project Overview</h4>
              <p className="modal-project-desc">{activeProject.longDesc}</p>
              
              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <strong>Technology Stack</strong>
                  <p>{activeProject.tech}</p>
                </div>
                <div className="modal-meta-item">
                  <strong>Deployment Status</strong>
                  <p>{activeProject.link && activeProject.link !== "#" ? "🟢 Live & Production Ready" : "🔐 Private / In Development"}</p>
                </div>
              </div>
            </div>
            
            <div className="modal-footer-section">
              {activeProject.link && activeProject.link !== "#" ? (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-action-btn live-btn"
                >
                  🚀 Launch Live Site
                </a>
              ) : (
                <div className="modal-development-notice">
                  <span>🔒 Codebase Under Development</span>
                  <p className="small">This project's live preview is currently private or in active staging. Public access coming soon!</p>
                </div>
              )}
              <button className="modal-action-btn close-btn" onClick={() => setActiveProject(null)}>
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
