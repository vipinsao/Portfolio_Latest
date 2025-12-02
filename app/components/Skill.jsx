// src/components/Skills.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Express.js", icon: "/expressjs.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Groq API", icon: "/groq.svg" },
      { name: "Gemini AI", icon: "/gemini.svg" },
      { name: "ChatGPT", icon: "/chatgpt.svg" },
      { name: "LangGraph", icon: "/langgraph.svg" },
      { name: "LangChain", icon: "/langchain.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "GitHub", icon: "/github.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "Jest", icon: "/jest.svg" },
    ],
  },
  {
    title: "Languages",
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
              <h3 className="text-base font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
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
