import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string; password?: string } | null;
  const email = body?.email?.trim().toLowerCase() ?? "";
  const password = body?.password ?? "";
  return NextResponse.json({ valid: isValidEmail(email) && password.length >= 8 });
}
