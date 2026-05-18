"use client";

import { ExternalLink, Bed, Utensils, Bus, Activity, Moon, Wifi, FileText, Lightbulb } from "lucide-react";
import type { BudgetBreakdown, BudgetInputs, CountryBudgetData } from "@/lib/budget-data";

interface Props {
  breakdown: BudgetBreakdown;
  inputs: BudgetInputs;
  countryData: CountryBudgetData;
}

interface LineItem {
  icon: React.ReactNode;
  label: string;
  daily: number | null;
  tripTotal: number;
  color: string;
}

export function BudgetResults({ breakdown, inputs, countryData }: Props) {
  const affiliateBase = "https://travelpayouts.com/";
  const hotelUrl = `${affiliateBase}?destination=${encodeURIComponent(countryData.name)}`;
  const flightUrl = `${affiliateBase}?destination=${encodeURIComponent(countryData.name)}`;

  const lineItems: LineItem[] = [
    {
      icon: <Bed className="w-4 h-4" />,
      label: "Accommodation",
      daily: breakdown.accommodation,
      tripTotal: breakdown.accommodation * inputs.days,
      color: "var(--color-teal)",
    },
    {
      icon: <Utensils className="w-4 h-4" />,
      label: "Food & Drink",
      daily: breakdown.food,
      tripTotal: breakdown.food * inputs.days,
      color: "var(--color-amber)",
    },
    {
      icon: <Bus className="w-4 h-4" />,
      label: "Transport",
      daily: breakdown.transport,
      tripTotal: breakdown.transport * inputs.days,
      color: "var(--color-coral)",
    },
    {
      icon: <Activity className="w-4 h-4" />,
      label: "Activities & Sightseeing",
      daily: breakdown.activities,
      tripTotal: breakdown.activities * inputs.days,
      color: "var(--color-teal)",
    },
    {
      icon: <Moon className="w-4 h-4" />,
      label: "Nightlife",
      daily: breakdown.nightlife,
      tripTotal: breakdown.nightlife * inputs.days,
      color: "var(--color-amber)",
    },
  ];

  const recurringTotal = breakdown.dailyTotal * inputs.days;
  const maxBar = Math.max(...lineItems.map((i) => i.tripTotal));

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Hero total */}
      <div
        className="p-8 rounded-2xl border relative overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-15 pointer-events-none"
          style={{ background: "var(--color-amber)" }}
        />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-amber)" }}>
            Budget Breakdown
          </p>
          <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
            {countryData.name}
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
            {inputs.days} days · {inputs.accommodation} · {inputs.food} food · {inputs.transport} transport
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>Daily budget</div>
              <div className="text-3xl font-bold" style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)" }}>
                ${breakdown.dailyTotal}
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>per day</div>
            </div>
            <div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>Total estimate</div>
              <div className="text-3xl font-bold" style={{ color: "var(--color-teal)", fontFamily: "var(--font-display)" }}>
                ${breakdown.tripTotal.toLocaleString()}
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>low estimate</div>
            </div>
            <div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>With buffer (+15%)</div>
              <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                ${breakdown.tripTotalHigh.toLocaleString()}
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>recommended</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={flightUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
                color: "oklch(11% 0.018 252)",
              }}
            >
              Find Flights <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={hotelUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl text-sm font-bold border transition-all hover:opacity-80"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              Find Hotels <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Itemized bar chart */}
      <div
        className="p-6 rounded-2xl border"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <h3 className="font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>Where Your Money Goes</h3>
        <div className="space-y-4">
          {lineItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <div className="flex items-baseline gap-3">
                  {item.daily !== null && item.daily > 0 && (
                    <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                      ${item.daily}/day
                    </span>
                  )}
                  <span className="text-sm font-bold">${item.tripTotal.toLocaleString()}</span>
                </div>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: maxBar > 0 ? `${(item.tripTotal / maxBar) * 100}%` : "0%",
                    background: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* One-time costs */}
        {(breakdown.simCard > 0 || breakdown.visaFee > 0) && (
          <div
            className="mt-6 pt-5 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-muted)" }}>
              One-time costs
            </div>
            <div className="space-y-2">
              {breakdown.simCard > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
                    <span>SIM Card / Data</span>
                  </div>
                  <span className="font-medium">${breakdown.simCard}</span>
                </div>
              )}
              {breakdown.visaFee > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
                    <span>Visa Fee</span>
                  </div>
                  <span className="font-medium">${breakdown.visaFee}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grand total row */}
        <div
          className="mt-5 pt-5 border-t flex justify-between items-center"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span className="font-bold">Total (recommended budget)</span>
          <span className="text-xl font-bold" style={{ color: "var(--color-amber)" }}>
            ${breakdown.tripTotalHigh.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Local insight */}
      <div
        className="p-6 rounded-2xl border"
        style={{
          background: "var(--color-teal-glow)",
          borderColor: "color-mix(in oklab, var(--color-teal) 25%, transparent)",
        }}
      >
        <div className="flex items-center gap-2 mb-3" style={{ color: "var(--color-teal)" }}>
          <Lightbulb className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Local Insider Tip</span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{countryData.notes}</p>
      </div>

      <p className="text-xs text-center" style={{ color: "var(--color-muted)" }}>
        Estimates based on 2024–2025 traveler data. Actual costs vary by season and personal habits. Booking links are affiliate — we earn a small commission at no cost to you.
      </p>
    </div>
  );
}
