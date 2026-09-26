import { NextResponse } from "next/server";
import { createOrder } from "@/lib/orders";

export function GET() {
  return NextResponse.json({ orders: [], total: 0 });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Parameters<typeof createOrder>[0] | null;
  if (!body?.userId || !Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: "userId and items are required" }, { status: 400 });
  }
  return NextResponse.json({ order: createOrder(body) }, { status: 201 });
}
