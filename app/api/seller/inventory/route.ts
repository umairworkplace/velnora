import { NextResponse } from "next/server";
import { listInventoryForSeller } from "@/lib/repositories/inventory";

export async function GET(request: Request) {
  const sellerId = new URL(request.url).searchParams.get("sellerId");
  if (!sellerId) return NextResponse.json({ ok: false, error: "SELLER_ID_REQUIRED" }, { status: 400 });
  const inventory = await listInventoryForSeller(sellerId);
  return NextResponse.json({ ok: true, data: inventory });
}
