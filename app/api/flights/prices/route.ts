import { NextRequest, NextResponse } from "next/server";
import { getMonthlyPrices } from "@/lib/travelpayouts";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const destination = searchParams.get("destination") ?? "TBS";
  const origin = searchParams.get("origin") ?? "LON";

  const prices = await getMonthlyPrices(destination, origin);
  return NextResponse.json({ prices });
}
