"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Dimer Health Services",
    year: "2025",
    description: "Custom Web Application for health services management & patient tracking.",
    stack: ["Next.js", "Tailwind", "Node.js", "Postgres"],
    imgSrc: "/dimer.png",
    link: "https://dimer-frontend-b9a36b8e3ad4.herokuapp.com/login",
    category: "Healthcare",
    size: "large",
  },
  {
    title: "Sourcely AI",
    year: "2025",
    description: "AI-powered academic source-finding and research assistance platform.",
    stack: ["Next.js", "Python", "AI", "Tailwind", "Postgres"],
    imgSrc: "/sourcely.png",
    link: "https://sourcely.islpulse.com/login",
    category: "AI Platform",
    size: "small",
  },
  {
    title: "LMS Application",
    year: "2025",
    description: "Full-featured Learning Management System — courses, quizzes & analytics.",
    stack: ["React + Astro", "Python", "Zustand", "Tailwind"],
    imgSrc: "/lms.png",
    link: "https://lmsapp.islpulse.com/",
    category: "EdTech",
    size: "small",
  },
  {
    title: "Kajabi Custom Widget",
    year: "2025",
    description: "No-code extension extending Kajabi's native capabilities.",
    stack: ["React", "JavaScript", "Tailwind", "Firebase"],
    imgSrc: "/kajabi.png",
    link: "https://temp.islpulse.com/",
    category: "No-Code",
    size: "small",
  },
  {
    title: "InflamaScan AI",
    year: "2025",
    description: "AI-powered inflammation detection & reporting for medical professionals.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    imgSrc: "/inflama.png",
    link: "#",
    category: "MedTech AI",
    size: "large",
  },
  {
    title: "Speak Your Menu",
    year: "2025",
    description: "Voice-activated restaurant menu platform — order with your voice.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    imgSrc: "/speak.png",
    link: "https://app.speakyourmenu.com/",
    category: "SaaS",
    size: "small",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <Link href={project.link} target="_blank" className="block">
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/4 shadow-2xl shadow-black/50 transition-all duration-500 hover:border-white/35 card-shine h-full"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: project.size === "large" ? "300px" : "220px" }}>
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

        {/* Category */}
        <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/65 backdrop-blur-sm">
          {project.category}
        </div>

        {/* Hover open icon */}
        <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/60 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-white/50 group-hover:text-white">
          <span className="-rotate-45 text-xs font-bold">↗</span>
        </div>

        {/* Year + title */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="rounded-full border border-white/25 px-3 py-0.5 text-[10px] uppercase tracking-[0.3em] text-white/55">
            {project.year}
          </span>
          <h3 className="mt-1.5 text-lg font-black leading-tight">{project.title}</h3>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3 p-5">
        <p className="text-xs text-white/55 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/12 bg-white/4 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-1 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
          View Project
          <span className="h-[1px] flex-1 bg-gradient-to-r from-white/25 to-transparent" />
          <span className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
            ↗
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
);

const MyWork = () => {
  return (
    <section className="relative bg-black py-20 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,_rgba(255,255,255,0.05),_transparent)]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs uppercase tracking-[0.4em] text-white/70">
            Selected Work
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight md:text-5xl">
            Product design &amp; engineering across{" "}
            <span className="shimmer-text">health, AI, and automation.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-white/50 leading-relaxed">
            Every project is crafted with pixel precision, scalable architecture, and cinematic UX.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[0, 2, 4].map((startIdx) => (
            <React.Fragment key={startIdx}>
              {/* Left: large card */}
              <div className={startIdx % 4 === 0 ? "md:row-span-2" : ""}>
                <ProjectCard project={projects[startIdx]} index={startIdx} />
              </div>
              {/* Right: two small cards stacked */}
              <div className="flex flex-col gap-5">
                {projects[startIdx + 1] && <ProjectCard project={projects[startIdx + 1]} index={startIdx + 1} />}
                {projects[startIdx + 2] && startIdx === 0 && <ProjectCard project={projects[startIdx + 2]} index={startIdx + 2} />}
              </div>
            </React.Fragment>
          ))}
          {/* Row 2: remaining cards */}
          {projects.slice(3).map((project, idx) =>
            idx < 3 ? null : (
              <ProjectCard key={project.title} project={project} index={idx + 3} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
