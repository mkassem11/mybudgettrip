import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, DollarSign, CheckCircle, ExternalLink } from "lucide-react";
import { destinations, getDestination } from "@/lib/destinations";
import { HotelDeals } from "@/components/deals/HotelDeals";
import { FlightPriceCalendar } from "@/components/deals/FlightPriceCalendar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return {
    title: `${dest.name}, ${dest.country} — Budget Guide ($${dest.dailyBudget}/day)`,
    description: dest.description,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const budgetTotal = Object.values(dest.budgetBreakdown).reduce((a, b) => a + b, 0);

  return (
    <div className="pt-24 pb-24">
      {/* ── Hero banner ──────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, oklch(18% 0.04 72) 0%, var(--color-background) 70%)`,
          minHeight: "360px",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
          style={{ background: "var(--color-amber)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-80"
            style={{ color: "var(--color-muted)" }}
          >
            <ArrowLeft className="w-4 h-4" /> All Destinations
          </Link>

          <div className="flex items-start gap-6">
            <span className="text-7xl">{dest.emoji}</span>
            <div>
              <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "var(--color-muted)" }}>
                <MapPin className="w-4 h-4" />
                {dest.country} · {dest.region}
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {dest.name}
              </h1>
              <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {dest.tagline}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {dest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Quick stats ──────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
          {[
            { icon: DollarSign, label: "Daily Budget", value: `$${budgetTotal}/day`, color: "var(--color-amber)" },
            { icon: Calendar, label: "Best Months", value: dest.bestMonths, color: "var(--color-teal)" },
            { icon: MapPin, label: "Region", value: dest.region, color: "var(--color-coral)" },
            { icon: CheckCircle, label: "Itinerary", value: `${dest.itinerary.length} days mapped`, color: "var(--color-amber)" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="p-5 rounded-2xl border flex flex-col gap-2"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>{label}</div>
              <div className="font-bold" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── Main content ───────────────────────────────── */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {dest.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Top Highlights
              </h2>
              <ul className="space-y-3">
                {dest.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--color-teal)" }} />
                    <span style={{ color: "var(--color-muted)" }}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Sample Itinerary
              </h2>
              <div className="space-y-5">
                {dest.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="flex gap-5 p-6 rounded-2xl border"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{ background: "var(--color-amber-glow)", color: "var(--color-amber)", fontFamily: "var(--font-display)" }}
                    >
                      {day.day}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{day.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Flight Price Calendar */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Cheapest Time to Fly
              </h2>
              <FlightPriceCalendar
                destinationIATA={dest.iataCode}
                destinationName={dest.name}
              />
            </section>
          </div>

          {/* ── Sidebar ─────────────────────────────────────── */}
          <div className="space-y-6">
            {/* Budget breakdown */}
            <div
              className="p-6 rounded-2xl border sticky top-24"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Daily Budget Breakdown
              </h3>
              <div className="space-y-4 mb-6">
                {Object.entries(dest.budgetBreakdown).map(([key, val]) => {
                  const pct = Math.round((val / budgetTotal) * 100);
                  return (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="capitalize" style={{ color: "var(--color-muted)" }}>{key}</span>
                        <span className="font-semibold">${val}/day</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: "linear-gradient(90deg, var(--color-amber), var(--color-coral))",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="flex justify-between items-center py-4 border-t border-b mb-6"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="font-bold">Total per day</span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)" }}
                >
                  ${budgetTotal}
                </span>
              </div>

              {/* Affiliate CTA */}
              <a
                href={dest.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
                  color: "oklch(11% 0.018 252)",
                  boxShadow: "0 4px 24px color-mix(in oklab, var(--color-amber) 30%, transparent)",
                }}
              >
                Book Flights & Hotels
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xs text-center mt-3" style={{ color: "var(--color-muted)" }}>
                Powered by Travel Payouts · Affiliate link
              </p>
            </div>
          </div>
        </div>

        {/* ── Live Hotel Deals ─────────────────────────────── */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-coral)" }}>
              Live Deals
            </p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Hotels in {dest.name}
            </h2>
            <p className="text-sm mt-2" style={{ color: "var(--color-muted)" }}>
              Live prices updated hourly · Discounted hotels highlighted · Powered by Travel Payouts
            </p>
          </div>
          <HotelDeals
            defaultLocation={dest.hotelLocation}
            locationLabel={dest.name}
          />
        </section>
      </div>
    </div>
  );
}
