import { NextResponse } from "next/server";
import { DemoSupplierAdapter } from "@/lib/dropshipping";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim() || "product";
  const adapter = new DemoSupplierAdapter();
  return NextResponse.json({ supplier: adapter.name, products: await adapter.search(query) });
}
