"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-white dark:bg-[#0f172a] dark:text-gray-300 text-black"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/html.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/css.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/javascript.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">JAVASCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/react.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">REACT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/tailwind.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">TAILWIND</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/next.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">NEXT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/github2.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">GITHUB</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              width={100}
              height={100}
              className="w-20 mx-auto"
              src="/skillsImg/mongo.png"
              alt="HTML icon"
            />
            <p className="my-4 font-semibold">MONGO</p>
          </div>
        </div>
        <div>
          <Link to="contact" smooth={true} duration={500}>
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

export default Skills;
