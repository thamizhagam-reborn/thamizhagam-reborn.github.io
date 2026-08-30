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
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/thamizhagam-logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/thamizhagam-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Thamizhagam Reborn | Official Launch Countdown",
    description:
      "Remembering our greatness, let us build our future ~ Thamizhagam Reborn. Launching September 11, 2026 at 6:30 PM.",
    images: ["/thamizhagam-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.variable}>
        {children}
      </body>
    </html>
  );
}
