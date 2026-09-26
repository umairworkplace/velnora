const features = [
  ["Storefront", "Fast customer shopping experiences."],
  ["Seller", "Products, inventory, orders and performance."],
  ["Admin", "Centralized operations and platform controls."],
  ["Fulfillment", "Order and dropshipping workflows designed as integrations."],
];

export default function HomePage() {
  return <main>
    <header style={{padding:"24px 6vw",background:"white",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between"}}>
      <strong style={{fontSize:24,letterSpacing:"-.05em"}}>VELNORA</strong>
      <span style={{color:"#6b7280",fontSize:14}}>The Modern Commerce Platform</span>
    </header>
    <section style={{maxWidth:1100,margin:"0 auto",padding:"90px 6vw 70px"}}>
      <p style={{fontWeight:700,fontSize:12,letterSpacing:".14em"}}>COMMERCE, REBUILT</p>
      <h1 style={{fontSize:"clamp(48px,8vw,88px)",lineHeight:.98,letterSpacing:"-.06em",margin:"18px 0 28px"}}>Everything your commerce business needs.</h1>
      <p style={{maxWidth:680,fontSize:19,lineHeight:1.7,color:"#4b5563"}}>Velnora is being built as one coherent platform for customers, sellers, administrators, inventory, orders, fulfillment and analytics.</p>
    </section>
    <section style={{maxWidth:1100,margin:"0 auto",padding:"0 6vw 90px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:16}}>
      {features.map(([title,text]) => <article key={title} style={{background:"white",border:"1px solid #e5e7eb",borderRadius:18,padding:24,minHeight:160}}><h2 style={{marginTop:0}}>{title}</h2><p style={{color:"#6b7280",lineHeight:1.6}}>{text}</p></article>)}
    </section>
  </main>;
}
