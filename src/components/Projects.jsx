import React, { useState, useRef, useEffect } from "react";
import { FaExternalLinkAlt, FaTimes, FaRocket, FaLock, FaCode, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    id: "keezenix",
    title: "Keezenix Corporate Website",
    category: "Commercial Platform & Branding",
    desc: "The official high-fidelity corporate platform for Keezenix, built to showcase tech services and enterprise solutions.",
    longDesc: "Designed and engineered the complete brand interface and official corporate platform for Keezenix Global LLP. Built with React, TypeScript, and modern styling architectures, the website features glassmorphic interface cards, fast page transitions, responsive layouts, interactive service components, and customized branding assets. Optimized for high speed, search engines, and touch displays.",
    tech: ["React", "TypeScript", "CSS3", "HSL Palette", "Responsive Design"],
    link: "https://www.keezenix.com",
    status: "Production Live"
  },
  {
    id: "nnclicks",
    title: "NN-Clicks Client Website",
    category: "Client Platform",
    desc: "A professional client website built for NN-Clicks, delivering a polished brand experience with modern web technologies.",
    longDesc: "Developed a complete client-facing website for NN-Clicks featuring a sleek, modern design with smooth animations, responsive layouts, and optimized performance. Built with attention to conversion-focused design principles, the site showcases the client's services with interactive components and professional UI patterns.",
    tech: ["React", "Vercel", "CSS3", "Responsive Design"],
    link: "https://nn-clicks.vercel.app",
    status: "Production Live"
  },
  {
    id: "gesture",
    title: "Gesture Control System",
    category: "Computer Vision & AI",
    desc: "A real-time gesture recognition system that controls computer actions using hand signs.",
    longDesc: "A highly intelligent computer-vision desktop gesture utility. Utilizes OpenCV to capture raw webcam feeds, Google MediaPipe to map 21 distinct 3D hand coordinates in real-time, and a customized TensorFlow model to recognize hand gestures. Translates real-time signs into OS-level commands, enabling users to adjust volume, trigger desktop windows, or toggle media playback.",
    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "JavaScript"],
    link: "https://drive.google.com/file/d/1IMNEuqDxAF_q8LeBsghonXDGG8qhY9L_/view",
    status: "Demo Available"
  },
  {
    id: "netflix",
    title: "Netflix Clone",
    category: "Full Stack Streaming App",
    desc: "Full stack movie streaming clone with authentication and OTP verification.",
    longDesc: "A high-performance full-stack web cloning project of Netflix. Built with a scalable MERN (MongoDB, Express, React, Node.js) structure, pulling real-time movie and series data feeds from the TMDB API. Includes robust security implementations such as jsonwebtoken (JWT) cookie credentials, secure user registrations, and one-time password (OTP) email validation flows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TMDB API", "JWT Auth"],
    link: "https://mern-movie-app-n.onrender.com/",
    status: "Live Application"
  },
  {
    id: "calculator",
    title: "Voice-Enabled Calculator",
    category: "Interactive Web App",
    desc: "Voice-enabled JavaScript calculator with theme toggle and animated UI.",
    longDesc: "A digital calculator featuring customizable visual themes, smooth click soundscapes, and advanced voice arithmetic support. Integrates Web Speech Recognition API to parse spoken speech calculations and output audio answers seamlessly.",
    tech: ["JavaScript", "Web Speech API", "CSS Grid", "Voice Recognition"],
    link: "https://bharathgoudganagoni.github.io/calculator-project/",
    status: "Live App"
  },
  {
    id: "whatsapp",
    title: "WhatsApp Emergency Alert System",
    category: "Full Stack Incident System",
    desc: "Emergency alert system using React frontend and Node.js backend.",
    longDesc: "A secure incident dashboard designed to dispatch automated emergency notification broadcasts to priority target groups. Connects a React console with a Node/Express backend that maps incidents, triggers WhatsApp business API calls, and runs SMS fallbacks if connections fail.",
    tech: ["React", "Node.js", "Express", "Twilio API", "Webhooks"],
    link: "",
    status: "Under Active Staging"
  }
];

function ProjectCard({ project, index, onClick }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card-3d ${visible ? "card-revealed" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="card-top-bar">
        <span className="project-category-tag">{project.category}</span>
        {project.link ? (
          <span className="status-indicator live">
            <span className="pulse-green"></span> Live
          </span>
        ) : (
          <span className="status-indicator private">
            <FaLock className="lock-icon" /> Staging
          </span>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.desc}</p>
      </div>

      <div className="project-card-tech">
        {project.tech.map((t, idx) => (
          <span key={idx} className="project-tech-pill">
            {t}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        <button className="view-details-btn">
          <span>View Details &amp; Preview</span>
          <FaExternalLinkAlt className="btn-icon" />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects-container" id="projects" aria-labelledby="projects-heading">
      <div className="section-header">
        <span className="section-subtitle">PORTFOLIO SHOWCASE</span>
        <h2 id="projects-heading" className="section-title">Projects</h2>
        <p className="section-desc">
          Featured engineering projects spanning commercial platforms, full-stack web applications, AI systems, and utilities.
        </p>
      </div>

      <div className="projects-grid-3d">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* Detailed Project View Modal */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-icon"
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="modal-header">
              <span className="modal-tag">{activeProject.category}</span>
              <h3 className="modal-title">{activeProject.title}</h3>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Project Overview</h4>
                <p>{activeProject.longDesc}</p>
              </div>

              <div className="modal-section">
                <h4>Technology Stack</h4>
                <div className="modal-tech-list">
                  {activeProject.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Deployment Status</span>
                  <span className="meta-value">{activeProject.status}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Engineering Focus</span>
                  <span className="meta-value">{activeProject.category}</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {activeProject.link ? (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-launch-btn"
                >
                  <FaRocket /> Launch Project / View Code
                </a>
              ) : (
                <div className="modal-staging-notice">
                  <FaLock /> Codebase is under active staging. Access provided upon request.
                </div>
              )}
              <button
                className="modal-close-btn"
                onClick={() => setActiveProject(null)}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
