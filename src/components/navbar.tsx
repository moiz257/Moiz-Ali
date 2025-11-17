"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

interface NavbarProps {
  name: string; // Name as a prop
  size: string; // Size as a prop
}

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -50 }, // Hidden state: above the screen
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Duration of the animation
      staggerChildren: 0.2, // Stagger effect for children elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Navbar: React.FC<NavbarProps> = ({ name, size }) => {
  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT ME", href: "/about" },
    { label: "WHAT I DO", href: "/what-i-do" },
    { label: "WORKS", href: "/works" },
    { label: "HIRE ME", href: "/contact" },
  ];

  return (
    <motion.header
      className="relative overflow-hidden bg-black text-white px-4 sm:px-8 lg:px-16 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-60" />
      <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative z-10 mx-auto flex items-center justify-center max-w-6xl flex-col gap-8">
        <motion.div
          className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs tracking-[0.4em] uppercase text-white/70"
          variants={itemVariants}
        >
          Your
          <span className="h-[1px] w-10 bg-gradient-to-r from-white/60 to-transparent" />
          Next Level Digital Solutions
        </motion.div>

        <motion.h1
          className={`text-center font-semibold leading-tight tracking-tighter text-white ${size} md:text-[9vw]`}
          variants={itemVariants}
        >
          {name}
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-center text-sm sm:text-base text-white/65"
          variants={itemVariants}
        >
          Designing immersive, performance-driven digital products for ambitious
          founders and teams.
        </motion.p>

        <motion.nav
          className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center"
          variants={containerVariants}
        >
          {links.map((link, idx) => (
            <motion.div
              key={link.label}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group"
            >
              <Link
                href={link.href}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition-all duration-300 group-hover:border-white/60 group-hover:text-white"
              >
                {link.label}
                <span className="h-[1px] w-4 bg-gradient-to-r from-white/40 to-transparent" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
