import React, { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    id: "edunet",
    company: "Edunet Foundation",
    role: "MERN Full Stack Developer Intern",
    program: "NxtGen 3.0, Virtual Internship",
    duration: "December 2024 – January 2025",
    type: "Virtual Internship",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "OAuth", "Git"],
    points: [
      "Developed a full-stack Spotify Clone web application using the MERN stack: MongoDB, Express.js, React, and Node.js.",
      "Implemented core features including music streaming, playlist management, and secure user authentication using JWT/OAuth.",
      "Collaborated with a development team using Git/GitHub for version control.",
      "Gained hands-on experience across the full software development lifecycle."
    ]
  },
  {
    id: "keezenix",
    company: "Keezenix Global LLP",
    role: "Web Developer Intern & UI/UX",
    program: "Official Corporate Platform & Branding",
    duration: "February 2026",
    type: "Remote/Hybrid, Paid Internship",
    website: "https://www.keezenix.com",
    websiteLabel: "www.keezenix.com",
    skills: ["Web Development", "UI/UX Design", "Figma", "Canva", "Trello", "User Flows", "Wireframing"],
    points: [
      "Developed the official company website for Keezenix Global LLP, from wireframe to live deployment.",
      "Worked as a Web Developer on web development and UI/UX design tasks, building and improving website structure and usability.",
      "Conducted UX research and created wireframes and user flows to guide development decisions.",
      "Designed social media creatives and digital branding assets aligned with company brand guidelines.",
      "Collaborated with cross-functional teams using Figma, Canva, and Trello to deliver web development and design tasks on schedule."
    ]
  }
];

export default function WorkExperience() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section the user has scrolled
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, currentDist / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="experience-section" id="experience" ref={sectionRef} aria-labelledby="exp-heading">
      <div className="section-header">
        <span className="section-subtitle">CAREER MILESTONES &amp; IMPACT</span>
        <h2 id="exp-heading" className="section-title">Work Experience</h2>
        <p className="section-desc">A visual journey through my professional internships and engineering contributions.</p>
      </div>

      <div className="timeline-container">
        {/* Animated Career Path Line */}
        <div className="timeline-path-bg" />
        <div
          className="timeline-path-fill"
          style={{ height: `${Math.min(100, Math.max(0, (scrollProgress - 0.15) * 140))}%` }}
        />

        <div className="timeline-items">
          {experiences.map((exp, idx) => {
            const nodeActive = scrollProgress > 0.2 + idx * 0.35;
            return (
              <div
                key={exp.id}
                className={`timeline-item ${nodeActive ? "node-active" : ""}`}
              >
                {/* Milestone Node */}
                <div className="timeline-node">
                  <div className="node-outer">
                    <div className="node-inner">
                      <FaBriefcase className="node-icon" />
                    </div>
                  </div>
                  <span className="node-step">0{idx + 1}</span>
                </div>

                {/* Milestone Content Box */}
                <div className="timeline-card">
                  <div className="card-top-bar">
                    <span className="card-badge">{exp.type}</span>
                    <span className="card-duration">
                      <FaCalendarAlt className="inline-icon" /> {exp.duration}
                    </span>
                  </div>

                  <div className="card-header-group">
                    <h3 className="card-role">{exp.role}</h3>
                    <div className="card-company-row">
                      <span className="card-company">{exp.company}</span>
                      <span className="card-program">• {exp.program}</span>
                    </div>
                  </div>

                  {exp.website && (
                    <div className="card-website-link">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="company-link-btn"
                      >
                        <FaExternalLinkAlt className="link-icon" /> {exp.websiteLabel}
                      </a>
                    </div>
                  )}

                  <ul className="card-points-list">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <FaCheckCircle className="point-check-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-skills-row">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
