import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/fresh-apples")({
  head: () =>
    buildSeoHead({
      title: "Fresh Apple Export Sourcing South Africa | Kaapstays",
      description:
        "Export-ready South African apples from the Western Cape. Variety-specific sourcing for retail, wholesale and foodservice. Seasonal planning, cold chain coordination.",
      path: "/products/fresh-apples",
      keywords: ["fresh apple export south africa", "western cape apples", "apple cold chain"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Fresh apples for international markets."
      intro="South Africa's leading apple regions in the Western Cape supply export programmes with strong colour, firmness and post-harvest handling. Counter-seasonal timing supports Northern Hemisphere continuity."
      sections={[
        {
          heading: "Variety and pack planning",
          body: "Programme performance depends on the right variety mix, pack format and delivery window for your channel.",
          bullets: [
            "Core export varieties include Granny Smith, Royal Gala, Pink Lady, Golden Delicious and Fuji",
            "Formats include 10kg, 12.5kg and 18kg cartons, bins and retail-ready packs",
            "Sizing and grade are aligned to market preferences and use case",
          ],
        },
        {
          heading: "Logistics and compliance",
          body: "Cold chain and documentation discipline are central to successful apple programmes.",
          bullets: [
            "Controlled-atmosphere storage extends commercial availability",
            "Reefer planning supports route-specific transit windows",
            "Phytosanitary and destination protocols are confirmed pre-shipment",
          ],
        },
      ]}
      links={[
        { href: "/sourcing/fresh-apples/germany", label: "Fresh apples for Germany" },
        { href: "/sourcing/fresh-apples/uae", label: "Fresh apples for UAE" },
      ]}
    />
  ),
});
