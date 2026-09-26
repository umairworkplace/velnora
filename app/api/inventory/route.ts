import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ inventory: [], lowStock: 0 });
}
