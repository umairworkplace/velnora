import { NextResponse } from "next/server";
import { listOrdersForUser } from "@/lib/repositories/orders";

export async function GET(request: Request) {
  const userId = new URL(request.url).searchParams.get("userId");
  if (!userId) return NextResponse.json({ ok: false, error: "USER_ID_REQUIRED" }, { status: 400 });
  const orders = await listOrdersForUser(userId);
  return NextResponse.json({ ok: true, data: orders });
}
