import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}

