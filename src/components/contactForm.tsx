"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type FormData = { name: string; email: string; company: string; budget: string; message: string };
const initialForm: FormData = { name: "", email: "", company: "", budget: "", message: "" };
const fields: { label: string; name: keyof FormData; type: string; placeholder: string; required?: boolean }[] = [
  { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
  { label: "Email", name: "email", type: "email", placeholder: "you@company.com", required: true },
  { label: "Company", name: "company", type: "text", placeholder: "Company or team" },
  { label: "Budget", name: "budget", type: "text", placeholder: "Optional range" },
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.2 });
  const infoY = useTransform(progress, [0, 0.5, 1], [35, 0, -25]);
  const formY = useTransform(progress, [0, 0.5, 1], [65, 0, -35]);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (name: keyof FormData, value: string) => setFormData((current) => ({ ...current, [name]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Unable to send your message.");
      setStatus("success");
      setFeedback("Message sent. I’ll get back to you within 24 hours.");
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section ref={sectionRef} className="section-shell contact-section pt-12">
      <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div style={{ y: infoY }}>
          <p className="section-copy max-w-md text-xl">Have a product, workflow, or problem worth building around? Send the brief and I&apos;ll help turn it into a clear next step.</p>
          <div className="mt-10 border-t border-white/10 pt-5">
            <p className="project-meta">Direct email</p>
            <a href="mailto:moizali2577@gmail.com" className="mt-3 block text-lg text-white hover:text-[var(--accent)]">moizali2577@gmail.com</a>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="project-meta">Good fit for</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">Full-stack products, AI-enabled workflows, internal tools, mobile experiences, and automation projects.</p>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} style={{ y: formY }} className="contact-form-shell rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                {field.label}
                <input type={field.type} name={field.name} value={formData[field.name]} onChange={(event) => updateField(field.name, event.target.value)} placeholder={field.placeholder} required={field.required} disabled={status === "loading"} className="min-h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-sm font-normal tracking-normal text-white placeholder:text-white/25 disabled:opacity-50" />
              </label>
            ))}
          </div>
          <label className="mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Project details
            <textarea name="message" value={formData.message} onChange={(event) => updateField("message", event.target.value)} placeholder="What are you building, and what would a useful first milestone look like?" required disabled={status === "loading"} className="min-h-40 resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-normal leading-relaxed tracking-normal text-white placeholder:text-white/25 disabled:opacity-50" />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === "loading"} className="button-primary disabled:cursor-wait disabled:opacity-50">
              {status === "loading" ? "Sending…" : "Send brief"}<ArrowUpRight size={16} />
            </button>
            <span className="text-xs uppercase tracking-[0.14em] text-white/35">Average response · 24h</span>
          </div>
          <p role="status" aria-live="polite" className={`mt-5 text-sm ${status === "success" ? "text-[var(--accent)]" : status === "error" ? "text-red-300" : "text-white/50"}`}>{feedback}</p>
        </motion.form>
      </div>
    </section>
  );
}
