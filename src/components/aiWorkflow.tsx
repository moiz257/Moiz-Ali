"use client";

import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Database, Send, Workflow } from "lucide-react";
import SectionHeading from "@/components/sectionHeading";

const nodes = [
  { label: "Input", title: "A real request", detail: "A customer, operator, or team member starts with a task.", icon: Send },
  { label: "Reason", title: "AI understands context", detail: "Models, documents, and business rules shape the next action.", icon: Bot },
  { label: "Connect", title: "Systems work together", detail: "APIs, databases, and tools exchange the information they need.", icon: Database },
  { label: "Outcome", title: "Work moves forward", detail: "The result reaches the right person, product surface, or workflow.", icon: Workflow },
];

function WorkflowNode({ node, index, progress }: { node: typeof nodes[number]; index: number; progress: MotionValue<number> }) {
  const start = index * 0.18;
  const opacity = useTransform(progress, [start, start + 0.16, start + 0.32], [0.25, 1, 1]);
  const x = useTransform(progress, [start, start + 0.18], [index % 2 === 0 ? -28 : 28, 0]);
  const Icon = node.icon;

  return (
    <motion.article className="workflow-node" style={{ opacity, x }}>
      <div className="workflow-node-icon"><Icon size={18} aria-hidden="true" /></div>
      <div><p className="project-meta">{String(index + 1).padStart(2, "0")} / {node.label}</p><h3>{node.title}</h3><p>{node.detail}</p></div>
    </motion.article>
  );
}

export default function AIWorkflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.2 });
  const lineScale = useTransform(progress, [0.12, 0.78], [0, 1]);

  return (
    <section ref={sectionRef} className="section-shell workflow-section border-y border-white/10 bg-white/[0.02]">
      <div className="section-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading eyebrow="AI + automation" title={<>AI that works <span className="text-muted">inside the product.</span></>} description="The useful part is the connection between intelligence, context, and the work someone needs to get done." />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/45">I design automation around real inputs, real systems, and a clear outcome—not isolated demos.</p>
        </div>
        <div className="workflow-visual">
          <motion.div className="workflow-line" style={{ scaleY: lineScale }} aria-hidden="true" />
          <div className="grid gap-4">
            {nodes.map((node, index) => <WorkflowNode key={node.label} node={node} index={index} progress={progress} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
