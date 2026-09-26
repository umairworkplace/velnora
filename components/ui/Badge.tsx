export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "success" | "warning" | "danger" }) {
  const backgrounds = { neutral: "#f3f4f6", success: "#dcfce7", warning: "#fef3c7", danger: "#fee2e2" };
  return <span style={{ display: "inline-flex", padding: "4px 9px", borderRadius: 999, background: backgrounds[tone], fontSize: 12, fontWeight: 700 }}>{children}</span>;
}
