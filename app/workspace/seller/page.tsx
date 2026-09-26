import { MetricGrid } from "@/components/dashboard/MetricGrid";
import { Panel } from "@/components/ui/Panel";

export default function SellerWorkspacePage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "42px 6vw" }}>
      <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".12em" }}>SELLER WORKSPACE</p>
      <h1 style={{ fontSize: 44, letterSpacing: "-.05em", marginBottom: 32 }}>Good morning, seller.</h1>
      <MetricGrid />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18, marginTop: 18 }}>
        <Panel title="Quick actions"><div style={{ display: "grid", gap: 10 }}><a href="/seller/products">Manage products</a><a href="/seller/orders">Review orders</a><a href="/seller/inventory">Check inventory</a></div></Panel>
        <Panel title="Commerce status"><p style={{ color: "#6b7280", lineHeight: 1.6 }}>Your storefront, inventory and fulfillment services are ready for the next integration stage.</p></Panel>
      </div>
    </main>
  );
}
