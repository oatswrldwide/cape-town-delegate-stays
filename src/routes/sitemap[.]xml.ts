import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "../lib/site";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/africa-tech-festival-2026", changefreq: "weekly", priority: "0.95" },
          { path: "/stays/sea-view-rooms", changefreq: "weekly", priority: "0.9" },
          { path: "/stays/private-villas", changefreq: "weekly", priority: "0.9" },
          { path: "/stays/city-apartments", changefreq: "weekly", priority: "0.9" },
          { path: "/stays/private-rooms", changefreq: "weekly", priority: "0.85" },
          { path: "/neighborhood-guides/city-bowl", changefreq: "weekly", priority: "0.8" },
          { path: "/neighborhood-guides/v-a-waterfront", changefreq: "weekly", priority: "0.8" },
          { path: "/neighborhood-guides/camps-bay", changefreq: "weekly", priority: "0.75" },
          { path: "/neighborhood-guides/sea-point", changefreq: "weekly", priority: "0.85" },
          { path: "/blog/cape-town-november-events", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/cape-town-safety-guide", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/best-areas-business-travel", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/coworking-near-cticc", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/apartments-vs-hotels", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
