export function MainNav() {
  return <header style={{ padding: "20px 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e5e7eb", background: "white" }}><strong style={{ fontSize: 22 }}>VELNORA</strong><nav style={{ display: "flex", gap: 18, fontSize: 14 }}><a href="/shop">Shop</a><a href="/seller">Seller</a><a href="/admin">Admin</a></nav></header>;
}
