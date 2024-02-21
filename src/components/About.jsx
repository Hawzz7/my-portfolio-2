import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full sm:h-screen  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-10">
          Hi I'm Narendra a web developer and UI/UX designer with a passion for
          creating beautiful, functional, and user-centered digital experiences.
          I am always looking for new and innovative ways to design the product.
        </p>
        <br />
        <p className="text-xl">
          I belive that design is about more than just making things look pretty
          _ It's about solving problems and creating intutive , enjoyable
          experiences for users.
        </p>
        <br />
        <p className="text-xl">
          Whether I'm working on a website, mobile apps or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion for the great future of the company.
        </p>
      </div>
    </div>
  );
};

export default About;
