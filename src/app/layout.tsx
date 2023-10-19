import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crumb Culture",
  description:
    "Explore the world of fermentation with our premium products and resources.",
  keywords:
    "fermentation, fermented foods, probiotics, sourdough, kombucha, home fermentation, local business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
