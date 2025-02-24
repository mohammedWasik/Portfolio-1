import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import img from "../../public/potato.png";
import "../assets/components.css";

const Description = () => {
  return (
    <>
      <div className="text-center p-5 mt-20 mb-10 md:px-20 lg:px-28 dark:text-white">
        <h1 className="text-5xl py-2  text-teal-600 font-semibold  ">
          <span className="uppercase fancy-link z-10 font-barlow md:text-6xl tracking-widest">
            Mohammed Wasik
          </span>
        </h1>
        <h2 className=" text-3xl py-2 md:text-3xl">
          <span className="font-barlow fancy-link z-10 pb-2">
            Software Engineer
          </span>
        </h2>
        <p className="text-xl pt-3  leading-8 bar-cond md:text-2xl max-w-xl mx-auto">
          <span className="">
      I’m passionate about coding and currently exploring opportunities in Quality Assurance. With hands-on experience in Salesforce development, manual testing, and UAT, I enjoy ensuring software quality while continuously refining my technical skills.
Beyond QA and development, I love diving into different areas of computer science, experimenting with new technologies, and optimizing workflows. I’m also a Linux enthusiast, always on the lookout for the perfect distro and custom setups from the community. When I’m not debugging code or testing software, you’ll likely find me distro-hopping and exploring new configurations.
          </span>
        </p>
      </div>
      <div className="flex justify-center text-3xl gap-7 text-gray-500">
        <a
          href="https://www.linkedin.com/in/mohammed-wasik-276928164"
          target="_blank">
          <AiFillLinkedin className="cursor-pointer hover:text-linkedIn" />
        </a>
        <a href="https://github.com/mohammedWasik" target="_blank">
          <AiFillGithub
            className="cursor-pointer hover:text-github
          dark:hover:text-white"
          />
        </a>
        <a href="mailto:mashrukmohammedwasik@gmail.com?" target="_blank">
          <SiGmail className="cursor-pointer hover:text-gmail" />
        </a>
      </div>
      <div
        className="relative bg-gradient-to-b my-16 from-teal-600 p-5 rounded-full mx-auto 
        w-80 h-80 imgContainer  md:h-96 md:w-96">
        <Image
          src={img}
          alt="Super-Potato"
          className="object-contain image "
          fill={true}
        />
        <div class="middle">
          <div class="text dark:text-white tracking-wider">
            Me, in my natural habitat.
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
