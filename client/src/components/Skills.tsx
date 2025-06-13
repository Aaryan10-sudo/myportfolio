import React from "react";
import Marquee from "react-fast-marquee";

import Express from "@/ui/Express";
import Figma from "@/ui/Figma";
import Markdown from "@/ui/Markdown";
import Mongodb from "@/ui/Mongodb";
import Next from "@/ui/Next";
import Node from "@/ui/Node";
import ReactJs from "@/ui/React";
import Redux from "@/ui/Redux";
import Tailwind from "@/ui/Tailwind";
import Vite from "@/ui/Vite";
import Typescript from "@/ui/Typescript";

const Skills = () => {
  return (
    <section className="p-6 pt-24 " id="skills">
      <div className="container p-4 mx-auto text-center">
        <h2
          className="sm:text-4xl font-bold text-2xl text-transparent bg-clip-text"
          style={{ backgroundImage: "url('/spidermanbg.webp')" }}
        >
          Technologies & Tools I Work With
        </h2>
      </div>
      <div className="sm:w-[800px] flex flex-col justify-center mx-auto text-gray-600 w-[370px]">
        <Marquee gradient={false} speed={70} direction="left" pauseOnHover>
          <span className="flex sm:gap-20">
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 ">
              <Next />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <Tailwind />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 ">
              <Redux />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 ">
              <Express />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <Mongodb />
            </div>
          </span>
        </Marquee>

        <Marquee gradient={false} speed={70} direction="right" pauseOnHover>
          <span className="flex justify-between sm:gap-16 ">
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <ReactJs />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <Figma />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <Markdown />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <Node />
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <Typescript />
            </div>
          </span>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
