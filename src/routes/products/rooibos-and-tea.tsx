import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/rooibos-and-tea")({
  head: () =>
    buildSeoHead({
      title: "Rooibos & Tea Sourcing South Africa | Kaapstays",
      description:
        "South African sourcing for global buyers of rooibos and tea, from bulk ingredients to retail and private-label supply.",
      path: "/products/rooibos-and-tea",
      keywords: ["rooibos wholesale", "south african tea supplier"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Rooibos and tea, from South African origin."
      intro="We help buyers explore rooibos and tea supply across formats, volumes and intended markets."
      sections={[
        {
          heading: "Built around your market",
          body: "Tell us whether you need bulk ingredients, packaged retail product, foodservice formats or a private-label direction, and we will shape the right supplier conversation.",
        },
        {
          heading: "A practical first step",
          body: "Your brief helps us understand destination, volume, packaging, timing and quality requirements before we introduce possible supply paths.",
        },
      ]}
      links={[
        { href: "/products/fresh-apples", label: "Explore fresh apples" },
        { href: "/services/supplier-sourcing", label: "See supplier sourcing" },
      ]}
    />
  ),
});
