import type { ReactNode } from "react";

export default function StatusIndicator({ children = "Available for work" }: { children?: ReactNode }) {
  return (
    <span className="status-indicator">
      <span className="status-dot" aria-hidden="true" />
      {children}
    </span>
  );
}
