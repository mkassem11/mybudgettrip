import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-16 pb-24">
      {/* Hero image */}
      <div className="relative overflow-hidden" style={{ height: "420px" }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-6 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Posts
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold border" style={{ background: "var(--color-amber-glow)", borderColor: "color-mix(in oklab, var(--color-amber) 30%, transparent)", color: "var(--color-amber)" }}>
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white/60">
                <Clock className="w-3.5 h-3.5" /> {post.readTime} min read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/60">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
            </div>
            <h1
              className="text-3xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Excerpt */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-10 mb-4">
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-muted)" }}>
          {post.excerpt}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Article */}
        <article
          className="prose-budget"
          style={{
            fontSize: "1rem",
            lineHeight: "1.75",
            color: "var(--color-muted)",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Keywords */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-2" style={{ borderColor: "var(--color-border)" }}>
          <Tag className="w-4 h-4 mt-0.5" style={{ color: "var(--color-muted)" }} />
          {post.keywords.map((kw) => (
            <span
              key={kw}
              className="text-xs px-3 py-1.5 rounded-full border"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-muted)" }}
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="p-5 rounded-2xl border transition-all hover:scale-[1.02] block"
                  style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                >
                  <div className="text-xs mb-2" style={{ color: "var(--color-amber)" }}>{p.category}</div>
                  <h3 className="text-sm font-bold mb-2 line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>{p.readTime} min read</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
