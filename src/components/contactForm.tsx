"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const fields = [
    { label: "Full Name", type: "text", placeholder: "Moiz Ali", name: "name" },
    {
      label: "Email",
      type: "email",
      placeholder: "hello@moizali.dev",
      name: "email",
    },
    {
      label: "Company",
      type: "text",
      placeholder: "Studio / Startup",
      name: "company",
    },
    {
      label: "Budget",
      type: "text",
      placeholder: "$10k - $50k",
      name: "budget",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      setFeedback("Message sent! I’ll reply within 24 hours.");
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="relative bg-black px-4 py-20 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_70%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
            Contact
            <span className="h-[1px] w-8 bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Share the vision, we&apos;ll architect the product.
          </h2>
          <p className="max-w-3xl text-white/70">
            Tell me about your roadmap, timeline, or even that unfinished brief. I
            can help scope design systems, build multi-platform experiences, or
            automate the workflows around them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.div
            className="rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-2xl shadow-black/40 md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold">Project Fit</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>• Product design + front-end implementation</li>
              <li>• Full-stack apps & automation pipelines</li>
              <li>• AI copilots integrated with ops/data</li>
              <li>• Fractional product/engineering support</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/60">
              <a href="mailto:moizali2577@gmail.com" className="underline">
                moizali2577@gmail.com
              </a>
              <a href="https://cal.com" target="_blank">
                Book a discovery call ↗
              </a>
            </div>
          </motion.div>

          <motion.form
            className="rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-2xl shadow-black/40 md:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.label} className="text-sm text-white/60">
                  {field.label}
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.name === "name" || field.name === "email"}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                    disabled={status === "loading"}
                  />
                </label>
              ))}
            </div>

            <label className="mt-6 block text-sm text-white/60">
              Project Details
              <textarea
                placeholder="What are we building together?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 h-40 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                disabled={status === "loading"}
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)]"
              >
                {status === "loading" ? "Sending..." : "Send Brief"}
              </button>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Avg response time · 24h
              </p>
            </div>

            {feedback && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-emerald-400" : "text-red-400"
                }`}
                aria-live="polite"
              >
                {feedback}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
