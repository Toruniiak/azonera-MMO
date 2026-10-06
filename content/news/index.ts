import { POSTS } from "./posts";

export type { NewsPost, NewsBlock, NewsCategory } from "./posts";
import type { NewsPost, NewsCategory } from "./posts";

/** Wszystkie newsy, posortowane od najnowszych. */
export const NEWS: NewsPost[] = [...POSTS].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export const featuredNews: NewsPost = NEWS[0];
export const latestNews = (count = 3): NewsPost[] => NEWS.slice(0, count);

export const getPost = (slug: string): NewsPost | undefined =>
  NEWS.find((post) => post.slug === slug);

export const NEWS_CATEGORIES: NewsCategory[] = [
  "DEVLOG",
  "COMBAT",
  "WORLD",
  "MONSTERS",
  "EFFECTS",
  "SOUNDS",
  "ANDROID",
  "PC",
  "UI",
  "SYSTEM",
  "TESTS",
  "PATCH NOTES",
  "ANNOUNCEMENT",
];
