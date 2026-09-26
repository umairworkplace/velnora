import type { ReactNode } from "react";

export function Panel({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 20 }}>
      {title ? <h2 style={{ margin: "0 0 16px", fontSize: 18 }}>{title}</h2> : null}
      {children}
    </section>
  );
}
