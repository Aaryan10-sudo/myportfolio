import React from "react";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url('/public/vector-dark-wallpaper-design.jpg')] bg-cover sm:h-auto h-[350px] pb-[10px]">
      <center>
        <p className="text-blue-500 pt-[10px] font-bold ">
          Fullstack Developer
        </p>
        <h1 className="font-extrabold text-[20px] text-white">Aaryan Sharma</h1>
        <br />
        <p className="sm:w-[500px] w-[400px] text-center text-white">
          Code is my canvas, and every project is an opportunity to blend
          creativity with functionality. I strive to bring ideas to life with
          clean code and thoughtful design, always with the user in mind.
        </p>
        <br />
        <div className="flex justify-center">
          <div className="bg-blue-500 w-[200px] h-[40px] text-center items-center flex justify-between font-bold text-white px-[20px]">
            <p>GET IN TOUCH</p>
          </div>
          <div className="group flex items-center">
            <button className="bg-blue-600 w-[50px] group-hover:w-[170px] h-[40px] text-center flex items-center justify-center text-white text-[20px] transition-all ease-linear duration-300">
              <div className="flex gap-[20px] ml-2 opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-300 mx-[10px]">
                <NavLink
                  to={"https://www.facebook.com/profile.php?id=100016114060902"}
                >
                  <FaFacebook />
                </NavLink>
                <NavLink
                  to={
                    "https://www.instagram.com/aaryansh1011/profilecard/igsh=eTluYmM3YnN3MDFo"
                  }
                >
                  <FaInstagram />
                </NavLink>
                <NavLink
                  to={"https://www.linkedin.com/in/aaryan-sharma-6a508a317/"}
                >
                  <FaLinkedinIn />
                </NavLink>
                <NavLink to={"https://x.com/AaryanShar28494"}>
                  <RiTwitterXLine />
                </NavLink>
              </div>
            </button>
            <FaArrowAltCircleRight className="text-[20px] absolute text-white ml-[20px] group-hover:opacity-0" />
          </div>
        </div>
        <br />
        <div className="sm:w-[500px] w-[400px] flex justify-between text-white underline cursor-pointer">
          <p className="text-[12px]">lazyfox916@gmail.com</p>
          <p className="text-[12px]">+977 9761637657</p>
          <p className="text-[12px]">Kathmandu , Nepal</p>
        </div>
        <br />
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Aaryan Sharma. All rights reserved.
        </p>
      </center>
    </footer>
  );
};

export default Footer;
