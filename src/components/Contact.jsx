import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_portfolio",   // You'll set this up in EmailJS dashboard
        "template_portfolio",  // You'll set this up in EmailJS dashboard
        formRef.current,
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        <h2 id="contact-heading" className="contact-title">
          Let's Connect
        </h2>

        <p className="contact-description">
          I'm currently seeking full-time opportunities or freelance collaborations.
          Send me a message directly below, or reach out through my social channels!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                disabled={status === "sending"}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Bharath, let's build something amazing..."
              rows="5"
              required
              disabled={status === "sending"}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`form-submit-btn ${status === "sending" ? "btn-sending" : ""} ${status === "success" ? "btn-success" : ""} ${status === "error" ? "btn-error" : ""}`}
            disabled={status === "sending"}
          >
            {status === "idle" && "🚀 Send Message"}
            {status === "sending" && "📡 Sending..."}
            {status === "success" && "✅ Message Sent!"}
            {status === "error" && "❌ Failed — Try Again"}
          </button>

          {status === "success" && (
            <div className="success-toast">
              <span>🎉 Your message has been delivered to Bharath's inbox!</span>
            </div>
          )}

          {status === "error" && (
            <div className="error-toast">
              <span>⚠️ Something went wrong. Please try the direct email link below.</span>
            </div>
          )}
        </form>

        <div className="contact-divider">
          <span>OR REACH OUT DIRECTLY</span>
        </div>

        <div className="contact-buttons">
          <a
            href="mailto:bharathgoudganagoni123@gmail.com"
            className="contact-button email-btn"
          >
            📧 Email Me
          </a>

          <a
            href="https://wa.me/919666809898"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button whatsapp-btn"
          >
            💬 WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/ganagoni-bharath-goud"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button linkedin-btn"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
