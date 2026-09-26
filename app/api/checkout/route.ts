import { NextResponse } from "next/server";
import { assertCheckoutReady, checkoutTotal } from "../../../lib/checkout-rules";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const lines = Array.isArray(body.lines) ? body.lines : [];
    assertCheckoutReady(lines);
    const total = checkoutTotal(lines, Number(body.shipping ?? 0), Number(body.tax ?? 0));
    return NextResponse.json({ ok: true, data: { total, status: "READY_FOR_PAYMENT" } });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Checkout validation failed" }, { status: 400 });
  }
}
