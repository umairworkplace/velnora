import { featuredProducts } from "@/lib/catalog";

export function GET() {
  return Response.json({ ok: true, products: featuredProducts });
}
