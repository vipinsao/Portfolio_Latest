"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    summary: "Production UI development with modern React frameworks",
    skills: [
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
    ],
  },
  {
    title: "Backend",
    summary: "API design, authentication, and server-side logic",
    skills: [
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Express.js", icon: "/expressjs.svg" },
    ],
  },
  {
    title: "Databases",
    summary: "Schema design, querying, and data modeling",
    skills: [
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
    ],
  },
  {
    title: "Retrieval & LLM systems",
    summary:
      "Hand-rolled retrieval, schema-validated model output, OCR \u2014 no orchestration framework",
    skills: [
      { name: "Groq API", icon: "/groq.svg" },
      { name: "Gemini API", icon: "/gemini.svg" },
      { name: "BM25 + RRF fusion" },
      { name: "MiniLM embeddings" },
      { name: "Tesseract.js OCR" },
      { name: "Zod-validated output" },
    ],
  },
  {
    title: "DevOps & Tools",
    summary: "Version control, testing, and containerization",
    skills: [
      { name: "GitHub", icon: "/github.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "Jest", icon: "/jest.svg" },
    ],
  },
  {
    title: "Languages",
    summary: "Core programming languages used in projects",
    skills: [
      { name: "C++", icon: "/cpp.svg" },
      { name: "Python", icon: "/python.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-12"
        >
          Skills & Tech
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + idx * 0.05 }}
              viewport={{ once: true }}
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 bg-white dark:bg-neutral-900"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                {group.title}
              </h3>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 mt-1">
                {group.summary}
              </p>

              <div className="grid grid-cols-2 gap-5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    {skill.icon ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-500 dark:text-neutral-400"
                      >
                        {"{ }"}
                      </span>
                    )}
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
