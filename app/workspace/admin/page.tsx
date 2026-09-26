import { MetricGrid } from "@/components/dashboard/MetricGrid";
import { Panel } from "@/components/ui/Panel";

export default function AdminWorkspacePage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "42px 6vw" }}>
      <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".12em" }}>ADMIN CONSOLE</p>
      <h1 style={{ fontSize: 44, letterSpacing: "-.05em" }}>Commerce overview</h1>
      <MetricGrid />
      <div style={{ marginTop: 18 }}><Panel title="Operations"><p style={{ color: "#6b7280" }}>Manage catalog, sellers, orders, inventory, fulfillment integrations and platform analytics from this workspace.</p></Panel></div>
    </main>
  );
}
