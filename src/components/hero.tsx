"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import StatusIndicator from "@/components/statusIndicator";

const proof = [
  ["08+", "Years building"],
  ["40+", "Products launched"],
  ["3K+", "Automation hours saved"],
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });
  const contentY = useTransform(progress, [0, 0.72, 1], [0, 0, -90]);
  const contentOpacity = useTransform(progress, [0, 0.58, 0.9], [1, 1, 0]);
  const imageScale = useTransform(progress, [0, 0.75, 1], [1.08, 1.16, 1.24]);
  const imageY = useTransform(progress, [0, 1], [18, -26]);
  const imageX = useTransform(progress, [0, 1], [0, -22]);
  const lineScale = useTransform(progress, [0.05, 0.62], [0, 1]);
  const railScale = useTransform(progress, [0.04, 0.9], [0, 1]);
  const scanlineY = useTransform(progress, [0, 1], ["-10%", "110%"]);
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.45, 0.12, 0]);

  return (
    <section ref={sectionRef} className="hero-redesign">
      <div className="hero-stage">
        <div className="hero-background-scene" aria-hidden="true">
          <motion.div className="hero-background-image-wrap" style={{ scale: imageScale, x: imageX, y: imageY }}>
            <Image
              src="/moiz-ali-hero.jpeg"
              alt=""
              fill
              priority
              className="hero-background-image"
              sizes="100vw"
            />
          </motion.div>
          <div className="hero-background-tint" />
          <div className="hero-background-grid" />
          <motion.div className="hero-background-glow" style={{ opacity: glowOpacity }} />
          <motion.div className="hero-background-scanline" style={{ y: scanlineY }} />
          <div className="hero-background-vignette" />
        </div>

        <motion.div className="hero-signal-rail" style={{ scaleY: railScale }} aria-hidden="true">
          <span>SCROLL / 001</span><i /><span>IDEA / SHIP</span>
        </motion.div>

        <div className="hero-grid">
          <motion.div className="hero-content-overlay" style={{ y: contentY, opacity: contentOpacity }}>
            <StatusIndicator />
            <p className="hero-kicker mt-8">Full-stack developer <span className="mx-2 text-white/25">x</span> AI automation</p>
            <h1 className="hero-title">I build software that <span className="accent">solves</span> real business problems.</h1>
            <motion.div className="hero-accent-line" style={{ scaleX: lineScale }} aria-hidden="true" />
            <p className="hero-copy">Full-stack applications, AI-powered products, mobile apps, and business automation - from idea to production.</p>
            <div className="hero-actions">
              <Link href="/works" className="button-primary">View my work <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="button-secondary">Let&apos;s build something <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero-proof" aria-label="Portfolio highlights">
              {proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-scroll-cue" style={{ opacity: contentOpacity }}>
          <ArrowDownRight size={14} className="text-[var(--accent)]" />
          <span>Scroll to explore</span>
        </motion.div>
        <div className="hero-frame-mark hero-frame-mark-top" aria-hidden="true" />
        <div className="hero-frame-mark hero-frame-mark-bottom" aria-hidden="true" />
      </div>
    </section>
  );
}
