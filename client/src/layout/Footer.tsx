import Arrow from "@/ui/Arrow";
import Facebook from "@/ui/Facebook";
import Github from "@/ui/Github";
import Instagram from "@/ui/Instagram";
import LinkedIn from "@/ui/LinkedIn";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center shadow-xl  sm:h-auto h-[350px] pb-[10px] shadow-primary">
      <center>
        <p className="text-primary pt-[10px] font-bold ">Fullstack Developer</p>
        <h1 className="font-extrabold text-[20px] ">Aaryan Sharma</h1>
        <br />
        <p className="sm:w-[500px] w-[400px] text-center">
          Code is my canvas, and every project is an opportunity to blend
          creativity with functionality. I strive to bring ideas to life with
          clean code and thoughtful design, always with the user in mind.
        </p>
        <br />
        <div className="flex justify-center">
          <div className="bg-primary bg-center w-[200px] h-[40px] text-center items-center flex justify-between font-bold text-white px-[20px]">
            <p>GET IN TOUCH</p>
          </div>
          <div className="group flex items-center">
            <button className="bg-[url('/spidermanbg.webp')] bg-center w-[50px] group-hover:w-[170px] h-[40px] text-center flex items-center justify-center text-white text-[20px] transition-all ease-linear duration-300">
              <div className="flex gap-[20px] ml-2 opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-300 mx-[10px]">
                <Facebook />

                <Instagram />

                <LinkedIn />
                <Github />
              </div>
            </button>
            <span className="text-[20px] absolute text-white ml-[20px] group-hover:opacity-0">
              <Arrow />
            </span>
          </div>
        </div>
        <br />
        <div className="sm:w-[500px] w-[400px] flex justify-between  underline cursor-pointer">
          <p className="text-[12px]">lazyfox916@gmail.com</p>
          <p className="text-[12px]">+977 9761637657</p>
          <p className="text-[12px]">Kathmandu , Nepal</p>
        </div>
        <br />
        <p className="text-sm text-primary">
          &copy; {new Date().getFullYear()} Aaryan Sharma. All rights reserved.
        </p>
      </center>
    </footer>
  );
};

export default Footer;
