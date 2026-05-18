import type { Metadata } from "next";
import { CheckCircle, Clock } from "lucide-react";
import { budgetTips } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Budget Travel Tips — Save Money on Every Trip",
  description:
    "Practical, tested tips for spending less on flights, accommodation, food, and transport so you can travel further for less.",
};

export default function BudgetTipsPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-coral)" }}
          >
            The Essentials
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Budget Travel
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-coral), var(--color-amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tips That Actually Work
            </span>
          </h1>
          <p className="text-lg" style={{ color: "var(--color-muted)" }}>
            No gimmicks, no outdated advice. These are the strategies we personally use to travel on $25–40/day.
          </p>
        </div>

        {/* Tips */}
        <div className="space-y-16">
          {budgetTips.map((tip, i) => (
            <article
              key={tip.slug}
              id={tip.slug}
              className="scroll-mt-24"
            >
              {/* Section header */}
              <div
                className="flex items-center gap-4 p-6 rounded-2xl border mb-8"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span className="text-4xl">{tip.emoji}</span>
                <div className="flex-1">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-amber)" }}
                  >
                    {tip.category}
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tip.title}
                  </h2>
                </div>
                <div
                  className="hidden sm:flex items-center gap-1.5 text-xs flex-shrink-0"
                  style={{ color: "var(--color-muted)" }}
                >
                  <Clock className="w-3.5 h-3.5" />
                  {tip.readTime} min read
                </div>
              </div>

              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
                {tip.excerpt}
              </p>

              {/* Tip list */}
              <ul className="space-y-4">
                {tip.tips.map((t, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-4 p-5 rounded-xl border"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "var(--color-amber-glow)",
                        color: "var(--color-amber)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {j + 1}
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>

              {i < budgetTips.length - 1 && (
                <div
                  className="mt-16 border-b"
                  style={{ borderColor: "var(--color-border)" }}
                />
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 p-10 rounded-3xl border text-center"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Plan Your Trip?
          </h3>
          <p className="mb-8" style={{ color: "var(--color-muted)" }}>
            Browse our destination guides with full daily budgets, itineraries, and insider tips.
          </p>
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
              color: "oklch(11% 0.018 252)",
            }}
          >
            Browse Destinations →
          </a>
        </div>
      </div>
    </div>
  );
}
