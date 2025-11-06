"use client";
import { achievements } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12"
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
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col items-start"
            >
              <span className="text-3xl font-bold text-black">
                {ach.metric}
              </span>
              <h4 className="text-lg font-semibold mt-2 text-gray-900">
                {ach.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {ach.description}
              </p>
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  className="text-blue-700 mt-3 text-sm underline"
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
