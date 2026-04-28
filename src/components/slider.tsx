"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Target, Server, Bot, Smartphone, Sparkles } from "lucide-react";

const sliderData = [
  { title: "Custom Web Applications", detail: "High-performance platforms — React, Next.js & TypeScript.", emoji: <Globe className="w-6 h-6 opacity-70" /> },
  { title: "High-Impact Landing Experiences", detail: "Conversion-obsessed landing systems. Measurable ROI.", emoji: <Target className="w-6 h-6 opacity-70" /> },
  { title: "Full-Stack Development", detail: "Node.js, Python, modern databases. Scalable & secure.", emoji: <Server className="w-6 h-6 opacity-70" /> },
  { title: "Smart Automation Solutions", detail: "n8n + Python automation pipelines. Save hours weekly.", emoji: <Bot className="w-6 h-6 opacity-70" /> },
  { title: "Mobile App Development", detail: "React Native — native-grade experiences cross-platform.", emoji: <Smartphone className="w-6 h-6 opacity-70" /> },
  { title: "AI-Powered Chatbots & Integrations", detail: "Custom AI copilots integrated with your ops & data.", emoji: <Sparkles className="w-6 h-6 opacity-70" /> },
];

const Row = ({ reverse = false, speed = 35 }: { reverse?: boolean; speed?: number }) => {
  const doubled = [...sliderData, ...sliderData, ...sliderData];
  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, idx) => (
          <motion.div
            key={`${item.title}-${idx}`}
            className="group relative min-w-[300px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/2 px-7 py-5 text-white shadow-xl shadow-black/40 overflow-hidden card-shine cursor-default"
            whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.4)", scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100 rounded-3xl" />

            <div className="relative z-10 flex items-start gap-3">
              <div className="mt-0.5 shrink-0 text-white flex items-center justify-center">{item.emoji}</div>
              <div>
                <h3 className="text-base font-black uppercase tracking-tight leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-xs text-white/55 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TextSlider: React.FC = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,_rgba(255,255,255,0.06),_transparent)]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 mb-14">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs tracking-[0.4em] uppercase text-white/70"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Capabilities
          <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
        </motion.div>

        <motion.h2
          className="mt-6 max-w-3xl text-3xl md:text-5xl font-black leading-[1.1] tracking-tight text-white"
          initial={{ y: 25, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: false }}
        >
          Precision-crafted experiences across{" "}
          <span className="shimmer-text">web, mobile,</span>{" "}
          <span className="gradient-text">automation, and AI.</span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl text-sm text-white/50 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false }}
        >
          Every project is a statement. Built to perform. Designed to impress.
        </motion.p>
      </div>

      {/* Two slider rows */}
      <div className="flex flex-col gap-5">
        <Row reverse={false} speed={35} />
        <Row reverse={true} speed={28} />
      </div>
    </section>
  );
};

export default TextSlider;
