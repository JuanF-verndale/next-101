import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {params}: { params: Promise<{ number: string }> }
) {
  const { number } = await params;
  
  const parsedNumber = parseInt(number, 10);
  if (isNaN(parsedNumber)) {
    return NextResponse.json({ error: "Invalid number" }, { status: 400 });
  }

  
  return NextResponse.json({ result: parsedNumber + 1 });
}
