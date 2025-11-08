"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "Groq API", icon: "/groq.svg" },
  // { name: "OpenAI", icon: "/openai.svg" },
  { name: "Gemini AI", icon: "/gemini.svg" },
  { name: "ChatGPT", icon: "/chatgpt.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
  // { name: "AWS", icon: "/aws.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "Jest", icon: "/jest.svg" },
  { name: "LangGraph", icon: "/langgraph.svg" },
  { name: "LangChain", icon: "/langchain.svg" },
  { name: "C++", icon: "/cpp.svg" },
  { name: "Python", icon: "/python.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
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

        <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain"
              />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
