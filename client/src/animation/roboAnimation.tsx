"use client";

import Lottie from "lottie-react";
import React from "react";
import roboAnimation from "./json/Animation - 1748794889429.json";

interface AnimatedCartProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedRobo: React.FC<AnimatedCartProps> = ({
  width = 250,
  height = 350,
  loop = false,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={roboAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedRobo;
