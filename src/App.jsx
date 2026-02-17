import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechBackground from "./components/TechBackground";
import WalkingPet from "./components/WalkingPet"; // ✅ NEW

export default function App() {
  return (
    <>
      {/* 🔥 3D Interactive Background */}
      <TechBackground />

      <div className="app-root">
        {/* Skip link for accessibility */}
       

        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <main id="main">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* 🐾 Walking Pet Component */}
        <WalkingPet />

        {/* Footer */}
        <footer className="site-footer">
          © {new Date().getFullYear()} Ganagoni Bharath Goud · Built with React
        </footer>
      </div>
    </>
  );
}
