import { NextRequest, NextResponse } from "next/server";
import { getHotelDeals } from "@/lib/travelpayouts";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location") ?? "tbilisi";
  const checkIn = searchParams.get("checkIn") ?? getDefaultCheckIn();
  const checkOut = searchParams.get("checkOut") ?? getDefaultCheckOut(checkIn);

  const hotels = await getHotelDeals(location, checkIn, checkOut);
  return NextResponse.json({ hotels });
}

function getDefaultCheckIn(): string {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toISOString().split("T")[0];
}

function getDefaultCheckOut(checkIn: string): string {
  const d = new Date(checkIn);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}
