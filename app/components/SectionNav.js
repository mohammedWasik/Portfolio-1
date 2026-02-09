"use client";

import React from "react";
import "../assets/components.css";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/**
 * Section nav: clickable circles only. Centered in the header.
 */
function SectionNav({ activeSection, setActiveSection }) {
  return (
    <nav
      className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 h-8"
      aria-label="Section navigation">
      <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6">
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveSection(id)}
            title={label}
            aria-label={`Go to ${label}`}
            aria-current={activeSection === id ? "true" : undefined}
            className="flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-colors p-0.5 h-6 w-6 shrink-0">
            <span
              className={`shrink-0 rounded-full transition-colors ${
                activeSection === id
                  ? "w-3.5 h-3.5 bg-blue-500"
                  : "w-3 h-3 bg-slate-500 hover:bg-slate-400"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}

export default SectionNav;
