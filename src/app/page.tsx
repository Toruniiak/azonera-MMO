import Link from "next/link";
import Hero from "@/components/Hero";
import DownloadCenter from "@/components/DownloadCenter";
import { FeaturedUpdate, LatestUpdates } from "@/components/News";
import StatusBoard from "@/components/StatusBoard";
import MediaGallery from "@/components/MediaGallery";
import DiscordCTA from "@/components/DiscordCTA";
import { SCREENSHOTS, MEDIA_NOTE } from "@/data/media";
import { ROADMAP } from "@/content/roadmap";
import { Reveal, SectionHeading, StatusPill, Ornament, IconArrowRight } from "@/components/ui";

function MediaTeaser() {
  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Media"
            title="Klimat Azonery"
            description={MEDIA_NOTE}
          />
          <Link
            href="/media"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember transition-colors hover:text-emberbright"
          >
            View all media
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
      <div className="mt-10">
        <MediaGallery items={SCREENSHOTS.slice(0, 3)} />
      </div>
    </div>
  );
}

function RoadmapTeaser() {
  const phases = ROADMAP.slice(1, 4);
  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Roadmap"
            title="Fazy produkcji"
            description="Od systemów rdzeniowych przez świat i walkę po publiczne testy."
          />
          <Link
            href="/roadmap"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember transition-colors hover:text-emberbright"
          >
            Pełna roadmapa
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {phases.map((phase, i) => (
          <Reveal key={phase.phase} delay={i * 100}>
            <article className="flex h-full flex-col border border-line bg-coal/70 p-6 transition-colors duration-300 hover:border-ember/40">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-dim">
                  {phase.phase}
                </span>
                <StatusPill status={phase.status} />
              </div>
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-[0.06em] text-bone">
                {phase.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                {phase.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  const pillars = [
    {
      title: "Własny świat",
      text: "Azonera nie jest kopią niczego. Własny design świata, walki i bestiariusza — kuty od fundamentu, z konsekwentnym, mrocznym klimatem.",
    },
    {
      title: "Dwie platformy",
      text: "Klient PC (Windows) i klient Android powstają równolegle. Ten sam świat, pełnoprawny dostęp z telefonu — od wczesnych buildów.",
    },
    {
      title: "Budowane z testerami",
      text: "Gra wchodzi w fazę testów. Devlogi, statusy i feedback są otwarte — wiemy, że dobre MMORPG wygrywa się w iteracjach z graczami.",
    },
  ];

  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="O projekcie"
          title="About Azonera MMO"
          description="Azonera MMO to nasz własny projekt MMORPG. Dark fantasy, realistyczna walka i świat budowany od fundamentu — na PC i Androidzie. Gra jest w produkcji, aktualnie w fazie testów, a ta strona jest centrum informacji: aktualizacje, devlogi, media, roadmapa, testy i pobieranie."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="h-full border-t-2 border-ember/50 bg-coal/50 p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] text-bone">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl space-y-24 px-4 py-20 sm:space-y-28 sm:px-6 sm:py-24">
        {/* Download */}
        <section id="download" aria-labelledby="download-title">
          <DownloadCenter />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        {/* Featured update */}
        <section aria-labelledby="featured-title">
          <FeaturedUpdate />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        {/* Latest updates */}
        <section aria-labelledby="latest-title">
          <LatestUpdates limit={3} />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        {/* Development status */}
        <section aria-labelledby="status-title">
          <StatusBoard />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        {/* Media teaser */}
        <section aria-labelledby="media-title">
          <MediaTeaser />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        {/* Roadmap teaser */}
        <section aria-labelledby="roadmap-title">
          <RoadmapTeaser />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        {/* About */}
        <section aria-labelledby="about-title">
          <AboutSection />
        </section>
      </div>

      <DiscordCTA />
    </>
  );
}
