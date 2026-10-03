"use client";

import { motion, MotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/sectionHeading";

const steps = [
  ["01", "Understand", "Clarify the business problem, users, constraints, and the outcome that matters."],
  ["02", "Plan", "Turn the brief into a focused product direction, technical shape, and delivery path."],
  ["03", "Build", "Design and engineer the product with a maintainable foundation and a sharp user experience."],
  ["04", "Automate", "Connect the repetitive work with APIs, AI, and practical workflows where it creates leverage."],
  ["05", "Ship", "Polish, test, deploy, and leave the product ready for its next stage of growth."],
];

function ProcessStep({ step, index, progress }: { step: string[]; index: number; progress: MotionValue<number> }) {
  const start = 0.08 + index * 0.15;
  const opacity = useTransform(progress, [start, start + 0.1, start + 0.26], [0.35, 1, 1]);
  const y = useTransform(progress, [start, start + 0.12], [24, 0]);
  const scale = useTransform(progress, [start, start + 0.12, start + 0.28], [0.96, 1, 1]);

  return (
    <motion.article className="process-step" style={{ opacity, y, scale }}>
      <span className="process-number">{step[0]}</span>
      <h3>{step[1]}</h3>
      <p>{step[2]}</p>
    </motion.article>
  );
}

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.2 });
  const lineScale = useTransform(progress, [0.08, 0.82], [0, 1]);
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    const nextStep = Math.min(4, Math.max(0, Math.floor(latest * 5)));
    setActiveStep((current) => current === nextStep ? current : nextStep);
  });

  return (
    <section ref={sectionRef} className="section-shell process-section border-t border-white/10">
      <div className="section-container">
        <SectionHeading eyebrow="How I work" title={<>Clear thinking. <span className="text-muted">Useful software.</span></>} description="A practical process that keeps product decisions connected to the problem they need to solve." />
        <div className="process-active-card">
          <span>Current phase / {steps[activeStep][0]}</span>
          <motion.strong key={steps[activeStep][1]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>{steps[activeStep][1]}</motion.strong>
          <small>{steps[activeStep][2]}</small>
        </div>
        <div className="process-rail-wrap mt-12">
          <motion.div className="process-rail" style={{ scaleX: lineScale }} aria-hidden="true" />
          <div className="grid gap-3 md:grid-cols-5">{steps.map((step, index) => <ProcessStep key={step[0]} step={step} index={index} progress={progress} />)}</div>
        </div>
      </div>
    </section>
  );
}
