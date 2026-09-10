import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thamizhagam-reborn.vercel.app"),
  title: "Thamizhagam Reborn | Launch Countdown",
  description:
    "Remembering our greatness, let us build our future ~ Thamizhagam Reborn. Official Launch on September 11, 2026 at 6:30 PM.",
  keywords: [
    "Thamizhagam Reborn",
    "Thamizhagam",
    "Launch Countdown",
    "September 11 2026",
    "Tamil Nadu",
    "Reborn",
    "Grand Launch",
    "Countdown Timer",
  ],
  authors: [{ name: "Thamizhagam Reborn" }],
  creator: "Thamizhagam Reborn",
  icons: {
    icon: [
      { url: "/reborn-countdown/thamizhagam-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/reborn-countdown/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/reborn-countdown/favicon-32.png", sizes: "16x16", type: "image/png" },
      { url: "/reborn-countdown/favicon.ico", rel: "shortcut icon" },
      { url: "/reborn-countdown/thamizhagam-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "TMRP Launch | Thamizhagam Reborn",
    description: "An immersive cinematic countdown experience for Thamizhagam Reborn",
    url: "https://thamizhagam-reborn.github.io",
    images: ["/reborn-countdown/thamizhagam-logo.png"],
  },
};

import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} bg-black text-white antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
