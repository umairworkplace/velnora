import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ inventory: [], lowStock: 0 });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { productId?: string; quantity?: number } | null;
  if (!body?.productId || typeof body.quantity !== "number") {
    return NextResponse.json({ error: "productId and quantity are required" }, { status: 400 });
  }
  return NextResponse.json({ item: { productId: body.productId, quantity: Math.max(0, Math.floor(body.quantity)) } }, { status: 201 });
}
