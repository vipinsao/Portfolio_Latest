"use client";
import { about } from "../data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 leading-relaxed text-base max-w-3xl"
        >
          {about.philosophy}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Approach
            </h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              {about.approach.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Current Focus
            </h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              {about.currentFocus.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Fun Fact
            </h3>
            <p className="text-gray-700 text-sm">{about.funFact}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
