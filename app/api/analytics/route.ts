import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ metrics: { revenue: 0, orders: 0, customers: 0, conversionRate: 0 } });
}
