import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Budget Travel Blog — Guides, Tips & Itineraries",
  description:
    "In-depth budget travel guides, backpacking itineraries, money-saving tips, and destination comparisons for travellers exploring on $25–40/day.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-amber)" }}>
            The Blog
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>
            Budget Travel
            <br />
            <span style={{
              background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Guides & Tips
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--color-muted)" }}>
            Real travel writing for real budgets. Itineraries, cost breakdowns, destination comparisons, and money-saving strategies from travellers who actually do it this way.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            className="px-4 py-2 rounded-full text-sm font-medium border"
            style={{ background: "var(--color-amber-glow)", borderColor: "color-mix(in oklab, var(--color-amber) 30%, transparent)", color: "var(--color-amber)" }}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-muted)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border mb-12 transition-all hover:shadow-2xl block"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <div className="md:w-2/5 relative overflow-hidden" style={{ minHeight: "280px" }}>
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%)" }} />
            <div className="absolute bottom-0 left-0 p-6">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                style={{ background: "var(--color-amber-glow)", color: "var(--color-amber)", border: "1px solid color-mix(in oklab, var(--color-amber) 30%, transparent)" }}
              >
                Featured
              </span>
              <div className="text-xs text-white/70">{featured.category}</div>
            </div>
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3 group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {featured.title}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
              {featured.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-muted)" }}>
                <Clock className="w-3.5 h-3.5" />
                {featured.readTime} min read
                <span>·</span>
                {new Date(featured.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--color-amber)" }}>
                Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl block"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              {/* Photo header */}
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 60%)" }} />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h2
                  className="text-lg font-bold mb-2 line-clamp-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm line-clamp-2 mb-4" style={{ color: "var(--color-muted)" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs" style={{ color: "var(--color-muted)" }}>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {post.readTime} min
                  </div>
                  <span className="font-semibold" style={{ color: "var(--color-amber)" }}>
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
