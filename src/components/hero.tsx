"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Moiz from "../../public/moiz1.jpg";
import React, { useRef } from "react";
import { Zap, Rocket, Bot } from "lucide-react";
import { ScrambleText } from "@/components/scrambleText";

const metrics = [
  { label: "Years Building", value: "08+", icon: <Zap className="w-5 h-5" /> },
  { label: "Products Launched", value: "40+", icon: <Rocket className="w-5 h-5" /> },
  { label: "Automation Hours Saved", value: "3K+", icon: <Bot className="w-5 h-5" /> },
];

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:px-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(255,255,255,0.08),_transparent)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-white/4 blur-[120px] animate-float-slow" />

      {/* Animated corner decorations */}
      <div className="pointer-events-none absolute top-6 right-6 text-white/10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" className="animate-spin-reverse" />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 flex flex-col gap-12 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 via-black/50 to-black/80 p-8 backdrop-blur-2xl md:flex-row md:items-center md:gap-10 noise-overlay card-shine"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.6)",
        }}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Animated border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[40px] overflow-hidden">
          <div className="absolute -top-1 left-[10%] h-[2px] w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          <div className="absolute -bottom-1 right-[10%] h-[2px] w-[30%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* LEFT — Text content */}
        <motion.div className="flex-1 space-y-7" variants={container}>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] uppercase text-white/70"
            variants={item}
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Available for Work
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>

          <motion.h1
            className="text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl cursor-default"
            variants={item}
          >
            <ScrambleText text="Crafting" />{" "}
            <span className="relative">
              <span className="shimmer-text"><ScrambleText text="bold digital" /></span>
            </span>{" "}
            <ScrambleText text="experiences across web, mobile & automation." />
          </motion.h1>

          <motion.p className="text-base text-white/60 leading-relaxed md:text-lg" variants={item}>
            I design and engineer product-grade interfaces, automation systems, and AI-driven
            touchpoints that move businesses forward with speed and precision.
          </motion.p>

          <motion.div className="flex flex-col gap-4 pt-2 sm:flex-row" variants={item}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:shadow-[0_12px_50px_rgba(255,255,255,0.4)]"
              >
                Start a Project
                <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics */}
          <motion.div className="grid grid-cols-3 gap-3 pt-2" variants={container}>
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-xl shadow-black/40 card-shine cursor-default"
                transition={{ delay: i * 0.1 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-lg mb-1">{metric.icon}</div>
                <div className="text-2xl font-black tracking-tight">{metric.value}</div>
                <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/50 uppercase mt-1 leading-tight">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Image with 3D tilt */}
        <motion.div
          className="flex-1"
          variants={item}
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="relative mx-auto max-w-md"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* Orbiting ring decoration */}
            <div className="absolute -inset-8 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute -inset-16 rounded-full border border-white/5 animate-spin-reverse" />

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 z-20 rounded-2xl border border-white/20 bg-black/80 px-3 py-2 backdrop-blur-xl shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                8+ Years
              </span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 z-20 rounded-2xl border border-white/20 bg-black/80 px-3 py-2 backdrop-blur-xl shadow-xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                40+ Projects
              </span>
            </motion.div>

            <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/5 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Glow layer on image */}
              <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
              <Image
                src={Moiz}
                alt="Moiz Ali"
                className="rounded-[32px] object-cover"
                width={700}
                height={800}
                priority
              />
              <div className="absolute inset-0 rounded-[40px] border border-white/10" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
