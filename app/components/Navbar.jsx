import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets, siteLogo, siteLogoDark } from "@/assets/assets";
import { useRef } from "react";
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const siteLogoSrc = siteLogo[0].webLogo;
  const siteLogoDarkSrc = siteLogoDark[0].webLogoDark;
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateY(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? siteLogoDarkSrc : siteLogoSrc}
            className="w-28 cursor-pointer"
            style={{ marginRight: "3.5rem" }}
            alt=""
            width={112}
            height={12}
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>

          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="https://github.com/vipinsao">
              GitHub
            </a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button className="font-Ovo" onClick={() => setIsOpen(!isOpen)}>
              DSA Profiles
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://leetcode.com/u/vipinsao/">LeetCode</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.geeksforgeeks.org/user/vipinsao/">GFG</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.hackerrank.com/profile/vipin_sao">
                    Hackerrank
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.naukri.com/code360/profile/Vipin_2001">
                    Code 360
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* {mobile menu } */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className=" absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="https://github.com/vipinsao">
              GitHub
            </a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button className="font-Ovo" onClick={() => setIsOpen(!isOpen)}>
              DSA Profiles
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://leetcode.com/u/vipinsao/">LeetCode</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.geeksforgeeks.org/user/vipinsao/">GFG</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.hackerrank.com/profile/vipin_sao">
                    Hackerrank
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.naukri.com/code360/profile/Vipin_2001">
                    Code 360
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
