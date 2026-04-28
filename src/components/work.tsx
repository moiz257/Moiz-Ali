"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Dimer Health Services",
    year: "2025",
    description: "Custom Web Application for health services management.",
    stack: ["Next.js", "Tailwind", "Node.js"],
    imgSrc: "/dimer.png",
    link: "https://dimer-frontend-b9a36b8e3ad4.herokuapp.com/login",
    category: "Web App",
  },
  {
    title: "Sourcely AI",
    year: "2025",
    description: "AI Powered source-finding & research platform.",
    stack: ["Next.js", "Python", "AI"],
    imgSrc: "/sourcely.png",
    link: "https://sourcely.islpulse.com/login",
    category: "AI Platform",
  },
  {
    title: "LMS Application",
    year: "2025",
    description: "Full-featured Learning Management System platform.",
    stack: ["React", "Node.js", "Postgres"],
    imgSrc: "/lms.png",
    link: "https://lmsapp.islpulse.com/",
    category: "EdTech",
  },
];

const Work: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white overflow-hidden">
      {/* Background radial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,_rgba(255,255,255,0.05),_transparent)]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 px-4 sm:px-10 lg:px-16">
        {/* Section heading */}
        <div className="flex flex-col items-center gap-4 text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs tracking-[0.4em] uppercase text-white/70"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Featured Work
            <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight"
            initial={{ y: 25, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: false }}
          >
            Crafting digital products with{" "}
            <span className="shimmer-text">measurable impact.</span>
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.link} target="_blank" data-cursor-text="VIEW">
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 shadow-2xl shadow-black/50 transition-all duration-500 hover:border-white/35 card-shine"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
              >
                {/* Image area */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

                  {/* Category pill top-right */}
                  <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur-md">
                    {project.category}
                  </div>

                  {/* Year + Title overlaid on image bottom */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                      {project.year}
                    </span>
                    <h3 className="mt-2 text-xl font-black leading-tight">{project.title}</h3>
                  </div>

                  {/* Arrow icon top-left on hover */}
                  <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/70 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-white/60">
                    <span className="-rotate-45 text-sm font-bold">↗</span>
                  </div>
                </div>

                {/* Info area */}
                <div className="flex flex-col gap-3 p-5">
                  <p className="text-xs text-white/55 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/55">
                    View Project
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                    <span className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            View All Work
            <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
