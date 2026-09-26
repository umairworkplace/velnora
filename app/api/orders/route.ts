import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ orders: [], total: 0 });
}
