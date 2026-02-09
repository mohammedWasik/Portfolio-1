"use client";

import React from "react";
import SectionNav from "./SectionNav";
import "../assets/components.css";

function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="sticky top-0 z-30 flex flex-row items-center justify-between gap-2 px-4 py-4 md:py-10 capitalize md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 md:px-20 lg:px-28 bg-slate-50 isolate">
      <h1
        className="text-lg sm:text-xl md:text-3xl bar-cond cursor-pointer text-slate-900 truncate min-w-0 md:justify-self-start"
        onClick={() => window.location.reload()}>
        Mohammed Wasik
      </h1>
      <div className="hidden md:block shrink-0 md:justify-self-center">
        <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="shrink-0 w-fit md:justify-self-end">
        <a
          href="/Mohammed_Wasik_Resume.pdf"
          download="Mohammed_Wasik_Resume.pdf"
          className="inline-block bg-blue-600 text-white rounded-md px-2 py-1.5 md:p-3 hover:bg-blue-500 text-xs md:text-base font-medium whitespace-nowrap transition-colors">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
