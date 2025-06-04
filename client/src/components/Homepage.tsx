"use client";
import AnimatedRobo from "@/animation/roboAnimation";
import AnimatedTest from "@/animation/testAnimation";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function HomePage() {
  return (
    <main
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 4px 4px, rgba(255, 255, 255, 0.06) 3px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <Provider store={store}>
        <Hero />

        <Skills />
        <Timeline />
        <Project />
        <Contact />
        <Blog />
      </Provider>
    </main>
  );
}
