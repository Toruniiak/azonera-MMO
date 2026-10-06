import type { Metadata } from "next";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import StatusBoard from "@/components/StatusBoard";
import { Reveal, Ornament } from "@/components/ui";

export const metadata: Metadata = {
  title: "Roadmapa",
  description:
    "Roadmapa Azonera MMO — fazy produkcji polskiego MMORPG: od systemów rdzeniowych po publiczne testy i pobieranie.",
};

export default function RoadmapPage() {
  return (
    <>
      <section className="relative border-b border-line bg-coal/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
              <span aria-hidden className="h-px w-8 bg-ember/60" />
              Plan produkcji
            </p>
            <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-[0.04em] text-bone sm:text-5xl">
              Roadmap<span className="text-ember">a</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ash">
              Fazy, statusy i obszary produkcji. Zaktualizowane w miarę
              postępów — bez obietnic, których nie możemy dotrzymać.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <section aria-label="Oś czasu roadmapy">
          <RoadmapTimeline />
        </section>

        <Ornament className="my-16 sm:my-20" />

        <section aria-label="Status produkcji">
          <StatusBoard />
        </section>
      </div>
    </>
  );
}
