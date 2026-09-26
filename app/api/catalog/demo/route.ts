import { NextResponse } from "next/server";
import { demoProducts } from "../../../../../../lib/catalog-data";

export function GET() {
  return NextResponse.json({ ok: true, data: demoProducts });
}
