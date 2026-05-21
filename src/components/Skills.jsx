import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaAngular
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiCanva,
  SiTypescript,
  SiCypress
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript", level: "Expert" },
        { icon: <FaReact />, name: "React", level: "Expert" },
        { icon: <FaAngular />, name: "Angular", level: "Advanced" },
        { icon: <SiTypescript />, name: "TypeScript", level: "Advanced" },
        { icon: <FaHtml5 />, name: "HTML5", level: "Expert" },
        { icon: <FaCss3Alt />, name: "CSS3", level: "Expert" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", level: "Advanced" },
        { icon: <SiExpress />, name: "Express", level: "Advanced" },
        { icon: <SiMongodb />, name: "MongoDB", level: "Advanced" },
        { icon: <FaPython />, name: "Python", level: "Intermediate" }
      ]
    },
    {
      title: "Design, Tools & Testing",
      skills: [
        { icon: <FaFigma />, name: "Figma", level: "Expert" },
        { icon: <FaGitAlt />, name: "Git & GitHub", level: "Advanced" },
        { icon: <SiCanva />, name: "Canva", level: "Expert" },
        { icon: <SiAdobephotoshop />, name: "Photoshop", level: "Intermediate" },
        { icon: <SiCypress />, name: "Testing Automation", level: "Basic" }
      ]
    }
  ];

  return (
    <section className="section skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Professional Skills</h2>
      <p className="skills-subtitle">Curated expertise across modern web technologies, design tools, and testing.</p>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category-card">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-badge-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
