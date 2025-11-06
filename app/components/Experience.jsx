"use client";
import { experience } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10"
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
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {exp.company} — {exp.period}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="text-gray-700 text-sm leading-relaxed">
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
