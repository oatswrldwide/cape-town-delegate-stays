import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/organic-rooibos-tea-sourcing")({
  head: () =>
    buildSeoHead({
      title: "Organic Rooibos Tea Sourcing and Certification Guide | Kaapstays",
      description:
        "A buyer guide to organic rooibos tea sourcing: certification checks, red and green rooibos, packaging, documentation and importing from South Africa.",
      path: "/guides/organic-rooibos-tea-sourcing",
      keywords: [
        "organic rooibos tea",
        "organic rooibos supplier",
        "certified organic rooibos",
        "USDA organic rooibos",
        "EU organic rooibos",
        "organic rooibos wholesale",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Rooibos buyer guide"
      title="Organic rooibos tea sourcing: certification before the label"
      intro="Organic rooibos can be a strong fit for specialty retail, wellness, foodservice and private-label programmes, but the word organic must be supported by current documentation for the relevant market. This guide outlines what buyers should verify before approving a supplier or packaging claim."
      sections={[
        {
          heading: "What makes a rooibos programme organic?",
          body: "Organic status is tied to the production and handling system, the certifying body, the scope of the certificate and the market where the product will be sold. A supplier's general statement is not a substitute for checking the current certificate and confirming that the quoted product and facility are covered.",
          bullets: [
            "Current certificate issued by a recognised certification body",
            "Product, processing site and handling scope matched to the quotation",
            "Traceability from Cederberg origin through processing and packing",
            "Label and claim review for the destination market before printing",
          ],
        },
        {
          heading: "EU, US and other market requirements",
          body: "Organic rules and import workflows differ by destination. Buyers should confirm the requirements with their importer, certification body and qualified local advisers. The supplier brief should identify the destination before samples, labels and documents are finalised.",
          bullets: [
            "EU organic documentation and inspection workflows where applicable",
            "USDA National Organic Program records for US-bound programmes",
            "Destination-specific label, ingredient and claim requirements",
            "Import documents and transaction records retained for auditability",
          ],
        },
        {
          heading: "Organic red rooibos, green rooibos and blends",
          body: "Organic certification does not remove the need to specify the product itself. Red rooibos and green rooibos differ in processing and sensory profile, while blends introduce additional ingredients, allergen checks and claim considerations. Approve the exact formula and sample rather than buying from a category name alone.",
          bullets: [
            "Red rooibos for familiar colour, rounded flavour and mainstream formats",
            "Green rooibos for lighter liquor and a fresher sensory profile",
            "Organic honeybush or botanical blends with separate ingredient review",
            "Flavoured products assessed for natural flavour, allergens and label claims",
          ],
        },
        {
          heading: "Organic rooibos packaging and traceability",
          body: "Packaging is part of compliance and product protection. Buyers should agree the pack format, inner barrier, lot coding, shelf-life basis and records needed to connect a finished pack to the approved raw material and production lot.",
          bullets: [
            "Bulk sacks, lined cartons, tea bags and finished retail packs",
            "Lot identification linked to production, testing and certificate records",
            "Moisture and odour protection appropriate to the route and storage plan",
            "Artwork approval completed before organic marks or claims are printed",
          ],
        },
      ]}
      faqs={[
        {
          question: "Where can I buy certified organic rooibos tea?",
          answer:
            "International buyers can request introductions to South African suppliers with organic programmes for bulk, retail or private-label formats. The current certificate, product scope, destination requirements and pack format should be checked before approval.",
        },
        {
          question: "Is South African rooibos naturally organic?",
          answer:
            "Rooibos origin does not automatically make a product certified organic. Buyers should verify the production method, current certification, covered product and handling chain for the specific quotation.",
        },
        {
          question: "Can organic rooibos be used in private-label tea?",
          answer:
            "Organic rooibos can be suitable for private-label tea, subject to the supplier's certification scope, formulation, packaging, destination-market rules, minimum order and artwork approval process.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Rooibos and tea sourcing" },
        { href: "/guides/rooibos-tea-price-wholesale", label: "Rooibos tea price guide" },
        { href: "/guides/rooibos-tea-guide", label: "Rooibos grades and formats" },
        { href: "/sourcing/rooibos-tea/united-states", label: "Rooibos for US buyers" },
      ]}
    />
  ),
});
