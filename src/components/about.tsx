"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/sectionHeading";
import TechTag from "@/components/techTag";

const capabilities = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "REST", "GraphQL"],
  Product: ["AI integrations", "Automation", "Mobile", "SaaS"],
  Delivery: ["APIs", "Databases", "Workflows", "Deployment"],
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.25 });
  const visualRotate = useTransform(progress, [0, 1], [-9, 9]);
  const visualScale = useTransform(progress, [0, 0.5, 1], [0.82, 1, 0.86]);
  const contentY = useTransform(progress, [0, 0.5, 1], [45, 0, -35]);

  return (
    <section ref={sectionRef} className="section-shell about-section pt-12">
      <div className="section-container grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div className="about-editorial" style={{ y: contentY }}>
          <motion.div className="about-monogram" style={{ rotate: visualRotate, scale: visualScale }} aria-hidden="true">
            <span>FULL</span><strong>STACK</strong><small>+ AI / AUTOMATION</small>
          </motion.div>
          <SectionHeading eyebrow="About" title={<>Engineering with <span className="text-muted">product context.</span></>} />
          <Link href="/contact" className="button-primary mt-8">Start a conversation <ArrowUpRight size={16} /></Link>
        </motion.div>
        <motion.div style={{ y: contentY }}>
          <p className="max-w-2xl text-xl leading-relaxed text-white/80">I&apos;m Moiz Ali, a full-stack developer and AI automation engineer. I work across the interface, the API, the data layer, and the operational workflows that make a product useful after launch.</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55">The work is practical: understand the problem, choose the simplest architecture that can support it, and ship an experience that is clear for people and maintainable for the team behind it.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {Object.entries(capabilities).map(([category, items], index) => (
              <motion.div key={category} className="capability-card" initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -2 : 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.08 }}>
                <p className="project-meta">{category}</p>
                <div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <TechTag key={item}>{item}</TechTag>)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
