"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/planner", label: "AI Planner" },
  { href: "/calculator", label: "Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "color-mix(in oklab, var(--color-background) 85%, transparent)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Globe
            className="w-5 h-5 transition-colors"
            style={{ color: "var(--color-amber)" }}
          />
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span style={{ color: "var(--color-amber)" }}>My</span>
            <span style={{ color: "var(--color-foreground)" }}>BudgetTrip</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-amber bg-amber/10"
                    : "text-muted hover:text-foreground hover:bg-surface-2"
                )}
                style={
                  pathname === href || pathname.startsWith(href + "/")
                    ? { color: "var(--color-amber)", background: "var(--color-amber-glow)" }
                    : { color: "var(--color-muted)" }
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/destinations"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
            color: "oklch(11% 0.018 252)",
          }}
        >
          Explore Destinations
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-muted)" }}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 border-t"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        >
          <ul className="flex flex-col gap-1 pt-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "var(--color-muted)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/destinations"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 rounded-lg text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
                  color: "oklch(11% 0.018 252)",
                }}
              >
                Explore Destinations
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
