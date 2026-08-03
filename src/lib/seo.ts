import { SITE_URL } from "./site";

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

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      ...(keywords?.length ? [{ name: "keywords", content: keywords.join(", ") }] : []),
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
