"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StatusIndicator from "@/components/statusIndicator";

interface NavbarProps {
  name: string;
  size?: string;
}

const links = [
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/what-i-do" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ name }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <motion.header className="site-nav" initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <div className="site-nav-inner">
          <Link href="/" className="site-logo brand-lockup" aria-label="Moiz Ali home" data-cursor-label="HOME">
            <span className="brand-mark" aria-hidden="true"><i>M</i><i>A</i><b /></span>
            <span className="brand-wordmark"><b>MOIZ</b><em>ALI</em></span>
            <span className="brand-status" aria-hidden="true" />
          </Link>
          <motion.nav className="site-nav-links" aria-label="Primary navigation">
            {links.map((link, index) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.06 }}>
                <Link href={link.href} data-cursor-label={link.label.toUpperCase()} className={`site-nav-link ${pathname === link.href ? "text-white" : ""}`}>
                {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <div className="hidden items-center gap-4 md:flex">
            <StatusIndicator />
            <Link href="/contact" data-cursor-label="HIRE" className="site-nav-cta">Let&apos;s talk</Link>
          </div>
          <motion.button type="button" className={`mobile-menu-button ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" data-cursor-label={open ? "CLOSE" : "MENU"} onClick={() => setOpen((value) => !value)} whileTap={{ scale: 0.9 }}>
            <span className="mobile-menu-button-orbit" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? "close" : "menu"} initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open ? (
          <motion.div className="mobile-menu-overlay md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={() => setOpen(false)}>
            <div className="mobile-menu-grid" aria-hidden="true" />
            <motion.div className="mobile-menu-orbit" initial={{ scale: 0.4, rotate: -45, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 1.25, rotate: 45, opacity: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true" />
            <nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Mobile navigation" aria-modal="true" role="dialog" onClick={(event) => event.stopPropagation()}>
              <div className="mobile-menu-meta"><span>MOIZ ALI / MENU</span><span>00{links.length}</span></div>
              <div className="mobile-menu-links">
                {links.map((link, index) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ delay: 0.08 + index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                    <Link href={link.href} data-cursor-label={link.label.toUpperCase()} className={`mobile-menu-link ${pathname === link.href ? "is-active" : ""}`} onClick={() => setOpen(false)}>
                      <span className="mobile-menu-link-number">0{index + 1}</span>
                      <span>{link.label}</span>
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div className="mobile-menu-bottom" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}><StatusIndicator /><span>Press ESC to close</span></motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!isHome ? (
        <motion.div className="page-masthead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="page-masthead-inner">
            <motion.p className="section-eyebrow" initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }}>Moiz Ali / {name.toLowerCase()}</motion.p>
            <motion.h1 initial={{ y: 50, opacity: 0, filter: "blur(12px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>{name}</motion.h1>
            <motion.p initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>Full-stack development, AI-powered products, mobile applications, and business automation built for real-world use.</motion.p>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
