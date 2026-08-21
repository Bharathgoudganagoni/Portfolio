import React, { useState, useEffect } from "react";
import { FaFileAlt, FaDownload, FaBars, FaTimes, FaQuestion, FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Work Experience" },
  { id: "skills", label: "Professional Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const faqData = [
  { q: "Who is Bharath?", a: "Ganagoni Bharath Goud is a Computer Science engineer, Full Stack Developer, and UI/UX Designer passionate about building scalable MERN web applications, Python backend tools, and intuitive human-centered interfaces." },
  { q: "What technologies do you work with?", a: "JavaScript, React, Angular, TypeScript, HTML5, CSS3, Node.js, Express.js, MongoDB, Python, PostgreSQL, Docker, REST APIs, Figma, Canva, Photoshop, Git/GitHub, and Cypress automation." },
  { q: "What type of projects have you built?", a: "Commercial production platforms (Keezenix.com, NN-Clicks), real-time AI systems (Gesture Control with OpenCV & MediaPipe), MERN full-stack apps (Netflix Clone, Spotify Clone), voice-enabled utilities, and emergency broadcast systems." },
  { q: "Do you have professional experience?", a: "Yes — Web Developer Intern & UI/UX at Keezenix Global LLP (Feb 2026) and MERN Full Stack Developer Intern at Edunet Foundation's NxtGen 3.0 (Dec 2024 – Jan 2025)." },
  { q: "What did you do at Edunet Foundation?", a: "Engineered a full-stack Spotify Clone using MongoDB, Express.js, React, and Node.js with JWT/OAuth authentication, music streaming, playlist management, and Git version control." },
  { q: "What did you do at Keezenix Global LLP?", a: "Designed and built the official corporate website (www.keezenix.com) from Figma wireframes to live deployment. Also conducted UX research, created user flows, and designed digital branding assets." },
  { q: "Can I view or download your resume?", a: "Yes! Use the 'View Resume' button to open it in a new tab or 'Download Resume' to save the PDF. Both options are in this navigation panel." },
  { q: "How can I contact you?", a: "Send a message via the Contact section form, or email directly at bharathgoudganagoni123@gmail.com. You can also reach me on LinkedIn, Instagram, Threads, or WhatsApp (+91 9666809898)." },
  { q: "What opportunities are you interested in?", a: "Full Stack Developer, MERN Stack Engineer, Web Developer, and UI/UX Engineering roles. Also open to high-impact freelance collaborations and technical partnerships." },
  { q: "What is your development philosophy?", a: "I believe great software is the intersection of technical precision and human-centered design. Every project should be fast, beautiful, accessible, and solve a real problem." },
];

function FAQModal({ onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-modal-backdrop" onClick={onClose}>
      <div className="faq-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="faq-modal-header">
          <div>
            <span className="faq-modal-tag">QUICK ANSWERS</span>
            <h2 className="faq-modal-title">Frequently Asked Questions</h2>
          </div>
          <button className="faq-modal-close" onClick={onClose} aria-label="Close FAQ">
            <FaTimes />
          </button>
        </div>
        <div className="faq-modal-body">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-modal-item ${isOpen ? "open" : ""}`}>
                <button className="faq-modal-q" onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <div className="faq-q-inner">
                    <FaQuestionCircle className="faq-q-icon" />
                    <span>{item.q}</span>
                  </div>
                  <FaChevronDown className={`faq-chevron ${isOpen ? "rotated" : ""}`} />
                </button>
                <div className="faq-modal-answer-wrap">
                  <div className="faq-modal-answer">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when FAQ modal is open
  useEffect(() => {
    if (faqOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [faqOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const resumeUrl = `${import.meta.env.BASE_URL}Bharath_Resume.pdf`;

  const handleViewResume = (e) => {
    e.preventDefault();
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Bharath_Goud_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop for Mobile */}
      {mobileOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileOpen(false)} />
      )}

      {/* Right Side Navigation Panel */}
      <nav className={`side-nav ${mobileOpen ? "mobile-active" : ""}`}>
        <div className="side-nav-inner">
          <div className="side-nav-header">
            <span className="side-nav-tag">Navigation</span>
          </div>

          <ul className="side-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`side-nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <span className="side-nav-indicator" />
                  <span className="side-nav-text">{item.label}</span>
                </button>
              </li>
            ))}

            {/* FAQ special entry in nav list */}
            <li>
              <button
                className="side-nav-link faq-nav-btn"
                onClick={() => { setFaqOpen(true); setMobileOpen(false); }}
              >
                <span className="side-nav-indicator faq-indicator" />
                <span className="side-nav-text">FAQ</span>
                <FaQuestion className="faq-nav-icon" />
              </button>
            </li>
          </ul>

          <div className="side-nav-divider" />

          {/* Resume Actions */}
          <div className="side-nav-actions">
            <button
              className="side-nav-btn view-btn"
              onClick={handleViewResume}
              title="Open Resume in new tab"
            >
              <FaFileAlt className="btn-icon" />
              <span>View Resume</span>
            </button>

            <button
              className="side-nav-btn download-btn"
              onClick={handleDownloadResume}
              title="Download Resume PDF"
            >
              <FaDownload className="btn-icon" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </nav>

      {/* FAQ Modal Overlay */}
      {faqOpen && <FAQModal onClose={() => setFaqOpen(false)} />}
    </>
  );
}
