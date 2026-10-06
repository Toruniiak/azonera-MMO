import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/config/site";
import { BASE } from "@/lib/format";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "AZONERA",
    description: SITE_DESCRIPTION,
    id: BASE || "/",
    start_url: `${BASE}/`,
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0b0d10",
    theme_color: "#0b0d10",
    icons: [
      {
        src: `${BASE}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
