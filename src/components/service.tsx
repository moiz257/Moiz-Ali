"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceItem = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      variants={itemVariant}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition-all duration-300 shadow-lg shadow-black/40 hover:border-white/40 hover:shadow-white/20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60" />

      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg font-bold text-white/80">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="text-xl font-semibold uppercase tracking-tight">
          {title}
        </h3>
      </div>

      <p className="relative z-10 mt-4 text-base font-medium text-white/60 leading-relaxed">
        {description}
      </p>

      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-white/70">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
        Explore
        <span className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  const containerVariant = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
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
    <section className="min-h-screen flex md:justify-center md:items-center bg-black text-white md:p-28">
      <motion.div
        className="container px-6 md:px-0 grid grid-cols-1 md:w-[80%] md:grid-cols-2 gap-6 md:gap-8"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesPage;
