"use client";
import React from 'react';
import { motion } from 'framer-motion'; 

const WhatIDoSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10, borderColor: "rgba(255,255,255,0.5)" },
  };

  const services = [
    {
      title: "Custom Web Applications",
      description:
        "Bespoke, high-performance web solutions engineered with modern frameworks like React, Next.js, and TypeScript, tailored to elevate your brand and user experience.",
    },
    {
      title: "High-Impact Landing Experiences",
      description:
        "Conversion-focused landing designs crafted for clarity, speed, and measurable business results.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Scalable backend systems built with Node.js and Python, designed for reliability, security, and long-term growth.",
    },
    {
      title: "Smart Automation Solutions",
      description:
        "Intelligent automation workflows using n8n and Python, streamlining operations and reducing manual work through precision-built processes.",
    },
    {
      title: "Mobile App Development",
      description:
        "Modern, responsive, and smooth mobile applications developed with React Native, ensuring a seamless experience across all devices.",
    },
    {
      title: "AI-Powered Chatbots & Integrations",
      description:
        "Custom AI-driven chatbots and system integrations that enhance customer support and business efficiency.",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center mt-24 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100 blur-sm"
        style={{
          backgroundImage: 'url("/moiz1.jpg")',
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[32px] border border-white/15 bg-black/60 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/50"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs tracking-[0.4em] uppercase text-white/70">
              What I Do
              <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
            </div>
            <motion.h2
              className="mt-6 text-3xl md:text-5xl font-semibold leading-tight max-w-4xl bg-gradient-to-r from-white via-white/85 to-white/60 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Building immersive, high-precision digital products that blend
              creativity, technology, and measurable impact.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:shadow-white/20"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold tracking-[0.3em] text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base font-medium text-white/65 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-white/40 to-transparent" />
                  Explore
                  <span className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
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
