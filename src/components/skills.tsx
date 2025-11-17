"use client";

import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const skillCards = [
  {
    title: "React Ecosystem",
    description: "Hooks, advanced state, suspense, server components.",
    Icon: FaReact,
  },
  {
    title: "Next.js Platform",
    description: "App Router, ISR, edge/server actions, multi-tenant apps.",
    Icon: SiNextdotjs,
  },
  {
    title: "TypeScript Engineering",
    description: "Strict typing, shared schemas, DX tooling & automation.",
    Icon: SiTypescript,
  },
  {
    title: "Node.js & APIs",
    description: "GraphQL/REST services, workers, realtime infra.",
    Icon: FaNodeJs,
  },
  {
    title: "Tailwind UI Systems",
    description: "Design tokens, responsive systems, design parity.",
    Icon: SiTailwindcss,
  },
  {
    title: "Motion & Micro UX",
    description: "Framer Motion, Lottie, cinematic transitions.",
    Icon: SiFramer,
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-black px-4 py-16 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills Stack
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>
          <motion.h2
            className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Product craftsmanship backed by full-stack engineering depth.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCards.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl shadow-black/40 transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl text-white">
                  <skill.Icon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
