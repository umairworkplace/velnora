import type { ReactNode } from "react";

export function VelnoraShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fb" }}>
      <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "18px 6vw" }}>
        <strong style={{ letterSpacing: "-0.04em", fontSize: 22 }}>VELNORA</strong>
      </header>
      {children}
    </div>
  );
}
