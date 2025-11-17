"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Cards: React.FC = () => {
  const cards = [
    { number: 4380, text: "Hours of Work" },
    { number: 6, text: "Projects Done" },
    { number: 6, text: "Satisfied Customers" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-6 md:px-10 py-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 via-white/5 to-transparent p-6 md:p-8 text-center shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-3 hover:border-white/50 hover:shadow-white/30"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-sm font-semibold tracking-[0.3em] text-white/70">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              <CountUp
                start={0}
                end={card.number}
                duration={1.8}
                delay={0.2}
                separator=","
              />
            </h2>
            <p className="text-sm md:text-base font-medium uppercase tracking-wide text-white/70">
              {card.text}
            </p>
          </div>

          <motion.div
            className="relative z-10 mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.4em] text-white/60"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            viewport={{ once: true }}
          >
            Impact
            <span className="h-[1px] w-10 bg-gradient-to-r from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
