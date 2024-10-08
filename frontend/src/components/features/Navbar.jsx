import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({ menu, setMenu }) => {
  let [mode, setMode] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    if (mode) {
      document.body.style.backgroundColor = "#272525";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#faf9f6";
      document.body.style.color = "#000";
    }
  }, [mode]);
  return (
    <nav className="2xl:h-[100px] font-bold flex justify-between border-2 border-transparent border-b-neutral-600 h-[70px] items-center ">
      <BiMenu
        className="text-[20px] sm:hidden cursor-pointer"
        onClick={() => {
          setMenu(!menu);
        }}
      />
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer 2xl:text-[30px]"
      >
        Aaryan Sharma
      </h1>
      <ul className="sm:inline-flex gap-[30px] font-normal cursor-pointer hidden 2xl:text-[20px]">
        <a href="/" className="hover:text-blue-400">
          Home
        </a>
        <a href="#skill" className="hover:text-blue-400">
          Skills
        </a>
        <a href="#services" className="hover:text-blue-400">
          Services
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </ul>
      <button
        onClick={() => {
          setMode(!mode);
        }}
        className="h-[30px] w-[30px] place-content-center items-center flex justify-center"
      >
        {mode ? (
          <MdOutlineLightMode className="text-[20px] 2xl:text-[30px]" />
        ) : (
          <MdDarkMode className="text-[20px] 2xl:text-[30px]" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
