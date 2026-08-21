import React, { useEffect, useRef } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaAngular,
  FaDocker,
  FaAws,
  FaLinux,
  FaDatabase,
  FaCode,
  FaNetworkWired,
  FaKey,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiCanva,
  SiTypescript,
  SiCypress,
  SiPostgresql,
  SiRedux,
  SiGraphql,
  SiPostman,
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiFirebase,
  SiSocketdotio,
} from "react-icons/si";

// All skills organized for continuous scroll track
const allSkillsRow1 = [
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "#f7df1e",
  },
  {
    icon: <FaReact />,
    name: "React",
    color: "#61dafb",
  },
  {
    icon: <FaAngular />,
    name: "Angular",
    color: "#dd0031",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "#3178c6",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    color: "#e34f26",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    color: "#1572b6",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "#38bdf8",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "#ffffff",
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    color: "#764abc",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "#339933",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    color: "#00f5d4",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "#47a248",
  },
];

const allSkillsRow2 = [
  {
    icon: <FaPython />,
    name: "Python",
    color: "#3776ab",
  },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    color: "#4169e1",
  },
  {
    icon: <SiGraphql />,
    name: "GraphQL",
    color: "#e10098",
  },
  {
    icon: <FaKey />,
    name: "JWT Auth",
    color: "#d63aff",
  },
  {
    icon: <SiSocketdotio />,
    name: "Socket.io",
    color: "#ffffff",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    color: "#2496ed",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "#ffca28",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "#f05032",
  },
  {
    icon: <SiGithub />,
    name: "GitHub",
    color: "#ffffff",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
    color: "#f24e1e",
  },
  {
    icon: <SiCanva />,
    name: "Canva",
    color: "#00c4cc",
  },
  {
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
    color: "#31a8ff",
  },
];

const allSkillsRow3 = [
  {
    icon: <SiCypress />,
    name: "Cypress Testing",
    color: "#17202c",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
    color: "#ff6c37",
  },
  {
    icon: <FaCode />,
    name: "VS Code",
    color: "#007acc",
  },
  {
    icon: <FaLinux />,
    name: "Linux",
    color: "#fcc624",
  },
  {
    icon: <FaNetworkWired />,
    name: "REST APIs",
    color: "#00f5d4",
  },
  {
    icon: <FaDatabase />,
    name: "SQL Databases",
    color: "#47a248",
  },
  {
    icon: <FaAws />,
    name: "AWS Basics",
    color: "#ff9900",
  },
  {
    icon: <FaKey />,
    name: "OAuth / JWT",
    color: "#a259ff",
  },
  {
    icon: <SiJavascript />,
    name: "ES6+",
    color: "#f7df1e",
  },
  {
    icon: <FaReact />,
    name: "React Native",
    color: "#61dafb",
  },
  {
    icon: <SiMongodb />,
    name: "Mongoose ORM",
    color: "#47a248",
  },
  {
    icon: <FaNodeJs />,
    name: "npm / yarn",
    color: "#cb3837",
  },
];

// Category summary for static display
const skillCategories = [
  {
    title: "Frontend Engineering",
    tag: "CLIENT SIDE",
    skills: allSkillsRow1.slice(0, 8),
  },
  {
    title: "Backend & Database Architecture",
    tag: "SERVER SIDE",
    skills: allSkillsRow2.slice(0, 6),
  },
  {
    title: "Design, DevOps & QA",
    tag: "TOOLS & QUALITY",
    skills: allSkillsRow3.slice(0, 8),
  },
];

function SkillBubble({ skill }) {
  return (
    <div className="skill-bubble">
      <div
        className="skill-bubble-icon"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      <span className="skill-bubble-name">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  reverse = false,
  speed = 35,
}) {
  // Duplicate skills for seamless loop
  const doubled = [...skills, ...skills];

  return (
    <div className="marquee-viewport">
      <div
        className={`marquee-track ${
          reverse ? "marquee-reverse" : ""
        }`}
        style={{
          "--marquee-speed": `${speed}s`,
        }}
      >
        {doubled.map((skill, idx) => (
          <SkillBubble
            key={`${skill.name}-${idx}`}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const clusters =
      containerRef.current?.querySelectorAll(
        ".skill-category-header"
      );

    if (!clusters) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    clusters.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="skills-container"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="section-header">
        <span className="section-subtitle">
          TECHNICAL ECOSYSTEM
        </span>

        <h2
          id="skills-heading"
          className="section-title"
        >
          Professional Skills
        </h2>

        <p className="section-desc">
          Continuously evolving expertise across modern web
          technologies, DevOps, design systems, and
          engineering tooling.
        </p>
      </div>

      {/* Continuous Marquee Rows */}
      <div
        className="skills-marquee-container"
        ref={containerRef}
      >
        <MarqueeRow
          skills={allSkillsRow1}
          reverse={false}
          speed={35}
        />

        <MarqueeRow
          skills={allSkillsRow2}
          reverse={true}
          speed={35}
        />

        <MarqueeRow
          skills={allSkillsRow3}
          reverse={false}
          speed={35}
        />
      </div>

      {/* Categorized Cluster View */}
      <div className="skill-clusters-grid">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="skill-cluster-card"
            style={{
              animationDelay: `${idx * 0.15}s`,
            }}
          >
            <div className="skill-category-header">
              <span className="cluster-tag">
                {cat.tag}
              </span>

              <h3 className="cluster-title">
                {cat.title}
              </h3>
            </div>

            <div className="skill-icons-row">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="skill-icon-chip"
                  title={skill.name}
                  style={{
                    animationDelay: `${sIdx * 0.06}s`,
                  }}
                >
                  <div
                    className="chip-icon"
                    style={{
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>

                  <span className="chip-label">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}