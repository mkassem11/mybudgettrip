const TOKEN = process.env.TRAVELPAYOUTS_TOKEN ?? "";
const MARKER = process.env.TRAVELPAYOUTS_MARKER ?? "000000";

export interface Hotel {
  id: number;
  name: string;
  stars: number;
  rating: number;
  ratingName: string;
  locationName: string;
  priceFrom: number;
  pricePercentage: number; // discount %
  photoUrl: string;
  url: string;
}

export interface MonthPrice {
  month: string;      // "2024-06"
  label: string;      // "Jun"
  price: number;
  isLowest: boolean;
  isCheapest: boolean;
}

/* ── Hotel deals via Hotellook cache API ───────── */
export async function getHotelDeals(
  location: string,
  checkIn: string,   // YYYY-MM-DD
  checkOut: string,
  adults = 2,
  limit = 9
): Promise<Hotel[]> {
  if (!TOKEN) return getMockHotels(location);

  try {
    const params = new URLSearchParams({
      location,
      checkIn,
      checkOut,
      adults: String(adults),
      currency: "usd",
      limit: String(limit),
      token: TOKEN,
    });

    const res = await fetch(
      `https://engine.hotellook.com/api/v2/cache.json?${params}`,
      { next: { revalidate: 3600 } } // cache 1 hour
    );

    if (!res.ok) return getMockHotels(location);
    const data = await res.json();

    return (data.results ?? []).map((h: Record<string, unknown>) => ({
      id: h.id as number,
      name: h.name as string,
      stars: h.stars as number,
      rating: (h.rating as number) ?? 8.0,
      ratingName: getRatingName((h.rating as number) ?? 8.0),
      locationName: h.locationName as string ?? location,
      priceFrom: h.priceFrom as number,
      pricePercentage: (h.pricePercentage as number) ?? 0,
      photoUrl: (h.photoUrls as string[])?.[0] ?? "",
      url: buildHotelUrl(h.id as number, location),
    }));
  } catch {
    return getMockHotels(location);
  }
}

/* ── Monthly price trends via Travelpayouts ────── */
export async function getMonthlyPrices(
  destination: string, // IATA code e.g. "TBS"
  origin = "LON"       // default hub if user hasn't set their city
): Promise<MonthPrice[]> {
  if (!TOKEN) return getMockMonthlyPrices();

  try {
    const params = new URLSearchParams({
      origin,
      destination,
      currency: "usd",
      show_to_affiliates: "true",
      token: TOKEN,
    });

    const res = await fetch(
      `https://api.travelpayouts.com/v2/prices/month-matrix?${params}`,
      { next: { revalidate: 86400 } } // cache 24h
    );

    if (!res.ok) return getMockMonthlyPrices();
    const data = await res.json();

    const prices = (data.data ?? []) as { date: string; value: number }[];
    if (!prices.length) return getMockMonthlyPrices();

    const min = Math.min(...prices.map((p) => p.value));
    const max = Math.max(...prices.map((p) => p.value));

    return prices.slice(0, 12).map((p) => ({
      month: p.date.slice(0, 7),
      label: new Date(p.date).toLocaleString("en-US", { month: "short" }),
      price: p.value,
      isLowest: p.value === min,
      isCheapest: p.value < (min + (max - min) * 0.3),
    }));
  } catch {
    return getMockMonthlyPrices();
  }
}

/* ── Affiliate link builders ────────────────────── */
export function buildHotelAffiliateUrl(destination: string): string {
  return `https://www.travelpayouts.com/hotels?destination=${encodeURIComponent(destination)}&marker=${MARKER}`;
}

function buildHotelUrl(hotelId: number, destination: string): string {
  return `https://search.hotellook.com/?destination=${encodeURIComponent(destination)}&hotelId=${hotelId}&marker=${MARKER}`;
}

/* ── Helpers ────────────────────────────────────── */
function getRatingName(rating: number): string {
  if (rating >= 9.5) return "Exceptional";
  if (rating >= 9.0) return "Wonderful";
  if (rating >= 8.5) return "Excellent";
  if (rating >= 8.0) return "Very Good";
  if (rating >= 7.0) return "Good";
  return "Okay";
}

/* ── Mock data (when no API token set) ─────────── */
function getMockHotels(location: string): Hotel[] {
  const names = [
    "Fabrika Hostel & Suites", "Old Town Boutique Hotel", "Rooms Hotel",
    "Stamba Hotel", "Guest House Mama", "City Comfort Inn",
    "The Central Hostel", "Heritage House", "Budget Stay Inn",
  ];
  return names.map((name, i) => ({
    id: i + 1,
    name,
    stars: [1, 2, 3, 3, 4, 4, 5, 5, 3][i],
    rating: 7.5 + Math.random() * 2,
    ratingName: ["Good", "Very Good", "Excellent", "Wonderful"][Math.floor(Math.random() * 4)],
    locationName: location,
    priceFrom: 10 + i * 8,
    pricePercentage: [0, 0, 15, 0, 22, 8, 0, 31, 0][i],
    photoUrl: "",
    url: buildHotelAffiliateUrl(location),
  }));
}

function getMockMonthlyPrices(): MonthPrice[] {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const basePattern = [180, 175, 160, 155, 145, 190, 210, 220, 160, 155, 170, 185];
  const min = Math.min(...basePattern);
  const max = Math.max(...basePattern);
  return months.map((label, i) => ({
    month: `2025-${String(i + 1).padStart(2, "0")}`,
    label,
    price: basePattern[i],
    isLowest: basePattern[i] === min,
    isCheapest: basePattern[i] < (min + (max - min) * 0.3),
  }));
}
