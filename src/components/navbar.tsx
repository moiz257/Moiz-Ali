"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface NavbarProps {
  name: string;
  size: string;
}

const Navbar: React.FC<NavbarProps> = ({ name, size }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const opacity = useTransform(scrollY, [0, 80], [1, 0]);
  const y = useTransform(scrollY, [0, 80], [0, -20]);

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT ME", href: "/about" },
    { label: "WHAT I DO", href: "/what-i-do" },
    { label: "WORKS", href: "/works" },
    { label: "HIRE ME", href: "/contact" },
  ];

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setIsScrolled(v > 30));
    return unsub;
  }, [scrollY]);

  const letters = name.split("").map((ch, i) => (
    <motion.span
      key={i}
      className="inline-block"
      initial={{ opacity: 0, y: 80, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5 + i * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        color: "rgba(255,255,255,0.5)",
        transition: { duration: 0.2 },
      }}
    >
      {ch === " " ? "\u00A0" : ch}
    </motion.span>
  ));

  return (
    <>
      {/* ── Sticky Pill Nav ─────────────────────────────── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-4 left-1/2 z-[999] -translate-x-1/2"
            initial={{ y: -80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-4 py-2 shadow-2xl shadow-black/60 backdrop-blur-2xl">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-2 rounded-full bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero Header ─────────────────────────────────── */}
      <motion.header
        ref={containerRef}
        className="relative overflow-hidden bg-black text-white px-4 sm:px-8 lg:px-16 py-16 min-h-[55vh] flex flex-col justify-center"
        style={{ opacity, y }}
      >
        {/* Radial glow blobs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-white/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-white/8 blur-[80px] animate-float-slow" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-white/4 blur-[100px] animate-float" />

        {/* Orbiting ring */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-white/5 animate-spin-slow" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-white/3 animate-spin-reverse" />

        {/* Grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs tracking-[0.4em] uppercase text-white/70 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 animate-ping-slow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Your Next Level Digital Solutions
            <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
          </motion.div>

          {/* Name — split letter animation */}
          <h1
            className={`text-center font-black leading-none tracking-tighter text-white ${size} md:text-[9vw] perspective-[1000px]`}
            style={{ perspective: "1000px" }}
          >
            {letters}
          </h1>

          {/* Tagline */}
          <motion.p
            className="mx-auto max-w-2xl text-center text-sm sm:text-base text-white/50 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Designing immersive, performance-driven digital products for ambitious founders and teams.
          </motion.p>

          {/* Nav links */}
          <motion.nav
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                    i === links.length - 1
                      ? "border-white bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                      : "border-white/20 bg-white/5 text-white/70 hover:border-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                  {i !== links.length - 1 && (
                    <span className="h-[1px] w-4 bg-gradient-to-r from-white/40 to-transparent" />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Scroll indicator */}
          <motion.div
            className="flex flex-col items-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
