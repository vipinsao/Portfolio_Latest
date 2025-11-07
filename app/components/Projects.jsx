"use client";
import Image from "next/image";
import { projectsDetail } from "../data/portfolio";
import { useModal } from "../context/ModalContext";

export default function Projects() {
  const { openModal } = useModal();

  return (
    <section id="projects" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projectsDetail.map((project) => (
            <button
              key={project.id}
              onClick={() => openModal("project", project)}
              className="text-left border rounded-xl p-5 hover:shadow-xl transition bg-white"
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
                <span className="px-3 py-1 text-xs border rounded-md">
                  Open
                </span>
                {/* Optional: keep direct links too */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1 text-xs border rounded-md"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1 text-xs border rounded-md"
                >
                  Code
                </a>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
