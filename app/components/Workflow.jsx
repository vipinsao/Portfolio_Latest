"use client";
import Image from "next/image";
import { useModal } from "../context/ModalContext";
import { workflows } from "../data/portfolio";

export default function Workflows() {
  const { openModal } = useModal();

  return (
    <section id="workflows" className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-10">
          AI Automation Workflows
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {workflows.map((wf) => (
            <button
              key={wf.id}
              onClick={() => openModal("workflow", wf)}
              className="text-left border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-neutral-900"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <Image
                  src={wf.image}
                  alt={wf.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                {wf.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{wf.description}</p>

              <div className="flex gap-4 mt-4">
                <span className="px-3 py-1 text-xs border border-neutral-300 dark:border-neutral-700 rounded-md text-gray-700 dark:text-gray-300">
                  Details
                </span>
                {wf.link && (
                  <a
                    href={wf.link}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1 text-xs border border-neutral-300 dark:border-neutral-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
                  >
                    Repo
                  </a>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
