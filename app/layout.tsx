import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AniKenji (Bui Cao Phuong) — Freelance Web Designer & Full-Stack Developer",
  description:
    "Freelance Web Designer & Full-Stack Developer — Crafting high-converting, fast, and modern websites for businesses & creators worldwide.",
  openGraph: {
    title: "AniKenji (Bui Cao Phuong) — Freelance Web Design & Development",
    description:
      "Crafting high-converting, fast, and modern websites for businesses and creators worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased mesh-bg">{children}</body>
    </html>
  );
}
