import { NextResponse } from "next/server";
import { listProducts } from "@/lib/repositories/products";

export async function GET() {
  const products = await listProducts();
  return NextResponse.json({ ok: true, data: products });
}
