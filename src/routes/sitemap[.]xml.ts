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
          { path: "/products/rooibos-and-tea", changefreq: "weekly", priority: "0.9" },
          { path: "/products/fresh-apples", changefreq: "weekly", priority: "0.9" },
          { path: "/products/dried-fruit", changefreq: "weekly", priority: "0.9" },
          { path: "/products/nuts", changefreq: "weekly", priority: "0.85" },
          { path: "/products/wine", changefreq: "weekly", priority: "0.9" },
          { path: "/services/supplier-sourcing", changefreq: "monthly", priority: "0.8" },
          { path: "/services/export-coordination", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/sourcing/macadamia-nuts/germany", changefreq: "monthly", priority: "0.8" },
          {
            path: "/sourcing/macadamia-nuts/united-states",
            changefreq: "monthly",
            priority: "0.8",
          },
          { path: "/sourcing/macadamia-nuts/asia", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/macadamia-nuts/uae", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/rooibos-tea/germany", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/rooibos-tea/united-states", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/rooibos-tea/asia", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/rooibos-tea/uae", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/wine/germany", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/wine/united-states", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/wine/asia", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/wine/uae", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/fresh-apples/germany", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/fresh-apples/united-states", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/fresh-apples/asia", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/fresh-apples/uae", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/dried-fruit/germany", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/dried-fruit/united-states", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/dried-fruit/asia", changefreq: "monthly", priority: "0.8" },
          { path: "/sourcing/dried-fruit/uae", changefreq: "monthly", priority: "0.8" },
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
