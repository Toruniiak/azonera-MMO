"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/* ================= Reveal on scroll ================= */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ================= Section heading ================= */

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <p className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
        {centered ? null : <span aria-hidden className="h-px w-8 bg-ember/60" />}
        {eyebrow}
        {centered && <span aria-hidden className="h-px w-8 bg-ember/60" />}
      </p>
      <h2 className="font-display text-3xl font-bold uppercase tracking-[0.06em] text-bone sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-ash">{description}</p>
      ) : null}
    </div>
  );
}

/* ================= Status pill ================= */

export type PillStatus =
  | "COMPLETED"
  | "IN DEVELOPMENT"
  | "TESTING"
  | "PLANNED"
  | "READY";

const PILL_STYLES: Record<PillStatus, { dot: string; text: string; border: string }> = {
  COMPLETED: {
    dot: "bg-ember",
    text: "text-emberbright",
    border: "border-ember/40",
  },
  "IN DEVELOPMENT": {
    dot: "bg-ash",
    text: "text-bone/90",
    border: "border-line",
  },
  TESTING: {
    dot: "bg-moss status-dot",
    text: "text-moss",
    border: "border-moss/40",
  },
  PLANNED: {
    dot: "bg-dim",
    text: "text-dim",
    border: "border-line/70",
  },
  READY: {
    dot: "bg-moss status-dot",
    text: "text-moss",
    border: "border-moss/40",
  },
};

export function StatusPill({
  status,
  className = "",
}: {
  status: PillStatus;
  className?: string;
}) {
  const s = PILL_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${s.border} ${s.text} ${className}`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

/* ================= Category badge ================= */

export function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border border-ember/35 bg-ember/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-emberbright">
      {label}
    </span>
  );
}

/* ================= Ornament ================= */

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden>
      <svg width="10" height="10" viewBox="0 0 10 10">
        <rect
          x="5"
          y="0.6"
          width="6.2"
          height="6.2"
          transform="rotate(45 5 0.6)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* ================= SVG icons ================= */

type IconProps = { className?: string };

export function IconDiscord({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.3 18.3 0 0 0-5.5 0 12.6 12.6 0 0 0-.61-1.25.08.08 0 0 0-.08-.04 19.7 19.7 0 0 0-4.88 1.52.07.07 0 0 0-.04.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1-.01-.12c.13-.1.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08.01c.12.1.25.2.37.3a.08.08 0 0 1 0 .12c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.7.78 1.37 1.22 2a.08.08 0 0 0 .09.03 19.8 19.8 0 0 0 6.02-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z" />
    </svg>
  );
}

export function IconWindows({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 5.55 10.4 4.6v7.15H3V5.55ZM3 18.45 10.4 19.4v-7.15H3v6.2ZM11.15 4.48 21 3.2v8.55h-9.85V4.48ZM21 20.8l-9.85-1.28v-8.27H21v9.55Z" />
    </svg>
  );
}

export function IconAndroid({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48 19.44 6.3a.4.4 0 0 0-.15-.55.4.4 0 0 0-.54.15l-1.87 3.22a11.17 11.17 0 0 0-9.76 0L5.25 5.9a.4.4 0 0 0-.54-.15.4.4 0 0 0-.15.54L6.4 9.48A10.87 10.87 0 0 0 1 18h22a10.87 10.87 0 0 0-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
    </svg>
  );
}

export function IconDownload({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function IconChevronLeft({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function IconChevronRight({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function IconCheck({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

export function IconPlay({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.2-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function IconBolt({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 2 4.5 13.5H11L9.5 22 19 9.5h-6.5L13 2Z" />
    </svg>
  );
}

/* ================= Logo sigil ================= */

export function Sigil({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect
        x="7.4"
        y="7.4"
        width="25.2"
        height="25.2"
        transform="rotate(45 20 20)"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-ember"
      />
      <path
        d="M20 10.5 13.5 27.5h4.2l1.3-3.4h2l1.3 3.4h4.2L20 10.5Zm0 6.9 1.9 5h-3.8l1.9-5Z"
        fill="currentColor"
        className="text-bone"
      />
    </svg>
  );
}
