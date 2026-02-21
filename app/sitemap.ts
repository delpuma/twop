import { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/victory-pointe", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/donate", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sponsor", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/programs", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/get-help", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/volunteer", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/letters", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/city-briefing", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/dashboard", priority: 0.6, changeFrequency: "daily" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
