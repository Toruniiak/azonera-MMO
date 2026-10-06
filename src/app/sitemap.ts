import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { NEWS } from "@/content/news";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(
    Math.max(...NEWS.map((p) => new Date(p.date).getTime())),
  );

  const pages = [
    { path: "/", lastmod: now, priority: 1 },
    { path: "/news", lastmod: now, priority: 0.9 },
    { path: "/media", lastmod: now, priority: 0.8 },
    { path: "/roadmap", lastmod: now, priority: 0.8 },
    { path: "/tests", lastmod: now, priority: 0.9 },
    { path: "/download", lastmod: now, priority: 1 },
  ];

  const posts = NEWS.map((post) => ({
    url: new URL(`/news/${post.slug}`, SITE_URL).href,
    lastModified: new Date(post.date),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...pages.map((p) => ({
      url: new URL(p.path, SITE_URL).href,
      lastModified: p.lastmod,
      priority: p.priority,
      changeFrequency: "weekly" as const,
    })),
    ...posts,
  ];
}
