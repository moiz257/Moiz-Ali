"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moiz-ali-20b280274/" },
  { label: "GitHub", href: "https://github.com/moiz257" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-black px-4 py-12 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl shadow-black/40">
        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
              Let&apos;s Build
              <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Ready to launch something bold? Let&apos;s architect your next
              flagship product together.
            </h2>
            <p className="text-white/60">
              Product design, full-stack engineering, automations, AI copilots, and
              performance-first mobile experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition-all duration-300 hover:border-white hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <motion.div
            className="flex flex-col items-start gap-4 rounded-[28px] border border-white/15 bg-black/60 p-6 text-left shadow-xl shadow-black/50 md:text-right"
            whileHover={{ y: -6 }}
          >
            <p className="text-sm tracking-[0.3em] text-white/60 uppercase">
              Let&apos;s Talk
            </p>
            <Link
              href="mailto:moizali2577@gmail.com"
              className="text-lg sm:text-2xl font-semibold text-white underline-offset-4 hover:underline"
            >
              moizali2577@gmail.com
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white"
            >
              Book a Call
              <span className="ml-3 rotate-[-45deg]">↗</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Moiz Ali Kamalshah. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.3em]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Careers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
