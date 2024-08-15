import React, { useState } from "react";
import logo from "../assets/cvtransportlogo.jpeg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full px-4 bg-white relative">
      <div className="flex items-center">
        <img className="w-24 h-auto" src={logo} alt="cvtransportlogo" />
        <h1 className="sr-only">CV Transport Solutions</h1>
      </div>
      <ul className="hidden md:flex space-x-12 text-3xl items-center justify-center flex-grow">
        <li className="hover:text-yellow-500 cursor-pointer">Home</li>
        <li className="hover:text-yellow-500 cursor-pointer">About</li>
        <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-20">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-white border-r-4 border-yellow-400 ease-in-out duration-500 z-10"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-500 z-10"
        }
      >
        <img className="w-24 h-auto m-4" src={logo} alt="cvtransportlogo" />
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-300 text-xl font-semibold">
            Home
          </li>
          <li className="p-4 border-b border-gray-300 text-xl font-semibold">
            About
          </li>
          <li className="p-4 text-xl font-semibold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
