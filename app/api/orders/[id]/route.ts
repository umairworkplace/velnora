import { NextResponse } from "next/server";
import { getOrderById } from "@/lib/repositories/orders";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await getOrderById(id);
  if (!order) return NextResponse.json({ ok: false, error: "ORDER_NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ ok: true, data: order });
}
