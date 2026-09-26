import Link from "next/link";

export default function CartPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "70px 6vw" }}>
      <Link href="/shop">← Continue shopping</Link>
      <h1 style={{ fontSize: 48, letterSpacing: "-0.05em" }}>Your cart</h1>
      <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: 28 }}>
        <p style={{ color: "#6b7280" }}>Your cart is ready for products. The checkout service will connect here.</p>
        <Link href="/login" style={{ display: "inline-block", background: "#111827", color: "#fff", padding: "12px 18px", borderRadius: 10 }}>Sign in to checkout</Link>
      </section>
    </main>
  );
}
