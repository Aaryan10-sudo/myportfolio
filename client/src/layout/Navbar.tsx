"use client";
import React, { useEffect, useState, useRef } from "react";
import "../styles/globals.css";
import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import Github from "@/ui/Github";
import LinkedIn from "@/ui/LinkedIn";
import Light from "@/ui/Light";
import Dark from "@/ui/Dark";
import Link from "next/link";

const navLinksData = [
  { href: "/", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#blogs", label: "Blogs" },
];

const Navbar = () => {
  const [mode, setMode] = useState(true);
  const [menu, setMenu] = useState(false);

  const navItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const navListRef = useRef<HTMLUListElement | null>(null);

  const [magicPillStyle, setMagicPillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
    backgroundColor: "",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (mode) {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#faf9f6";
      document.body.style.color = "black";
    }
  }, [mode]);

  const updatePillProperties = (itemEl: HTMLLIElement | null) => {
    if (itemEl) {
      const pillBgColor = mode ? "rgb(55 65 81)" : "rgb(209 213 219)";

      setMagicPillStyle({
        left: itemEl.offsetLeft,
        top: itemEl.offsetTop,
        width: itemEl.offsetWidth,
        height: itemEl.offsetHeight,
        opacity: 1,
        backgroundColor: pillBgColor,
      });
    } else {
      setMagicPillStyle((prev) => ({
        ...prev,
        opacity: 0,
        width: 0,
        height: 0,
      }));
    }
  };

  useEffect(() => {
    const activeItemEl = navItemRefs.current[activeIndex];
    const timer = setTimeout(() => {
      updatePillProperties(activeItemEl);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeIndex, mode]);

  const handleNavItemMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const itemEl = navItemRefs.current[index];
    updatePillProperties(itemEl);
  };

  const handleNavMouseLeave = () => {
    setHoveredIndex(null);
    const activeItemEl = navItemRefs.current[activeIndex];
    updatePillProperties(activeItemEl);
  };

  const handleLinkClick = (index: number, href: string) => {
    setActiveIndex(index);
    setMenu(false);
    if (href.startsWith("#")) {
    }
  };

  const handleLogoClick = () => {
    const homeIndex = navLinksData.findIndex((link) => link.href === "/");
    if (homeIndex !== -1) {
      setActiveIndex(homeIndex);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-xl">
      <div className="flex items-center justify-between sm:px-7 px-3 max-w-[1700px] h-[80px] mx-auto">
        <Link
          className="cursor-pointer tracking-wide font-sora font-bold"
          href="/"
          onClick={handleLogoClick}
        >
          Aaryan Sharma
        </Link>

        <div className="hidden md:flex items-center">
          <ul
            ref={navListRef}
            className="flex items-center gap-x-1 sm:gap-x-[20px] relative"
            onMouseLeave={handleNavMouseLeave}
          >
            {navLinksData.map((item, index) => {
              const isEffectivelyActive =
                index === activeIndex || index === hoveredIndex;
              return (
                <li
                  key={item.label}
                  ref={(el) => {
                    navItemRefs.current[index] = el;
                  }}
                  onMouseEnter={() => handleNavItemMouseEnter(index)}
                  onClick={() => handleLinkClick(index, item.href)}
                  className="cursor-pointer px-3 py-1.5 rounded-md"
                >
                  <Link
                    href={item.href}
                    className={`
                      relative z-10 transition-colors duration-150 ease-in-out block whitespace-nowrap
                      ${
                        isEffectivelyActive
                          ? mode
                            ? "text-gray-100 font-medium"
                            : "text-gray-900 font-medium"
                          : mode
                          ? "text-gray-400 hover:text-gray-200"
                          : "text-gray-500 hover:text-gray-800"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <div
              className="absolute rounded-md transition-all duration-300 ease-in-out pointer-events-none"
              style={{
                left: `${magicPillStyle.left}px`,
                top: `${magicPillStyle.top}px`,
                width: `${magicPillStyle.width}px`,
                height: `${magicPillStyle.height}px`,
                opacity: magicPillStyle.opacity,
                backgroundColor: magicPillStyle.backgroundColor,
              }}
            />
          </ul>
        </div>

        <div className="flex gap-5 items-center">
          <div className="hidden md:flex gap-5">
            <Facebook />
            <Instagram />
            <Github />
            <LinkedIn />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-5">
          <button onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menu && (
        <ul
          id="mobile-menu"
          className={`md:hidden absolute top-[79px] left-0 w-full ${
            mode ? "bg-black text-white" : "bg-slate-200 text-black"
          } flex flex-col items-start p-5 gap-5 z-40 shadow-lg`}
        >
          {navLinksData.map((item, index) => (
            <li key={item.label} className="w-full">
              <Link
                href={item.href}
                onClick={() => handleLinkClick(index, item.href)}
                className={`
                    block py-2 
                    ${
                      index === activeIndex
                        ? mode
                          ? "text-purple-400 font-semibold"
                          : "text-[#0066ff] font-semibold"
                        : mode
                        ? "hover:text-gray-300"
                        : "hover:text-gray-700"
                    }
                  `}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="flex gap-5 mt-5 pt-5 border-t w-full border-gray-500/50">
            <Facebook />
            <Instagram />
            <Github />
            <LinkedIn />
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
