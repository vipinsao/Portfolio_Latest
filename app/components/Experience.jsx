"use client";
import { experience } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-10"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {exp.company} — {exp.period}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    • {ach}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
