"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { DISCORD_URL, CURRENT_STATUS } from "@/config/site";
import {
  Reveal,
  SectionHeading,
  IconDiscord,
  IconDownload,
  IconCheck,
  IconBolt,
} from "@/components/ui";

export const CURRENTLY_TESTING = [
  "Combat",
  "Effects",
  "Sounds",
  "Monsters",
  "World",
  "UI",
  "PC",
  "Android",
] as const;

const STEPS = [
  {
    title: "Pobierz klienta",
    text: "Wersję testową na PC (ZIP) i Androida (APK) pobierzesz w Download Center.",
  },
  {
    title: "Uruchom grę",
    text: "Zainstaluj klienta na PC (Windows) lub urządzeniu Android i uruchom go zgodnie z instrukcją.",
  },
  {
    title: "Rozpocznij grę",
    text: "Nowa postać zaczyna od prologu: rejsu łodzią przez mgłę do Starej Przystani. Samouczek pokaże sterowanie.",
  },
  {
    title: "Dołącz do Discorda",
    text: "Discord to centrum testów: ogłoszenia buildów, kanały dla testerów i bezpośredni kontakt z zespołem.",
  },
  {
    title: "Zgłaszaj błędy i sugestie",
    text: "Im dokładniejsze zgłoszenie (co, gdzie, jak odtworzyć), tym szybciej naprawiamy. Używaj formularza poniżej lub kanału na Discordzie.",
  },
  {
    title: "Śledź kolejne aktualizacje",
    text: "Każdy build dostaje wpis w News / Devlog. Sprawdzaj stronę, żeby wiedzieć, co się zmieniło i co jest następne.",
  },
];

/* ================= Hero test center ================= */

export function TestHero() {
  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span aria-hidden className="status-dot h-2 w-2 rounded-full bg-moss" />
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-moss">
            {CURRENT_STATUS.label} — w toku
          </p>
        </div>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-black uppercase leading-tight tracking-[0.03em] text-bone sm:text-5xl">
          Azonera MMO is currently{" "}
          <span className="text-emberbright">in development</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ash sm:text-base">
          Poniżej jest wszystko, co musisz wiedzieć, żeby przetestować grę:
          co aktualnie testujemy, jak zacząć i jak zgłaszać feedback.
        </p>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.28em] text-dim">
          Aktualnie testujemy
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5" role="list">
          {CURRENTLY_TESTING.map((item) => (
            <li
              key={item}
              className="border border-line bg-coal/80 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-bone/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <Link href="/download" className="btn btn-primary cut">
            <IconDownload className="h-4 w-4" />
            Pobierz PC
          </Link>
          <Link href="/download" className="btn btn-primary cut">
            <IconDownload className="h-4 w-4" />
            Pobierz Android
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
        </div>
      </Reveal>
    </div>
  );
}

/* ================= Jak zacząć testy ================= */

export function HowToTest() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Test Center"
          title="How to start testing"
          description="Sześć kroków od zera do aktywnego testera. Prosto i bez zbędnego ceremoniału."
        />
      </Reveal>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 80}>
            <li className="group flex h-full gap-5 border border-line bg-coal/70 p-5 transition-colors duration-300 hover:border-ember/40">
              <span
                aria-hidden
                className="font-display text-3xl font-black leading-none text-ember/70 transition-colors group-hover:text-ember"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-[0.1em] text-bone">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {step.text}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ================= Formularz feedbacku (frontend only) ================= */

const FEEDBACK_CATEGORIES = [
  "BUG",
  "COMBAT",
  "EFFECTS",
  "SOUNDS",
  "MONSTERS",
  "WORLD",
  "ANDROID",
  "PC",
  "UI",
  "SUGGESTION",
] as const;

export function FeedbackForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Feedback"
            title="Zgłoś problem lub sugestię"
            description="Twoje zgłoszenia bezpośrednio napędzają kolejność prac. Każdy błąd ma znaczenie."
          />
          <p className="inline-flex items-center gap-2 border border-ember/35 bg-ember/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emberbright">
            <IconBolt className="h-3.5 w-3.5" />
            Feedback system coming soon
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        {sent ? (
          <div className="mt-10 border border-moss/35 bg-moss/[0.06] p-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center border border-moss/50 bg-moss/10 text-moss">
              <IconCheck className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-[0.08em] text-bone">
              Dziękujemy
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ash">
              System online dla zgłoszeń wchodzi wkrótce — to, co teraz
              napiszesz, nie zostanie jeszcze zapisane. Najszybsza ścieżka to
              nasz Discord: kanały dla testerów są tam otwarte na bieżąco.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cut mt-6"
            >
              <IconDiscord className="h-4 w-4" />
              Zgłoś przez Discord
            </a>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 grid gap-5 border border-line bg-coal/70 p-6 sm:grid-cols-2 sm:p-8"
          >
            <div>
              <label
                htmlFor="fb-category"
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.24em] text-dim"
              >
                Kategoria
              </label>
              <select
                id="fb-category"
                name="category"
                required
                defaultValue="BUG"
                className="w-full appearance-none border border-line bg-steel px-4 py-3.5 text-sm text-bone focus:border-ember focus:outline-none"
              >
                {FEEDBACK_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="fb-title"
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.24em] text-dim"
              >
                Temat
              </label>
              <input
                id="fb-title"
                name="title"
                type="text"
                required
                maxLength={90}
                placeholder="Krótko: co się stało?"
                className="w-full border border-line bg-steel px-4 py-3.5 text-sm text-bone placeholder:text-dim focus:border-ember focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="fb-message"
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.24em] text-dim"
              >
                Opis
              </label>
              <textarea
                id="fb-message"
                name="message"
                required
                rows={5}
                maxLength={2000}
                placeholder="Co, gdzie, jak odtworzyć. Im więcej szczegółów, tym lepiej."
                className="w-full resize-y border border-line bg-steel px-4 py-3.5 text-sm leading-relaxed text-bone placeholder:text-dim focus:border-ember focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="fb-contact"
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.24em] text-dim"
              >
                Kanał kontaktowy (opcjonalnie)
              </label>
              <input
                id="fb-contact"
                name="contact"
                type="text"
                maxLength={60}
                placeholder="np. nazwa użytkownika na Discordzie"
                className="w-full border border-line bg-steel px-4 py-3.5 text-sm text-bone placeholder:text-dim focus:border-ember focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-relaxed text-dim">
                Formularz działa na razie lokalnie — dane nie są nigdzie
                wysyłane. Docelowy system zgłoszeń wkrótce; do tego czasu
                Discord jest najpewniejszą drogą.
              </p>
              <button type="submit" className="btn btn-primary cut shrink-0">
                Wyślij zgłoszenie
              </button>
            </div>
          </form>
        )}
      </Reveal>
    </div>
  );
}
