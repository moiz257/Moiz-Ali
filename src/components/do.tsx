"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Target, Server, Bot, Smartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "Custom Web Applications",
    description: "Bespoke, high-performance web solutions engineered with modern frameworks like React, Next.js, and TypeScript, tailored to elevate your brand and user experience.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "High-Impact Landing Experiences",
    description: "Conversion-focused landing designs crafted for clarity, speed, and measurable business results.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Full-Stack Development",
    description: "Scalable backend systems built with Node.js and Python, designed for reliability, security, and long-term growth.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Smart Automation Solutions",
    description: "Intelligent automation workflows using n8n and Python, streamlining operations and reducing manual work through precision-built processes.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "Mobile App Development",
    description: "Modern, responsive, and smooth mobile applications developed with React Native, ensuring a seamless experience across all devices.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "AI-Powered Chatbots & Integrations",
    description: "Custom AI-driven chatbots and system integrations that enhance customer support and business efficiency.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const WhatIDoSection: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center mt-12 overflow-hidden">
      {/* Parallax BG image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30 blur-sm"
        style={{ backgroundImage: 'url("/moiz1.jpg")', backgroundAttachment: "fixed" }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 text-white">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false }}
          className="rounded-[32px] border border-white/12 bg-black/70 backdrop-blur-2xl p-8 md:p-14 shadow-2xl shadow-black/60"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.7)" }}
        >
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs tracking-[0.4em] uppercase text-white/70"
              whileHover={{ scale: 1.05 }}
            >
              What I Do
              <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
            </motion.div>

            <motion.h2
              className="mt-6 text-3xl md:text-5xl font-black leading-[1.1] tracking-tight max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: false }}
            >
              Building{" "}
              <span className="shimmer-text">immersive, high-precision</span>
              <br />
              <span className="text-white/60">digital products that blend</span>
              <br />
              creativity, technology &amp;{" "}
              <span className="gradient-text">measurable impact.</span>
            </motion.h2>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                whileHover={{ y: -8, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-6 md:p-7 shadow-xl shadow-black/40 card-shine cursor-default"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xl">
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    {/* Number */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-0.5 text-lg font-black uppercase tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="relative z-10 mt-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                  Explore
                  <span className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 text-xs">
                    ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
