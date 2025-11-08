"use client";
import Image from "next/image";
import { projectsDetail } from "../data/portfolio";
import { useModal } from "../context/ModalContext";

export default function Projects() {
  const { openModal } = useModal();

  return (
    <section
      id="projects"
      className="w-full py-28 bg-white dark:bg-black border-t border-gray-200/60 dark:border-gray-800/60"
    >
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projectsDetail.map((project) => (
            <button
              key={project.id}
              onClick={() => openModal("project", project)}
              className="group w-full text-left rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-[#0e0e0e]"
            >
              <div className="relative w-full h-52 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-[1.05]"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tags?.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
