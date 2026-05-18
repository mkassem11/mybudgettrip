"use client";

import { ExternalLink, CheckCircle, TrendingDown, MapPin, Utensils, Bus, Activity, AlertTriangle, Lightbulb } from "lucide-react";
import type { PlannerOutput, PlannerInput } from "@/app/api/planner/route";

interface Props {
  plan: PlannerOutput;
  input: PlannerInput;
}

export function PlannerResults({ plan, input }: Props) {
  const affiliateBase = "https://travelpayouts.com/";
  const hotelUrl = `${affiliateBase}?destination=${encodeURIComponent(plan.destination)}`;
  const flightUrl = `${affiliateBase}?destination=${encodeURIComponent(plan.destination)}`;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Summary hero */}
      <div
        className="p-8 rounded-2xl border relative overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-15 pointer-events-none"
          style={{ background: "var(--color-amber)" }}
        />
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-amber)" }}>
                Your Budget Plan
              </p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {plan.destination}
              </h2>
              <p className="text-sm mt-1" style={{ color: "var(--color-muted)" }}>
                {input.days} days · {input.style} · {input.group}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-3xl font-bold" style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)" }}>
                {plan.daily_budget}
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>per day</div>
              <div className="text-lg font-semibold mt-1" style={{ color: "var(--color-teal)" }}>
                {plan.total_estimate}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{ background: "var(--color-teal-glow)", borderColor: "color-mix(in oklab, var(--color-teal) 30%, transparent)", color: "var(--color-teal)" }}
            >
              <MapPin className="w-3 h-3" /> Best time: {plan.best_months}
            </span>
          </div>

          {/* Affiliate CTAs */}
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

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cheap areas */}
        <Section icon={<MapPin className="w-4 h-4" />} title="Best Neighborhoods" color="var(--color-amber)">
          {plan.cheap_areas?.map((area) => (
            <div key={area.name} className="pb-3 mb-3 border-b last:border-0 last:mb-0 last:pb-0" style={{ borderColor: "var(--color-border)" }}>
              <div className="font-semibold text-sm mb-0.5">{area.name}</div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>{area.why}</div>
            </div>
          ))}
        </Section>

        {/* Accommodation */}
        <Section icon={<TrendingDown className="w-4 h-4" />} title="Accommodation Options" color="var(--color-teal)">
          {plan.accommodation?.map((a) => (
            <div key={a.type} className="pb-3 mb-3 border-b last:border-0 last:mb-0 last:pb-0" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-semibold text-sm">{a.type}</div>
                <div className="text-sm font-bold" style={{ color: "var(--color-amber)" }}>{a.cost}</div>
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>{a.tip}</div>
            </div>
          ))}
        </Section>

        {/* Food */}
        <Section icon={<Utensils className="w-4 h-4" />} title="Food & Eating" color="var(--color-coral)">
          {plan.food?.map((f) => (
            <div key={f.option} className="pb-3 mb-3 border-b last:border-0 last:mb-0 last:pb-0" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-semibold text-sm">{f.option}</div>
                <div className="text-sm font-bold" style={{ color: "var(--color-amber)" }}>{f.cost}</div>
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>{f.examples}</div>
            </div>
          ))}
        </Section>

        {/* Transport */}
        <Section icon={<Bus className="w-4 h-4" />} title="Getting Around" color="var(--color-amber)">
          {plan.transportation?.map((t) => (
            <div key={t.mode} className="pb-3 mb-3 border-b last:border-0 last:mb-0 last:pb-0" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-semibold text-sm">{t.mode}</div>
                <div className="text-sm font-bold" style={{ color: "var(--color-amber)" }}>{t.cost}</div>
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>{t.tip}</div>
            </div>
          ))}
        </Section>
      </div>

      {/* Activities */}
      <Section icon={<Activity className="w-4 h-4" />} title="What to Do" color="var(--color-teal)">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {plan.activities?.map((a) => (
            <div
              key={a.name}
              className="p-4 rounded-xl border"
              style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-semibold text-sm">{a.name}</div>
                <div
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "var(--color-amber-glow)", color: "var(--color-amber)" }}
                >
                  {a.cost}
                </div>
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>{a.tip}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Money-saving tips */}
      <Section icon={<Lightbulb className="w-4 h-4" />} title="Money-Saving Tips" color="var(--color-amber)">
        <ul className="space-y-3">
          {plan.money_saving_tips?.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-teal)" }} />
              <span className="text-sm" style={{ color: "var(--color-muted)" }}>{tip}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Avoid */}
      {plan.avoid?.length > 0 && (
        <Section icon={<AlertTriangle className="w-4 h-4" />} title="Tourist Traps to Avoid" color="var(--color-coral)">
          <ul className="space-y-2">
            {plan.avoid.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-coral)" }} />
                <span className="text-sm" style={{ color: "var(--color-muted)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Local insight */}
      {plan.local_insight && (
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
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{plan.local_insight}</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div
        className="p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div>
          <div className="font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>Ready to book {plan.destination}?</div>
          <div className="text-sm" style={{ color: "var(--color-muted)" }}>Find the best deals on flights and hotels</div>
        </div>
        <div className="flex gap-3">
          <a
            href={flightUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="px-5 py-3 rounded-xl text-sm font-bold"
            style={{ background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))", color: "oklch(11% 0.018 252)" }}
          >
            Flights →
          </a>
          <a
            href={hotelUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="px-5 py-3 rounded-xl text-sm font-bold border"
            style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
          >
            Hotels →
          </a>
        </div>
      </div>

      <p className="text-xs text-center" style={{ color: "var(--color-muted)" }}>
        AI-generated estimates. Actual costs vary. Booking links are affiliate — we earn a small commission at no cost to you.
      </p>
    </div>
  );
}

function Section({ icon, title, color, children }: { icon: React.ReactNode; title: string; color: string; children: React.ReactNode }) {
  return (
    <div
      className="p-6 rounded-2xl border"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `color-mix(in oklab, ${color} 15%, transparent)`, color }}>
          {icon}
        </div>
        <h3 className="font-bold" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}
