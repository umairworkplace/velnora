import { dashboardMetrics } from "@/lib/domain/analytics";

export function MetricGrid() {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>{dashboardMetrics.map((metric) => <article key={metric.label} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 14, padding: 18 }}><div style={{ color: "#6b7280", fontSize: 13 }}>{metric.label}</div><strong style={{ display: "block", fontSize: 26, margin: "8px 0" }}>{metric.value}</strong><small style={{ color: metric.trend === "down" ? "#b91c1c" : "#15803d" }}>{metric.change}</small></article>)}</div>;
}
