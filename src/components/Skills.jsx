import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaPython
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiCanva
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" }
  ];

  return (
    <section className="section skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>

      <div className="orbit-container">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="orbit-item"
            style={{ "--i": index }}
          >
            <div className="icon-wrapper">
              {skill.icon}
              <span className="tooltip">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
