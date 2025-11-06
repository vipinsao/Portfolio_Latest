"use client";
import Image from "next/image";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="w-full bg-white py-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Left */}
        <div className="flex flex-col gap-5 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            {personalInfo.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{personalInfo.bio}</p>
          <div className="flex gap-4 mt-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              className="px-5 py-2 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="px-5 py-2 rounded-md border border-gray-900 text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/user-vipin.png"
            alt="Vipin Chandra Sao"
            width={370}
            height={370}
            className="rounded-xl object-cover shadow-lg border"
          />
        </div>
      </div>
    </section>
  );
}
