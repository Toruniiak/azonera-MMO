/**
 * CENTRALNA KONFIGURACJA POBIERAŃ.
 *
 * Jedyny miejsce, w którym mieszkają linki do buildów.
 * Gdy build nie jest jeszcze gotowy: zostaw `url` jako undefined
 * i strona pokaże "COMING SOON" zamiast wymyślonego linku.
 *
 * Przykład po wypuszczeniu builda:
 *   url: "/downloads/Azonera-Setup-v0.1.0.exe"
 * (plik weźmie się z public/downloads/)
 * albo pełny adres zewnętrzny:
 *   url: "https://cdn.azonera.gg/clients/Azonera-Setup.exe"
 */

export type ClientId = "pc" | "android";

export interface ClientBuild {
  id: ClientId;
  title: string;
  platform: string;
  /** np. "v0.1.0" — puste, dopóki build nie istnieje */
  version?: string;
  /** ISO, np. "2026-03-01" — puste, dopóki build nie istnieje */
  releaseDate?: string;
  /** np. "1.4 GB" — puste, dopóki build nie istnieje */
  fileSize?: string;
  /** PEŁNY LINK DO POBRANIA albo undefined (= COMING SOON) */
  url?: string;
  notes?: string;
}

export const CURRENT_VERSION = "0.3.4";
export const RELEASE_DATE = "2026-10-06";

/** Wydania gry (GitHub Releases) — gra po instalacji sama pobiera kolejne wersje. */
const RELEASES = "https://github.com/azonerapl/azonera-updates/releases/download/v4/";

export const PC_BUILD: ClientBuild = {
  id: "pc",
  title: "AZONERA MMO",
  platform: "Windows",
  version: "v0.3.4",
  releaseDate: "2026-10-06",
  fileSize: "1,0 GB",
  url: RELEASES + "azonera_windows_4.zip",
  notes:
    "Wersja testowa. Rozpakuj ZIP do folderu z prawem zapisu (np. Dokumenty) i uruchom AzoneraRPG.exe. Kolejne wersje gra pobierze sama.",
};

export const ANDROID_BUILD: ClientBuild = {
  id: "android",
  title: "AZONERA MMO",
  platform: "Android",
  version: "v0.3.4",
  releaseDate: "2026-10-06",
  fileSize: "0,9 GB",
  url: RELEASES + "azonera_android_4.apk",
  notes:
    "Wersja testowa (APK spoza Sklepu Play, Android 8.0+, ARM64). Przy instalacji zezwól na instalowanie z nieznanych źródeł. Kolejne wersje gra pobierze sama.",
};

export const BUILDS: ClientBuild[] = [PC_BUILD, ANDROID_BUILD];

export const isBuildReady = (build: ClientBuild): boolean =>
  typeof build.url === "string" && build.url.length > 0;

export const buildStatusLabel = (build: ClientBuild): string =>
  isBuildReady(build) ? "TEST BUILD" : "COMING SOON";
