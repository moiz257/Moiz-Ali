"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import StatusIndicator from "@/components/statusIndicator";

interface NavbarProps {
  name: string;
  size?: string;
}

const links = [
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
  { label: "What I Do", href: "/what-i-do" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ name }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <>
      <motion.header className="site-nav" initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <div className="site-nav-inner">
          <Link href="/" className="site-logo" aria-label="Moiz Ali home">MOIZ ALI</Link>
          <motion.nav className="site-nav-links" aria-label="Primary navigation">
            {links.map((link, index) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.06 }}>
                <Link href={link.href} className={`site-nav-link ${pathname === link.href ? "text-white" : ""}`}>
                {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <div className="hidden items-center gap-4 md:flex">
            <StatusIndicator />
            <Link href="/contact" className="site-nav-cta">Let&apos;s talk</Link>
          </div>
          <button type="button" className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <motion.nav className="mobile-menu md:hidden" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.25 }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="site-nav-link" onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <div className="mt-2"><StatusIndicator /></div>
          </motion.nav>
        ) : null}
      </motion.header>
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
