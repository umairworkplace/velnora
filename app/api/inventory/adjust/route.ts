import { NextResponse } from "next/server";
import { adjustInventory } from "@/lib/inventory/service";

export async function POST(request: Request) {
  const body = (await request.json()) as { productId?: string; delta?: number };
  if (!body.productId || typeof body.delta !== "number") return NextResponse.json({ error: "productId and delta are required" }, { status: 400 });
  try { return NextResponse.json({ product: await adjustInventory(body.productId, body.delta) }); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "INVENTORY_ERROR" }, { status: 400 }); }
}
