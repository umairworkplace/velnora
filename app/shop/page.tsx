import { featuredProducts } from "@/lib/catalog";
import { money } from "@/lib/format";

export default function ShopPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <p style={{ fontWeight: 700, letterSpacing: ".12em", fontSize: 12 }}>VELNORA SHOP</p>
      <h1 style={{ fontSize: 48, letterSpacing: "-0.05em" }}>Featured products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
        {featuredProducts.map((product) => (
          <article key={product.id} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 22 }}>
            <div style={{ height: 150, borderRadius: 14, background: "#eef0f4", marginBottom: 18 }} />
            <h2>{product.name}</h2>
            <p style={{ color: "#6b7280" }}>In stock: {product.stock}</p>
            <strong>{money(product.price)}</strong>
          </article>
        ))}
      </div>
    </main>
  );
}
