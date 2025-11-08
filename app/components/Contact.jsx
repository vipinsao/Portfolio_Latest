"use client";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
          Let's Build Something Meaningful Together.
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base leading-relaxed mb-10">
          I’m open to remote full-time and contract opportunities with AI-driven
          startups, YC-funded teams, and product companies where engineering
          quality matters.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="px-6 py-3 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Contact Me
        </a>

        <div className="flex gap-6 mt-10 text-sm">
          {Object.keys(personalInfo.social).map((key) => (
            <a
              key={key}
              href={personalInfo.social[key]}
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
