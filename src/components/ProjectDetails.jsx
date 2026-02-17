import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = {
  spotify: {
    title: "Spotify Clone",
    description:
      "A music streaming app built using React and Spotify API integration.",
    tech: "React · Node.js · Spotify API",
    images: ["/images/spotify1.png", "/images/spotify2.png"]
  },
  whatsapp: {
    title: "WhatsApp Emergency Alert System",
    description:
      "Emergency alert system using React frontend and Node.js backend.",
    tech: "React · Node.js · Express",
    images: ["/images/whatsapp1.png"]
  },
  gesture: {
    title: "Gesture Control System",
    description:
      "Real-time gesture recognition system using MediaPipe and OpenCV.",
    tech: "Python · OpenCV · MediaPipe · TensorFlow",
    images: ["/images/gesture1.png"]
  },
  netflix: {
    title: "Netflix Clone",
    description:
      "Full stack movie streaming application with authentication.",
    tech: "React · Node · MongoDB",
    images: ["/images/netflix1.png"]
  },
  calculator: {
    title: "Calculator",
    description:
      "Voice-enabled JavaScript calculator with animated UI.",
    tech: "JavaScript",
    images: ["/images/calculator1.png"]
  }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <section className="section">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h4>Tech Used:</h4>
      <p>{project.tech}</p>

      <div className="image-gallery">
        {project.images.map((img, index) => (
          <img key={index} src={img} alt="project" width="300" />
        ))}
      </div>

      <Link to="/" className="project-btn">
        ← Back to Home
      </Link>
    </section>
  );
}
