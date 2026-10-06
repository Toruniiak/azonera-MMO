import Link from "next/link";
import type { NewsPost, NewsBlock } from "@/content/news";
import { latestNews, featuredNews } from "@/content/news";
import { asset, formatDate } from "@/lib/format";
import {
  Reveal,
  SectionHeading,
  CategoryBadge,
  IconArrowRight,
  IconBolt,
} from "@/components/ui";

/* ================= Karta newsa ================= */

export function NewsCard({ post, delay = 0 }: { post: NewsPost; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col border border-line bg-coal/70 transition-colors duration-300 hover:border-ember/40">
        <Link
          href={`/news/${post.slug}`}
          className="flex h-full flex-col"
          aria-label={post.title}
        >
          <div className="img-reveal relative aspect-video overflow-hidden">
            <img
              src={asset(post.cover)}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coal/90 via-transparent to-transparent"
              aria-hidden
            />
            <span className="absolute left-3 top-3">
              <CategoryBadge label={post.category} />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dim">
              {formatDate(post.date)}
            </p>
            <h3 className="mt-2.5 font-display text-lg font-bold uppercase leading-snug tracking-[0.04em] text-bone transition-colors group-hover:text-emberbright">
              {post.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
              {post.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember transition-colors group-hover:text-emberbright">
              Read more
              <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

/* ================= Siatka najnowszych newsów ================= */

export function LatestUpdates({ limit = 3 }: { limit?: number }) {
  const posts = latestNews(limit);
  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Aktualizacje"
            title="Latest Updates"
            description="Devlogi, notatki patchy i ogłoszenia prosto z produkcji — bez luk w informowaniu."
          />
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember transition-colors hover:text-emberbright"
          >
            Wszystkie aktualizacje
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <NewsCard key={post.slug} post={post} delay={i * 110} />
        ))}
      </div>
    </div>
  );
}

/* ================= Featured update (LATEST DEVELOPMENT) ================= */

export function FeaturedUpdate() {
  const post = featuredNews;
  const lead = post.content.find((b): b is Extract<NewsBlock, { type: "p" }> => b.type === "p");

  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-ember/60" />
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
            Latest Development
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Link
            href={`/news/${post.slug}`}
            className="img-reveal cut block border border-line"
            aria-label={`Zobacz aktualizację: ${post.title}`}
          >
            <img
              src={asset(post.cover)}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </Link>
        </Reveal>

        <Reveal delay={140} className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <CategoryBadge label={post.category} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-dim">
              {formatDate(post.date)}
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-bone sm:text-4xl">
            <Link
              href={`/news/${post.slug}`}
              className="transition-colors hover:text-emberbright"
            >
              {post.title}
            </Link>
          </h3>
          {lead && (
            <p className="mt-5 text-[15px] leading-relaxed text-ash">
              {lead.text}
            </p>
          )}
          <Link
            href={`/news/${post.slug}`}
            className="btn btn-primary cut mt-8"
          >
            Zobacz aktualizację
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= Renderer treści newsa ================= */

export function NewsContent({ blocks }: { blocks: NewsBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-4 font-display text-2xl font-bold uppercase tracking-[0.05em] text-bone"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-[15.5px] leading-[1.85] text-bone/85">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3 border-l border-ember/40 pl-5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ash">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <aside
                key={i}
                className="flex gap-4 border border-ember/30 bg-ember/[0.06] p-5"
              >
                <IconBolt className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <p className="text-sm leading-relaxed text-bone/85">{block.text}</p>
              </aside>
            );
          case "image":
            return (
              <figure key={i} className="img-reveal border border-line">
                <img
                  src={asset(block.src)}
                  alt={block.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                />
                {block.caption && (
                  <figcaption className="border-t border-line bg-coal px-4 py-3 text-xs italic text-dim">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
