import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Workflows from "./components/Workflow";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

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
      <Workflows />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}
