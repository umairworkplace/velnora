import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <section style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 20 }}>{children}</section>;
}
