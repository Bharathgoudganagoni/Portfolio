import React, { useState, useEffect } from "react";
import { FaFileAlt, FaDownload, FaBars, FaTimes, FaQuestion, FaChevronDown, FaQuestionCircle, FaRobot } from "react-icons/fa";

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

export default function SideNav({ onOpenAiAssistant }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Prevent body scroll when FAQ modal or menu drawer is open
  useEffect(() => {
    if (faqOpen || menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [faqOpen, menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const resumeUrl = `${import.meta.env.BASE_URL}Bharath_Resume.pdf`;

  const handleViewResume = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Bharath_Goud_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top Right Floating 3-Line Menu Trigger Button (Visible on Desktop & Mobile) */}
      <button
        className={`top-right-menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation Menu"
        title="Open Navigation Menu"
      >
        <div className="hamburger-box">
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </div>
        <span className="menu-toggle-label">{menuOpen ? "CLOSE" : "MENU"}</span>
      </button>

      {/* Backdrop for Slide-Out Navigation Panel */}
      {menuOpen && (
        <div className="top-nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* Top-Right Slide-Over Navigation Drawer */}
      <nav className={`top-right-nav-drawer ${menuOpen ? "drawer-open" : ""}`}>
        <div className="nav-drawer-inner">
          <div className="nav-drawer-header">
            <span className="nav-drawer-tag">BHARATH GOUD</span>
            <h3 className="nav-drawer-title">Navigation</h3>
          </div>

          <ul className="nav-drawer-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-drawer-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <span className="nav-link-indicator" />
                  <span className="nav-link-text">{item.label}</span>
                </button>
              </li>
            ))}

            {/* Bharath AI Robot Assistant Nav Entry */}
            <li>
              <button
                className="nav-drawer-link ai-nav-btn"
                onClick={() => {
                  setMenuOpen(false);
                  if (onOpenAiAssistant) onOpenAiAssistant();
                }}
              >
                <span className="nav-link-indicator ai-indicator" />
                <span className="nav-link-text">Bharath AI</span>
                <FaRobot className="nav-btn-icon ai-icon" />
              </button>
            </li>

            {/* FAQ Entry */}
            <li>
              <button
                className="nav-drawer-link faq-nav-btn"
                onClick={() => { setFaqOpen(true); setMenuOpen(false); }}
              >
                <span className="nav-link-indicator faq-indicator" />
                <span className="nav-link-text">FAQ</span>
                <FaQuestion className="nav-btn-icon" />
              </button>
            </li>
          </ul>

          <div className="nav-drawer-divider" />

          {/* Resume Actions */}
          <div className="nav-drawer-actions">
            <button
              className="drawer-action-btn view-btn"
              onClick={handleViewResume}
              title="Open Resume in new tab"
            >
              <FaFileAlt className="btn-icon" />
              <span>View Resume</span>
            </button>

            <button
              className="drawer-action-btn download-btn"
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
