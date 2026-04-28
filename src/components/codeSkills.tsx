"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Code, Server, Terminal, Rocket, Palette } from "lucide-react";

const codeSkills = [
  { label: "React / Next.js", value: 92, icon: <Code2 className="w-5 h-5" />, color: "from-cyan-500 to-cyan-300" },
  { label: "TypeScript", value: 88, icon: <Code className="w-5 h-5" />, color: "from-blue-500 to-blue-300" },
  { label: "Node.js & APIs", value: 85, icon: <Server className="w-5 h-5" />, color: "from-green-500 to-green-300" },
  { label: "Python Automation", value: 80, icon: <Terminal className="w-5 h-5" />, color: "from-yellow-500 to-yellow-300" },
  { label: "DevOps & Infra", value: 74, icon: <Rocket className="w-5 h-5" />, color: "from-orange-500 to-orange-300" },
  { label: "Design Systems", value: 90, icon: <Palette className="w-5 h-5" />, color: "from-purple-500 to-purple-300" },
];

const CodingSkills: React.FC = () => {
  return (
    <section className="relative bg-black px-4 py-20 text-white sm:px-8 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(255,255,255,0.05),_transparent)]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs uppercase tracking-[0.4em] text-white/70"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Coding Craft
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>

          <motion.h2
            className="mt-5 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            Precision engineering across{" "}
            <span className="shimmer-text">front-end, back-end,</span>
            <br />
            <span className="gradient-text">and automation.</span>
          </motion.h2>
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {codeSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/2 p-6 shadow-xl shadow-black/40 card-shine"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl rounded-3xl" />

              {/* Top row */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                    {skill.label}
                  </span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <motion.span
                    className="text-2xl font-black text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {skill.value}
                  </motion.span>
                  <span className="text-xs text-white/40">%</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative z-10 h-2 rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} opacity-80`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.1, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  style={{ boxShadow: `0 0 10px rgba(255,255,255,0.3)` }}
                />
                {/* Shimmer on bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </div>

              <div className="relative z-10 mt-3 text-[11px] text-white/40 leading-relaxed">
                Confidence score built from delivered products, audits &amp; automations.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingSkills;
