export function MetricCard({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <article style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 20 }}>
      <div style={{ color: "#6b7280", fontSize: 13 }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>{value}</div>
      {detail ? <div style={{ color: "#6b7280", marginTop: 6, fontSize: 13 }}>{detail}</div> : null}
    </article>
  );
}
