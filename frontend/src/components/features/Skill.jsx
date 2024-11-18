import React from "react";
import { FaBootstrap, FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDart, SiExpress, SiMongodb, SiRedux, SiVite } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div>
      <br />
      <h1
        className=" font-extrabold text-[30px] font-Sora mt-[30px]"
        id="skill"
      >
        <span className="border-2 border-blue-500 font-Sora text-[30px]  inline-block">
          My
        </span>
        <span className="bg-blue-500 font-Sora text-[30px]  inline-block">
          Skills
        </span>
      </h1>
      <div className="flex justify-between flex-col md:flex-row">
        <p className=" font-normal text-[20px] mt-[20px] ">
          {" "}
          I stay updated with the latest trends and technologies in the
          industry. Proficient in both frontend and backend development, I excel
          in the MERN stack, creating dynamic web applications using React,
          Tailwind CSS, and JavaScript for the frontend, while leveraging
          Express and MongoDB for the backend. My commitment to continuous
          learning ensures I bring fresh ideas and innovative solutions to every
          project.
        </p>

        <img src="webdevelopment.gif" className="h-[350px]  mt-[-50px] " />
      </div>
      <div className="flex">
        <Marquee
          speed={100}
          marqueeStyle={{ display: "flex", alignItems: "center" }}
        >
          <div className="flex items-center mx-20">
            <TiHtml5 className="sm:text-[40px] text-[30px] text-orange-600" />
          </div>
          <div className="flex items-center mx-20">
            <FaCss3Alt className="sm:text-[40px] text-[30px] text-blue-500" />
          </div>
          <div className="flex items-center mx-20">
            <RiTailwindCssFill className="sm:text-[40px] text-[30px] text-blue-400" />
          </div>
          <div className="flex items-center mx-20">
            <IoLogoJavascript className="sm:text-[40px] text-[30px] text-yellow-500" />
          </div>
          <div className="flex items-center mx-20">
            <FaReact className="sm:text-[40px] text-[30px] text-[#61DAFB]" />
          </div>
          <div className="flex items-center mx-20">
            <SiVite className="sm:text-[40px] text-[30px] text-[#61DAFB]" />
          </div>
        </Marquee>
      </div>

      <div className="flex mt-[30px]">
        <Marquee
          speed={100}
          marqueeStyle={{ display: "flex", alignItems: "center" }}
          direction="right"
        >
          <div className="flex items-center mx-20">
            <SiExpress className="sm:text-[40px] text-[30px]" />
          </div>
          <div className="flex items-center mx-20">
            <SiMongodb className="sm:text-[40px] text-[30px] text-[#339933]" />
          </div>
          <div className="flex items-center mx-20">
            <SiDart className="sm:text-[40px] text-[30px] text-blue-600" />
          </div>
          <div className="flex items-center mx-20">
            <SiRedux className="sm:text-[40px] text-[30px] text-purple-600" />
          </div>
          <div className="flex items-center mx-20">
            <FaGithub className="sm:text-[40px] text-[30px] " />
          </div>
          <div className="flex items-center mx-20">
            <FaBootstrap className="sm:text-[40px] text-[30px] " />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
