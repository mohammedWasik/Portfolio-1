"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Contact,
  Description,
  Navbar,
  ParticlesBG,
  Projects,
  Technologies,
} from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen  dark:bg-gray-900">
          <ParticlesBG />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Description />
          <Technologies />
          <Projects />
          <Contact />
        </section>
      </main>
    </div>
  );
}
