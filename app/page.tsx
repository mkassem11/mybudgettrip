import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Calculator, Plane, TrendingDown, Users, Star } from "lucide-react";
import { budgetTips } from "@/lib/destinations";
import { NewsletterForm } from "@/components/home/NewsletterForm";
import { HotelDeals } from "@/components/deals/HotelDeals";
import { HeroPlannerCta } from "@/components/home/HeroPlannerCta";

const FEATURED_DESTINATIONS = [
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "Southeast Asia",
    dailyBudget: 25,
    emoji: "🇹🇭",
    coverImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop&q=80",
    tagline: "Stunning beaches, ancient temples, and legendary street food — all on a shoestring budget.",
    bestMonths: "Nov–Feb",
    tags: ["Beaches", "Street Food", "Culture"],
    href: "/destinations/thailand",
    gradient: "oklch(20% 0.05 60)",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "Southeast Asia",
    dailyBudget: 22,
    emoji: "🇻🇳",
    coverImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80",
    tagline: "Halong Bay, Hoi An lanterns, and pho for $1.50. Vietnam defies every budget.",
    bestMonths: "Feb–Apr",
    tags: ["Scenery", "Food", "History"],
    href: "/destinations/vietnam",
    gradient: "oklch(18% 0.04 140)",
  },
  {
    slug: "tbilisi-georgia",
    name: "Tbilisi",
    country: "Georgia",
    region: "Caucasus",
    dailyBudget: 30,
    emoji: "🇬🇪",
    coverImage: "https://images.unsplash.com/photo-1565008887967-afbd4d41edec?w=800&auto=format&fit=crop&q=80",
    tagline: "Free wine, dramatic mountains, and one of Europe's most charming old towns.",
    bestMonths: "May–Oct",
    tags: ["Wine", "Mountains", "History"],
    href: "/destinations/tbilisi-georgia",
    gradient: "oklch(18% 0.04 30)",
  },
  {
    slug: "albania",
    name: "Albania",
    country: "Albania",
    region: "Balkans",
    dailyBudget: 28,
    emoji: "🇦🇱",
    coverImage: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&auto=format&fit=crop&q=80",
    tagline: "Europe's last undiscovered gem — Riviera beaches and Ottoman bazaars for next to nothing.",
    bestMonths: "Jun–Sep",
    tags: ["Beaches", "History", "Off-the-beaten-path"],
    href: "/destinations/albania",
    gradient: "oklch(20% 0.05 15)",
  },
  {
    slug: "istanbul-turkey",
    name: "Istanbul",
    country: "Turkey",
    region: "Eurasia",
    dailyBudget: 35,
    emoji: "🇹🇷",
    coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80",
    tagline: "A city on two continents — world-class food, grand mosques, and bazaars that never end.",
    bestMonths: "Apr–Jun",
    tags: ["History", "Food", "Culture"],
    href: "/destinations/istanbul-turkey",
    gradient: "oklch(18% 0.04 260)",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    dailyBudget: 32,
    emoji: "🇮🇩",
    coverImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&auto=format&fit=crop&q=80",
    tagline: "Rice terraces, surf breaks, and spiritual temples — Bali rewards the patient budget traveler.",
    bestMonths: "May–Sep",
    tags: ["Beaches", "Temples", "Surf"],
    href: "/destinations/bali",
    gradient: "oklch(18% 0.05 100)",
  },
];

const TOOLS = [
  {
    href: "/planner",
    icon: Sparkles,
    label: "AI Trip Planner",
    desc: "Tell us your destination, budget, and style. Get a full plan with neighborhoods, food, transport, and money-saving tips — in seconds.",
    color: "var(--color-amber)",
    glow: "var(--color-amber-glow)",
    cta: "Plan my trip →",
  },
  {
    href: "/calculator",
    icon: Calculator,
    label: "Budget Calculator",
    desc: "Pick your destination and travel style. Get an itemized daily breakdown of exactly what you'll spend — based on real 2025 data.",
    color: "var(--color-teal)",
    glow: "var(--color-teal-glow)",
    cta: "Calculate costs →",
  },
  {
    href: "/destinations",
    icon: Plane,
    label: "Cheap Flight Finder",
    desc: "See historical flight price calendars for each destination. Know the cheapest months before you book.",
    color: "var(--color-coral)",
    glow: "color-mix(in oklab, var(--color-coral) 12%, transparent)",
    cta: "Check prices →",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
            style={{ background: "var(--color-amber)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
            style={{ background: "var(--color-teal)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-10"
            style={{ background: "var(--color-coral)" }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 border"
            style={{
              background: "var(--color-amber-glow)",
              borderColor: "color-mix(in oklab, var(--color-amber) 30%, transparent)",
              color: "var(--color-amber)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            AI-powered · Real data · Free to use
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Plan Your Trip.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Know Exactly What It Costs.
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted)" }}>
            AI trip planner, real budget calculator, and live hotel deals — everything you need to travel smarter and spend less.
          </p>

          <HeroPlannerCta />

          <div
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-16 pt-16 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            {[
              { value: "15+", label: "Countries covered" },
              { value: "$25", label: "Min daily budget" },
              { value: "Free", label: "No account needed" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-amber)" }}
                >
                  {value}
                </div>
                <div className="text-xs" style={{ color: "var(--color-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools Section ───────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-amber)" }}>Free Tools</p>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Everything You Need
              <br />to Plan a Budget Trip
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOOLS.map(({ href, icon: Icon, label, desc, color, glow, cta }) => (
              <Link
                key={href}
                href={href}
                className="group p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.02] block"
                style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: glow }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{label}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>{desc}</p>
                <span className="text-sm font-semibold flex items-center gap-1 transition-all group-hover:gap-2" style={{ color }}>
                  {cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Destinations ────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-amber)" }}>
                Hand-picked
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                Top Budget Destinations
              </h2>
            </div>
            <Link href="/destinations" className="hidden sm:flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-amber)" }}>
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_DESTINATIONS.map((dest, i) => (
              <Link
                href={dest.href}
                key={dest.slug}
                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl block"
                style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={dest.coverImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{dest.emoji}</span>
                  </div>
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border"
                    style={{
                      background: "var(--color-amber-glow)",
                      color: "var(--color-amber)",
                      borderColor: "color-mix(in oklab, var(--color-amber) 25%, transparent)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    from ${dest.dailyBudget}/day
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs mb-2" style={{ color: "var(--color-muted)" }}>
                    <MapPin className="w-3 h-3" />
                    {dest.country} · {dest.region}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{dest.name}</h3>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--color-muted)" }}>{dest.tagline}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md" style={{ background: "var(--color-surface-2)", color: "var(--color-muted)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
                    <span className="text-sm font-medium" style={{ color: "var(--color-teal)" }}>Best: {dest.bestMonths}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--color-amber)" }}>
                      Full guide <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live Hotel Deals ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-coral)" }}>
              Live Deals — Updated Hourly
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Hotels on Sale Right Now
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
              We highlight discounted properties so you never pay full price.
            </p>
          </div>
          <HotelDeals defaultLocation="Bangkok" locationLabel="Bangkok" showSearch />
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-teal)" }}>
              Why MyBudgetTrip
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Budget Travel, Done Right
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Real Cost Data",
                description: "Every number in our budget calculator comes from actual traveler reports, not guesswork. Updated for 2025.",
                color: "var(--color-amber)",
              },
              {
                icon: Sparkles,
                title: "AI-Powered Planning",
                description: "Our AI planner gives you a complete trip plan tailored to your budget, style, and group in under 10 seconds.",
                color: "var(--color-teal)",
              },
              {
                icon: Users,
                title: "No Hidden Agenda",
                description: "We earn a small commission when you book through our links — that's our only revenue. No sponsored rankings.",
                color: "var(--color-coral)",
              },
            ].map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border"
                style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `color-mix(in oklab, ${color} 15%, transparent)` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 border"
            style={{
              background: "var(--color-teal-glow)",
              borderColor: "color-mix(in oklab, var(--color-teal) 30%, transparent)",
              color: "var(--color-teal)",
            }}
          >
            <Star className="w-3 h-3 fill-current" /> Free — No spam, ever
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Get Weekly
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-teal), var(--color-amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Budget Travel Deals
            </span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--color-muted)" }}>
            Join 2,400+ travellers. Weekly flight deals, destination guides, and money-saving tips — straight to your inbox.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs" style={{ color: "var(--color-muted)" }}>Unsubscribe anytime. We never sell your data.</p>
        </div>
      </section>
    </>
  );
}
