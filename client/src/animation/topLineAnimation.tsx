"use client";

import Lottie from "lottie-react";
import React from "react";
import roboAnimation from "./json/Animation - 1748936342725.json";

interface AnimatedCartProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedTopLine: React.FC<AnimatedCartProps> = ({
  width = 1100,
  height = 100,
  loop = false,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={roboAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedTopLine;
