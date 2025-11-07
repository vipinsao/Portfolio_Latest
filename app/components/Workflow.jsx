"use client";
import Image from "next/image";
import { useModal } from "../context/ModalContext";
import { workflows } from "../data/portfolio";

export default function Workflows() {
  const { openModal } = useModal();

  return (
    <section id="workflows" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          AI Automation Workflows
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {workflows.map((wf) => (
            <button
              key={wf.id}
              onClick={() => openModal("workflow", wf)}
              className="text-left border rounded-xl p-5 hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                <Image
                  src={wf.image}
                  alt={wf.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 text-gray-900">
                {wf.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{wf.description}</p>

              <div className="flex gap-4 mt-4">
                <span className="px-3 py-1 text-xs border rounded-md">
                  Details
                </span>
                {wf.link && (
                  <a
                    href={wf.link}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1 text-xs border rounded-md"
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
