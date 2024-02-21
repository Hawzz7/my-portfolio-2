import React from "react";
import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";
import javascript from "../assets/js-logo.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind-logo.png";
import node from "../assets/nodejs-logo.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      style3:  "h-[93px] w-[90px]"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 pt-8",
      style4: "pt-4",
    },
    {
        id: 6,
        src: node,
        title: "NodeJS",
        style: "shadow-lime-500",
        style2: "mt-7"
      },
  ];

  return (<div>
     <div
      name="experience"
      className="w-full h-full sm:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style, style2, style3, style4 }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className={`w-20 mx-auto  ${style3}`} />
              <p className={`mt-4 ${style2} ${style4}`}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>)
};

export default Experience;
