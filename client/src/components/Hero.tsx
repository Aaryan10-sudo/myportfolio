import AnimatedTest from "@/animation/testAnimation";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedTopLine from "@/animation/topLineAnimation";
import AnimatedWave from "@/animation/waveLineAnimation";
import { Test } from "@/animation/test";

const Hero = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "circOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="h-[90vh]   bg-[url('/hero1.jpg')] sm:bg-[url('/hero.jpg')] bg-cover bg-ccenter w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between px-[20px] sm:px-[30px] py-10 overflow-hidden ">
      <motion.div
        className="w-full md:w-[700px] mb-10 md:mb-0 text-center md:text-left"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[40px] sm:text-[55px] font-bold text-white"
          variants={textItemVariants}
        >
          I'm{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "url('/spidermanbg.webp')" }}
          >
            Aaryan Sharma,
          </span>
        </motion.h1>

        <motion.h2
          className="text-[24px] sm:text-[30px] font-semibold"
          variants={textItemVariants}
        >
          <span className="text-primary">Fullstack </span>Developer
        </motion.h2>
        <motion.p
          className="my-5 text-[18px] sm:text-[20px]"
          variants={textItemVariants}
        >
          Crafting efficient, user-focused web applications using MongoDB,
          PostgreSQL, Express.js, React.js, Next.js and Node.js. Delivering
          innovative solutions to bring your vision to life.
        </motion.p>

        <motion.span
          className="block mt-5 md:mt-[-220px] md:ml-[120px] relative md:absolute"
          variants={textItemVariants}
        >
          <AnimatedTest />
        </motion.span>

        <div className="flex sm:gap-[90px] gap-[30px] mt-[40px] sm:justify-normal justify-center flex-col sm:flex-row items-center">
          <Link
            href={"/hire"}
            className="flex justify-center items-center bg-primary w-[150px] h-[50px] font-manrope text-white font-bold rounded-xl"
          >
            Hire me!
          </Link>
          <a
            href={"#contact"}
            className="font-manrope h-[50px] font-bold underline flex items-center justify-center"
          >
            Get In Touch
          </a>
          <img
            src="/web.png"
            className="absolute h-[100px] mt-[-530px] z-50 ml-[-30px] "
          />
        </div>
      </motion.div>

      <motion.div className="w-full md:w-[500px] h-[400px] md:h-[500px] top-10">
        <img src="/sunflower.png" />
      </motion.div>
    </section>
  );
};

export default Hero;
