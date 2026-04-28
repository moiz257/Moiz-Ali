"use client";

import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiPython,
  SiNodedotjs,
} from "react-icons/si";
import { FaReact, FaMobile } from "react-icons/fa";
import { motion } from "framer-motion";

const skillCards = [
  {
    title: "React Ecosystem",
    description: "Hooks, advanced state, suspense, server components & concurrent features.",
    Icon: FaReact,
    color: "from-cyan-500/10",
    iconColor: "text-cyan-400/70",
  },
  {
    title: "Next.js Platform",
    description: "App Router, ISR, edge actions, multi-tenant & full-stack architecture.",
    Icon: SiNextdotjs,
    color: "from-white/10",
    iconColor: "text-white/70",
  },
  {
    title: "TypeScript Engineering",
    description: "Strict typing, shared schemas, generics, DX tooling & automation pipelines.",
    Icon: SiTypescript,
    color: "from-blue-500/10",
    iconColor: "text-blue-400/70",
  },
  {
    title: "Node.js & Python APIs",
    description: "GraphQL/REST services, background workers, realtime infra & microservices.",
    Icon: SiNodedotjs,
    color: "from-green-500/10",
    iconColor: "text-green-400/70",
  },
  {
    title: "Tailwind UI Systems",
    description: "Design tokens, responsive systems, animation libraries & design parity.",
    Icon: SiTailwindcss,
    color: "from-teal-500/10",
    iconColor: "text-teal-400/70",
  },
  {
    title: "Motion & Micro UX",
    description: "Framer Motion, cinematic transitions, spring physics & micro-animations.",
    Icon: SiFramer,
    color: "from-purple-500/10",
    iconColor: "text-purple-400/70",
  },
  {
    title: "Python & Automation",
    description: "n8n workflows, data pipelines, AI integrations & scheduled automation.",
    Icon: SiPython,
    color: "from-yellow-500/10",
    iconColor: "text-yellow-400/70",
  },
  {
    title: "Mobile Development",
    description: "React Native apps delivering native-grade experiences across iOS & Android.",
    Icon: FaMobile,
    color: "from-rose-500/10",
    iconColor: "text-rose-400/70",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-black px-4 py-20 text-white sm:px-8 lg:px-16 overflow-hidden">
      {/* Background radial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(255,255,255,0.05),_transparent)]" />

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
            Skills Stack
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>

          <motion.h2
            className="mt-5 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            Product craftsmanship backed by{" "}
            <span className="shimmer-text">full-stack engineering depth.</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCards.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${skill.color} to-transparent p-5 shadow-xl shadow-black/40 card-shine cursor-default`}
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-100 rounded-3xl" />

              {/* Icon */}
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-2xl ${skill.iconColor}`}>
                <skill.Icon />
              </div>

              <h3 className="text-sm font-black uppercase tracking-tight">{skill.title}</h3>
              <p className="mt-2 text-xs text-white/55 leading-relaxed">{skill.description}</p>

              {/* Bottom shimmer */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
