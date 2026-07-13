import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kobayashi Kenji — Frontend Engineer & DevOps",
  description:
    "Portfolio of Bui Cao Phuong (Kobayashi Kenji) — Frontend Engineer, Backend Engineer & DevOps enthusiast. CEO of Kensobanto, Inc.",
  openGraph: {
    title: "Kobayashi Kenji — Frontend Engineer & DevOps",
    description: "Building modern digital experiences with Node.js, React, Next.js & creative engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased mesh-bg">{children}</body>
    </html>
  );
}
