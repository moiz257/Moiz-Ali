"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Dimer Health Services",
    year: "2025",
    description: "Custom Web Application",
    stack: ["Next.js", "Tailwind", "Node.js"],
    imgSrc: "/dimer.png",
    link: "https://dimer-frontend-b9a36b8e3ad4.herokuapp.com/login",
  },
  {
    title: "Sourcely AI",
    year: "2025",
    description: "AI Powered Web Application",
    stack: ["Next.js", "Python", "AI"],
    imgSrc: "/sourcely.png",
    link: "https://sourcely.islpulse.com/login",
  },
  {
    title: "LMS Application",
    year: "2025",
    description: "LMS Application",
    stack: ["React", "Node.js", "Postgres"],
    imgSrc: "/lms.png",
    link: "https://lmsapp.islpulse.com/",
  },
];

const Work: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative z-10 px-4 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 text-center">
          <motion.div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs tracking-[0.4em] uppercase text-white/70"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Featured Work
            <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-semibold leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Crafting digital products with measurable impact.
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.link} target="_blank">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl shadow-black/40 transition-all duration-300 hover:border-white/40"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                      {project.year}
                    </span>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <p className="text-sm text-white/70">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                    View Project
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-white/40 to-transparent" />
                    <span className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
