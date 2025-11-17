"use client";
import React from "react";
import { motion } from "framer-motion";

const sliderData = [
  {
    title: "Custom Web Applications",
    detail:
      "High-performance platforms crafted with React, Next.js & TypeScript.",
  },
  {
    title: "High-Impact Landing Experiences",
    detail: "Conversion-obsessed landing systems focused on measurable ROI.",
  },
  {
    title: "Full-Stack Development",
    detail: "Node.js, Python, and modern databases for scalability & security.",
  },
  {
    title: "Smart Automation Solutions",
    detail: "n8n + Python automation pipelines that save hours every week.",
  },
  {
    title: "Mobile App Development",
    detail: "React Native apps delivering native-grade experiences cross-platform.",
  },
  {
    title: "AI-Powered Chatbots & Integrations",
    detail: "Custom AI copilots integrated with your ops & data ecosystems.",
  },
];

const TextSlider: React.FC = () => {
  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs tracking-[0.4em] uppercase text-white/70"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Capabilities
          <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
        </motion.div>
        <motion.h2
          className="mt-6 max-w-4xl text-3xl md:text-5xl font-semibold leading-tight text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Precision-crafted experiences across web, mobile, automation, and AI.
        </motion.h2>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {[0, 1].map((rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex min-w-max gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: rowIndex % 2 === 0 ? ["0%", "-40%"] : ["-40%", "0%"] }}
            transition={{
              duration: 30 + rowIndex * 5,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...sliderData, ...sliderData].map((item, index) => (
              <motion.div
                key={`${item.title}-${rowIndex}-${index}`}
                className="group relative min-w-[280px] rounded-3xl border border-white/15 bg-white/5 px-8 py-6 text-white shadow-lg shadow-black/40 backdrop-blur"
                whileHover={{
                  borderColor: "rgba(255,255,255,0.5)",
                  y: -6,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                <div className="relative z-10 flex flex-col gap-3 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                    {String(index % sliderData.length + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TextSlider;
