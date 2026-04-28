"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Preloader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    // Lock scroll during loading
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Fake progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      setProgress(100);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [pathname]);

  const name = "MOIZ ALI KAMALSHAH";

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
          }}
        >
          {/* Background subtle pulse */}
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* The Name Animation */}
            <div className="overflow-hidden mb-6 flex">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.04,
                  }}
                >
                  {char === " " ? "\u00A0\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Percentage Text */}
            <motion.div
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-white/50 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(progress, 100)}%
            </motion.div>

            {/* Loading Line */}
            <div className="relative w-64 md:w-96 h-[1px] bg-white/10 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
              {/* Glow on the head of the loading line */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-[4px] w-[20px] bg-white rounded-full blur-[4px]"
                initial={{ left: "0%" }}
                animate={{ left: `${Math.min(progress, 100)}%` }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                style={{ transform: "translate(-50%, -50%)" }}
              />
            </div>
          </div>
          
          {/* A cool sweep effect before exit */}
          <motion.div
             className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-white/10 to-transparent"
             initial={{ y: "100%" }}
             exit={{ y: 0, opacity: 0 }}
             transition={{ duration: 0.8, ease: "easeIn" }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
