import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-brand">Ganagoni Bharath Goud</span>
          <p className="footer-tagline">MERN Full Stack Developer &amp; UI/UX Designer</p>
        </div>

        <div className="footer-center">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Ganagoni Bharath Goud. All rights reserved.
          </span>
        </div>

        <div className="footer-right">
          <a
            href="mailto:bharathgoudganagoni123@gmail.com"
            aria-label="Email"
            className="footer-social-link"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ganagoni-bharath-goud"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/bharathgoudganagoni/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.threads.com/@ganagoni_bharath_goud"
            target="_blank"
            rel="noreferrer"
            aria-label="Threads"
            className="footer-social-link"
          >
            <SiThreads />
          </a>
        </div>
      </div>
    </footer>
  );
}
