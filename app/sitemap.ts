import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thamizhagam-reborn.github.io/reborn-countdown",
      lastModified: "2026-08-30",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
