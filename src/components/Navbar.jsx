import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "technology",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="text-3xl font-sign2 ">Narendra</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))} 
        {/* ["Link to ={}" === "name = {} " */}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes className="text-gray-400 c" size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-400 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize duration-300 cursor-pointer hover:scale-105"
            >
               <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
