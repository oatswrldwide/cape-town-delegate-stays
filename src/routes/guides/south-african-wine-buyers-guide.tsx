import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/south-african-wine-buyers-guide")({
  head: () =>
    buildSeoHead({
      title: "South African Wine Buyer Guide: Import & Sourcing | Kaapstays",
      description:
        "A South African wine sourcing guide for importers: programme briefs, winery selection, bottled versus bulk wine, documentation and route-to-market planning.",
      path: "/guides/south-african-wine-buyers-guide",
      keywords: [
        "south african wine buyer guide",
        "south african wine import",
        "south african wine sourcing",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Buyer guide"
      title="South African wine sourcing: from brief to shipment"
      intro="A wine programme needs a commercial position as well as a product preference. Whether the buyer needs a named estate, a regional style, private label or bulk supply, the first brief should connect the target consumer, price architecture, packaging route and destination-market requirements."
      sections={[
        {
          heading: "Define the programme before tasting widely",
          body: "Tastings are more productive when the buyer has described the channel, price point, expected annual volume, packaging format and destination. This helps focus winery conversations on wines that can support the intended programme rather than creating a long list of samples with no clear commercial fit.",
          bullets: [
            "Retail, hospitality, distribution, private-label or on-trade channel",
            "Named winery, regional style, varietal, blend or bulk-wine requirement",
            "Target price position and intended pack format",
            "Forecast volume, launch timing and repeat-order expectation",
          ],
        },
        {
          heading: "Bottled wine, private label and bulk wine need different plans",
          body: "A bottled programme can centre on an existing winery brand and export presentation. Private label requires agreement on packaging, design, approvals and ownership of the finished presentation. Bulk wine shifts the focus to the buyer's bottling strategy, quality controls and destination-market handling. Make the route explicit in the sourcing brief.",
          bullets: [
            "Confirm which party owns label development and approval",
            "Identify packaging lead times and any glass or closure constraints",
            "Agree sample, blend and vintage approval steps",
            "Set out the documents and labels required for the destination market",
          ],
        },
        {
          heading: "Treat compliance and logistics as part of the product",
          body: "Alcohol rules, label requirements, excise processes and importer responsibilities are market-specific. The importer and qualified local advisers should confirm the applicable requirements before a purchase order is finalised. Shipment planning should also identify temperature exposure, insurance, delivery terms and responsibility for customs clearance.",
          bullets: [
            "Verify importer, label and excise obligations for the destination",
            "Confirm the product and shipping documents needed before production",
            "Allow time for artwork, label review and destination approvals",
            "Agree delivery terms, insurance and quality-claim procedures",
          ],
        },
      ]}
      faqs={[
        {
          question: "What should a South African wine sourcing brief include?",
          answer:
            "Include the destination, channel, wine style, price position, packaging route, forecast volume, launch timing and any brand or label requirements.",
        },
        {
          question: "Can a buyer source private-label wine from South Africa?",
          answer:
            "Private-label programmes can be possible, but feasibility depends on the wine, packaging, approvals, volume, timing and supplier capability for the requested programme.",
        },
      ]}
      links={[
        { href: "/products/wine", label: "South African wine sourcing" },
        { href: "/sourcing/wine/united-states", label: "Wine for the United States" },
        { href: "/services/export-coordination", label: "Export coordination support" },
      ]}
    />
  ),
});
