// src/Spiral.js
import React, { useEffect, useRef } from "react";

const Spiral = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black"; // Set background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the background

    ctx.strokeStyle = "cyan"; // Set stroke color
    ctx.lineWidth = 2; // Set line width

    let b = 200; // Starting value for the spiral
    ctx.translate(canvas.width / 2, canvas.height / 2); // Move origin to center

    // Draw the spiral
    for (let i = 0; i < 200; i++) {
      ctx.beginPath(); // Start a new path
      ctx.moveTo(0, 0); // Move to the center
      ctx.lineTo(0, -b); // Draw a line based on the current b value
      ctx.stroke(); // Render the line
      ctx.rotate((b * Math.PI) / 180); // Rotate canvas
      b -= 0.5; // Decrement b gradually for more movement
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      className="border-2 border-white"
    />
  );
};

export default Spiral;
