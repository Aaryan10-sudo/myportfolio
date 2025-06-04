"use client";

import Lottie from "lottie-react";
import React from "react";
import roboAnimation from "./json/Animation - 1748775909558.json";

interface AnimatedCartProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedTest: React.FC<AnimatedCartProps> = ({
  width = 250,
  height = 350,
  loop = true,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={roboAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedTest;
