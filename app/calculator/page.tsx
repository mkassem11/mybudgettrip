import type { Metadata } from "next";
import { BudgetCalculatorForm } from "@/components/calculator/BudgetCalculatorForm";

export const metadata: Metadata = {
  title: "Travel Budget Calculator — Real Cost Estimates for 15+ Countries",
  description:
    "Calculate your exact travel budget for Thailand, Vietnam, Georgia, Turkey, Albania, and 15+ more destinations. Choose your accommodation, food, and transport style for an itemized breakdown.",
  keywords: ["travel budget calculator", "how much does it cost to travel", "budget travel cost estimator", "backpacking budget calculator"],
};

export default function CalculatorPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border"
            style={{
              background: "var(--color-teal-glow)",
              borderColor: "color-mix(in oklab, var(--color-teal) 30%, transparent)",
              color: "var(--color-teal)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Real data · No AI guessing · 15+ countries
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Travel Budget
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-teal), var(--color-amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Calculator
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Pick your destination, travel style, and duration. Get a realistic itemized breakdown of exactly what you'll spend — based on real 2025 traveler data, not guesswork.
          </p>
        </div>

        <BudgetCalculatorForm />
      </div>
    </div>
  );
}
