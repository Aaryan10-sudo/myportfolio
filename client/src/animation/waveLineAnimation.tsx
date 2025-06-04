"use client";

import Lottie from "lottie-react";
import React from "react";
import waveAniamtion from "./json/Animation - 1748949891697.json";

interface AnimatedCartProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedWave: React.FC<AnimatedCartProps> = ({
  width = 1100,
  height = 100,
  loop = true,
}) => {
  return (
    <div>
      <Lottie animationData={waveAniamtion} loop={loop} />
    </div>
  );
};

export default AnimatedWave;
