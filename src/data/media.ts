/**
 * MEDIA — screenshoty, wideo, gameplay.
 * Dodawaj nowe pozycje na listach — galeria i lightbox obsługują je automatycznie.
 *
 * Wideo: wspierane są lokalne pliki (public/videos/...) i URL zewnętrzne
 * (np. YouTube). Pola `thumb` / `localSrc` są opcjonalne.
 */

export interface MediaShot {
  id: string;
  src: string; // względem /public, np. "images/media/arena.jpg"
  alt: string;
  title: string;
  tag: "KEY ART" | "CONCEPT ART" | "SCREENSHOT" | "GAMEPLAY";
  /** wide = szerszy kafelek w siatce galerii */
  wide?: boolean;
}

export interface MediaVideo {
  id: string;
  title: string;
  description: string;
  date: string;
  provider: "youtube" | "local";
  /** YouTube: URL wideo; local: pełny URL mp4 */
  url?: string;
  localSrc?: string;
  thumb?: string;
}

export const MEDIA_NOTE =
  "Wszystkie obrazy i filmy to prawdziwe ujęcia z wersji deweloperskiej gry (Unity 6, bez retuszu). Gra jest w produkcji — wygląd będzie się zmieniał z kolejnymi wersjami.";

export const SCREENSHOTS: MediaShot[] = [
  { id: "morvenhal-noc", src: "images/hero.jpg", alt: "Morvenhal nocą — portowe miasto z murami i świątynią", title: "Morvenhal nocą", tag: "SCREENSHOT", wide: true },
  { id: "morvenhal-dzien", src: "images/media/morvenhal-dzien.jpg", alt: "Morvenhal w dzień — ulice, NPC i budynki miasta", title: "Morvenhal w dzień", tag: "SCREENSHOT" },
  { id: "swiatynia", src: "images/media/swiatynia.jpg", alt: "Świątynia startowa i Kapłanka Eliana ze znacznikiem zadania", title: "Świątynia — start postaci", tag: "SCREENSHOT" },
  { id: "prolog-boss", src: "images/media/prolog-boss.jpg", alt: "Prolog: boss Zatopiony Latarnik na Starej Przystani", title: "Prolog — Zatopiony Latarnik", tag: "SCREENSHOT" },
  { id: "puszcza", src: "images/media/puszcza.jpg", alt: "Przeklęta Puszcza w deszczu", title: "Przeklęta Puszcza", tag: "SCREENSHOT", wide: true },
  { id: "pustkowia", src: "images/media/pustkowia.jpg", alt: "Popielna Strażnica na Spalonych Pustkowiach", title: "Spalone Pustkowia", tag: "SCREENSHOT" },
  { id: "czytelnosc", src: "images/media/czytelnosc.jpg", alt: "Porównanie przed i po: czytelność postaci i potworów w ciemnym świecie", title: "Czytelność jednostek — przed i po", tag: "SCREENSHOT" },
];

/** Klipy z gry (pliki w public/videos/). */
export const VIDEOS: MediaVideo[] = [
  {
    id: "walka-0-3-3",
    title: "Walka w wersji 0.3.3",
    description: "Arena testowa: miecz płomieni, kula ognia, piorun, lód druida, ciosy mnicha i boss z ostrzeżeniem przed uderzeniem.",
    date: "2026-10-06",
    provider: "local",
    localSrc: "videos/walka-0.3.3.mp4",
    thumb: "images/media/walka-0.3.3-thumb.jpg",
  },
];

export const GAMEPLAY: MediaShot[] = [
  { id: "walka-miecz", src: "images/media/walka-miecz.jpg", alt: "Rycerz z mieczem płomieni — ogniste cięcie", title: "Rycerz — miecz płomieni", tag: "GAMEPLAY" },
  { id: "walka-ogien", src: "images/media/walka-ogien.jpg", alt: "Czarnoksiężnik — kula ognia trafia trolla", title: "Czarnoksiężnik — ogień", tag: "GAMEPLAY", wide: true },
  { id: "walka-lod", src: "images/media/walka-lod.jpg", alt: "Druid — czar lodu", title: "Druid — lód", tag: "GAMEPLAY" },
  { id: "walka-boss", src: "images/media/walka-boss.jpg", alt: "Walka z bossem na arenie testowej", title: "Boss", tag: "GAMEPLAY" },
];
