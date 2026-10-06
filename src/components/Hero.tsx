import Link from "next/link";
import { CURRENT_STATUS, DISCORD_URL } from "@/config/site";
import { buildStatusLabel, isBuildReady, PC_BUILD, ANDROID_BUILD } from "@/config/downloads";
import { asset } from "@/lib/format";
import {
  Reveal,
  IconDiscord,
  IconDownload,
  IconArrowRight,
} from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Azonera MMO — prezentacja gry">
      {/* Tło */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={asset("images/hero.jpg")}
          alt=""
          className="kenburns h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/95 via-abyss/65 to-abyss/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-abyss/70" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 78% 38%, rgba(216,162,74,0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col px-4 sm:px-6">
        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.55fr_1fr]">
          {/* Lewa kolumna */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 border border-line bg-abyss/60 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-ash backdrop-blur">
                <span aria-hidden className="status-dot h-2 w-2 rounded-full bg-moss" />
                Current status:
                <span className="text-moss">{CURRENT_STATUS.label}</span>
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="title-glow mt-6 font-display font-black uppercase leading-[0.95]">
                <span className="block text-[clamp(3.4rem,12vw,7.5rem)] tracking-[0.03em] text-bone">
                  Azonera
                </span>
                <span className="mt-3 block text-[clamp(1.4rem,4vw,2.6rem)] font-bold tracking-[0.55em] text-emberbright">
                  M&nbsp;M&nbsp;O
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
                Tworzymy własny świat MMORPG. Mroczny klimat, realistyczna
                walka i świat kuty od fundamentu — na PC i na Androidzie.
                Gra jest w produkcji i wchodzi w fazę testów.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href="/download" className="btn btn-primary cut">
                  <IconDownload className="h-4 w-4" />
                  Pobierz grę
                </Link>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost cut"
                >
                  <IconDiscord className="h-4 w-4" />
                  Dołącz do Discorda
                </a>
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-2 px-1 pt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-emberbright"
                >
                  Zobacz aktualizacje
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Prawa kolumna — panel klienta */}
          <Reveal delay={340} className="hidden lg:block">
            <div className="cut panel-sheen ml-auto max-w-sm border border-line bg-coal/85 p-6 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-dim">
                Client status
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-line/70 pb-3">
                  <dt className="text-ash">Klient</dt>
                  <dd className="font-semibold text-bone">{PC_BUILD.title}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-line/70 pb-3">
                  <dt className="text-ash">Platformy</dt>
                  <dd className="font-semibold text-bone">
                    Windows · Android
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-line/70 pb-3">
                  <dt className="text-ash">Wersja</dt>
                  <dd className="font-semibold text-bone">
                    {PC_BUILD.version || "w przygotowaniu"}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-ash">Status builda</dt>
                  <dd>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-moss">
                      <span aria-hidden className="status-dot h-1.5 w-1.5 rounded-full bg-moss" />
                      {isBuildReady(PC_BUILD)
                        ? buildStatusLabel(PC_BUILD)
                        : "TEST BUILD — wewnętrzne testy"}
                    </span>
                  </dd>
                </div>
              </dl>
              <Link
                href="/tests"
                className="group mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember transition-colors hover:text-emberbright"
              >
                Śledź testy
                <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Pasek statusu */}
        <div className="border-t border-line/70">
          <div className="flex items-center justify-between gap-4 py-3.5">
            <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ash">
              <span aria-hidden className="status-dot h-2 w-2 rounded-full bg-moss" />
              <span className="text-dim">Current status</span>
              <span className="text-moss">{CURRENT_STATUS.label}</span>
            </p>
            <p className="truncate text-xs text-dim">{CURRENT_STATUS.note}</p>
          </div>
        </div>
      </div>

      {/* podpowiedź Android — widoczna tylko na małych ekranach */}
      <div className="mx-auto -mt-1 hidden max-w-6xl px-4 pb-4 sm:hidden" aria-hidden>
        <div className="flex items-center justify-between border border-line bg-coal/70 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ash backdrop-blur">
          <span>Platformy: Windows · Android</span>
          <span className="text-ember">
            {isBuildReady(ANDROID_BUILD)
              ? buildStatusLabel(ANDROID_BUILD)
              : "COMING SOON"}
          </span>
        </div>
      </div>
    </section>
  );
}
