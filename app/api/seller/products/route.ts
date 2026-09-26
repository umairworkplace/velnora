import { NextResponse } from "next/server";
import { listSellerProducts } from "@/lib/repositories/products";

export async function GET(request: Request) {
  const sellerId = new URL(request.url).searchParams.get("sellerId");
  if (!sellerId) return NextResponse.json({ ok: false, error: "SELLER_ID_REQUIRED" }, { status: 400 });
  const products = await listSellerProducts(sellerId);
  return NextResponse.json({ ok: true, data: products });
}
