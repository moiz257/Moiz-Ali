"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-x-20 bg-black text-white tracking-normal p-6 md:p-16 md:flex-row md:justify-between overflow-hidden my-8">
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-white/4 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/3 blur-[80px] animate-float" />

      {/* Animated grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Outer glow border */}
      <motion.div
        className="absolute inset-0 rounded-[32px] mx-4 md:mx-8 md:my-4 border border-white/8"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false }}
      />

      {/* Left column */}
      <motion.div
        className="relative z-10 flex flex-col mb-10 md:w-[22%] shrink-0"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false }}
      >
        {/* Section badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] uppercase text-white/70 w-fit"
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          About
          <span className="h-[1px] w-6 bg-gradient-to-r from-white/60 to-transparent" />
        </motion.div>

        {/* Name */}
        <h2 className="mt-6 text-2xl font-black tracking-tight">Moiz Ali</h2>
        <p className="text-[10px] text-white/50 uppercase tracking-[0.35em] mt-1">
          Builder • Designer • Automator
        </p>

        {/* Vertical line */}
        <motion.div
          className="mt-8 h-20 w-[1px] bg-gradient-to-b from-white/30 to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        />

        {/* Social pill stack */}
        <div className="mt-4 flex flex-col gap-2">
          {["React", "Next.js", "Python", "n8n"].map((skill, i) => (
            <motion.div
              key={skill}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              viewport={{ once: false }}
              whileHover={{ borderColor: "rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.9)" }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right column */}
      <div className="relative z-10 flex flex-col md:w-full md:pl-8">
        {/* Big heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight"
          initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false }}
        >
          <span className="shimmer-text">TRANSFORMING YOUR VISION</span>
          <br />
          <span className="text-white/70">INTO A DYNAMIC WEB EXPERIENCE</span>
          <br />
          <span className="gradient-text">THROUGH METICULOUSLY CRAFTED</span>
          <br />
          <span className="text-white/40">DESIGNS &amp; ROBUST FUNCTIONALITY.</span>
        </motion.h1>

        {/* Two info cards */}
        <div className="mt-10 flex flex-col md:flex-row gap-5">
          {[
            {
              text: "Hi there! I'm Moiz Ali, a software engineer specializing in building modern web apps, mobile apps, and smart automation solutions. I focus on creating fast, functional, and scalable digital experiences using React, React Native, Python, Node.js, and n8n. My work turns complex ideas into clean, efficient systems that help businesses grow and perform better.",
              delay: 0,
            },
            {
              text: "Crafting technology with intention and excellence, I create sophisticated digital solutions using React, React Native, Python, Node.js, and n8n automation. From seamless web and mobile applications to intelligent automation systems and AI-driven chatbots, I deliver refined, scalable, and future-focused products designed to elevate your business performance.",
              delay: 0.1,
            },
          ].map((para, i) => (
            <motion.div
              key={i}
              className="group relative md:w-1/2 rounded-3xl border border-white/10 bg-white/4 p-6 md:p-8 shadow-2xl shadow-black/40 card-shine overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: para.delay }}
              viewport={{ once: false }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-5xl leading-none text-white/5 font-black select-none">
                &ldquo;
              </div>
              <p className="relative z-10 text-base text-white/65 leading-relaxed">{para.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          className="mt-8 flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Work Together
            <svg className="w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Based in Pakistan · Available worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
