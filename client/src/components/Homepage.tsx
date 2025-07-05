"use client";
import AnimatedRobo from "@/animation/roboAnimation";
import AnimatedTest from "@/animation/testAnimation";
import BlogSection from "@/components/Blog";
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
    <main className="flex flex-col items-center justify-center bg-black">
      <Provider store={store}>
        <Hero />

        <Skills />
        <Timeline />
        <Project />
        <Contact />

        <BlogSection />
      </Provider>
    </main>
  );
}
