import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { productId?: string; quantity?: number } | null;
  const quantity = Math.max(1, Math.floor(body?.quantity ?? 1));
  if (!body?.productId) return NextResponse.json({ error: "productId is required" }, { status: 400 });
  return NextResponse.json({ ok: true, item: { productId: body.productId, quantity } });
}
