import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Five sections.
 *
 * There were eleven — hero, about, experience, skills, projects, workflows,
 * achievements, blogs, contact, plus nav and footer — which is the shape a
 * page takes when nothing is ever removed from it. A reader who already has
 * the link is deciding whether to reply, not reading a biography, and every
 * section that is not evidence dilutes the ones that are.
 *
 * Cut: About (its one substantive sentence is the hero's lead, the rest was
 * "passionate about"), Skills (a grid of framework logos proves nothing that
 * a case study's stack line does not prove better), Workflows (two n8n
 * automations with no measured outcome — they survive as links under Open
 * source), Achievements (five cards, three of which counted things already
 * counted elsewhere on this page), and Blogs as a section (the posts are real
 * so they stay, as four lines instead of three cards).
 *
 * Everything here is a server component except the nav, the footer's year,
 * and the scroll-reveal wrapper.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
