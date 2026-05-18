import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Heart, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — MyBudgetTrip",
  description:
    "MyBudgetTrip is an honest budget travel resource built for backpackers who want real cost breakdowns and practical itineraries.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-teal)" }}
          >
            About Us
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for Travellers
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-teal), var(--color-amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not Tourists
            </span>
          </h1>
        </div>

        {/* Story */}
        <div className="space-y-6 text-base leading-relaxed mb-16" style={{ color: "var(--color-muted)" }}>
          <p>
            MyBudgetTrip exists because most travel content is funded by the tourism industry and designed to upsell you — premium hotels, expensive tours, overpriced restaurants. We take a different approach.
          </p>
          <p>
            Every guide on this site is built around a real daily budget with honest cost breakdowns. We focus on the regions where your money goes furthest — Eastern Europe, the Caucasus, the Balkans, and MENA — and we go deep on each destination rather than producing thin listicles about everywhere.
          </p>
          <p>
            Our goal is simple: help you see more of the world by spending less to do it.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "Honest",
              description: "We tell you when a destination is hard to do cheaply, not just when it's easy.",
              color: "var(--color-amber)",
            },
            {
              icon: Heart,
              title: "Independent",
              description: "We use affiliate links (disclosed) but they never change which destinations we recommend.",
              color: "var(--color-coral)",
            },
            {
              icon: Globe,
              title: "Practical",
              description: "Real itineraries, real prices, real transport options — not aspirational nonsense.",
              color: "var(--color-teal)",
            },
          ].map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `color-mix(in oklab, ${color} 15%, transparent)` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3
                className="font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <div
          className="p-6 rounded-2xl border mb-16"
          style={{ background: "var(--color-surface)", borderColor: "color-mix(in oklab, var(--color-amber) 25%, transparent)" }}
        >
          <h3
            className="font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-amber)" }}
          >
            Affiliate Disclosure
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Some links on this site are affiliate links through Travel Payouts. If you book flights or hotels using our links, we earn a small commission at no extra cost to you. This is how we keep the site free and cover running costs. We only link to services we genuinely recommend and all affiliate relationships are clearly marked.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
              color: "oklch(11% 0.018 252)",
            }}
          >
            Start Exploring <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
