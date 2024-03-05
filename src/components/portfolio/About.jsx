"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div name="about" className="w-full h-[110vh] text-black dark:text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            {/* <p>Hi. I'm currently a junior student at PTIT.</p> */}
            <Image src="/myphoto.jpg" width={500} height={100} className=" object-cover" />
          </div>
          <div>
            <p className="text-lg font-semibold">
              I am presently a third-year student enrolled at the Posts and Telecommunications Institute of Technology.            
            </p>
            <br />
            <p className="text-lg">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
            <div className="pt-6">
              <Link to="skills" smooth={true} duration={500}>
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
      </div>
    </div>
  );
};

export default About;
