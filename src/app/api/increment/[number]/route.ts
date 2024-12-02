import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, { params }: { params: { number: string } }) {
  const number = parseInt(params.number, 10);
  // Validate the number
  if (isNaN(number)) {
    return NextResponse.json({ error: "Invalid number" }, { status: 400 });
  }
  // Return the incremented number
  return NextResponse.json({ result: number + 1 });
}