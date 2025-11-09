"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-40 pb-28 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-14">
        {/* TEXT */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 dark:text-neutral-100">
            I build AI-powered software that delivers measurable impact for
            users and teams.
          </h1>

          <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Full Stack Engineer specializing in GenAI, automation systems, and
            scalable AI-first product development. I design and ship practical
            AI features, automated workflows, and end-to-end full stack
            solutions that accelerate product velocity and improve user
            outcomes.
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Open to remote roles (India / Global) — AI SaaS, Automation
            Platforms, Seed to Series-A Startups.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
            >
              View Projects
            </a>
            <a
              href="mailto:vipinc.sao@gmail.com"
              className="px-5 py-2.5 rounded-md border border-neutral-800 dark:border-neutral-300 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
            >
              Contact Me
            </a>
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
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
