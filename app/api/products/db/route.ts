import { NextResponse } from "next/server";
import { listActiveProducts } from "@/lib/services/product-service";

export async function GET() {
  const products = await listActiveProducts();
  return NextResponse.json({ products });
}
