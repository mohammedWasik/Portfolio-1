import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import java from "../../public/java.png";
import react from "../../public/react.png";
import ex from "../../public/ex.png";
import mysql from "../../public/mysql.png";
import nodejs from "../../public/nodejs.png";
import mongoDB from "../../public/mongoDB.png";
import Image from "next/image";
import "../assets/tech.css";
import { Tooltip } from "react-tooltip";

const Technologies = () => {
  return (
    <div>
      <div className=" mt-20 dark:text-white">
        <h2 className="text-center ">
          <span className="text-4xl uppercase fancy-link tracking-widest text-teal-600">
            Technology
          </span>
        </h2>
      </div>
      <div className="stack-image">
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={html}
            alt="html logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="HTML"
          />
          <Tooltip className="example" id="my-tooltip" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={css}
            alt="css logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip1"
            data-tooltip-content="CSS"
          />
          <Tooltip className="example" id="my-tooltip1" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={js}
            alt="js logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip2"
            data-tooltip-content="Javascript"
          />
          <Tooltip className="example" id="my-tooltip2" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          {" "}
          <Image
            src={java}
            alt="java logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip3"
            data-tooltip-content="Java"
          />
          <Tooltip className="example" id="my-tooltip3" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={react}
            alt="react logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip4"
            data-tooltip-content="ReactJS"
          />
          <Tooltip className="example" id="my-tooltip4" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={ex}
            alt="ex logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip5"
            data-tooltip-content="ExpressJS"
          />
          <Tooltip className="example" id="my-tooltip5" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={mongoDB}
            alt="mongoDB logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip6"
            data-tooltip-content="MongoDB"
          />
          <Tooltip className="example" id="my-tooltip6" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={nodejs}
            alt="nodejs logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip7"
            data-tooltip-content="NodeJS"
          />
          <Tooltip className="example" id="my-tooltip7" />
        </div>
        <div className="stack-div dark:bg-[#fff]">
          <Image
            src={mysql}
            alt="mysql logo"
            className=""
            data-tool-className="tooltip"
            data-tooltip-id="my-tooltip8"
            data-tooltip-content="MySQL"
          />
          <Tooltip className="example" id="my-tooltip8" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
