import type { Metadata } from "next";
import DownloadCenter from "@/components/DownloadCenter";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Pobierz Azonera MMO — klient PC (Windows) i Android. Test build, wersje, rozmiary i statusy pobierania w jednym miejscu.",
};

const BUILD_SCOPE = [
  "Walka z animacjami ciosów i czarów (0.3.3)",
  "Efekty wizualne i dźwięki",
  "Potwory, elity i bossowie — część z tymczasowymi modelami",
  "Morvenhal, kanały, lochy i 8 regionów w jednym świecie",
  "Prolog, zadania, handel, mapa świata, autoaktualizacja",
];

export default function DownloadPage() {
  return (
    <>
      <section className="relative border-b border-line bg-coal/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
              <span aria-hidden className="h-px w-8 bg-ember/60" />
              Download Center
            </p>
            <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-[0.04em] text-bone sm:text-5xl">
              Download <span className="text-ember">Azonera</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ash">
              Klient PC i Android, wersje testowe i statusy buildów. Pobierz,
              zainstaluj i graj — aktualizacje przychodzą same.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
        <section aria-label="Pobieranie klienta">
          <DownloadCenter withHeading={false} />
        </section>

        <section aria-label="Zakres aktualnego builda">
          <Reveal>
            <div className="border border-line bg-coal/70 p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-dim">
                Co obejmuje aktualny build testowy
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {BUILD_SCOPE.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-bone/85"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line/70 pt-5 text-xs leading-relaxed text-dim">
                Wymagania: Windows 10/11 64-bit lub Android 8.0+ (ARM64). Wydajność
                na słabszych urządzeniach dopiero sprawdzamy. Lista zawartości rośnie z każdym
                buildem — śledź News i Discord.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
