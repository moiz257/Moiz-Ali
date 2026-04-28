"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Apply cursor-none to body client-side only to avoid SSR mismatch
  useEffect(() => {
    if (window.innerWidth >= 768) {
      document.body.style.cursor = "none";
      setIsVisible(true);
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    let ringX = -100;
    let ringY = -100;
    let rafId: number;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      ringX += (pos.x - ringX) * 0.12;
      ringY += (pos.y - ringY) * 0.12;
      setRing({ x: ringX, y: ringY });
      rafId = requestAnimationFrame(animate);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const textCursorEl = target.closest("[data-cursor-text]") as HTMLElement;
      if (textCursorEl) {
        setIsHovering(true);
        setCursorText(textCursorEl.getAttribute("data-cursor-text") || "");
        return;
      }

      const hoverable = target.closest("a, button, [data-cursor='pointer']");
      if (hoverable) {
        setIsHovering(true);
        setCursorText("");
        return;
      }

      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkHover);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkHover);
      cancelAnimationFrame(rafId);
    };
  }, [pos.x, pos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-[99999] mix-blend-difference"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-white"
          animate={{ scale: isHovering ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Ring / Bubble */}
      <div
        className={`fixed pointer-events-none z-[99998] transition-colors duration-300 flex items-center justify-center font-bold tracking-widest text-black text-[10px] ${
          cursorText ? "bg-white" : "mix-blend-difference"
        }`}
        style={{
          left: ring.x - (cursorText ? 40 : isHovering ? 24 : 18),
          top: ring.y - (cursorText ? 40 : isHovering ? 24 : 18),
        }}
      >
        <motion.div
          className={`rounded-full border border-white flex items-center justify-center overflow-hidden`}
          animate={{
            width: cursorText ? 80 : isHovering ? 48 : 36,
            height: cursorText ? 80 : isHovering ? 48 : 36,
            opacity: cursorText ? 1 : isHovering ? 0.8 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <AnimatePresence>
              {cursorText && (
                <motion.span
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.5 }}
                   className="whitespace-nowrap"
                >
                  {cursorText}
                </motion.span>
              )}
            </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default CustomCursor;
