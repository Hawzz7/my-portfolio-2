import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import astronaut from "../assets/astronaut.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-full sm:h-screen">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto sm:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="pt-8 text-3xl font-bold text-white md:text-4xl">
            Hello I'm{" "}
            <span className="inline-block text-3xl text-transparent md:text-6xl bg-gradient-to-b from-cyan-300 to-blue-800 bg-clip-text">
              Narendra
            </span>
          </h2>

          <div className=" md:w-[18rem] md:h-40 md:pt-6">
            <TypeAnimation
              sequence={[
                "A Web Developer",
                1500,
                "A Web Designer",
                1500,
                "A UX/UI Designer",
                1500,
              ]}
              wrapper="div"
              speed={200}
              className="object-contain text-3xl font-bold text-yellow-400 md:text-6xl"
              repeat={Infinity}
              cursor={false}
            />
          </div>

          <p className="max-w-md py-4 text-gray-500">
            I am a skilled and passionate web designer in creating visually
            appealing and user-friendly websites. Currently, I love to work on
            web application using technologies like React, Tailwind, MongoDB,
            Express, Node js
          </p>

          <div>
            <Link to="portfolio" smooth duration={500}>
              <button className="flex items-center px-6 py-3 my-2 text-white duration-300 rounded-md cursor-pointer group w-fit bg-gradient-to-b from-cyan-500 to-blue-800 hover:scale-110">
                Portfolio
                <span className="duration-300 group-hover:rotate-90">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        {/* className="sm:animate-[bounce_5s_ease-in-out_infinite] duration-75" */}
        <div className="sm:animate-trans-up">
          <img src={astronaut} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
