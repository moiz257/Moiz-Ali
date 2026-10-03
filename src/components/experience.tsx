"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/sectionHeading";

const experiences = [
  {
    role: "Technical Co-Founder / Partner",
    company: "UsNow",
    duration: "Present",
    description: "Leading engineering direction, full-stack product development, and the use of automation and AI integrations across core operations.",
  },
  {
    role: "Junior Software Engineer",
    company: "Instant Solutions Lab",
    duration: "Present",
    description: "Building web applications and automation pipelines with React and Next.js while contributing to scalable backend infrastructure.",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.2 });
  const beamScale = useTransform(progress, [0.08, 0.78], [0, 1]);

  return (
    <section ref={sectionRef} className="section-shell experience-section border-t border-white/10">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title={<>Building alongside <span className="text-muted">ambitious teams.</span></>} />
        <div className="experience-timeline mt-12">
          <motion.div className="experience-beam" style={{ scaleY: beamScale }} aria-hidden="true" />
          {experiences.map((experience, index) => (
            <motion.article key={experience.company} className="experience-entry" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: index * 0.12 }}>
              <span className="experience-node" aria-hidden="true" />
              <div className="experience-card">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div><p className="project-meta">{experience.company}</p><h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{experience.role}</h3></div>
                  <span className="text-xs uppercase tracking-[0.16em] text-white/40">{experience.duration}</span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55">{experience.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
