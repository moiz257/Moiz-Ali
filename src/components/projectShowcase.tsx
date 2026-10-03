"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Project } from "@/lib/projects";
import TechTag from "@/components/techTag";

export default function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });
  const imageScale = useTransform(progress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const imageY = useTransform(progress, [0, 1], [index % 2 === 0 ? 24 : -24, index % 2 === 0 ? -24 : 24]);
  const detailsX = useTransform(progress, [0.08, 0.42], [index % 2 === 0 ? -50 : 50, 0]);
  const detailsOpacity = useTransform(progress, [0.12, 0.34, 0.8, 0.98], [0.25, 1, 1, 0.35]);
  const progressScale = useTransform(progress, [0.15, 0.84], [0, 1]);

  const content = (
    <motion.article className={`project-showcase project-showcase-scroll group ${index % 2 === 1 ? "project-showcase-reverse" : ""}`} style={{ opacity: detailsOpacity }}>
      <div className="project-visual">
        <motion.div className="absolute inset-[-5%]" style={{ scale: imageScale, y: imageY }}>
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
        </motion.div>
        <div className="project-visual-overlay" />
        <span className="project-index">0{index + 1}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <motion.div className="project-details" style={{ x: detailsX }}>
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="project-meta">{project.year ?? "Selected project"}</p>
            <h3 className="project-title">{project.title}</h3>
          </div>
          {project.href ? <ArrowUpRight className="mt-1 shrink-0 text-white/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /> : null}
        </div>
        <p className="mt-4 text-base leading-relaxed text-white/65">{project.description}</p>
        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="project-meta">Contribution</p>
          <p className="mt-2 text-sm leading-relaxed text-white/55">{project.contribution}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <TechTag key={technology}>{technology}</TechTag>)}</div>
        <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          {project.href ? "Open project" : "Project details"}
          <span className="h-px flex-1 bg-white/15" />
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </motion.div>
      <motion.div className="project-progress" style={{ scaleX: progressScale }} aria-hidden="true" />
    </motion.article>
  );

  return (
    <section ref={sectionRef} className="project-scroll-section">
      <div className="project-scroll-stage">
        {project.href ? <Link href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="block h-full">{content}</Link> : content}
      </div>
    </section>
  );
}
