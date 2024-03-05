"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold dark:text-[#ccd6f6] text-black">
          Tung Lam
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold dark:text-[#8892b0] text-black">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
          <button className="dark:text-white text-black group border-2 px-6 py-3 my-2 flex items-center hover:text-white hover:bg-pink-600 hover:border-pink-600">
            Click Me!
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
