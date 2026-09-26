import { NextResponse } from "next/server";
import { money, positiveInt, requiredString } from "../../../../../lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const product = {
      name: requiredString(body.name, "name"),
      price: money(body.price),
      stock: positiveInt(body.stock ?? 1, "stock")
    };
    return NextResponse.json({ ok: true, data: product });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Invalid product" }, { status: 400 });
  }
}
