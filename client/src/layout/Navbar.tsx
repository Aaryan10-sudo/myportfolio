"use client";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import Github from "@/ui/Github";
import LinkedIn from "@/ui/LinkedIn";
import Light from "@/ui/Light";
import Dark from "@/ui/Dark";
import Link from "next/link";

const Navbar = () => {
  const [mode, setMode] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (mode) {
      document.body.style.backgroundColor = "#031B27";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#faf9f6";
      document.body.style.color = "black";
    }
  }, [mode]);

  const navLinks = [{}];
  return (
    <nav
      className={`${
        !mode ? "sticky top-0 z-50" : ""
      }sticky  w-full h-[60px] bg-transparent backdrop-blur-xl opacity-100 flex items-center justify-between top-0 z-50 max-w-[1280px] mx-auto sm:px-7 px-3`}
    >
      <Link
        className="cursor-pointer tracking-wide font-sora font-bold"
        href={"/"}
      >
        Aaryan Sharma
      </Link>

      <ul className="hidden md:flex gap-5">
        <li className="mr-5">
          <Link href="/" className="text-purple-500 hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link href="#skills" className="hover:text-gray-200">
            Skills
          </Link>
        </li>
        <li className="mr-5">
          <Link href="#projects" className="hover:text-gray-200">
            Projects
          </Link>
        </li>
        <li className="mr-5">
          <Link href="#contact" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
        <li className="mr-5">
          <Link href="#blogs" className="hover:text-gray-200">
            Blogs
          </Link>
        </li>
      </ul>

      <div className="flex gap-5 items-center">
        <div className="hidden md:flex gap-5">
          <Facebook />
          <Instagram />
          <Github />
          <LinkedIn />
        </div>

        <button
          className="w-[55px] h-[50px] md:flex justify-center items-center hidden"
          onClick={() => {
            setMode(!mode);
          }}
        >
          {mode ? <Light /> : <Dark />}
        </button>
      </div>

      <div className="md:hidden flex items-center gap-5">
        <button
          className="h-[50px] flex justify-center items-center"
          onClick={() => {
            setMode(!mode);
          }}
        >
          {mode ? <Light /> : <Dark />}
        </button>
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          ☰
        </button>
      </div>
      {menu ? (
        <ul
          id="mobile-menu"
          className="absolute top-[50px] left-0 w-full text-black bg-slate-300 flex flex-col items-start p-5 gap-5 md:hidden z-50"
        >
          <li>
            <Link href="/" className="text-purple-500 hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-gray-200">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#blogs" className="hover:text-gray-200">
              Blogs
            </Link>
          </li>
          <div className="flex gap-5 mt-5">
            <Facebook />
            <Instagram />
            <Github />
            <LinkedIn />
          </div>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
