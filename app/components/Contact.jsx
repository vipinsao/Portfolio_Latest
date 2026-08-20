// src/components/Contact.jsx
"use client";
import { personalInfo } from "../data/portfolio";

const socialLabels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "Twitter (X)",
  leetcode: "LeetCode",
  portfolio: "Portfolio",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
          Let&apos;s Build Something Meaningful Together.
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base leading-relaxed mb-6">
          I’m open to remote full-time and contract opportunities with AI-driven
          startups, YC-funded teams, and product companies where engineering
          quality matters.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Email:{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="underline underline-offset-4 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {personalInfo.email}
          </a>
        </p>

        <a
          href={personalInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Contact Me
        </a>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
          {Object.keys(personalInfo.social).map((key) => (
            <a
              key={key}
              href={personalInfo.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              {socialLabels[key] ?? key}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
