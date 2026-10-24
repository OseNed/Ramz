import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

const siteUrl = "https://getramz.com";
const title = "RAMZ | From AI Governance to Responsible AI";
const description =
  "Manage AI systems, navigate regulatory requirements, and turn responsible AI principles into practice, all in one connected platform.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | RAMZ",
  },
  description,
  keywords: [
    "AI governance",
    "Responsible AI",
    "AI regulatory compliance",
    "EU AI Act",
    "NIST AI RMF",
    "AI risk management",
    "AI governance platform",
  ],
  authors: [{ name: "RAMZ" }],
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon-180.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "RAMZ",
    title,
    description,
    images: [{ url: "/images/og-cover.png", width: 1200, height: 630, alt: "RAMZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* General Sans (display) is not on npm/next/font; served from Fontshare. */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
