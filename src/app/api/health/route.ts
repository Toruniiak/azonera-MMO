/**
 * Statyczny health-check — działa zarówno w trybie serwera (next start),
 * jak i w pełnym eksporcie statycznym (GitHub Pages).
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    ok: true,
    status: "ok",
    app: "azonera-mmo-site",
  });
}
