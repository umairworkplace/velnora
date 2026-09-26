import Link from "next/link";

const actions = ["Add product", "Import products", "Bulk edit", "Manage inventory"];

export default function SellerProductsPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 6vw" }}>
      <Link href="/seller">← Seller workspace</Link>
      <h1 style={{ fontSize: 46, letterSpacing: "-0.05em" }}>Products</h1>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 30 }}>
        {actions.map((action) => <button key={action} style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #d1d5db", background: "#fff" }}>{action}</button>)}
      </div>
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, overflow: "hidden" }}>
        <div style={{ padding: 20, borderBottom: "1px solid #e5e7eb", fontWeight: 700 }}>Product catalog</div>
        <div style={{ padding: 40, color: "#6b7280" }}>No seller products have been created yet.</div>
      </div>
    </main>
  );
}
