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

/** Oficjalne kanały społeczności — nie dodawaj linków, które nie istnieją. */
export const DISCORD_URL = "https://discord.gg/A5gAjNNcC";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61595007780513";

export const SOCIAL_URLS = {
  discord: DISCORD_URL,
  facebook: FACEBOOK_URL,
} as const;

/**
 * Bieżący status produkcji — widoczny w hero i na stronie TEST CENTER.
 */
export const CURRENT_STATUS = {
  label: "TEST BUILD",
  state: "testing" as "testing" | "planning" | "ready",
  note: "Wersja testowa 0.3.5 — jaśniejszy świat i suwak jasności, nawigacja do celu zadania, nowa mapa świata",
} as const;

export const CURRENT_YEAR = 2026;
