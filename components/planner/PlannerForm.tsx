"use client";

import { useState } from "react";
import { Loader2, MapPin, DollarSign, Calendar, Users, Compass } from "lucide-react";
import { PlannerResults } from "./PlannerResults";
import type { PlannerOutput, PlannerInput } from "@/app/api/planner/route";

const TRAVEL_STYLES = [
  { value: "backpacking", label: "Backpacking", desc: "Hostels, street food, local transport" },
  { value: "comfort", label: "Comfort", desc: "Mid-range hotels, sit-down meals" },
  { value: "luxury-lite", label: "Luxury-lite", desc: "Boutique hotels, occasional splurges" },
];

const GROUP_TYPES = [
  { value: "solo", label: "Solo" },
  { value: "couple", label: "Couple" },
  { value: "friends", label: "Friends" },
];

export function PlannerForm() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState(40);
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState<PlannerInput["style"]>("backpacking");
  const [group, setGroup] = useState<PlannerInput["group"]>("solo");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ plan: PlannerOutput; input: PlannerInput } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, budget, days, style, group }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error ?? "Failed");
      setResult(data);
      setTimeout(() => document.getElementById("planner-results")?.scrollIntoView({ behavior: "smooth" }), 100);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border p-8 mb-10"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Destination */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2">Where do you want to go?</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Thailand, Tbilisi, Bali, Istanbul..."
                className="w-full pl-11 pr-4 py-4 rounded-xl text-base border outline-none"
                style={{ background: "var(--color-background)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
                required
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Daily budget: <span style={{ color: "var(--color-amber)" }}>${budget}/day</span>
            </label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
              <input
                type="range"
                min={15}
                max={200}
                step={5}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full mt-3"
                style={{ accentColor: "var(--color-amber)" }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1" style={{ color: "var(--color-muted)" }}>
              <span>$15 (ultra-budget)</span><span>$200 (luxury-lite)</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Duration: <span style={{ color: "var(--color-amber)" }}>{days} days</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-muted)" }} />
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full mt-3"
                style={{ accentColor: "var(--color-amber)" }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1" style={{ color: "var(--color-muted)" }}>
              <span>3 days</span><span>30 days</span>
            </div>
          </div>

          {/* Travel Style */}
          <div>
            <label className="block text-sm font-medium mb-3">
              <Compass className="inline w-4 h-4 mr-1" style={{ color: "var(--color-muted)" }} />
              Travel style
            </label>
            <div className="space-y-2">
              {TRAVEL_STYLES.map((s) => (
                <label
                  key={s.value}
                  className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                  style={{
                    background: style === s.value ? "var(--color-amber-glow)" : "var(--color-background)",
                    borderColor: style === s.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                  }}
                >
                  <input
                    type="radio"
                    name="style"
                    value={s.value}
                    checked={style === s.value}
                    onChange={() => setStyle(s.value as PlannerInput["style"])}
                    className="mt-0.5"
                    style={{ accentColor: "var(--color-amber)" }}
                  />
                  <div>
                    <div className="text-sm font-medium">{s.label}</div>
                    <div className="text-xs" style={{ color: "var(--color-muted)" }}>{s.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Group */}
          <div>
            <label className="block text-sm font-medium mb-3">
              <Users className="inline w-4 h-4 mr-1" style={{ color: "var(--color-muted)" }} />
              Travelling as
            </label>
            <div className="flex gap-3">
              {GROUP_TYPES.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setGroup(g.value as PlannerInput["group"])}
                  className="flex-1 py-3 rounded-xl text-sm font-medium border transition-all"
                  style={{
                    background: group === g.value ? "var(--color-amber-glow)" : "var(--color-background)",
                    borderColor: group === g.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                    color: group === g.value ? "var(--color-amber)" : "var(--color-muted)",
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>

            {/* Summary */}
            <div
              className="mt-6 p-5 rounded-xl border"
              style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
            >
              <div className="text-xs mb-3 font-semibold uppercase tracking-wider" style={{ color: "var(--color-muted)" }}>Your trip summary</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Destination</span>
                  <span className="font-medium">{destination || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Daily budget</span>
                  <span className="font-medium" style={{ color: "var(--color-amber)" }}>${budget}/day</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Duration</span>
                  <span className="font-medium">{days} days</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Total estimate</span>
                  <span className="font-medium" style={{ color: "var(--color-teal)" }}>${budget * days}–${Math.round(budget * days * 1.2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm mb-4 text-center" style={{ color: "var(--color-coral)" }}>{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !destination.trim()}
          className="w-full py-5 rounded-xl text-base font-bold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          style={{
            background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
            color: "oklch(11% 0.018 252)",
            boxShadow: "0 4px 32px color-mix(in oklab, var(--color-amber) 25%, transparent)",
          }}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Building your plan...
            </>
          ) : (
            "Plan My Budget Trip →"
          )}
        </button>
        <p className="text-xs text-center mt-3" style={{ color: "var(--color-muted)" }}>
          Free · No account needed · Powered by GPT-4o-mini
        </p>
      </form>

      {/* Results */}
      {result && (
        <div id="planner-results">
          <PlannerResults plan={result.plan} input={result.input} />
        </div>
      )}
    </div>
  );
}
