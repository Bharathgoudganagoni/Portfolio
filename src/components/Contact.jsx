import React from "react";

export default function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        <h2 id="contact-heading" className="contact-title">
          Contact Me
        </h2>

        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let’s connect!
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:bharathgoudganagoni123@gmail.com"
            className="contact-button"
          >
            📧 Email Me
          </a>

          <a
            href="https://wa.me/919666809898"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            💬 WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/ganagoni-bharath-goud"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
