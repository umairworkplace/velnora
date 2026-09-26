import { NextResponse } from "next/server";
import { requiredString } from "../../../../lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = requiredString(body.email, "email").toLowerCase();
    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    return NextResponse.json({ ok: true, data: { email, name, next: "connect database and password hashing" } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
