"use client";

import { ReactLenis } from "lenis/react"; // Assuming @studio-freight/react-lenis resolves to this import based on latest versions, or we can use the default export
import React from "react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
