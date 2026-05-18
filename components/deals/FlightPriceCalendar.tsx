"use client";

import { useState, useEffect } from "react";
import { Plane, TrendingDown, AlertCircle } from "lucide-react";
import type { MonthPrice } from "@/lib/travelpayouts";

interface FlightPriceCalendarProps {
  destinationIATA: string;
  destinationName: string;
}

const HUB_CITIES = [
  { code: "LON", label: "London" },
  { code: "DXB", label: "Dubai" },
  { code: "IST", label: "Istanbul" },
  { code: "FRA", label: "Frankfurt" },
  { code: "CDG", label: "Paris" },
  { code: "AMS", label: "Amsterdam" },
];

export function FlightPriceCalendar({ destinationIATA, destinationName }: FlightPriceCalendarProps) {
  const [origin, setOrigin] = useState("LON");
  const [prices, setPrices] = useState<MonthPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/flights/prices?destination=${destinationIATA}&origin=${origin}`)
      .then((r) => r.json())
      .then((d) => setPrices(d.prices ?? []))
      .catch(() => setPrices([]))
      .finally(() => setLoading(false));
  }, [destinationIATA, origin]);

  const maxPrice = Math.max(...prices.map((p) => p.price), 1);
  const minPrice = Math.min(...prices.map((p) => p.price));
  const cheapMonths = prices.filter((p) => p.isCheapest).map((p) => p.label);

  return (
    <div
      className="p-6 rounded-2xl border"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Plane className="w-4 h-4" style={{ color: "var(--color-teal)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--color-teal)" }}>
              Cheapest time to fly to {destinationName}
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            Historical prices from your chosen hub city
          </p>
        </div>
        {/* Hub selector */}
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="text-xs px-3 py-2 rounded-lg border outline-none cursor-pointer"
          style={{
            background: "var(--color-surface-2)",
            borderColor: "var(--color-border)",
            color: "var(--color-foreground)",
          }}
        >
          {HUB_CITIES.map((c) => (
            <option key={c.code} value={c.code}>From {c.label}</option>
          ))}
        </select>
      </div>

      {/* Chart */}
      {loading ? (
        <div className="h-32 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "var(--color-amber)", borderTopColor: "transparent" }} />
        </div>
      ) : (
        <>
          <div className="flex items-end gap-1.5 h-28 mb-2">
            {prices.map((p) => {
              const heightPct = Math.max(20, (p.price / maxPrice) * 100);
              return (
                <div key={p.month} className="flex-1 flex flex-col items-center gap-1 group relative">
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                    style={{ background: "var(--color-background)", color: "var(--color-foreground)", border: "1px solid var(--color-border)" }}
                  >
                    ${p.price}
                  </div>
                  <div
                    className="w-full rounded-t-md transition-all"
                    style={{
                      height: `${heightPct}%`,
                      background: p.isLowest
                        ? "linear-gradient(180deg, var(--color-teal), var(--color-teal-dim))"
                        : p.isCheapest
                        ? "linear-gradient(180deg, var(--color-amber), var(--color-amber-dim))"
                        : "var(--color-surface-2)",
                      border: p.isLowest ? "1px solid var(--color-teal)" : "none",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Month labels */}
          <div className="flex gap-1.5">
            {prices.map((p) => (
              <div
                key={p.month}
                className="flex-1 text-center text-xs"
                style={{
                  color: p.isLowest ? "var(--color-teal)" : p.isCheapest ? "var(--color-amber)" : "var(--color-muted)",
                  fontWeight: p.isCheapest ? 600 : 400,
                }}
              >
                {p.label}
              </div>
            ))}
          </div>

          {/* Legend + tip */}
          {cheapMonths.length > 0 && (
            <div
              className="mt-5 p-4 rounded-xl flex items-start gap-3"
              style={{ background: "var(--color-teal-glow)", border: "1px solid color-mix(in oklab, var(--color-teal) 25%, transparent)" }}
            >
              <TrendingDown className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-teal)" }} />
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-teal)" }}>
                <strong>Cheapest months:</strong> {cheapMonths.join(", ")} — fly then and save up to{" "}
                ${maxPrice - minPrice} vs peak season.
              </p>
            </div>
          )}
        </>
      )}

      <p className="mt-4 text-xs" style={{ color: "var(--color-muted)" }}>
        * Prices are historical averages. Actual fares vary. Powered by Travel Payouts.
      </p>
    </div>
  );
}
