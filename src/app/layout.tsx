import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

const siteUrl = "https://getramz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramz — AI Governance for the Autonomous Era",
    template: "%s — Ramz",
  },
  description:
    "Ramz is one connected platform to discover, govern, and assess the AI systems and agents your organization builds or uses.",
  keywords: [
    "AI governance",
    "AI compliance",
    "EU AI Act",
    "AI risk management",
    "AI governance platform",
  ],
  authors: [{ name: "Ramz" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ramz",
    title: "Ramz — AI Governance for the Autonomous Era",
    description:
      "One connected platform to discover, govern, and assess AI systems and agents.",
    images: [{ url: "/images/og-cover.png", width: 1200, height: 630, alt: "Ramz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramz — AI Governance for the Autonomous Era",
    description:
      "One connected platform to discover, govern, and assess AI systems and agents.",
    images: ["/images/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
