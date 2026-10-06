import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, DISCORD_URL, CURRENT_STATUS, CURRENT_YEAR } from "@/config/site";
import { Sigil, IconDiscord } from "@/components/ui";

const NAV_COLS = [
  {
    heading: "Nawigacja",
    links: [
      { href: "/", label: "Home" },
      { href: "/news", label: "News" },
      { href: "/media", label: "Media" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    heading: "Projekt",
    links: [
      { href: "/tests", label: "Test Center" },
      { href: "/download", label: "Download" },
      { href: "/news", label: "Devlogi" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Sigil className="h-8 w-8" />
              <span className="flex items-baseline gap-1.5">
                <span className="font-display text-lg font-bold tracking-[0.22em] text-bone">
                  AZONERA
                </span>
                <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-ember">
                  MMO
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              {SITE_TAGLINE} Dark fantasy, realistyczna walka, klient PC i
              Android — w produkcji.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ash">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-moss status-dot" />
              Status: {CURRENT_STATUS.label}
            </p>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-dim">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ash transition-colors hover:text-emberbright"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Discord */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-dim">
              Społeczność
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Centrum testów, aktualizacji i feedbacku. Cała społeczność Azonery
              łączy się w jednym miejscu.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost cut-sm mt-5 !px-4 !py-2.5"
            >
              <IconDiscord className="h-4 w-4" />
              Discord
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-dim">
            © {CURRENT_YEAR} {SITE_NAME}. Własny świat MMORPG w produkcji.
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-dim">
            Nie jest grą komercyjną w fazie publicznej — graj testowo, zgłaszaj,
            buduj z nami świat.
          </p>
        </div>
      </div>
    </footer>
  );
}
