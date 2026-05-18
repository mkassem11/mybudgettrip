import type { Metadata } from "next";
import { PlannerForm } from "@/components/planner/PlannerForm";

export const metadata: Metadata = {
  title: "AI Budget Trip Planner — Get a Free Custom Travel Budget",
  description:
    "Enter your destination, budget, and travel style. Our AI generates a complete trip plan with real costs, cheap neighborhoods, money-saving tips, and affiliate booking links.",
  keywords: ["ai trip planner", "budget travel planner", "free trip planning tool", "travel budget calculator ai"],
};

export default function PlannerPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border"
            style={{
              background: "var(--color-amber-glow)",
              borderColor: "color-mix(in oklab, var(--color-amber) 30%, transparent)",
              color: "var(--color-amber)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Powered by AI · Free to use
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AI Budget
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trip Planner
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Tell us your destination, daily budget, and travel style. Get a complete, honest breakdown of real costs, cheap neighborhoods, what to eat, and how to save — in seconds.
          </p>
        </div>

        <PlannerForm />
      </div>
    </div>
  );
}
