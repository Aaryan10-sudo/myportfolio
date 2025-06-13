"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "HTML Fundamentals",
    date: "Dec 2019",
    description:
      "I thoroughly enjoyed learning HTML as it was both engaging and fascinating. I successfully completed my HTML course, showcasing my practical and theoretical knowledge through the Sololearn platform.",
  },
  {
    title: "Traditional CSS",
    date: "Jan 2020",
    description:
      "Traditional CSS was a captivating and creative experience for me. I thoroughly enjoyed experimenting with designs and enhancing the aesthetics of my projects using CSS. I pursued learning it actively from 2020 to 2021.",
  },
  {
    title: "C Programming",
    date: "Jul 2021",
    description:
      "During high school, I gained foundational knowledge in C programming, including concepts such as structures, file handling, and libraries. As part of my high school project, I successfully developed a simple banking software using C programming.",
  },
  {
    title: "JavaScript",
    date: "Feb 2022",
    description:
      "JavaScript was both a challenging and rewarding choice as I embarked on my full-stack development journey. I began learning JavaScript with my friends after high school and successfully built several projects, including a weather forecasting app, a Tic-Tac-Toe game, and more.",
  },
  {
    title: "Tailwind CSS",
    date: "Oct 2023",
    description:
      "I thoroughly enjoyed working with traditional CSS, but I found Tailwind CSS to be even more enjoyable and efficient. Tailwind CSS has become my favorite library, as it allows me to create projects in a highly effective and streamlined manner while still having fun experimenting with designs.",
  },
  {
    title: "MERN Stack",
    date: "Sep 2024",
    description:
      "I attended physical classes for my MERN stack course, where I gained comprehensive knowledge from basic to advanced concepts. During the course, I built an e-commerce site as part of my project work and thoroughly enjoyed the learning process, as mastering the MERN stack had always been a dream of mine. After completing the course, I pursued an internship as a full-stack developer at Nexorith Nepal, where I developed a real-world full-stack project, nbubags.com. I then continued as a backend development intern at Nnine Solution, further enhancing my skills.",
  },
  {
    title: "Next JS",
    date: "Nov 2024",
    description:
      "Recognizing the growing demand for Next.js, I took the initiative to learn it through its official documentation, along with Tailwind CSS and TypeScript. I applied this knowledge to develop my ongoing project, nexo-footwears.vercel.app.",
  },
];

const Timeline: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="container max-w-5xl sm:px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
              <h3 className="text-3xl font-semibold">My Journey</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                Have a look at my Fullstack journey..
              </span>
            </div>
            <img src="/spiderverseman.png" />
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary"
                  data-aos="fade-up" // AOS animation when the element enters the viewport
                  data-aos-offset="200" // Offset before the animation starts
                >
                  <h3 className="text-xl font-semibold tracking-wide ">
                    {item.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    {item.date}
                  </time>
                  <p className="mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
