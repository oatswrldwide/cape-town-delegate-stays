import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/wine")({
  head: () =>
    buildSeoHead({
      title: "South African Wine Sourcing | Kaapstays",
      description:
        "Source South African wine for import, distribution, hospitality and private-label. Stellenbosch, Paarl and Western Cape producers. Bulk and bottled options.",
      path: "/products/wine",
      keywords: ["south african wine sourcing", "western cape wine export", "bulk and bottled wine"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="South African wine for international buyers."
      intro="From established estates to progressive producers, South Africa offers depth across price points, styles and packaging formats for global wine programmes."
      sections={[
        {
          heading: "Regional and style coverage",
          body: "We source across Stellenbosch, Paarl, Franschhoek, Walker Bay and Swartland based on your market and positioning.",
          bullets: [
            "Premium reds, versatile whites, sparkling and specialist categories",
            "Bottled programmes, flexitank bulk supply and hospitality formats",
            "Private-label options with blend, packaging and compliance support",
          ],
        },
        {
          heading: "Commercial and regulatory support",
          body: "Destination compliance is handled as part of sourcing, not as an afterthought.",
          bullets: [
            "Export documentation and origin verification pathways",
            "Market-specific labelling requirements",
            "Sustainability credentials aligned to importer expectations",
          ],
        },
      ]}
      links={[
        { href: "/sourcing/wine/germany", label: "Wine for Germany" },
        { href: "/sourcing/wine/united-states", label: "Wine for the United States" },
      ]}
    />
  ),
});
