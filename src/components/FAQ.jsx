import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    q: "Who is Bharath?",
    a: "Ganagoni Bharath Goud is a Computer Science engineer, Full Stack Developer, and UI/UX Designer passionate about building scalable MERN web applications, Python backend tools, and intuitive human-centered user interfaces."
  },
  {
    q: "What technologies do you work with?",
    a: "I work across the full stack with JavaScript, React, Angular, TypeScript, HTML5, CSS3, Node.js, Express.js, MongoDB, Python, Figma, Canva, Photoshop, Git/GitHub, and Cypress testing automation."
  },
  {
    q: "What type of projects have you built?",
    a: "I have built commercial production platforms (Keezenix corporate website www.keezenix.com, NN-Clicks client site), real-time AI systems (Gesture Control with OpenCV & MediaPipe), MERN full-stack apps (Netflix Clone with JWT/OTP authentication, Spotify Clone), voice-enabled web utilities, and emergency incident broadcast systems."
  },
  {
    q: "Do you have professional experience?",
    a: "Yes, I have completed two internships: Web Developer Intern & UI/UX at Keezenix Global LLP (Feb 2026) and MERN Full Stack Developer Intern at Edunet Foundation (Dec 2024 – Jan 2025)."
  },
  {
    q: "What did you work on during your MERN internship at Edunet Foundation?",
    a: "I engineered a full-stack Spotify Clone web app using MongoDB, Express.js, React, and Node.js with JWT/OAuth user authentication, music streaming logic, playlist management, and Git/GitHub version control."
  },
  {
    q: "What did you work on at Keezenix Global LLP?",
    a: "I designed and engineered the official corporate website for Keezenix Global LLP (www.keezenix.com) from initial Figma wireframes to live deployment, conducted UX research, and created digital branding assets."
  },
  {
    q: "Can I view your resume?",
    a: "Yes! Click the 'View Resume' button in the right-side sticky menu to view my resume in a clean tab viewer."
  },
  {
    q: "Can I download your resume?",
    a: "Yes! Click the 'Download Resume' button in the right-side sticky menu to download a PDF copy instantly to your device."
  },
  {
    q: "How can I contact you?",
    a: "You can send me a message through the Contact section form below, email me directly at bharathgoudganagoni123@gmail.com, or reach out via LinkedIn, Instagram, Threads, or WhatsApp (+91 9666809898)."
  },
  {
    q: "What opportunities are you interested in?",
    a: "I am actively seeking full-time Full Stack Developer, MERN Stack Engineer, Web Developer, or UI/UX Engineering roles, as well as high-impact technical collaborations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq" aria-labelledby="faq-heading">
      <div className="section-header">
        <span className="section-subtitle">COMMON QUESTIONS</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <p className="section-desc">Quick answers for recruiters, hiring managers, and prospective clients.</p>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? "faq-open" : ""}`}>
              <button
                className="faq-question-btn"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <div className="faq-q-left">
                  <FaQuestionCircle className="faq-q-icon" />
                  <span className="faq-question-text">{item.q}</span>
                </div>
                <FaChevronDown className="faq-chevron" />
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
