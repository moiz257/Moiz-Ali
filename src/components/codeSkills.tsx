"use client";

import React from "react";
import { motion } from "framer-motion";

const codeSkills = [
  { label: "React / Next.js", value: 92 },
  { label: "TypeScript", value: 88 },
  { label: "Node.js & APIs", value: 85 },
  { label: "Python Automation", value: 80 },
  { label: "DevOps & Infra", value: 74 },
  { label: "Design Systems", value: 90 },
];

const CodingSkills: React.FC = () => {
  return (
    <section className="relative bg-black px-4 py-16 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_70%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Coding Craft
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>
          <motion.h2
            className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Precision engineering across front-end, back-end, and automation.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {codeSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl shadow-black/40"
            >
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/70">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-white to-white/60"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="mt-3 text-xs text-white/60">
                Confidence score built from delivered products, audits, and ops
                automations.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingSkills;
