"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDribbble, FaInstagram } from "react-icons/fa6";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moiz-ali-20b280274/", icon: <FaLinkedinIn className="w-3.5 h-3.5" /> },
  { label: "GitHub", href: "https://github.com/moiz257", icon: <FaGithub className="w-3.5 h-3.5" /> },
  { label: "Dribbble", href: "https://dribbble.com", icon: <FaDribbble className="w-3.5 h-3.5" /> },
  { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram className="w-3.5 h-3.5" /> },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What I Do", href: "/what-i-do" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-black px-4 py-16 text-white sm:px-8 lg:px-16 overflow-hidden">
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Blob glows */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-white/4 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main CTA card */}
        <motion.div
          className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/6 via-white/3 to-transparent p-8 md:p-12 backdrop-blur-2xl shadow-2xl shadow-black/50 card-shine overflow-hidden"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.6)" }}
        >
          {/* Animated top shimmer */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Left side */}
            <div className="max-w-xl space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
                whileHover={{ scale: 1.05 }}
              >
                Let&apos;s Build
                <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
              </motion.div>

              <h2 className="text-3xl font-black leading-[1.1] tracking-tight md:text-5xl">
                Ready to launch{" "}
                <span className="shimmer-text">something bold?</span>
                <br />
                <span className="text-white/60 text-2xl md:text-3xl font-semibold">
                  Let&apos;s architect your next flagship product together.
                </span>
              </h2>

              <p className="text-sm text-white/50 leading-relaxed">
                Product design · Full-stack engineering · Automations · AI copilots · Performance-first mobile experiences.
              </p>

              {/* Social pills */}
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/10"
                  >
                    <span className="flex items-center justify-center">{social.icon}</span>
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side — contact card */}
            <motion.div
              className="flex flex-col items-start gap-5 rounded-3xl border border-white/12 bg-black/60 p-7 shadow-2xl shadow-black/60 min-w-[280px]"
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <p className="text-xs tracking-[0.35em] text-white/50 uppercase">Available Now</p>
              </div>

              <Link
                href="mailto:moizali2577@gmail.com"
                className="text-lg sm:text-xl font-bold text-white hover-line transition-all duration-300"
              >
                moizali2577@gmail.com
              </Link>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Book a Call
                  <span className="-rotate-45 text-sm">↗</span>
                </Link>
              </motion.div>

              <div className="w-full border-t border-white/10 pt-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">Avg. response · 24h</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom navigation + copyright */}
        <motion.div
          className="mt-10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-white/35 uppercase tracking-[0.3em]">
            © 2025 Moiz Ali Kamalshah. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors duration-300 hover-line"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
