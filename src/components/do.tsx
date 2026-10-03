"use client";

import { motion } from "framer-motion";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Database, Layers3, Smartphone, Workflow, Wrench } from "lucide-react";
import SectionHeading from "@/components/sectionHeading";
import TechTag from "@/components/techTag";

const services = [
  { title: "Full-Stack Applications", detail: "Product-grade web applications with thoughtful interfaces, reliable APIs, and a foundation that can grow.", technologies: ["React", "Next.js", "TypeScript"], icon: Layers3 },
  { title: "AI-Powered Applications", detail: "AI features that are connected to real product workflows instead of existing as disconnected demos.", technologies: ["LLM APIs", "Python", "AI agents"], icon: Bot },
  { title: "Business Automation", detail: "Practical workflows that remove repetitive work and connect the tools a team already uses.", technologies: ["n8n", "Python", "Webhooks"], icon: Workflow },
  { title: "Mobile Applications", detail: "Cross-platform mobile experiences that feel considered, responsive, and native to the task.", technologies: ["React Native", "APIs", "TypeScript"], icon: Smartphone },
  { title: "Backend & APIs", detail: "Clear service boundaries, data models, and integrations for products that need dependable foundations.", technologies: ["Node.js", "Python", "Postgres"], icon: Database },
  { title: "SaaS & Internal Platforms", detail: "Operational tools and multi-surface platforms that make complex work easier to manage.", technologies: ["Dashboards", "Auth", "Workflows"], icon: Wrench },
];

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: 0.2 });
  const y = useTransform(progress, [0, 0.5, 1], [index % 2 === 0 ? 34 : -24, 0, index % 2 === 0 ? -24 : 34]);
  const rotate = useTransform(progress, [0, 0.5, 1], [index % 2 === 0 ? -2.5 : 2.5, 0, index % 2 === 0 ? 2 : -2]);
  const opacity = useTransform(progress, [0.05, 0.3, 0.8, 1], [0.45, 1, 1, 0.6]);
  const Icon = service.icon;

  return (
    <motion.article ref={cardRef} className="service-card" style={{ y, rotate, opacity }}>
      <div className="flex items-start justify-between gap-4">
        <span className="service-number">0{index + 1}</span>
        <Icon className="text-[var(--accent)]" size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-10 text-2xl font-bold tracking-tight text-white">{service.title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">{service.detail}</p>
      <div className="mt-6 flex flex-wrap gap-2">{service.technologies.map((technology) => <TechTag key={technology}>{technology}</TechTag>)}</div>
    </motion.article>
  );
}

export default function WhatIDoSection() {
  return (
    <>
      <section className="section-shell border-t border-white/10">
        <div className="section-container">
          <SectionHeading eyebrow="What I do" title={<>Software for the work <span className="text-muted">behind the idea.</span></>} description="From the first screen to the systems that support it, I build focused digital products across the stack." />
          <div className="mt-12 grid gap-3 md:grid-cols-2">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div>
        </div>
      </section>
    </>
  );
}
