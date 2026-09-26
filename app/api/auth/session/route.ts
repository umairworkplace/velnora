import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ authenticated: false, user: null });
}
