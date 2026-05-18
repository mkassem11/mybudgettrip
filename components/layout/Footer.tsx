import Link from "next/link";
import { Globe, Heart } from "lucide-react";

const links = {
  Destinations: [
    { href: "/destinations/tbilisi-georgia", label: "Tbilisi, Georgia" },
    { href: "/destinations/istanbul-turkey", label: "Istanbul, Turkey" },
    { href: "/destinations/sarajevo-bosnia", label: "Sarajevo, Bosnia" },
    { href: "/destinations/sofia-bulgaria", label: "Sofia, Bulgaria" },
  ],
  "Budget Tips": [
    { href: "/budget-tips", label: "All Tips" },
    { href: "/budget-tips#flights", label: "Cheap Flights" },
    { href: "/budget-tips#accommodation", label: "Cheap Stays" },
    { href: "/budget-tips#food", label: "Eating Cheap" },
  ],
  Site: [
    { href: "/about", label: "About" },
    { href: "/destinations", label: "All Destinations" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5" style={{ color: "var(--color-amber)" }} />
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span style={{ color: "var(--color-amber)" }}>My</span>
                <span style={{ color: "var(--color-foreground)" }}>BudgetTrip</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Real budget travel guides for real travellers. No fluff, no luxury hotels — just honest advice for exploring the world affordably.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-amber)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-foreground"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-xs"
          style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
        >
          <p>© {new Date().getFullYear()} MyBudgetTrip. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 fill-current" style={{ color: "var(--color-coral)" }} /> for budget travellers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
