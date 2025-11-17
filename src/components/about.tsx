"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="relative flex flex-col h-full gap-x-20 bg-black text-white tracking-normal p-6 md:p-16 md:flex-row md:justify-between sm:mb-12 sm:mt-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-40 blur-3xl" />
      <motion.div
        className="absolute inset-0 border border-white/10 rounded-[32px] mx-4 md:mx-10 my-4 md:my-6"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 flex flex-col mb-8 font-bold text-white/90 md:w-1/6"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] uppercase text-white/70"
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
        >
          About
          <span className="h-[1px] w-6 bg-gradient-to-r from-white/60 to-transparent" />
        </motion.div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          Moiz Ali
        </h2>
        <p className="text-sm text-white/60 uppercase tracking-[0.3em]">
          Builder • Designer • Automator
        </p>
      </motion.div>

      <div className="relative z-10 flex flex-col md:w-full">
        <motion.h1
          className="text-3xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ letterSpacing: "0.03em" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          TRANSFORMING YOUR VISION INTO A DYNAMIC WEB EXPERIENCE THROUGH
          METICULOUSLY CRAFTED DESIGNS, INTUITIVE USER INTERFACES, AND ROBUST
          FUNCTIONALITY.
        </motion.h1>

        <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-8">
          <motion.div
            className="relative md:w-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-base md:text-lg text-white/70 shadow-2xl shadow-black/40"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.4)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-300 hover:opacity-70" />
            <p className="relative z-10 leading-relaxed">
              Hi there! I&apos;m Moiz Ali, a software engineer specializing in
              building modern web apps, mobile apps, and smart automation
              solutions. I focus on creating fast, functional, and scalable
              digital experiences using React, React Native, Python, Node.js, and
              n8n. My work turns complex ideas into clean, efficient systems that
              help businesses grow and perform better.
            </p>
          </motion.div>

          <motion.div
            className="relative md:w-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-base md:text-lg text-white/70 shadow-2xl shadow-black/40"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.4)" }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: false }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-300 hover:opacity-70" />
            <p className="relative z-10 leading-relaxed">
              Crafting technology with intention and excellence, I create
              sophisticated digital solutions using React, React Native, Python,
              Node.js, and n8n automation. From seamless web and mobile
              applications to intelligent automation systems and AI-driven
              chatbots, I deliver refined, scalable, and future-focused products
              designed to elevate your business performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

