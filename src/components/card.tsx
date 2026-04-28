"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Timer, Target, Star } from "lucide-react";

const cards = [
  { number: 4380, suffix: "+", text: "Hours of Work", icon: <Timer className="w-6 h-6" />, detail: "Dedicated craft" },
  { number: 40, suffix: "+", text: "Projects Done", icon: <Target className="w-6 h-6" />, detail: "Across 8 years" },
  { number: 100, suffix: "%", text: "Client Satisfaction", icon: <Star className="w-6 h-6" />, detail: "Zero compromise" },
];

// Animated counter using framer-motion (no external CountUp dependency issues)
const AnimatedNumber = ({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000; // ms
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <span ref={ref}>
      {displayed.toLocaleString()}
      <span className="text-white/50">{suffix}</span>
    </span>
  );
};

const Cards: React.FC = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/8 via-white/4 to-transparent p-7 shadow-2xl shadow-black/50 card-shine cursor-default"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 rounded-[28px]" />

            {/* Top shimmer line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              {/* Icon + detail row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xl">
                  {card.icon}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-1">
                  {card.detail}
                </div>
              </div>

              {/* Big number */}
              <div className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                <AnimatedNumber value={card.number} suffix={card.suffix} delay={0.4 + index * 0.2} />
              </div>

              {/* Label */}
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/55">
                {card.text}
              </p>

              {/* Bottom divider */}
              <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                Impact
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
