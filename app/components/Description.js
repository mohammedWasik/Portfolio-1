import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import img from "../../public/potato.png";
import "../assets/components.css";

const Description = () => {
  return (
    <>
      <div className="text-center p-5 mt-20 mb-10 md:px-20 lg:px-28 text-slate-800">
        <h1 className="text-5xl py-2 text-blue-600 font-semibold">
          <span className="uppercase fancy-link z-10 font-barlow md:text-6xl tracking-widest">
            Mohammed Wasik
          </span>
        </h1>
        <h2 className=" text-3xl py-2 md:text-3xl">
          <span className="font-barlow fancy-link z-10 pb-2">
            Software Engineer in Test
          </span>
        </h2>
        <p className="text-xl pt-3  leading-8 bar-cond md:text-2xl max-w-xl mx-auto">
          <span className="">
            Software Engineer in Test with strong experience in backend, API, web, and mobile automation. Proven track record of validating complex booking, payment, and payout systems with deep cross-system data verification. Experienced in event-driven AWS architectures, CI-integrated automation frameworks, and Agile delivery. Focused on reliability, scalability, and production-grade quality assurance.
          </span>
        </p>
      </div>
      <div className="flex justify-center text-3xl gap-7 text-gray-500">
        <a
          href="https://www.linkedin.com/in/mohammedwasik"
          target="_blank">
          <AiFillLinkedin className="cursor-pointer hover:text-linkedIn" />
        </a>
        <a href="https://github.com/mohammedWasik" target="_blank">
          <AiFillGithub
            className="cursor-pointer hover:text-github
          hover:text-slate-900"
          />
        </a>
        <a href="mailto:mashrukmohammedwasik@gmail.com?" target="_blank">
          <SiGmail className="cursor-pointer hover:text-gmail" />
        </a>
      </div>
      <div
        className="relative bg-gradient-to-b my-16 from-blue-600 to-blue-700 p-5 rounded-full mx-auto 
        w-80 h-80 imgContainer  md:h-96 md:w-96">
        <Image
          src={img}
          alt="Super-Potato"
          className="object-contain image "
          fill={true}
        />
        <div class="middle">
          <div className="text text-white tracking-wider">
            Me, in my natural habitat.
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
