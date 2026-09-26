import { NextResponse } from "next/server";
import { createOrder } from "@/lib/orders/service";

export async function POST(request: Request) {
  const body = (await request.json()) as { userId?: string; items?: Array<{ productId: string; quantity: number }> };
  if (!body.userId || !Array.isArray(body.items)) return NextResponse.json({ error: "userId and items are required" }, { status: 400 });
  try { return NextResponse.json({ order: await createOrder(body.userId, body.items) }, { status: 201 }); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "ORDER_ERROR" }, { status: 400 }); }
}
