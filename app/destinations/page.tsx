import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Filter } from "lucide-react";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Budget Travel Destinations",
  description:
    "Browse all budget travel destinations with daily cost breakdowns, itineraries, and tips for travelling cheap.",
};

const regions = ["All", ...Array.from(new Set(destinations.map((d) => d.region)))];

export default function DestinationsPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-amber)" }}
          >
            All Destinations
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where Will You Go
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Less?
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--color-muted)" }}>
            Every destination below includes a real daily budget breakdown, a day-by-day itinerary, and honest tips from backpackers who&apos;ve been there.
          </p>
        </div>

        {/* Region filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          <div className="flex items-center gap-2 mr-2" style={{ color: "var(--color-muted)" }}>
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter:</span>
          </div>
          {regions.map((region) => (
            <button
              key={region}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
              style={{
                background: region === "All" ? "var(--color-amber-glow)" : "var(--color-surface)",
                borderColor: region === "All" ? "color-mix(in oklab, var(--color-amber) 30%, transparent)" : "var(--color-border)",
                color: region === "All" ? "var(--color-amber)" : "var(--color-muted)",
              }}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Destination grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl block"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              {/* Visual header */}
              <div
                className="h-52 relative flex items-end p-5"
                style={{
                  background: `linear-gradient(160deg, oklch(20% 0.04 ${72 + i * 30}) 0%, oklch(12% 0.02 252) 100%)`,
                }}
              >
                <div>
                  <span className="text-4xl block mb-2">{dest.emoji}</span>
                  <div className="flex flex-wrap gap-2">
                    {dest.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(0,0,0,0.4)",
                          color: "oklch(80% 0.01 65)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-sm font-bold border"
                  style={{
                    background: "var(--color-amber-glow)",
                    color: "var(--color-amber)",
                    borderColor: "color-mix(in oklab, var(--color-amber) 30%, transparent)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  from ${dest.dailyBudget}/day
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs mb-3" style={{ color: "var(--color-muted)" }}>
                  <MapPin className="w-3 h-3" />
                  {dest.country} · {dest.region}
                </div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {dest.name}
                </h2>
                <p className="text-sm leading-relaxed line-clamp-2 mb-5" style={{ color: "var(--color-muted)" }}>
                  {dest.tagline}
                </p>

                {/* Mini budget breakdown */}
                <div
                  className="p-4 rounded-xl mb-5"
                  style={{ background: "var(--color-surface-2)" }}
                >
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {Object.entries(dest.budgetBreakdown).map(([key, val]) => (
                      <div key={key}>
                        <div
                          className="text-base font-bold"
                          style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)" }}
                        >
                          ${val}
                        </div>
                        <div className="text-xs capitalize" style={{ color: "var(--color-muted)" }}>
                          {key.slice(0, 5)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                    Best: {dest.bestMonths}
                  </span>
                  <span
                    className="flex items-center gap-1 text-sm font-semibold transition-all"
                    style={{ color: "var(--color-amber)" }}
                  >
                    Full guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
