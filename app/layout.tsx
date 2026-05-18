import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "MyBudgetTrip — Travel the World for Less",
    template: "%s | MyBudgetTrip",
  },
  description:
    "Practical budget travel guides, itineraries, and tips to help you explore the world without breaking the bank.",
  keywords: ["budget travel", "cheap travel", "backpacking", "travel on a budget", "affordable destinations"],
  openGraph: {
    type: "website",
    siteName: "MyBudgetTrip",
    url: "https://mybudgettrip.net",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
