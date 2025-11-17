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
    stack: ["Next.js", "Tailwind", "Node.js", "Postgres"],
    imgSrc: "/dimer.png",
    link: "https://dimer-frontend-b9a36b8e3ad4.herokuapp.com/login",
  },
  {
    title: "Sourcely AI",
    year: "2025",
    description: "AI Powered Web Application",
    stack: ["Next.js", "Python", "AI", "Tailwind", "Postgres"],
    imgSrc: "/sourcely.png",
    link: "https://sourcely.islpulse.com/login",
  },
  {
    title: "LMS Application",
    year: "2025",
    description: "Learning Experience Platform",
    stack: ["React + Astro", "Python", "Zustand", "Tailwind"],
    imgSrc: "/lms.png",
    link: "https://lmsapp.islpulse.com/",
  },
  {
    title: "Kajabi Custom Widget",
    year: "2025",
    description: "No-Code Extension",
    stack: ["React", "JavaScript", "Tailwind", "Firebase"],
    imgSrc: "/kajabi.png",
    link: "https://temp.islpulse.com/",
  },
  {
    title: "InflamaScan AI",
    year: "2025",
    description: "Full-Stack Development",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    imgSrc: "/inflama.png",
    link: "#",
  },
  {
    title: "Speak Your Menu",
    year: "2025",
    description: "Full-Stack Development",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    imgSrc: "/speak.png",
    link: "https://app.speakyourmenu.com/",
  },
];

const MyWork = () => {
  return (
    <section className="relative bg-black py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)]" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
            Selected Work
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Product design and engineering across health, AI, and automation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.link} target="_blank">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 shadow-2xl shadow-black/40 transition-all duration-300 hover:border-white/40"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <span className="text-sm uppercase tracking-[0.3em] text-white/60">
                      Case Study
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
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

export default MyWork;
