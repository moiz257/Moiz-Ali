"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Moiz from "../../public/moiz1.jpg";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
  const metrics = [
    { label: "Years Building", value: "08+" },
    { label: "Products Launched", value: "40+" },
    { label: "Automation Hours Saved", value: "3K+" },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <motion.div
        className="relative z-10 flex flex-col gap-12 rounded-[40px] border border-white/10 bg-black/70 p-8 backdrop-blur-xl md:flex-row md:items-center md:gap-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="flex-1 space-y-6" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] uppercase text-white/70"
            variants={itemVariants}
          >
            Available for Work
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>

          <motion.h1
            className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Crafting bold digital experiences across web, mobile, and automation.
          </motion.h1>
          <motion.p
            className="text-base text-white/70 md:text-lg"
            variants={itemVariants}
          >
            I design and engineer product-grade interfaces, automation systems, and
            AI-driven touchpoints that move businesses forward with speed and
            precision.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 pt-4 sm:flex-row"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)]"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3"
            variants={itemVariants}
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-lg shadow-black/40"
              >
                <div className="text-2xl font-semibold">{metric.value}</div>
                <p className="text-[10px] sm:text-xs tracking-[0.3em] text-white/60 uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-6 top-6 h-24 w-24 rounded-full border border-white/20" />
            <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full border border-white/10" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/5 p-4 shadow-2xl shadow-black/50">
              <Image
                src={Moiz}
                alt="Moiz Ali"
                className="rounded-[30px]"
                width={700}
                height={800}
                priority
              />
              <div className="absolute inset-0 rounded-[40px] border border-white/10" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
