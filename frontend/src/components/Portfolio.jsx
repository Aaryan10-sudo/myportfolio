import React, { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Contact from "./features/Contact";
import Navbar from "./features/Navbar";
import Service from "./features/Service";
import Skill from "./features/Skill";

const Portfolio = () => {
  let [menu, setMenu] = useState(false);
  let navigate = useNavigate("");
  return (
    <main className="2xl:mx-[120px] md:mx-[60px] mx-[15px] relative">
      <Navbar menu={menu} setMenu={setMenu} />
      {menu ? (
        <div className="bg-[white] h-[200px] w-[200px] absolute rounded-tr-xl rounded-br-xl transition-all ease-linear z-10 text-black cursor-pointer">
          <ul className="flex flex-col font-normal cursor-pointer]">
            <a
              href="/"
              className="hover:text-blue-400 p-[10px] hover:border-2 border-b-blue-500 border-transparent w-[80px]"
            >
              Home
            </a>
            <a
              href="#skill"
              className="hover:text-blue-400 p-[10px] hover:border-2 border-b-blue-500 border-transparent w-[80px]"
            >
              Skills
            </a>
            <a
              href="#services"
              className="hover:text-blue-400 p-[10px] hover:border-2 border-b-blue-500 border-transparent w-[80px]"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 p-[10px] hover:border-2 border-b-blue-500 border-transparent w-[80px]"
            >
              Contact
            </a>
          </ul>
        </div>
      ) : null}
      <article className="md:flex justify-between flex-wrap overflow-hidden">
        <div className=" md:w-[50%]">
          <h1 className="2xl:text-[60px] md:text-[40px] text-[30px] font-extrabold font-Sora items-center mt-[50px]">
            Hi, I'm{" "}
            <span className="underline  decoration-blue-500 decoration-[10px] underline-offset-1">
              Aaryan Sharma
            </span>
            , <br /> a passionate <br />
            <span className="text-[#339933]">M</span>
            <span className="text-[#E1A800]">E</span>
            <span className="text-[#61DAFB]">R</span>
            <span className="text-[#47A248]">N</span> stack developer!
          </h1>
          <br />
          <p className="2xl:text-[30px]">
            Hello Everyone I'm Aaryan Sharma. A passionate learner and MERN
            stack developer looking forward for a fullstack project. My skill
            includes Express / MongoDB for Backend , React and TailwindCSS for
            frontend{" "}
          </p>
          <br />
          <div className="flex gap-[100px] mt-[10px] 2xl:mt-[20px]">
            <NavLink to={"/hire"}>
              <button className="mx-[10px] 2xl:h-[80px] 2xl:w-[200px] h-[40px] w-[120px] bg-blue-500 font-bold text-white transform hover:scale-105 transition-all ease-linear active:scale-100 rounded-[3px] overflow-hidden">
                Hire Me
              </button>
            </NavLink>
            <NavLink to={"#contact"}>
              <button
                className="2xl:h-[80px] 2xl:w-[200px] h-[40px] w-[120px] border-2 border-blue-500 font-bold text-blue-500 transform hover:scale-105  transition-all ease-linear active:scale-100 rounded-[3px]"
                onClick={() => {
                  navigate("/#contact");
                }}
              >
                Contact Me
              </button>
            </NavLink>
          </div>
          <br />
          <br />
          <div className="flex 2xl:text-[50px] 2xl:mt-[20px] text-[30px] gap-[20px] cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=100016114060902">
              <FaFacebook className="hover:scale-110 transform ease-in-out transition-all " />
            </a>
            <MdWhatsapp className="hover:scale-110 transform ease-in-out transition-all rounded-xl" />
            <LiaLinkedin className="hover:scale-110 transform ease-in-out transition-all " />
            <CiInstagram className="hover:scale-110 transform ease-in-out transition-all rounded-xl text-bold" />
            <FaGithub className="hover:scale-110 transform ease-in-out transition-all" />
          </div>
        </div>

        <div className="radius 2xl:h-[470px] 2xl:w-[500px] h-[350px] w-[370px] bg-[url('/public/hd-neymar_bin9drfnhvn81azb4jhqs8d1k.jpg')] bg-center bg-cover mt-[40px] shadow-inner ..."></div>
      </article>
      <br />
      <Skill />
      <br />
      <Service />
      <br />
      <Contact />
      <br />
    </main>
  );
};

export default Portfolio;
