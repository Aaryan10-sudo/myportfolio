import { GhostAnimation } from "@/animation/ghostAnimation";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-[#010101] text-2xl">
      <GhostAnimation />
    </div>
  );
}
