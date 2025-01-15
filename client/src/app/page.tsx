"use client";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
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
