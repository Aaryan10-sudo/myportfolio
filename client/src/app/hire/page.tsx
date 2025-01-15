"use client";

import Mail from "@/ui/Mail";
import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  return (
    <section className="px-6 h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="md:text-5xl text-3xl font-bold mb-6">
          Let’s Build Something <span className="text-violet-600">Amazing</span>{" "}
          Together
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          I’m here to transform your ideas into reality. Whether it’s a website,
          a full-stack project, or something unique, let’s create something
          remarkable.
        </p>
        <div className="flex justify-center gap-8">
          <button
            onClick={() =>
              (window.location.href = "mailto:lazyfox916@example.com")
            }
            className="bg-violet-600 text-white h-[50px] w-[50%] rounded-md font-medium sm:text-lg transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-3"
          >
            <Mail />
            Contact
          </button>
          <Link
            href="/"
            className="border border-gray-600 text-violet-500 w-[50%] flex justify-center items-center rounded-md font-medium text-lg hover:border-violet-600 hover:text-violet-500 transition-all"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
