"use client";

import React, { useState } from "react";
import {
  Contact,
  Description,
  Experience,
  Navbar,
  ParticlesBG,
  Projects,
  Technologies,
} from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <div>
      <main className="bg-slate-50">
        <section className="min-h-screen bg-slate-50 pb-16 md:pb-24">
          <ParticlesBG />
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <Description />
          <div className={activeSection === "experience" ? "block" : "block md:hidden"}>
            <Experience />
          </div>
          <div className={activeSection === "skills" ? "block" : "block md:hidden"}>
            <Technologies />
          </div>
          <div className={activeSection === "projects" ? "block" : "block md:hidden"}>
            <Projects />
          </div>
          <div className={activeSection === "contact" ? "block" : "block md:hidden"}>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
