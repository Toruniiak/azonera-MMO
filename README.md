# AZONERA MMO WEBSITE

**Strona na żywo:** https://toruniiak.github.io/azonera-MMO/

Oficjalna strona internetowa **AZONERA MMO** — centrum informacji o grze:
aktualizacje, devlogi, screenshoty, wideo, testy, pobieranie klienta PC i
Android, roadmapa, feedback i Discord.

Strona jest **w pełni statyczna** (bez backendu) i przygotowana pod
automatyczny deployment na **GitHub Pages**.

---

## Features

- **Home** — hero z current status, download center, featured update,
  najnowsze aktualizacje, status produkcji, media, roadmapa, about, Discord CTA
- **News / Devlog** — system wpisów z kategoriami (DEVLOG, COMBAT, WORLD,
  MONSTERS, EFFECTS, SOUNDS, ANDROID, PC, UI, SYSTEM, TESTS, PATCH NOTES,
  ANNOUNCEMENT), pełne strony wpisów (SSG)
- **Media** — galeria SCREENSHOTS / VIDEOS / GAMEPLAY z lightboxem,
  fullscreen, lazy loading i klawiaturą
- **Roadmap** — oś faz produkcji + statusy obszarów (PLANNED / IN DEVELOPMENT /
  TESTING / READY)
- **Test Center** — co aktualnie testujemy, instrukcja 6 kroków, formularz
  feedbacku (frontend, uczciwy status "coming soon")
- **Download Center** — klienty PC (Windows) i Android; linki do wydania
  testowego w `src/config/downloads.ts`
- **Discord** — jeden oficjalny link: `https://discord.gg/eP6ErqrNQF`
- SEO (OG/Twitter/canonical/sitemap/robots/manifest/favicon), 404,
  mobile-first (360px → 1920px), dostępność (ARIA, klawiatura, focus states)

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** — design system w `src/app/globals.css`
- Dane treści jako TypeScript w `content/` — zero zależności do parsowania
- `next/font` (Cinzel + Manrope) — optymalizacja fontów
- Pełny eksport statyczny (`next build` → `out/`) pod GitHub Pages

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Otwórz `http://localhost:3000`.

## Build

```bash
npm run build      # build serwera (preview)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

### Build statyczny (GitHub Pages)

```bash
GH_PAGES=true NEXT_PUBLIC_BASE_PATH=/azonera-mmo-site npm run build
# wynik: folder out/
```

## GitHub Pages Deployment

1. Utwórz repozytorium na GitHubie (np. `azonera-mmo-site`) i wrzuć kod.
2. W repozytorium: **Settings → Pages → Source: GitHub Actions**.
3. Zrób push na `main` — workflow
   `.github/workflows/deploy.yml` sam zbuduje i opublikuje stronę.

Workflow ustawia automatycznie:

| Zmienna | Wartość |
| --- | --- |
| `GH_PAGES` | `true` (włącza eksport statyczny) |
| `NEXT_PUBLIC_BASE_PATH` | `/nazwa-repozytorium` |
| `NEXT_PUBLIC_SITE_URL` | `https://USERNAME.github.io/nazwa-repozytorium` |

**Repo główne typu `USERNAME.github.io`:** ustaw w workflow
`NEXT_PUBLIC_BASE_PATH` na pusty string `""`, a
`NEXT_PUBLIC_SITE_URL` na `https://USERNAME.github.io`.

## Adding News

1. Otwórz `content/news/posts.ts`.
2. Skopiuj dowolny wpis i zmień: `slug`, `title`, `date`, `category`,
   `cover`, `description`, `content` (bloki: `p`, `h2`, `list`, `note`,
   `image`), `tags`.
3. Zapisz — strona, sitemap i meta dane zaktualizują się same.
   Nowy news z najnowszą datą automatycznie staje się **Featured Update**.

Zasada: nie publikuj danych, których nie ma (dat premiery, liczb graczy itd.).
Statusy: `PLANNED` / `IN DEVELOPMENT` / `TESTING` / `COMING SOON`.

## Adding Images

Wrzuć pliki do:

- `public/images/` — okładki newsów, hero, media
- `public/images/media/` — materiały galerii

W danych (`content/news/posts.ts`, `src/data/media.ts`) podaj ścieżkę
względem `public/`, np. `images/media/arena.jpg`. Komponenty same doliczą
basePath — ścieżki zawsze działają pod `/repo/` na GitHub Pages.

## Adding Videos

W `src/data/media.ts` dodaj wpis do `VIDEOS`:

```ts
{
  id: "trailer-01",
  title: "Pierwszy teaser",
  description: "Krótki zwiastun klimatu Azonery.",
  date: "2026-03-01",
  provider: "youtube",   // lub "local"
  url: "https://www.youtube.com/watch?v=XXXX",
  // provider: "local" → localSrc: "videos/build-01.mp4" (plik w public/videos/)
}
```

Wpisy newsów mogą też mieć własne `video` (youtube lub lokalny mp4).

## Changing Download Links

Jedno miejsce: **`src/config/downloads.ts`**.

```ts
export const PC_BUILD: ClientBuild = {
  id: "pc",
  title: "AZONERA MMO",
  platform: "Windows",
  version: "v0.1.0",
  releaseDate: "2026-03-01",
  fileSize: "1.4 GB",
  url: "/downloads/Azonera-Setup-v0.1.0.exe", // plik w public/downloads/
};
```

Dopóki `url` jest `undefined`, przycisk pokazuje **COMING SOON**.
Pliki buildów trzymaj w `public/downloads/` (dla dużych buildów użyj CDN
i podaj pełny adres zewnętrzny).

## Changing Roadmap

Edytuj **`content/roadmap.ts`** — listy `ROADMAP` (fazy) i `DEV_STATUS`
(obszary produkcji). Statusy: `COMPLETED` / `IN DEVELOPMENT` / `TESTING` /
`PLANNED` / `READY`.

## Changing Site Config

**`src/config/site.ts`** — nazwa, opis, status bieżący, link Discorda,
URL strony.

## Project Structure

```
azonera-mmo-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── content/
│   ├── news/
│   │   ├── posts.ts            # wszystkie newsy/devlogi
│   │   └── index.ts            # sortowanie + helpery
│   └── roadmap.ts              # fazy roadmapy + statusy produkcji
├── public/
│   ├── images/                 # key art, okładki
│   │   └── media/              # materiały galerii
│   ├── videos/                 # lokalne wideo (mp4)
│   └── downloads/              # pliki buildów (setup.exe, apk)
├── src/
│   ├── app/
│   │   ├── page.tsx            # HOME
│   │   ├── news/               # lista + [slug] (SSG)
│   │   ├── media/              # galeria
│   │   ├── roadmap/            # roadmapa + statusy
│   │   ├── tests/              # test center + how to + feedback
│   │   ├── download/           # download center
│   │   ├── 404.tsx             # "Zabłądziłeś w świecie Azonery"
│   │   ├── api/health/         # health-check (statyczny)
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   └── icon.svg
│   ├── components/             # Header, Hero, DownloadCenter, News, Media,
│   │   └── ...                 # StatusBoard, Roadmap, TestCenter, DiscordCTA...
│   ├── config/
│   │   ├── site.ts             # SITE_NAME, DISCORD_URL, STATUS...
│   │   └── downloads.ts        # linki PC/ANDROID, wersje, daty
│   ├── data/
│   │   └── media.ts            # screenshoty / wideo / gameplay
│   └── lib/
│       └── format.ts           # daty + asset() z basePath
├── .github/workflows/deploy.yml
├── next.config.ts              # conditional export + basePath
└── README.md
```

---

**AZONERA MMO** — własny świat MMORPG w produkcji.
Discord: <https://discord.gg/eP6ErqrNQF>
