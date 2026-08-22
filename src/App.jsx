import React, { useState } from "react";
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
import RobotCharacter from "./components/RobotCharacter";
import AiAssistant from "./components/AiAssistant";
import Footer from "./components/Footer";

export default function App() {
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  return (
    <>
      {/* 3D Interactive Background (PRESERVED) */}
      <TechBackground />

      {/* Premium Entry Overlay */}
      <EntryOverlay />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Right Navigation Menu Box */}
      <SideNav onOpenAiAssistant={() => setAiAssistantOpen(true)} />

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

        {/* Interactive Animated Funny Robot Character */}
        <RobotCharacter onOpenAiAssistant={() => setAiAssistantOpen(true)} />

        {/* Bharath AI Representative Chat Widget */}
        <AiAssistant
          isOpenExternal={aiAssistantOpen}
          onCloseExternal={() => setAiAssistantOpen(false)}
        />

        {/* Portfolio Footer */}
        <Footer />
      </div>
    </>
  );
}
