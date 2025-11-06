import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skill";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Achievements />
      <Skills />
      <Contact />
    </>
  );
}
