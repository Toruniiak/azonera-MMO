"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MediaShot } from "@/data/media";
import { asset } from "@/lib/format";
import {
  IconChevronLeft,
  IconChevronRight,
  IconPlay,
  IconBolt,
} from "@/components/ui";

interface MediaGalleryProps {
  items: MediaShot[];
  emptyTitle?: string;
  emptyNote?: string;
  columns?: "auto" | "two";
}

/**
 * Responsywna galeria z lightboxem:
 * lazy loading, klawiatura (Esc / strzałki), fullscreen na żądanie,
 * aria-labels i czytelne stany puste (COMING SOON).
 */
export default function MediaGallery({
  items,
  emptyTitle = "Coming soon",
  emptyNote,
  columns = "auto",
}: MediaGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => {
        if (cur === null) return cur;
        return (cur + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const enterFullscreen = useCallback(() => {
    const el = document.fullscreenElement
      ? null
      : document.querySelector<HTMLDivElement>("[data-lightbox-root]");
    el?.requestFullscreen?.().catch(() => {});
  }, []);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center border border-dashed border-line bg-coal/50 px-6 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center border border-line bg-steel text-ember">
          <IconPlay className="h-5 w-5" />
        </span>
        <p className="mt-5 font-display text-xl font-bold uppercase tracking-[0.14em] text-bone">
          {emptyTitle}
        </p>
        {emptyNote && (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ash">
            {emptyNote}
          </p>
        )}
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.26em] text-dim">
          First materials will appear here
        </p>
      </div>
    );
  }

  const current = active !== null ? items[active] : null;

  return (
    <div>
      <ul
        role="list"
        className={`grid gap-4 sm:gap-5 ${
          columns === "two" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items.map((item, i) => (
          <li key={item.id} className={item.wide ? "sm:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Powiększ: ${item.title}`}
              className="img-reveal cut group block w-full border border-line text-left focus-visible:border-ember"
            >
              <span className="block overflow-hidden">
                <img
                  src={asset(item.src)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover"
                />
              </span>
              <span className="flex items-center justify-between gap-3 bg-coal/90 px-4 py-3">
                <span className="truncate text-sm font-semibold text-bone">
                  {item.title}
                </span>
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-ember">
                  {item.tag}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {current && (
        <div
          data-lightbox-root
          role="dialog"
          aria-modal="true"
          aria-label={`Podgląd: ${current.title}`}
          className="fixed inset-0 z-[90] flex flex-col bg-abyss/97 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="flex items-center justify-between px-4 py-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-ash">
              <IconBolt className="h-3.5 w-3.5 text-ember" />
              {active !== null ? active + 1 : 0} / {items.length} —{" "}
              {current.tag}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Zamknij podgląd"
              className="flex h-11 w-11 items-center justify-center border border-line bg-coal text-bone transition-colors hover:border-ember/50 hover:text-emberbright"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center px-3 pb-6 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-full w-full max-w-5xl flex-col items-center">
              <img
                src={asset(current.src)}
                alt={current.alt}
                className="max-h-[70vh] w-auto max-w-full border border-line object-contain"
              />
              <p className="mt-4 text-center text-sm text-ash">
                {current.title}
              </p>

              {items.length > 1 && (
                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Poprzedni obraz"
                    className="flex h-11 w-11 items-center justify-center border border-line bg-coal text-bone transition-colors hover:border-ember/50 hover:text-emberbright"
                  >
                    <IconChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={enterFullscreen}
                    aria-label="Pełny ekran"
                    className="flex h-11 items-center gap-2 border border-line bg-coal px-4 text-[11px] font-bold uppercase tracking-[0.2em] text-bone transition-colors hover:border-ember/50 hover:text-emberbright"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                    Fullscreen
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Następny obraz"
                    className="flex h-11 w-11 items-center justify-center border border-line bg-coal text-bone transition-colors hover:border-ember/50 hover:text-emberbright"
                  >
                    <IconChevronRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
