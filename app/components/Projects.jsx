"use client";
import Image from "next/image";
import { projectsDetail } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projectsDetail.map((project) => (
            <div
              key={project.id}
              className="border rounded-xl p-5 hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="px-4 py-2 rounded-md border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-100 transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
