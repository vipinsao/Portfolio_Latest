"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "animate.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia(`(prefers-color-scheme:dark)`).matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header sDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <About sDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Work sDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact sDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer sDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
