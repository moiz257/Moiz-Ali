"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p className="section-eyebrow" initial={{ letterSpacing: "0.05em" }} whileInView={{ letterSpacing: "0.2em" }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{eyebrow}</motion.p>
      <h2 className="section-title mt-5">{title}</h2>
      {description ? <p className="section-copy mt-5 max-w-2xl">{description}</p> : null}
    </motion.div>
  );
}
