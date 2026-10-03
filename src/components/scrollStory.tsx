"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, MotionValue, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/projects";

const phases = [
  { marker: "01 / SIGNAL", title: "Find the leverage.", detail: "Start with the problem worth solving." },
  { marker: "02 / SYSTEM", title: "Build the connection.", detail: "Make the interface, data, and workflow agree." },
  { marker: "03 / MOMENTUM", title: "Make useful move.", detail: "Ship something that keeps creating value." },
];

function OrbitProject({ project, index, progress }: { project: (typeof projects)[number]; index: number; progress: MotionValue<number> }) {
  const start = 0.16 + index * 0.28;
  const x = useTransform(progress, [start - 0.12, start, start + 0.18, start + 0.3], [index % 2 === 0 ? -260 : 260, 0, 0, index % 2 === 0 ? 260 : -260]);
  const y = useTransform(progress, [start - 0.12, start, start + 0.18, start + 0.3], [index === 1 ? 120 : -80, 0, 0, index === 1 ? -120 : 80]);
  const rotate = useTransform(progress, [start - 0.12, start, start + 0.3], [index % 2 === 0 ? -14 : 14, 0, index % 2 === 0 ? 14 : -14]);
  const scale = useTransform(progress, [start - 0.12, start, start + 0.18, start + 0.3], [0.72, 1, 1, 0.72]);
  const opacity = useTransform(progress, [start - 0.12, start - 0.04, start + 0.18, start + 0.3], [0, 1, 1, 0]);

  return (
    <motion.article className="story-project" style={{ x, y, rotate, scale, opacity }}>
      <div className="story-project-image"><Image src={project.image} alt={`${project.title} preview`} fill sizes="260px" className="object-cover" /></div>
      <div className="story-project-info"><span>{project.category}</span><h3>{project.title}</h3><ArrowUpRight size={16} aria-hidden="true" /></div>
    </motion.article>
  );
}

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [activePhase, setActivePhase] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const springProgress = useSpring(scrollYProgress, { stiffness: 75, damping: 26, mass: 0.25 });
  const staticProgress = useMotionValue(0.5);
  const progress = reducedMotion ? staticProgress : springProgress;
  const orbitRotate = useTransform(progress, [0, 1], [-18, 22]);
  const ringScale = useTransform(progress, [0, 0.5, 1], [0.84, 1.08, 0.88]);
  const titleY = useTransform(progress, [0, 0.32, 0.72, 1], [80, 0, -20, -90]);
  const titleOpacity = useTransform(progress, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);
  const centerScale = useTransform(progress, [0, 0.5, 1], [0.72, 1, 0.78]);
  const lineScale = useTransform(progress, [0.08, 0.84], [0, 1]);
  const ghostY = useTransform(progress, [0, 0.5, 1], [120, -10, -120]);
  const ghostOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 0.12, 0.12, 0]);
  const scanY = useTransform(progress, [0, 1], ["-40%", "140%"]);

  useMotionValueEvent(progress, "change", (latest) => {
    const nextPhase = latest < 0.34 ? 0 : latest < 0.68 ? 1 : 2;
    setActivePhase((current) => current === nextPhase ? current : nextPhase);
  });

  return (
    <section ref={sectionRef} className="scroll-story">
      <div className="scroll-story-stage">
        <motion.div className="story-grid" style={{ opacity: ghostOpacity }} aria-hidden="true" />
        <motion.div className="story-ghost-word" style={{ y: ghostY, opacity: ghostOpacity }} aria-hidden="true">MOVE<br /><span>MAKE</span><br />MATTER</motion.div>
        <motion.div className="story-scanline" style={{ y: scanY }} aria-hidden="true" />

        <motion.div className="scroll-story-heading" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="section-eyebrow">The work in motion</p>
          <h2>Good software <span>moves.</span></h2>
          <p>Ideas become interfaces, interfaces become systems, and systems create leverage.</p>
        </motion.div>

        <div className="scroll-story-canvas" aria-label="Selected projects moving through a product system">
          <motion.div className="story-orbit" style={{ rotate: orbitRotate, scale: ringScale }} aria-hidden="true">
            <div className="story-orbit-ring story-orbit-ring-one" />
            <div className="story-orbit-ring story-orbit-ring-two" />
            <div className="story-orbit-ring story-orbit-ring-three" />
            <div className="story-orbit-dot" />
          </motion.div>
          {projects.slice(0, 3).map((project, index) => <OrbitProject key={project.slug} project={project} index={index} progress={progress} />)}
          <motion.div className="story-center" style={{ scale: centerScale }}>
            <span>MOIZ / SYSTEMS</span>
            <strong>From idea<br /><i>to useful.</i></strong>
            <small>Scroll to move through the work</small>
          </motion.div>
        </div>

        <motion.div className="story-phase-panel" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span>{phases[activePhase].marker}</span>
          <strong>{phases[activePhase].title}</strong>
          <small>{phases[activePhase].detail}</small>
        </motion.div>
        <div className="story-phase-dots" aria-label="Scroll story phase">
          {phases.map((phase, index) => <span key={phase.marker} className={activePhase === index ? "is-active" : ""} aria-label={phase.title} />)}
        </div>
        <Link href="/works" className="story-archive-link">Open work archive <ArrowUpRight size={14} /></Link>
        <motion.div className="scroll-story-footer" style={{ scaleX: lineScale }} aria-hidden="true" />
        <div className="scroll-story-cue"><ArrowDown size={14} /> Keep scrolling</div>
      </div>
    </section>
  );
}
