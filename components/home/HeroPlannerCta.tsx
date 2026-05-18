"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, DollarSign } from "lucide-react";

export function HeroPlannerCta() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;
    const params = new URLSearchParams({ destination, budget: String(budget) });
    router.push(`/planner?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto"
    >
      <div className="relative flex-1">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "var(--color-muted)" }}
        />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Where do you want to go?"
          className="w-full pl-11 pr-4 py-4 rounded-xl text-base border outline-none"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
            color: "var(--color-foreground)",
          }}
        />
      </div>
      <div className="relative">
        <DollarSign
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "var(--color-muted)" }}
        />
        <select
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="pl-9 pr-4 py-4 rounded-xl text-base border outline-none appearance-none w-full sm:w-auto"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
            color: "var(--color-foreground)",
          }}
        >
          <option value={20}>$20/day</option>
          <option value={30}>$30/day</option>
          <option value={50}>$50/day</option>
          <option value={80}>$80/day</option>
          <option value={120}>$120/day</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-8 py-4 rounded-xl text-base font-bold transition-all hover:opacity-90 whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
          color: "oklch(11% 0.018 252)",
          boxShadow: "0 4px 24px color-mix(in oklab, var(--color-amber) 30%, transparent)",
        }}
      >
        Plan My Trip →
      </button>
    </form>
  );
}
