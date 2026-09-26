export default function SellerPage() {
  const cards = ["Products", "Inventory", "Orders", "Revenue"];
  return <main style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}><p style={{ fontWeight: 700, letterSpacing: ".12em", fontSize: 12 }}>SELLER WORKSPACE</p><h1 style={{ fontSize: 48, letterSpacing: "-0.05em" }}>Run your store from one place.</h1><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 16 }}>{cards.map((card) => <section key={card} style={{ padding: 24, background: "white", border: "1px solid #e5e7eb", borderRadius: 16 }}><h2>{card}</h2><p style={{ color: "#6b7280" }}>Manage {card.toLowerCase()} and track performance.</p></section>)}</div></main>;
}
