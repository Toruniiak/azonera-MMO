import type { NextConfig } from "next";

/**
 * GitHub Pages build is triggered with:
 *   GH_PAGES=true NEXT_PUBLIC_BASE_PATH=/azonera-mmo-site npm run build
 * which enables a full static export (`out/`) with correct asset paths
 * for https://USERNAME.github.io/REPOSITORY/.
 *
 * Local / server builds (this sandbox, `next start`) run without export.
 */
const isGhPages = process.env.GH_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: isGhPages ? "export" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
