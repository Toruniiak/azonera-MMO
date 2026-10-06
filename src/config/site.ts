/**
 * AZONERA MMO — centralna konfiguracja strony.
 * Zmieniaj wszystko tutaj, bez dotykania komponentów.
 */

export const SITE_NAME = "AZONERA MMO";
export const SITE_TAGLINE = "Tworzymy własny świat MMORPG.";

export const SITE_DESCRIPTION =
  "AZONERA MMO — polskie MMORPG w produkcji. Mroczne fantasy w izometrycznym 3D (Unity 6), 5 profesji, otwarty świat, klient PC (Windows) i Android. Aktualizacje, devlogi, roadmapa, testy i pobieranie gry w jednym miejscu.";

/**
 * Pełny adres URL strony (z bazą, bez ukośnika na końcu).
 * Nadpisywany przez env NEXT_PUBLIC_SITE_URL (w tym na GitHub Pages).
 * Domyślna wartość to jawny placeholder — ustaw właściwy przed publikacją.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://toruniiak.github.io/azonera-MMO";

/** Jedyne oficjalne social medium — nie dodawaj linków, które nie istnieją. */
export const DISCORD_URL = "https://discord.gg/eP6ErqrNQF";

export const SOCIAL_URLS = {
  discord: DISCORD_URL,
} as const;

/**
 * Bieżący status produkcji — widoczny w hero i na stronie TEST CENTER.
 */
export const CURRENT_STATUS = {
  label: "TEST BUILD",
  state: "testing" as "testing" | "planning" | "ready",
  note: "Wersja testowa 0.3.3 — nowy system walki i efektów, autoaktualizacja PC i Android",
} as const;

export const CURRENT_YEAR = 2026;
