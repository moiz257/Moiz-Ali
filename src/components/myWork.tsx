"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ProjectShowcase from "@/components/projectShowcase";
import { projects } from "@/lib/projects";

export default function MyWork() {
  return (
    <section className="section-shell pt-12">
      <div className="section-container">
        <motion.div className="work-archive-intro" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <div><p className="project-meta">Archive / {String(projects.length).padStart(2, "0")} systems</p><p className="section-copy mt-3 max-w-2xl">A focused archive of product interfaces, platforms, and applied AI work. Each project is represented conservatively using the information available in the existing portfolio.</p></div>
          <motion.div className="work-archive-cue" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}><ArrowDown size={16} /><span>Scroll through the archive</span></motion.div>
        </motion.div>
        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => <ProjectShowcase key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
