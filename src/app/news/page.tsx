import type { Metadata } from "next";
import { NEWS } from "@/content/news";
import { NewsCard } from "@/components/News";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "News i devlogi",
  description:
    "Aktualizacje, devlogi i notatki patchy Azonera MMO — śledź produkcję polskiego MMORPG krok po kroku.",
};

export default function NewsPage() {
  return (
    <>
      <section className="relative border-b border-line bg-coal/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
              <span aria-hidden className="h-px w-8 bg-ember/60" />
              Aktualizacje
            </p>
            <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-[0.04em] text-bone sm:text-5xl">
              News <span className="text-ember">&amp;</span> Devlog
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ash">
              Wszystko, co dzieje się w Azonerze — devlogi, testy, notatki
              patchy i ogłoszenia. Bez luk, bez lukrowania.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dim">
          {NEWS.length} wpisów · od najnowszych
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((post, i) => (
            <NewsCard key={post.slug} post={post} delay={(i % 3) * 100} />
          ))}
        </div>
      </section>
    </>
  );
}
