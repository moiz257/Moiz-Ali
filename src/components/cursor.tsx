"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "interactive" | "view";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const orbitX = useSpring(x, { stiffness: 170, damping: 24, mass: 0.55 });
  const orbitY = useSpring(y, { stiffness: 170, damping: 24, mass: 0.55 });
  const trailX = useSpring(x, { stiffness: 95, damping: 22, mass: 0.8 });
  const trailY = useSpring(y, { stiffness: 95, damping: 22, mass: 0.8 });
  const farTrailX = useSpring(x, { stiffness: 55, damping: 20, mass: 1 });
  const farTrailY = useSpring(y, { stiffness: 55, damping: 20, mass: 1 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-active");

    const getInteractiveElement = (target: EventTarget | null) => target instanceof Element
      ? target.closest<HTMLElement>("a, button, input, textarea, [data-cursor-label]")
      : null;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleOver = (event: PointerEvent) => {
      const element = getInteractiveElement(event.target);
      const insideProject = event.target instanceof Element && Boolean(event.target.closest(".project-showcase"));
      if (!element && !insideProject) {
        setMode("default");
        setLabel("");
        return;
      }
      const customLabel = element?.dataset.cursorLabel;
      const nextMode = customLabel === "VIEW" || insideProject ? "view" : "interactive";
      setMode(nextMode);
      setLabel(customLabel ?? (insideProject ? "VIEW" : element?.tagName === "INPUT" || element?.tagName === "TEXTAREA" ? "TYPE" : "OPEN"));
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });

    return () => {
      document.documentElement.classList.remove("cursor-active");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className={`cursor-trail cursor-trail-far ${visible ? "is-visible" : ""}`} style={{ x: farTrailX, y: farTrailY }} aria-hidden="true" />
      <motion.div className={`cursor-trail cursor-trail-near ${visible ? "is-visible" : ""}`} style={{ x: trailX, y: trailY }} aria-hidden="true" />
      <motion.div className={`cursor-radar ${visible ? "is-visible" : ""} cursor-${mode} ${pressed ? "is-pressed" : ""}`} style={{ x: orbitX, y: orbitY }} aria-hidden="true">
        <span className="cursor-radar-ring cursor-radar-ring-outer" />
        <span className="cursor-radar-ring cursor-radar-ring-inner" />
        <span className="cursor-radar-cross cursor-radar-cross-x" />
        <span className="cursor-radar-cross cursor-radar-cross-y" />
        <span className="cursor-radar-satellite cursor-radar-satellite-one" />
        <span className="cursor-radar-satellite cursor-radar-satellite-two" />
        {label ? <motion.span className="cursor-radar-label" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.18 }}>{label}</motion.span> : null}
        <span className="cursor-radar-core" />
      </motion.div>
    </>
  );
}
