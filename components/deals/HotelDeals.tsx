"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Tag, ExternalLink, Loader2, Search } from "lucide-react";
import type { Hotel } from "@/lib/travelpayouts";
import { buildHotelAffiliateUrl } from "@/lib/travelpayouts-client";

interface HotelDealsProps {
  defaultLocation: string;
  locationLabel?: string;
  showSearch?: boolean;
}

export function HotelDeals({ defaultLocation, locationLabel, showSearch = false }: HotelDealsProps) {
  const [location, setLocation] = useState(defaultLocation);
  const [inputVal, setInputVal] = useState(locationLabel ?? defaultLocation);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkIn, setCheckIn] = useState(getDefaultCheckIn());
  const [checkOut, setCheckOut] = useState(getDefaultCheckOut());

  const fetchHotels = useCallback(async (loc: string, ci: string, co: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/hotels?location=${encodeURIComponent(loc)}&checkIn=${ci}&checkOut=${co}`);
      const data = await res.json();
      setHotels(data.hotels ?? []);
    } catch {
      setHotels([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHotels(location, checkIn, checkOut);
  }, [location, checkIn, checkOut, fetchHotels]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation(inputVal);
  };

  const discounted = hotels.filter((h) => h.pricePercentage > 0);
  const regular = hotels.filter((h) => h.pricePercentage === 0);
  const sorted = [...discounted.sort((a, b) => b.pricePercentage - a.pricePercentage), ...regular];

  return (
    <div>
      {/* Search bar */}
      {showSearch && (
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search destination (e.g. Tbilisi, Istanbul)"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm border outline-none"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="date"
              value={checkIn}
              min={getDefaultCheckIn()}
              onChange={(e) => setCheckIn(e.target.value)}
              className="px-3 py-3.5 rounded-xl text-sm border outline-none"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            />
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="px-3 py-3.5 rounded-xl text-sm border outline-none"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))", color: "oklch(11% 0.018 252)" }}
          >
            Search
          </button>
        </form>
      )}

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-16 gap-3" style={{ color: "var(--color-muted)" }}>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm">Finding best deals...</span>
        </div>
      )}

      {/* Hotel grid */}
      {!loading && sorted.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((hotel) => (
            <a
              key={hotel.id}
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl block"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              {/* Photo / gradient header */}
              <div
                className="h-36 relative flex items-end p-4"
                style={{
                  background: hotel.photoUrl
                    ? `url(${hotel.photoUrl}) center/cover`
                    : "linear-gradient(135deg, oklch(18% 0.03 252), oklch(14% 0.02 252))",
                }}
              >
                {/* Discount badge */}
                {hotel.pricePercentage > 0 && (
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold"
                    style={{
                      background: "var(--color-coral)",
                      color: "white",
                    }}
                  >
                    <Tag className="w-3 h-3" />
                    -{hotel.pricePercentage}% OFF
                  </div>
                )}
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" style={{ color: "var(--color-amber)" }} />
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <h3
                  className="font-bold text-base mb-1 line-clamp-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {hotel.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded-md text-xs font-bold"
                    style={{ background: "var(--color-teal-glow)", color: "var(--color-teal)" }}
                  >
                    {hotel.rating.toFixed(1)}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {hotel.ratingName}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-xl font-bold"
                      style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)" }}
                    >
                      ${hotel.priceFrom}
                    </span>
                    <span className="text-xs ml-1" style={{ color: "var(--color-muted)" }}>/night</span>
                  </div>
                  <span
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: "var(--color-amber)" }}
                  >
                    Book <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && sorted.length === 0 && (
        <div className="text-center py-12" style={{ color: "var(--color-muted)" }}>
          <p className="mb-4">No hotels found. Try a different destination or dates.</p>
        </div>
      )}

      {/* See all link */}
      {!loading && sorted.length > 0 && (
        <div className="mt-6 text-center">
          <a
            href={buildHotelAffiliateUrl(location)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:opacity-80"
            style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
          >
            See all hotels in {locationLabel ?? location} <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="mt-2 text-xs" style={{ color: "var(--color-muted)" }}>
            Powered by Travel Payouts · Affiliate links
          </p>
        </div>
      )}
    </div>
  );
}

function getDefaultCheckIn(): string {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toISOString().split("T")[0];
}

function getDefaultCheckOut(): string {
  const d = new Date();
  d.setDate(d.getDate() + 15);
  return d.toISOString().split("T")[0];
}
