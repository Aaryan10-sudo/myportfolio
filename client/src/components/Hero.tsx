import AnimatedTest from "@/animation/testAnimation";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <section className="h-[90vh] bg-[url('/hero1.jpg')] sm:bg-[url('/hero.jpg')] bg-cover bg-center w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center sm:justify-between justify-center px-[20px] sm:px-[30px] py-10 overflow-hidden ">
      <motion.div
        className="w-full md:w-[700px] mb-10 md:mb-0 text-center md:text-left"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[40px] sm:text-[55px] font-bold text-white bg-black sm:bg-transparent"
          variants={textItemVariants}
        >
          I'm{" "}
          <span
            className="text-transparent bg-clip-text "
            style={{ backgroundImage: "url('/spidermanbg.webp')" }}
          >
            Aaryan Sharma,
          </span>
        </motion.h1>

        <motion.h2
          className="text-[24px] sm:text-[30px] font-semibold bg-black sm:bg-transparent"
          variants={textItemVariants}
        >
          <span className="text-primary ">Fullstack </span>
          Developer
        </motion.h2>
        <motion.p
          className="my-5 text-[18px] sm:text-[20px] bg-transparent backdrop-blur-xl sm:backdrop-blur-0"
          variants={textItemVariants}
        >
          Crafting efficient, user-focused web applications using MongoDB,
          PostgreSQL, Express.js, React.js, Next.js and Node.js. Delivering
          innovative solutions to bring your vision to life.
        </motion.p>

        <motion.span
          className="sm:block mt-5 md:mt-[-220px] md:ml-[120px] relative md:absolute hidden"
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
            className="absolute h-[100px] mt-[-530px] z-50 ml-[-30px] hidden sm:block"
          />
        </div>
      </motion.div>

      <motion.div className="w-full md:w-[500px] h-[400px] md:h-[500px] top-10 hidden sm:block">
        <img src="/sunflower.png" />
      </motion.div>

      <div className="custom-shape-divider-bottom-1750171640 shadow-xl hidden sm:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="shadow-red-700 shadow-xl"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill shadow-xl shadow-red-700"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill shadow-xl shadow-red-700"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill shadow-xl shadow-red-700"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
