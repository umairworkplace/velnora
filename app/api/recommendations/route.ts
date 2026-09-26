import { NextResponse } from "next/server";
import { recommendProducts } from "@/lib/recommendations";

export function GET() {
  return NextResponse.json({ products: recommendProducts(3) });
}
