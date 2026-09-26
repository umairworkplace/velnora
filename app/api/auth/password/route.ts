import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth/password";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  if (!body.password || body.password.length < 8) return NextResponse.json({ error: "Password must contain at least 8 characters" }, { status: 400 });
  return NextResponse.json({ hash: hashPassword(body.password) });
}
