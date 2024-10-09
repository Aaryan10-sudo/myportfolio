import React from "react";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDart, SiExpress, SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const Skill = () => {
  return (
    <div>
      <br />
      <h1
        className="2xl:mt-[50px] font-extrabold text-[30px] font-Sora mt-[30px]"
        id="skill"
      >
        <span className="border-2 border-blue-500 font-Sora text-[30px]  2xl:text-[60px] inline-block">
          My
        </span>
        <span className="bg-blue-500 font-Sora text-[30px] 2xl:text-[60px] inline-block">
          Skills
        </span>
      </h1>
      <div className="flex justify-between flex-col md:flex-row">
        <p className="2xl:text-[30px] font-normal text-[20px] mt-[20px] 2xl:mt-[80px]">
          {" "}
          I stay updated with the latest trends and technologies in the
          industry. Proficient in both frontend and backend development, I excel
          in the MERN stack, creating dynamic web applications using React,
          Tailwind CSS, and JavaScript for the frontend, while leveraging
          Express and MongoDB for the backend. My commitment to continuous
          learning ensures I bring fresh ideas and innovative solutions to every
          project.
        </p>

        <img
          src="webdevelopment.gif"
          className="h-[350px]  mt-[-50px] 2xl:h-[500px]"
        />
      </div>
      <div className="flex gap-[30px] animate-pulse">
        <TiHtml5 className="sm:text-[40px] 2xl:text-[100px] text-[30px] text-orange-600" />
        <FaCss3Alt className="sm:text-[40px] 2xl:text-[100px] text-[30px] text-blue-500" />
        <RiTailwindCssFill className="sm:text-[40px] 2xl:text-[100px] text-[30px] text-blue-400" />
        <IoLogoJavascript className="sm:text-[40px] 2xl:text-[100px] text-[30px] text-yellow-500" />
        <FaReact className="sm:text-[40px] 2xl:text-[100px] text-[30px] text-[#61DAFB]" />
        <SiExpress className="sm:text-[40px] text-[30px] 2xl:text-[100px]" />
        <SiMongodb className="sm:text-[40px] text-[30px] text-[#339933] 2xl:text-[100px]" />
        <SiDart className="sm:text-[40px] text-[30px] text-blue-600 2xl:text-[100px]" />
      </div>
    </div>
  );
};

export default Skill;
