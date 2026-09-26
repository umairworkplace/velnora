import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ok:true,service:"velnora",timestamp:new Date().toISOString()}); }
