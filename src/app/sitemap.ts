import type { MetadataRoute } from "next";
import { abs, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.updated);
  const routes: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/what-is-pricing-intelligence-ai", 0.9, "monthly"],
    ["/software-directory", 0.8, "monthly"],
    ["/calculator", 0.7, "monthly"],
    ["/llms.txt", 0.5, "monthly"],
    ["/llms-full.txt", 0.4, "monthly"],
    ["/api/v1/entity", 0.4, "monthly"],
  ];
  return routes.map(([path, priority, changeFrequency]) => ({
    url: abs(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
