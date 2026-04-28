"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Settings, Bot, BarChart } from "lucide-react";

const ContactForm: React.FC = () => {
  const fields = [
    { label: "Full Name", type: "text", placeholder: "Moiz Ali", name: "name" },
    { label: "Email", type: "email", placeholder: "hello@moizali.dev", name: "email" },
    { label: "Company", type: "text", placeholder: "Studio / Startup", name: "company" },
    { label: "Budget", type: "text", placeholder: "$10k – $50k", name: "budget" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to send message");
      }
      setStatus("success");
      setFeedback("Message sent! I'll reply within 24 hours. 🚀");
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative bg-black px-4 py-20 text-white sm:px-8 lg:px-16 overflow-hidden">
      {/* Glow blob */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(255,255,255,0.05),_transparent)]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70 w-fit">
            Contact
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          <h2 className="text-3xl font-black leading-[1.1] tracking-tight md:text-5xl">
            Share the vision,{" "}
            <span className="shimmer-text">we&apos;ll architect</span>
            <br />
            <span className="gradient-text">the product.</span>
          </h2>
          <p className="max-w-2xl text-sm text-white/55 leading-relaxed">
            Tell me about your roadmap, timeline, or that unfinished brief. I can help scope design systems,
            build multi-platform experiences, or automate the workflows around them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Left info panel */}
          <motion.div
            className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/6 to-white/2 p-7 shadow-2xl shadow-black/50 md:col-span-2 card-shine"
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}
          >
            <h3 className="text-lg font-black uppercase tracking-tight">Project Fit</h3>
            <ul className="mt-6 space-y-4">
              {[
                { icon: <Palette className="w-4 h-4" />, text: "Product design + front-end implementation" },
                { icon: <Settings className="w-4 h-4" />, text: "Full-stack apps & automation pipelines" },
                { icon: <Bot className="w-4 h-4" />, text: "AI copilots integrated with ops/data" },
                { icon: <BarChart className="w-4 h-4" />, text: "Fractional product/engineering support" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-white/65">
                  <span className="mt-0.5 shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3">
              <a
                href="mailto:moizali2577@gmail.com"
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors hover-line"
              >
                moizali2577@gmail.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                target="_blank"
              >
                Book a discovery call
                <span className="-rotate-45 text-xs">↗</span>
              </a>
            </div>

            {/* Decorative orb */}
            <div className="mt-8 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">Available for projects</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/6 to-white/2 p-7 shadow-2xl shadow-black/50 md:col-span-3 card-shine"
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.label} className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  {field.label}
                  <div className="relative">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.name === "name" || field.name === "email"}
                      className="w-full rounded-2xl border border-white/12 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all duration-300"
                      disabled={status === "loading"}
                    />
                    {focusedField === field.name && (
                      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    )}
                  </div>
                </label>
              ))}
            </div>

            <label className="mt-5 flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Project Details
              <div className="relative">
                <textarea
                  placeholder="What are we building together? Share your vision, goals, and timeline..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="h-36 w-full rounded-2xl border border-white/12 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all duration-300 resize-none"
                  disabled={status === "loading"}
                />
              </div>
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] disabled:opacity-60"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Brief
                    <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </motion.button>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Avg response · 24h</p>
            </div>

            {/* Feedback */}
            <AnimatePresence>
              {feedback && (
                <motion.p
                  className={`mt-4 text-sm font-medium ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  aria-live="polite"
                >
                  {feedback}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
