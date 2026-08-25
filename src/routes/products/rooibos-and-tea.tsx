import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/rooibos-and-tea")({
  head: () =>
    buildSeoHead({
      title: "Rooibos & Tea Sourcing South Africa | Kaapstays",
      description:
        "Source rooibos and South African teas for bulk, retail, foodservice and private label. Cederberg origin, organic options, export-ready formats.",
      path: "/products/rooibos-and-tea",
      keywords: ["rooibos sourcing", "cederberg tea suppliers", "south african tea export"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Rooibos and tea, from South African origin."
      intro="Rooibos grows exclusively in South Africa's Cederberg region. For buyers, that means true origin distinction with strong relevance in wellness, specialty and premium tea programmes."
      sections={[
        {
          heading: "What we can source",
          body: "We support bulk and value-added tea sourcing across retail and manufacturing use cases.",
          bullets: [
            "Traditional fermented rooibos and green rooibos",
            "Organic options aligned to EU, USDA and other market standards",
            "Bulk loose leaf, tea bags, foodservice formats and private-label packaging",
            "Honeybush, buchu and indigenous blends where required",
          ],
        },
        {
          heading: "Sourcing considerations",
          body: "Quality, timing and documentation need to match your destination market and product format.",
          bullets: [
            "Seasonality planning for summer harvest windows",
            "Grade alignment based on cut, colour and dust levels",
            "Current certification verification before supplier introductions",
            "Documentation support for origin claims and market compliance",
          ],
        },
      ]}
      links={[
        { href: "/sourcing/rooibos-tea/germany", label: "Rooibos for Germany" },
        { href: "/sourcing/rooibos-tea/united-states", label: "Rooibos for the United States" },
      ]}
    />
  ),
});
