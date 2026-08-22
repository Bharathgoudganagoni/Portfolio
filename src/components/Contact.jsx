import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaInstagram, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // EmailJS credentials from environment variables or default fallback config
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_portfolio";
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_portfolio";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (publicKey && publicKey !== "YOUR_PUBLIC_KEY") {
      try {
        await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } catch (err) {
        console.error("EmailJS Error:", err);
        triggerMailtoFallback();
      }
    } else {
      // Direct mailto fallback if EmailJS keys are not yet configured in production env
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    const targetEmail = "bharathgoudganagoni123@gmail.com";
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const socials = [
    { icon: <FaEnvelope />, label: "Email", url: "mailto:bharathgoudganagoni123@gmail.com", color: "#00f5d4" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/ganagoni-bharath-goud", color: "#0a66c2" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/bharathgoudganagoni/", color: "#e1306c" },
    { icon: <SiThreads />, label: "Threads", url: "https://www.threads.com/@ganagoni_bharath_goud", color: "#ffffff" },
    { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/919666809898?text=Hi%20Bharath!%20I%20saw%20your%20portfolio%20and%20want%20to%20connect%20%F0%9F%9A%80", color: "#25d366" },
  ];

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      {/* Decorative ambient blobs */}
      <div className="contact-blob contact-blob-1" />
      <div className="contact-blob contact-blob-2" />

      <div className="contact-inner">
        {/* Left: Big typography + social icons */}
        <div className="contact-left-panel">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 id="contact-heading" className="contact-big-title">
            Let's Build<br />
            <span className="contact-title-accent">Something Great</span>
          </h2>
          <p className="contact-tagline">
            Open for full-time roles, freelance collaborations,<br className="hide-mobile" /> and exciting engineering projects.
          </p>

          {/* Social Icons Horizontal Strip */}
          <div className="contact-social-strip">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="contact-social-btn"
                title={s.label}
                style={{ "--social-color": s.color }}
              >
                {s.icon}
                <span className="social-tooltip">{s.label}</span>
              </a>
            ))}
          </div>

          {/* Direct email */}
          <a href="mailto:bharathgoudganagoni123@gmail.com" className="contact-direct-email">
            <FaEnvelope />
            <span>bharathgoudganagoni123@gmail.com</span>
          </a>
        </div>

        {/* Right: Minimalist Form */}
        <div className="contact-right-panel">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form-minimal" noValidate>
            <div className="form-float-group">
              <input
                type="text"
                id="c-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                required
                disabled={status === "sending"}
                className="form-float-input"
              />
              <label htmlFor="c-name" className="form-float-label">Your Name</label>
              <span className={`form-float-line ${focusedField === "name" ? "active" : ""}`} />
            </div>

            <div className="form-float-group">
              <input
                type="email"
                id="c-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                required
                disabled={status === "sending"}
                className="form-float-input"
              />
              <label htmlFor="c-email" className="form-float-label">Email Address</label>
              <span className={`form-float-line ${focusedField === "email" ? "active" : ""}`} />
            </div>

            <div className="form-float-group">
              <textarea
                id="c-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                rows="4"
                required
                disabled={status === "sending"}
                className="form-float-input form-float-textarea"
              />
              <label htmlFor="c-message" className="form-float-label">Your Message</label>
              <span className={`form-float-line ${focusedField === "message" ? "active" : ""}`} />
            </div>

            <button
              type="submit"
              className={`contact-send-btn ${status !== "idle" ? status : ""}`}
              disabled={status === "sending"}
            >
              <span className="send-btn-text">
                {status === "idle" && <><FaPaperPlane /> Send Message to Bharath</>}
                {status === "sending" && "Sending Message..."}
                {status === "success" && <><FaCheckCircle /> Message Delivered!</>}
              </span>
              <span className="send-btn-shimmer" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
