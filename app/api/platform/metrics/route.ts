import { NextResponse } from "next/server";
import { dashboardMetrics } from "@/lib/domain/analytics";

export function GET() {
  return NextResponse.json({ ok: true, metrics: dashboardMetrics });
}
