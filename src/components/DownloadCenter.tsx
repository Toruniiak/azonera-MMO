import { BUILDS, buildStatusLabel, isBuildReady, type ClientBuild } from "@/config/downloads";
import { DISCORD_URL } from "@/config/site";
import { formatDate } from "@/lib/format";
import {
  Reveal,
  SectionHeading,
  IconDownload,
  IconWindows,
  IconAndroid,
  IconDiscord,
} from "@/components/ui";

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-dim">
        {label}
      </dt>
      <dd className="text-right text-sm font-semibold text-bone">{value}</dd>
    </div>
  );
}

function BuildCard({ build, delay }: { build: ClientBuild; delay: number }) {
  const ready = isBuildReady(build);
  const isPc = build.id === "pc";
  const actionLabel = isPc ? "Pobierz PC" : "Pobierz Android";

  return (
    <Reveal delay={delay}>
      <article
        aria-label={`${build.title} — ${build.platform}`}
        className="cut panel-sheen flex h-full flex-col border border-line bg-coal/80 p-6 sm:p-7"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 items-center justify-center border border-line bg-steel text-emberbright"
              aria-hidden
            >
              {isPc ? <IconWindows /> : <IconAndroid />}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-[0.1em] text-bone">
                {build.title}
              </h3>
              <p className="mt-0.5 text-sm text-ash">{build.platform}</p>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] ${
              ready
                ? "border-moss/40 text-moss"
                : "border-ember/40 text-emberbright"
            }`}
          >
            <span
              aria-hidden
              className={`h-1.5 w-1.5 rounded-full ${ready ? "bg-moss status-dot" : "bg-ember status-dot-gold"}`}
            />
            {buildStatusLabel(build)}
          </span>
        </div>

        <dl className="mt-6 flex-1 divide-y divide-line/70 border-y border-line/70">
          <SpecRow label="Version" value={build.version || "—"} />
          <SpecRow label="Platform" value={build.platform} />
          <SpecRow label="Release date" value={formatDate(build.releaseDate)} />
          <SpecRow label="File size" value={build.fileSize || "—"} />
          <SpecRow
            label="Status"
            value={buildStatusLabel(build)}
          />
        </dl>

        {ready ? (
          <a
            href={build.url}
            className="btn btn-primary cut mt-6 w-full"
            download
          >
            <IconDownload className="h-4 w-4" />
            {actionLabel}
          </a>
        ) : (
          <span className="btn btn-disabled cut mt-6 w-full cursor-not-allowed" aria-disabled="true">
            <IconDownload className="h-4 w-4" />
            {actionLabel} — Coming Soon
          </span>
        )}

        <p className="mt-4 text-xs leading-relaxed text-dim">
          {build.notes ?? "Wersja testowa. Zmiany wchodzą między buildami."}
        </p>
      </article>
    </Reveal>
  );
}

export default function DownloadCenter({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  return (
    <div>
      {withHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="Download Center"
            title="Pobierz Azonera MMO"
            description="Dwie platformy, jeden świat. Wersja testowa jest dostępna do pobrania. Zainstaluj raz — kolejne wersje gra pobierze sama."
          />
        </Reveal>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {BUILDS.map((build, i) => (
          <BuildCard key={build.id} build={build} delay={i * 120} />
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-6 flex flex-col items-start justify-between gap-5 border border-line/70 bg-steel/40 p-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-ash">
            <span className="font-semibold text-bone">Grasz w wersję testową?</span>{" "}
            Dołącz do naszego Discorda — tam zgłosisz błędy, podzielisz się
            uwagami i pierwszy dowiesz się o nowych wersjach.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost cut-sm shrink-0 !px-4 !py-2.5"
          >
            <IconDiscord className="h-4 w-4" />
            Dołącz do Discorda
          </a>
        </div>
      </Reveal>
    </div>
  );
}
