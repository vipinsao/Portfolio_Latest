"use client";
import Image from "next/image";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const { title, bio, resumeUrl, availability } = personalInfo;

  return (
    <section className="w-full pt-40 pb-28 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-14">
        {/* TEXT */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 dark:text-neutral-100">
            {title}
          </h1>

          <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            {bio}
          </p>

          {/* AVAILABILITY — timezone and overlap are a screening filter for
              remote roles, so they belong above the fold rather than in a
              reply three emails later. */}
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 text-sm">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {availability.status}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mt-1">
              {availability.base}
            </p>
            <ul className="text-neutral-600 dark:text-neutral-300 mt-2 space-y-0.5">
              {availability.overlap.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-xs">
              {availability.caveat}
            </p>
          </div>

          <div className="flex gap-4 mt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
            >
              View Projects
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md border border-neutral-800 dark:border-neutral-300 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
              >
                View Resume
              </a>
            )}
          </div>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl">
            <Image
              src="/user-vipin.png"
              alt="Vipin Chandra Sao"
              width={360}
              height={360}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
