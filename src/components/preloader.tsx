"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const phases = ["Calibrating interface", "Loading selected work", "Connecting the systems", "Ready to build"];

export default function Preloader() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    document.body.style.overflow = "hidden";

    const interval = window.setInterval(() => {
      setProgress((current) => Math.min(100, current + (current < 70 ? 7 : 3)));
    }, reducedMotion ? 100 : 90);
    const timeout = window.setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
      document.body.style.overflow = "";
    }, reducedMotion ? 900 : 1900);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [pathname, reducedMotion]);

  const phaseIndex = Math.min(3, Math.floor(progress / 26));

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="preloader"
          className="preloader-shell"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: reducedMotion ? 0.2 : 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="preloader-grid" aria-hidden="true" />
          <motion.div className="preloader-orb" animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} aria-hidden="true"><span /><span /><span /></motion.div>
          <div className="preloader-topline"><span>MOIZ / DIGITAL PRODUCT ENGINEER</span><span>001 — {new Date().getFullYear()}</span></div>

          <div className="preloader-core">
            <div className="preloader-mark" aria-label="Moiz Ali">
              <span>M</span><span>O</span><span>I</span><span>Z</span>
            </div>
            <p className="preloader-subtitle">FULL-STACK / AI / AUTOMATION</p>
            <div className="preloader-meter-wrap">
              <div className="preloader-meter" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><motion.div className="preloader-meter-fill" animate={{ width: `${progress}%` }} transition={{ duration: 0.18 }} /><motion.div className="preloader-meter-head" animate={{ left: `${progress}%` }} transition={{ duration: 0.18 }} /></div>
              <div className="preloader-meter-meta"><span>{phases[phaseIndex]}</span><strong>{String(Math.min(progress, 100)).padStart(3, "0")}%</strong></div>
            </div>
          </div>

          <div className="preloader-bottomline"><span>BUILD / SHIP / AUTOMATE</span><span className="preloader-pulse"><i /> System online</span></div>
          <motion.div className="preloader-sweep" initial={{ y: "100%" }} animate={{ y: progress > 92 ? "0%" : "100%" }} transition={{ duration: 0.5 }} aria-hidden="true" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
