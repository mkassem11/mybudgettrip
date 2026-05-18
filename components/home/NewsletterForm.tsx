"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-5 py-4 rounded-xl text-sm border outline-none"
        style={{
          background: "var(--color-background)",
          borderColor: "var(--color-border)",
          color: "var(--color-foreground)",
        }}
        required
      />
      <button
        type="submit"
        className="px-6 py-4 rounded-xl text-sm font-semibold whitespace-nowrap transition-all hover:opacity-90"
        style={{
          background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))",
          color: "oklch(11% 0.018 252)",
        }}
      >
        Get Free Template →
      </button>
    </form>
  );
}
