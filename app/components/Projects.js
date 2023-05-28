"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

import ai1 from "../../public/ai1.png";
import ai2 from "../../public/ai2.png";
import ai3 from "../../public/ai3.png";
import ai4 from "../../public/ai4.png";

import crud1 from "../../public/crud1.png";
import crud2 from "../../public/crud2.png";
import crud3 from "../../public/crud3.png";
import crud4 from "../../public/crud4.png";

import r1 from "../../public/r1.png";
import r2 from "../../public/r2.png";
import r3 from "../../public/r3.png";
import r4 from "../../public/r4.png";
import r5 from "../../public/r5.png";

import space1 from "../../public/space1.png";
import space2 from "../../public/space2.png";
import space3 from "../../public/space3.png";
import space4 from "../../public/space4.png";
import spaceM1 from "../../public/spaceM1.png";

import y1 from "../../public/y1.png";
import y2 from "../../public/y2.png";
import y2m from "../../public/y2m.png";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "linear",
    arrows: false,
    className: "notes-slider",
    // autoplay: true,
    // autoplaySpeed: 7000,
  };
  return (
    <div className="my-15 px-5 lg:p-5 dark:text-white">
      <div className="  dark:text-white">
        <h2 className="text-center ">
          <span className="text-4xl uppercase fancy-link tracking-widest text-teal-600">
            Projects
          </span>
        </h2>
      </div>
      <div className="text-center project-image-div ">
        <div className="w-9/12 mx-auto my-20  p-div">
          <h2
            className="text-teal-700 my-2 "
            onClick={() => {
              window.open(
                "https://ai-image-generator-g1vh.vercel.app/",
                "_blank"
              );
            }}>
            {" "}
            <span className="fancy-link px-2 text-xl p-1">
              AI Image Generation Using OpenAI API
            </span>
          </h2>
          <Slider {...settings} className="">
            <div className="px-2 my-2">
              <h3 className="mb-3">Home Page</h3>
              <Image src={ai1} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Show Prompt on hover</h3>
              <Image src={ai2} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Create Page</h3>
              <Image src={ai3} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Generated Image</h3>
              <Image src={ai4} alt="" className="rounded-xl" />
            </div>
          </Slider>
        </div>
        <div className="w-9/12 mx-auto mb-20  p-div">
          <h2
            onClick={() => {
              window.open("https://crud-client-psi.vercel.app/", "_blank");
            }}
            className="text-teal-700 my-2 ">
            {" "}
            <span className="fancy-link p-1 text-xl ">CRUD App using Mern</span>
          </h2>
          <Slider {...settings} className="">
            <div className="px-2 my-2">
              <h3 className="mb-3">Home Page</h3>
              <Image src={crud1} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Add User Page</h3>
              <Image src={crud2} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Edit Page</h3>
              <Image src={crud3} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Search User</h3>
              <Image src={crud4} alt="" className="rounded-xl" />
            </div>
          </Slider>
        </div>
        <div className="w-9/12 mx-auto mb-20  p-div">
          <h2
            onClick={() => {
              window.open(
                "https://rick-morty-wiki-mauve.vercel.app/",
                "_blank"
              );
            }}
            className="text-teal-700 my-2">
            {" "}
            <span className="fancy-link p-1 text-xl">Rick & Morty Wiki</span>
          </h2>
          <Slider {...settings} className="">
            <div className="px-2 my-2">
              <h3 className="mb-3">Home Page</h3>
              <Image src={r1} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Add User Page</h3>
              <Image src={r2} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Edit Page</h3>
              <Image src={r3} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Search User</h3>
              <Image src={r4} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Search User</h3>
              <Image src={r5} alt="" className="rounded-xl" />
            </div>
          </Slider>
        </div>

        <div className="w-9/12 mx-auto mb-20  p-div">
          <h2
            className="text-teal-700 my-2"
            onClick={() => {
              window.open(
                "https://youtube-clone-react-mow.netlify.app/",
                "_blank"
              );
            }}>
            {" "}
            <span className="fancy-link p-1 text-xl">Youtube Clone</span>
          </h2>
          <Slider {...settings} className="">
            <div className="px-2 my-2">
              <h3 className="mb-3">Home Page</h3>
              <Image src={y1} alt="" className="rounded-xl" />
            </div>

            <div className="px-2 my-2">
              <h3 className="mb-3">Search Page</h3>
              <Image src={y2} alt="" className="rounded-xl" />
            </div>
          </Slider>
        </div>
        <div className="w-9/12 mx-auto mb-20  p-div">
          <h2
            onClick={() => {
              window.open(
                "https://space-tourism-4tbibsksh-mohammedwasik.vercel.app/",
                "_blank"
              );
            }}
            className="text-teal-700 my-2">
            {" "}
            <span className="fancy-link p-1 text-xl">
              Space Tourism From FrontEndMentorIO
            </span>
          </h2>
          <Slider {...settings} className="">
            <div className="px-2 my-2">
              <h3 className="mb-3">Home Page</h3>
              <Image src={space1} alt="" className="rounded-xl" />
            </div>

            <div className="px-2 my-2">
              <h3 className="mb-3">Destination Page</h3>
              <Image src={space2} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Crew Page</h3>
              <Image src={space3} alt="" className="rounded-xl" />
            </div>
            <div className="px-2 my-2">
              <h3 className="mb-3">Technology Page</h3>
              <Image src={space4} alt="" className="rounded-xl" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
