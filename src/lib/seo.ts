import { SITE_URL } from "./site";

function getOgImagePath(path: string) {
  if (path === "/") return "/og-homepage.jpg";
  if (path === "/about") return "/og-about.jpg";
  if (path === "/products/rooibos-and-tea") return "/og-rooibos.jpg";
  if (path === "/products/fresh-apples") return "/og-apples.jpg";
  if (path === "/products/dried-fruit") return "/og-dried-fruit.jpg";
  if (path === "/products/nuts") return "/og-nuts.jpg";
  if (path === "/products/wine") return "/og-wine.jpg";
  if (path === "/services/supplier-sourcing") return "/og-sourcing.jpg";
  if (path === "/services/export-coordination") return "/og-export.jpg";

  const match = path.match(
    /^\/sourcing\/(macadamia-nuts|rooibos-tea|wine|fresh-apples|dried-fruit)\/(germany|united-states|asia|uae)$/,
  );

  if (!match) return "/og-homepage.jpg";

  const [, product, region] = match;
  const regionSuffix = region === "united-states" ? "usa" : region;
  const productPrefix: Record<string, string> = {
    "macadamia-nuts": "mac",
    "rooibos-tea": "rooibos",
    wine: "wine",
    "fresh-apples": "apples",
    "dried-fruit": "fruit",
  };

  return `/og-${productPrefix[product]}-${regionSuffix}.jpg`;
}

export function buildSeoHead({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}${getOgImagePath(path)}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: title },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:url", content: canonicalUrl },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      ...(keywords?.length ? [{ name: "keywords", content: keywords.join(", ") }] : []),
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
