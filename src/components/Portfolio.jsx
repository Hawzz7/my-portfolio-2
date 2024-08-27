import React from "react";
import bookmyshow from "../assets/bookmyshow.png";
import flashcard from "../assets/flashcard.png";
import weatherApp from "../assets/weatherApp.png";
import amazon from "../assets/amazonWebsite.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookmyshow,
      url: "https://appbookmyshow.netlify.app/",
      url2: "https://github.com/Hawzz7/almabetter-flashcard",
    },
    {
      id: 2,
      src: flashcard,
      url: "https://flashcardapp007.netlify.app",
      url2: "https://github.com/Hawzz7/BookMyShow-Almabetter",
    },
    {
      id: 3,
      src: amazon,
      url: "https://amzone-frontend.vercel.app",
      url2:"https://github.com/Hawzz7/amazon_frontend.git"
    },
    {
      id: 4,
      src: weatherApp,
      url: "",
      url2:""
    },
  ];

  const visit = (url) => {
    if (url) {
      window.open(url, "_blank"); // "_blank" open the URL in a new tab
    } else {
      console.log("URL not provided");
    }
  };
  const visit2 = (url2) => {
    if (url2) {
      window.open(url2, "_blank"); // "_blank" open the URL in a new tab
    } else {
      console.log("URL not provided");
    }
  };

  return (
    <div name="portfolio" className="w-full text-white md:h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, url, url2 }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="object-fill h-48 duration-500 rounded-md w-96 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => visit(url)}
                  className="w-1/2 px-6 py-1 m-4 duration-300 hover:scale-110"
                >
                  Demo
                </button>
                <button
                  onClick={() => visit2(url2)}
                  className="w-1/2 px-6 py-1 m-4 duration-300 hover:scale-110"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
