"use client";

import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import "../assets/components.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between  px-5 py-10 capitalize  md:px-20 lg:px-28 ">
      <h1
        className="text-3xl bar-cond cursor-pointer dark:text-white"
        onClick={() => window.location.reload()}>
        Mohammed Wasik
      </h1>
      <ul className="flex items-center">
        <li className="">
          <BsFillMoonStarsFill
            className="mr-6 cursor-pointer dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li className="">
          <a
            href="../assets/Resume.pdf"
            download="Mohammed_Wasik.pdf"
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md p-3 hover:from-cyan-800 hover:to-teal-400">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
