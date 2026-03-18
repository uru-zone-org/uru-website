import "../styles/globals.css";

// src/app/layout.tsx
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070a",
};

export const metadata: Metadata = {
  title: "URU — Strength intelligence",
  description:
    "Real-time biomechanical intelligence for strength training. The first measurement of movement quality, rep by rep.",
  keywords: [
    "strength training",
    "wearable",
    "biomechanics",
    "movement quality",
    "VQΔ",
    "fitness",
  ],
  authors: [{ name: "URU" }],
  openGraph: {
    title: "URU — Strength intelligence",
    description: "Real-time biomechanical intelligence for strength training.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "URU — Strength intelligence",
    description: "Real-time biomechanical intelligence for strength training.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
