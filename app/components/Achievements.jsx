"use client";
import { achievements } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-12"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-neutral-900 flex flex-col items-start"
            >
              <span className="text-3xl font-bold text-black dark:text-white">
                {ach.metric}
              </span>
              <h4 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">
                {ach.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                {ach.description}
              </p>
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  className="text-blue-700 dark:text-blue-400 mt-3 text-sm underline hover:text-blue-600 dark:hover:text-blue-300 transition"
                >
                  verify →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
