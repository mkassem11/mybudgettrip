"use client";

import { useState, useMemo } from "react";
import { MapPin, Calendar, Bed, Utensils, Bus, Activity, Moon, Calculator } from "lucide-react";
import { COUNTRY_LIST, COUNTRIES, calculateBudget, type BudgetInputs, type CountryKey } from "@/lib/budget-data";
import { BudgetResults } from "./BudgetResults";

const ACCOMMODATION_OPTIONS = [
  { value: "hostel", label: "Hostel / Dorm", desc: "Shared dorms, common areas" },
  { value: "guesthouse", label: "Guesthouse", desc: "Private room, local feel" },
  { value: "hotel", label: "Hotel", desc: "3-star, en-suite" },
  { value: "airbnb", label: "Airbnb / Apartment", desc: "Self-catering" },
] as const;

const FOOD_OPTIONS = [
  { value: "streetFood", label: "Street Food", desc: "Markets, stalls, local spots" },
  { value: "mix", label: "Mix", desc: "Street food + sit-down meals" },
  { value: "localRestaurants", label: "Local Restaurants", desc: "Sit-down local cuisine" },
  { value: "midRange", label: "Mid-Range", desc: "Tourist-friendly restaurants" },
] as const;

const TRANSPORT_OPTIONS = [
  { value: "public", label: "Public Only", desc: "Buses, metro, shared rides" },
  { value: "mixed", label: "Mixed", desc: "Public + occasional taxi" },
  { value: "taxis", label: "Taxis / Uber", desc: "Mostly private transport" },
] as const;

const ACTIVITY_OPTIONS = [
  { value: "free", label: "Free Activities", desc: "Parks, museums, walking tours" },
  { value: "budget", label: "Budget", desc: "Mix of free + paid attractions" },
  { value: "moderate", label: "Moderate", desc: "Tours, day trips, experiences" },
] as const;

const NIGHTLIFE_OPTIONS = [
  { value: "none", label: "None", desc: "No alcohol spending" },
  { value: "occasional", label: "Occasional", desc: "A drink or two some evenings" },
  { value: "frequent", label: "Frequent", desc: "Bars and clubs most nights" },
] as const;

export function BudgetCalculatorForm() {
  const [country, setCountry] = useState<CountryKey>("georgia");
  const [days, setDays] = useState(10);
  const [accommodation, setAccommodation] = useState<BudgetInputs["accommodation"]>("hostel");
  const [food, setFood] = useState<BudgetInputs["food"]>("mix");
  const [transport, setTransport] = useState<BudgetInputs["transport"]>("public");
  const [activities, setActivities] = useState<BudgetInputs["activities"]>("budget");
  const [nightlife, setNightlife] = useState<BudgetInputs["nightlife"]>("none");
  const [calculated, setCalculated] = useState(false);

  const inputs: BudgetInputs = { country, days, accommodation, food, transport, activities, nightlife };

  const result = useMemo(() => calculateBudget(inputs), [country, days, accommodation, food, transport, activities, nightlife]);
  const countryData = COUNTRIES[country];

  const handleCalculate = () => {
    setCalculated(true);
    setTimeout(() => document.getElementById("calculator-results")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div>
      <div
        className="rounded-2xl border p-8 mb-10"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination + Duration */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <MapPin className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
                Destination
              </label>
              <select
                value={country}
                onChange={(e) => { setCountry(e.target.value as CountryKey); setCalculated(false); }}
                className="w-full px-4 py-3.5 rounded-xl text-sm border outline-none appearance-none"
                style={{ background: "var(--color-background)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
              >
                {COUNTRY_LIST.map((c) => (
                  <option key={c.key} value={c.key}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Calendar className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
                Duration: <span style={{ color: "var(--color-amber)" }}>{days} days</span>
              </label>
              <input
                type="range"
                min={3}
                max={60}
                step={1}
                value={days}
                onChange={(e) => { setDays(Number(e.target.value)); setCalculated(false); }}
                className="w-full mt-3"
                style={{ accentColor: "var(--color-amber)" }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "var(--color-muted)" }}>
                <span>3 days</span><span>60 days</span>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-3">
              <Bed className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
              Accommodation
            </label>
            <div className="space-y-2">
              {ACCOMMODATION_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                  style={{
                    background: accommodation === opt.value ? "var(--color-amber-glow)" : "var(--color-background)",
                    borderColor: accommodation === opt.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                  }}
                >
                  <input
                    type="radio"
                    name="accommodation"
                    value={opt.value}
                    checked={accommodation === opt.value}
                    onChange={() => { setAccommodation(opt.value); setCalculated(false); }}
                    className="mt-0.5"
                    style={{ accentColor: "var(--color-amber)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{opt.label}</span>
                      <span className="text-xs font-bold" style={{ color: "var(--color-amber)" }}>
                        ~${countryData.accommodation[opt.value]}/night
                      </span>
                    </div>
                    <div className="text-xs" style={{ color: "var(--color-muted)" }}>{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Food */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-3">
              <Utensils className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
              Food Style
            </label>
            <div className="space-y-2">
              {FOOD_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                  style={{
                    background: food === opt.value ? "var(--color-amber-glow)" : "var(--color-background)",
                    borderColor: food === opt.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                  }}
                >
                  <input
                    type="radio"
                    name="food"
                    value={opt.value}
                    checked={food === opt.value}
                    onChange={() => { setFood(opt.value); setCalculated(false); }}
                    className="mt-0.5"
                    style={{ accentColor: "var(--color-amber)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{opt.label}</span>
                      <span className="text-xs font-bold" style={{ color: "var(--color-amber)" }}>
                        ~${countryData.food[opt.value]}/day
                      </span>
                    </div>
                    <div className="text-xs" style={{ color: "var(--color-muted)" }}>{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Transport */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-3">
              <Bus className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
              Getting Around
            </label>
            <div className="space-y-2">
              {TRANSPORT_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                  style={{
                    background: transport === opt.value ? "var(--color-amber-glow)" : "var(--color-background)",
                    borderColor: transport === opt.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                  }}
                >
                  <input
                    type="radio"
                    name="transport"
                    value={opt.value}
                    checked={transport === opt.value}
                    onChange={() => { setTransport(opt.value); setCalculated(false); }}
                    className="mt-0.5"
                    style={{ accentColor: "var(--color-amber)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{opt.label}</span>
                      <span className="text-xs font-bold" style={{ color: "var(--color-amber)" }}>
                        ~${countryData.transport[opt.value]}/day
                      </span>
                    </div>
                    <div className="text-xs" style={{ color: "var(--color-muted)" }}>{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Activities + Nightlife */}
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-3">
                <Activity className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
                Activities
              </label>
              <div className="space-y-2">
                {ACTIVITY_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                    style={{
                      background: activities === opt.value ? "var(--color-amber-glow)" : "var(--color-background)",
                      borderColor: activities === opt.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                    }}
                  >
                    <input
                      type="radio"
                      name="activities"
                      value={opt.value}
                      checked={activities === opt.value}
                      onChange={() => { setActivities(opt.value); setCalculated(false); }}
                      className="mt-0.5"
                      style={{ accentColor: "var(--color-amber)" }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{opt.label}</span>
                        <span className="text-xs font-bold" style={{ color: "var(--color-amber)" }}>
                          ~${countryData.activities[opt.value]}/day
                        </span>
                      </div>
                      <div className="text-xs" style={{ color: "var(--color-muted)" }}>{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-3">
                <Moon className="w-4 h-4" style={{ color: "var(--color-muted)" }} />
                Nightlife / Drinks
              </label>
              <div className="space-y-2">
                {NIGHTLIFE_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                    style={{
                      background: nightlife === opt.value ? "var(--color-amber-glow)" : "var(--color-background)",
                      borderColor: nightlife === opt.value ? "color-mix(in oklab, var(--color-amber) 40%, transparent)" : "var(--color-border)",
                    }}
                  >
                    <input
                      type="radio"
                      name="nightlife"
                      value={opt.value}
                      checked={nightlife === opt.value}
                      onChange={() => { setNightlife(opt.value); setCalculated(false); }}
                      className="mt-0.5"
                      style={{ accentColor: "var(--color-amber)" }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{opt.label}</span>
                        {opt.value !== "none" && (
                          <span className="text-xs font-bold" style={{ color: "var(--color-amber)" }}>
                            ~${countryData.nightlife[opt.value]}/day
                          </span>
                        )}
                      </div>
                      <div className="text-xs" style={{ color: "var(--color-muted)" }}>{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live preview bar */}
        <div
          className="mt-8 p-5 rounded-xl border"
          style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-muted)" }}>
                Estimated trip cost
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold" style={{ color: "var(--color-amber)", fontFamily: "var(--font-display)" }}>
                  ${result.tripTotal.toLocaleString()}
                </span>
                <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                  – ${result.tripTotalHigh.toLocaleString()} for {days} days
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>Daily average</div>
              <div className="text-xl font-bold" style={{ color: "var(--color-teal)" }}>
                ${result.dailyTotal}/day
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full mt-4 py-5 rounded-xl text-base font-bold transition-all hover:opacity-90 flex items-center justify-center gap-3"
          style={{
            background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
            color: "oklch(11% 0.018 252)",
            boxShadow: "0 4px 32px color-mix(in oklab, var(--color-amber) 25%, transparent)",
          }}
        >
          <Calculator className="w-5 h-5" />
          See Full Budget Breakdown
        </button>
        <p className="text-xs text-center mt-3" style={{ color: "var(--color-muted)" }}>
          Based on real traveler data · Updated 2025 · Free to use
        </p>
      </div>

      {calculated && (
        <div id="calculator-results">
          <BudgetResults breakdown={result} inputs={inputs} countryData={countryData} />
        </div>
      )}
    </div>
  );
}
