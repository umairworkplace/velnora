import type { ProductSummary } from "../lib/velnora-types";

export function ProductCard({ product }: { product: ProductSummary }) {
  return (
    <article style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 18 }}>
      <div style={{ height: 150, borderRadius: 12, background: "#eef0f4", marginBottom: 16 }} />
      <h3 style={{ margin: "0 0 8px" }}>{product.name}</h3>
      <p style={{ margin: 0, color: "#6b7280" }}>${product.price.toFixed(2)}</p>
      <small style={{ display: "block", marginTop: 8, color: "#6b7280" }}>{product.stock} in stock</small>
    </article>
  );
}
