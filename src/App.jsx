import React from "react";
import TechBackground from "./components/TechBackground";
import EntryOverlay from "./components/EntryOverlay";
import ScrollProgress from "./components/ScrollProgress";
import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WalkingPet from "./components/WalkingPet";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* 3D Interactive Background (PRESERVED) */}
      <TechBackground />

      {/* Premium Entry Overlay */}
      <EntryOverlay />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Right Side Navigation with Resume Actions + FAQ Modal */}
      <SideNav />

      {/* Main Portfolio Container */}
      <div className="portfolio-app-root">
        <main id="main-content">
          <Hero />
          <About />
          <WorkExperience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Walking Pet Widget */}
        <WalkingPet />

        {/* Portfolio Footer */}
        <Footer />
      </div>
    </>
  );
}
