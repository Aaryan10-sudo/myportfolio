import React from "react";
import { FaCircle } from "react-icons/fa6";
import { TbNorthStar, TbTopologyStar3 } from "react-icons/tb";
import { MdMonitor, MdVerified } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between sm:flex-row flex-col max-w-[1280px] 2xl:mx-auto mx-10 pb-10 sm:py-24">
        <div className="sm:w-[50%]">
          <FaCircle className="absolute text-[30px] mt-[40px] sm:ml-[0px] ml-[10px] text-orange-500 hover:animate-bounce" />

          <h1 className="font-sora font-bold sm:text-[50px] text-[30px] text-center sm:text-start sm:mt-[150px] mt-[100px] relative">
            I'm Aaryan Sharma, <span className="text-green-800">M</span>
            <span className="text-yellow-600">E</span>
            <span className="text-blue-500">R</span>
            <span className="text-green-500">N </span> Stack Developer
          </h1>
          <p className="font-manrope text-[17px] mt-[20px] text-center sm:text-start font-medium">
            Crafting efficient, user-focused web applications using MongoDB,
            Express, React, and Node.js. Delivering innovative solutions to
            bring your vision to life.
          </p>

          <div className="flex sm:gap-[90px] gap-[30px] mt-[40px] sm:justify-normal justify-center flex-col sm:flex-row items-center">
            <Link
              href={"/hire"}
              className="flex justify-center items-center bg-violet-300 w-[150px] h-[50px] font-manrope text-violet-600 font-bold rounded-xl"
            >
              Hire me!
            </Link>
            <a
              href={"#contact"}
              className="font-manrope h-[50px] font-bold underline flex items-center justify-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="custom-rounded bg-[url('/portfolio.jpg')] bg-center bg-cover bg-violet-500 sm:h-[500px] sm:w-[500px] h-[400px] w-[400px] sm:mt-[30px] mt-[60px] overflow-y-hidden">
          <img src="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
