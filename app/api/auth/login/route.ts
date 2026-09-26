import { NextResponse } from "next/server";
import { requiredString } from "../../../../lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = requiredString(body.email, "email").toLowerCase();
    requiredString(body.password, "password");
    return NextResponse.json({ ok: true, data: { email, authenticated: false, next: "connect credential verification" } });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
