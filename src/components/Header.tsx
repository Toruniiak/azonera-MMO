"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DISCORD_URL, SITE_NAME, CURRENT_STATUS } from "@/config/site";
import { IconDiscord } from "@/components/ui";
import { Sigil } from "@/components/ui";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/news", label: "NEWS" },
  { href: "/media", label: "MEDIA" },
  { href: "/roadmap", label: "ROADMAP" },
  { href: "/tests", label: "TESTS" },
  { href: "/download", label: "DOWNLOAD" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-abyss/92 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-abyss/85 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${SITE_NAME} — strona główna`}
        >
          <Sigil className="h-8 w-8 transition-transform duration-500 group-hover:rotate-90" />
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-bold tracking-[0.22em] text-bone">
              AZONERA
            </span>
            <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-ember">
              MMO
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Główna nawigacja" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`nav-link text-[11.5px] font-bold tracking-[0.22em] transition-colors ${
                    isActive(item.href)
                      ? "active text-emberbright"
                      : "text-ash hover:text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost cut-sm hidden !py-2.5 !px-4 sm:inline-flex"
            aria-label="Dołącz do Discorda Azonera"
          >
            <IconDiscord className="h-4 w-4" />
            Discord
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            className="relative flex h-11 w-11 items-center justify-center border border-line bg-coal/60 text-bone transition-colors hover:border-ember/50 lg:hidden"
          >
            <span
              aria-hidden
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`}
            />
            <span
              aria-hidden
              className={`absolute h-px w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              aria-hidden
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-abyss/[0.985] backdrop-blur-lg transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Menu mobilne" className="mx-auto max-w-6xl px-6 py-10">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
                className={`border-b border-line/60 transition-all duration-400 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 font-display text-2xl font-bold uppercase tracking-[0.12em] ${
                    isActive(item.href) ? "text-emberbright" : "text-bone"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`text-xs tracking-[0.4em] ${isActive(item.href) ? "text-ember" : "text-dim"}`}
                  >
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cut mt-8 w-full"
          >
            <IconDiscord className="h-4 w-4" />
            Dołącz do Discorda
          </a>

          <p className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-dim">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-moss status-dot" />
            Status: {CURRENT_STATUS.label}
          </p>
        </nav>
      </div>
    </header>
  );
}
