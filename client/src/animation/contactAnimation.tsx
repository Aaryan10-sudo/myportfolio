"use client";

import Lottie from "lottie-react";
import React from "react";
import contactAnimation from "./json/Animation - 1748796231739.json";

interface AnimatedCartProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedContact: React.FC<AnimatedCartProps> = ({
  width = 250,
  height = 350,
  loop = true,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={contactAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedContact;
