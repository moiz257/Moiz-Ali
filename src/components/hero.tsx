"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Moiz from "../../public/moiz1.jpg";
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
  const imageScale = useTransform(progress, [0, 0.75, 1], [1.08, 1, 0.92]);
  const imageY = useTransform(progress, [0, 1], [20, -40]);
  const imageRotate = useTransform(progress, [0, 1], [-1.5, 1.5]);
  const lineScale = useTransform(progress, [0.05, 0.62], [0, 1]);

  return (
    <section ref={sectionRef} className="hero-redesign">
      <div className="hero-stage">
        <div className="hero-grid">
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            <StatusIndicator />
            <p className="hero-kicker mt-8">Full-stack developer <span className="mx-2 text-white/25">×</span> AI automation</p>
            <h1 className="hero-title">I build software that <span className="accent">solves</span> real business problems.</h1>
            <motion.div className="hero-accent-line" style={{ scaleX: lineScale }} aria-hidden="true" />
            <p className="hero-copy">Full-stack applications, AI-powered products, mobile apps, and business automation — from idea to production.</p>
            <div className="hero-actions">
              <Link href="/works" className="button-primary">View my work <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="button-secondary">Let&apos;s build something <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero-proof" aria-label="Portfolio highlights">
              {proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </motion.div>

          <motion.div className="hero-image-wrap" style={{ scale: imageScale, y: imageY, rotate: imageRotate }}>
            <Image src={Moiz} alt="Moiz Ali, full-stack developer" priority className="hero-image" width={700} height={800} />
            <div className="absolute -bottom-5 left-5 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-4 py-2 text-xs text-white/65 backdrop-blur-md">
              <ArrowDownRight size={14} className="text-[var(--accent)]" />
              Scroll to explore
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
