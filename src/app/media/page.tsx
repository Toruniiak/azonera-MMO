import type { Metadata } from "next";
import MediaTabs from "@/components/MediaTabs";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Screenshoty, wideo i gameplay Azonera MMO — media z produkcji polskiego MMORPG.",
};

export default function MediaPage() {
  return (
    <>
      <section className="relative border-b border-line bg-coal/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
              <span aria-hidden className="h-px w-8 bg-ember/60" />
              Galeria
            </p>
            <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-[0.04em] text-bone sm:text-5xl">
              Media <span className="text-ember">&amp;</span> Materiały
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ash">
              Key art, ujęcia z buildów, trailery i gameplay. Działalności
              mediowej pilnujemy równie pilnie jak samej gry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <MediaTabs />
      </section>
    </>
  );
}
