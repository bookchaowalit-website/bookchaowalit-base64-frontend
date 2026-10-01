import type { Metadata } from "next";
import { Barlow_Condensed, Fira_Code } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exposure / 64 — Base64 bench",
  description: "Encode and decode Base64 text fully in the browser. UTF-8 safe, no upload.",
  keywords: ["base64","encoder","decoder","utf-8","developer tools"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  publisher: "Bookchaowalit",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Exposure / 64 — Base64 bench",
    description: "Encode and decode Base64 text fully in the browser. UTF-8 safe, no upload.",
    siteName: "Bookchaowalit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exposure / 64 — Base64 bench",
    description: "Encode and decode Base64 text fully in the browser. UTF-8 safe, no upload.",
    creator: "@bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${fira.variable}`}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
