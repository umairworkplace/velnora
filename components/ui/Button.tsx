import type { ButtonHTMLAttributes } from "react";

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} style={{ border: 0, borderRadius: 10, padding: "11px 16px", background: "#111827", color: "white", fontWeight: 700, cursor: "pointer", ...(props.style ?? {}) }}>{children}</button>;
}
