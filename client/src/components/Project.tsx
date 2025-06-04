"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      title: "Nexo-Footwears ",
      imageUrl: "/nexo-footwears.png",
      url: "https://nexo-footwears.vercel.app",
      description:
        "Nexo footwear is my self project carried in order to learn Next JS ",
    },
    {
      title: "NBU BAGS",
      imageUrl: "/nbu-bags.png",
      url: "https://nbubags.com",
      description:
        "NBU Bags is a static ecommerce site powered by Nexorith Nepal. It was built using Vite React",
    },
    {
      title: "LMS ",
      imageUrl: "/LMS-Project.png",
      url: "https://github.com/SumanSunuwar-SUDO/lms",
      description:
        "LMS also known as Learning Management System is a project carried out with my fellow members. It is an undergoing project with my fellow mates ",
    },
    {
      title: "Chat App",
      imageUrl: "/chat-app.png",
      url: "https://github.com/Aaryan10-sudo/Express-chatapp.git",
      description:
        "I have already developed and tested the chat app server which you can find on my github page click above header. Frontend is still in development process.",
    },
  ];

  return (
    <section className="pt-24 w-full" id="projects">
      <div className="px-5 sm:px-12 md:mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal  md:text-6xl md:tracking-tight font-sora">
            <span>Showcasing</span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-[#0066ff] lg:inline">
              My Works
            </span>{" "}
            <span>That Speak for Themselves</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Explore my collection of projects that showcase my expertise and
            creativity. Each project is a testament to my skills and dedication,
            reflecting the passion I bring to every challenge.
          </p>
        </div>

        <div className="w-full mx-auto mt-20 text-center md:w-10/12 pb-2 flex justify-center items-center">
          <div className="relative z-0 w-full mt-8">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              navigation
              modules={[Autoplay, Navigation, Pagination]}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative overflow-hidden ">
                    <div className="relative overflow-hidden">
                      <div className="flex items-center flex-none px-4 bg-[#0066ff] rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                          <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                          <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                      </div>
                      <img src={project.imageUrl} alt={project.title} />
                    </div>
                    <div className="p-4 bg-[#0066ff] rounded-b-xl text-white">
                      <Link
                        href={project.url}
                        className="font-semibold text-lg underline"
                      >
                        {project.title}
                      </Link>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
