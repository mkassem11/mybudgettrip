// Client-safe helpers (no API tokens)

export function buildHotelAffiliateUrl(destination: string): string {
  return `https://search.hotellook.com/?destination=${encodeURIComponent(destination)}`;
}

export function buildFlightAffiliateUrl(origin: string, destination: string): string {
  return `https://www.aviasales.com/search/${origin}${destination}`;
}
