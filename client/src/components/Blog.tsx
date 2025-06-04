import AnimatedRobo from "@/animation/roboAnimation";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Blog = () => {
  return (
    <div className="flex items-center">
      <AnimatedRobo />

      <h1 className="text-[50px] font-bold mt-[-20px]">
        Let's Build Something <span className="text-[#0066ff]">Amazing</span>{" "}
        Together
      </h1>
    </div>
  );
};

export default Blog;
