"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Sparkles, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Technical Co-Founder & Partner",
    company: "UsNow",
    duration: "Present",
    description:
      "Partnered with Mark Smiley to architect and launch next-generation digital solutions. Leading the engineering vision, executing full-stack product development, and scaling our core operations through intelligent automation and AI integrations.",
    icon: <Sparkles className="w-5 h-5" />,
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "bg-blue-500",
  },
  {
    role: "Junior Software Engineer",
    company: "Instant Solutions Lab",
    duration: "Present",
    description:
      "Developing high-performance, robust web applications and automation pipelines. Contributing to complex front-end architectures using React and Next.js, while optimizing backend infrastructure for scalability.",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "bg-emerald-500",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black px-4 py-24 text-white sm:px-8 lg:px-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03),_transparent_70%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-16 md:gap-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs uppercase tracking-[0.4em] text-white/70"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Experience
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>

          <motion.h2
            className="mt-6 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            Building the future alongside{" "}
            <span className="shimmer-text">visionary teams.</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto w-full max-w-4xl">
          {/* Vertical connecting beam */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent hidden sm:block" />
          
          <div className="flex flex-col gap-12 sm:gap-20">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 md:gap-16 sm:justify-between w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty spacer for grid alignment on desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Connecting Node on Mobile & Desktop */}
                  <div className="absolute left-8 sm:left-1/2 -ml-3 sm:-ml-4 flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_0_15px_rgba(255,255,255,0.1)] z-10 transition-transform duration-500 hover:scale-125">
                    <div className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${exp.accent} animate-pulse`} />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    className="w-full sm:w-1/2 flex pl-16 sm:pl-0"
                    initial={{ opacity: 0, x: isEven ? 50 : -50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div
                      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br ${exp.color} p-7 md:p-9 shadow-2xl shadow-black/40 card-shine w-full`}
                      whileHover={{ y: -8 }}
                      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                    >
                      {/* Hover Shimmer Line */}
                      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      {/* Hover background blur glow */}
                      <div className="pointer-events-none absolute inset-0 bg-white/5 opacity-0 backdrop-blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        {/* Company Badge & Duration */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                            <Building2 className="w-3.5 h-3.5 text-white/70" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                              {exp.company}
                            </span>
                          </div>
                          
                          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                            {exp.duration}
                          </span>
                        </div>

                        {/* Role Title */}
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-4 leading-tight flex items-center justify-between">
                          {exp.role}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-white/60 leading-relaxed font-medium">
                          {exp.description}
                        </p>

                        {/* Decorative Bottom Corner Icon */}
                        <div className="absolute bottom-5 right-5 opacity-20 transition-all duration-500 group-hover:opacity-60 group-hover:rotate-12 group-hover:scale-110">
                           {exp.icon}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
