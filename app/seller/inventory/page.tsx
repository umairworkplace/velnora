import Link from "next/link";

export default function SellerInventoryPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 6vw" }}>
      <Link href="/seller">← Seller workspace</Link>
      <h1 style={{ fontSize: 46, letterSpacing: "-0.05em" }}>Inventory</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
        {[
          ["In stock", "0"], ["Low stock", "0"], ["Out of stock", "0"], ["Reserved", "0"]
        ].map(([label, value]) => (
          <article key={label} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 22 }}>
            <div style={{ color: "#6b7280" }}>{label}</div><strong style={{ fontSize: 30 }}>{value}</strong>
          </article>
        ))}
      </div>
    </main>
  );
}
