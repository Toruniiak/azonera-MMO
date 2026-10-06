/**
 * Bazowy path aplikacji (na GitHub Pages: "/nazwa-repo").
 * Dzięki temu <img src={asset("images/x.jpg")}> działa pod
 * https://USERNAME.github.io/REPOSITORY/ bez łamania assetów.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const clean = path.replace(/^\/+/, "");
  return `${BASE}/${clean}`;
}

/** Pomocnicze formatowanie dat (strefa: polski). */
export function formatDate(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
