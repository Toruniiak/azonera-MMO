"use client";

import { useState } from "react";
import {
  SCREENSHOTS,
  VIDEOS,
  GAMEPLAY,
  MEDIA_NOTE,
  type MediaVideo,
} from "@/data/media";
import { asset, formatDate } from "@/lib/format";
import MediaGallery from "@/components/MediaGallery";
import { IconPlay } from "@/components/ui";

type TabId = "screenshots" | "videos" | "gameplay";

const TABS: { id: TabId; label: string }[] = [
  { id: "screenshots", label: "Screenshots" },
  { id: "videos", label: "Videos" },
  { id: "gameplay", label: "Gameplay" },
];

function VideoCard({ video }: { video: MediaVideo }) {
  return (
    <article className="border border-line bg-coal/70">
      <div className="aspect-video w-full bg-abyss">
        {video.provider === "youtube" && video.url ? (
          <div className="relative h-full w-full">
            {video.thumb ? (
              <img
                src={asset(video.thumb)}
                alt={video.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-14 w-14 items-center justify-center border border-ember/50 bg-abyss/70 text-emberbright backdrop-blur"
                aria-hidden
              >
                <IconPlay className="h-6 w-6" />
              </span>
            </div>
          </div>
        ) : (
          <video
            controls
            preload="metadata"
            className="h-full w-full"
            src={video.localSrc ? asset(video.localSrc) : video.url}
          >
            Twoja przeglądarka nie obsługuje wideo HTML5.
          </video>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-bone">
            {video.title}
          </h3>
          <time
            dateTime={video.date}
            className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-dim"
          >
            {formatDate(video.date)}
          </time>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ash">{video.description}</p>
      </div>
    </article>
  );
}

export default function MediaTabs() {
  const [tab, setTab] = useState<TabId>("screenshots");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Kategorie mediów"
        className="flex flex-wrap gap-2"
      >
        {TABS.map((t) => {
          const count =
            t.id === "screenshots"
              ? SCREENSHOTS.length
              : t.id === "videos"
                ? VIDEOS.length
                : GAMEPLAY.length;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`cut-sm border px-5 py-3 text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${
                active
                  ? "border-ember/60 bg-ember/15 text-emberbright"
                  : "border-line bg-coal/60 text-ash hover:border-ember/40 hover:text-bone"
              }`}
            >
              {t.label}
              <span className={`ml-2 ${active ? "text-ember" : "text-dim"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className="mt-8"
      >
        {tab === "screenshots" && (
          <div>
            <p className="mb-6 max-w-3xl border-l-2 border-ember/50 pl-4 text-sm leading-relaxed text-ash">
              {MEDIA_NOTE}
            </p>
            <MediaGallery items={SCREENSHOTS} />
          </div>
        )}

        {tab === "videos" &&
          (VIDEOS.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {VIDEOS.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          ) : (
            <MediaGallery
              items={[]}
              emptyTitle="Pierwsze materiały wideo wkrótce"
              emptyNote="Trailery i ujęcia z budowy trafią tutaj. System wspiera pliki lokalne oraz linki zewnętrzne (np. YouTube)."
            />
          ))}

        {tab === "gameplay" && (
          <MediaGallery
            items={GAMEPLAY}
            emptyTitle="Zapisy z gameplayu wkrótce"
            emptyNote="Surowe ujęcia z buildów testowych pojawią się tutaj — z walki, eksploracji i pierwszych stref."
          />
        )}
      </div>
    </div>
  );
}
