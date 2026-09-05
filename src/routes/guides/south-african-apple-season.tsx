import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/south-african-apple-season")({
  head: () =>
    buildSeoHead({
      title: "South African Apple Season Guide for Buyers | Kaapstays",
      description:
        "Plan South African apple sourcing with this buyer guide to seasonal planning, variety selection, pack specifications, cold chain and export documentation.",
      path: "/guides/south-african-apple-season",
      keywords: [
        "south african apple season",
        "south african apple varieties",
        "apple export sourcing",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Buyer guide"
      title="South African apple season: how buyers plan supply"
      intro="Apple programmes work best when variety, arrival window, specification and cold-chain decisions are planned together. South African supply can support counter-seasonal and year-round category plans, but the right programme depends on destination requirements and the buyer's intended sales window."
      sections={[
        {
          heading: "Plan backwards from the required arrival window",
          body: "A season is more useful to a buyer when it is linked to an arrival date, not simply a harvest date. Build a working schedule that allows time for packhouse preparation, shipment, port handling and destination-market clearance. Confirm current availability and transit assumptions directly with the appointed exporter before committing a retail or foodservice programme.",
          bullets: [
            "Identify the first and final receiving dates your customer needs",
            "Allow a realistic contingency for vessel schedules and port handling",
            "Match the requested arrival window to variety and storage suitability",
            "Review the programme again before each shipment rather than relying on a generic calendar",
          ],
        },
        {
          heading: "Choose varieties for the channel and not only the name",
          body: "Variety selection affects appearance, flavour, storage behaviour and the commercial role an apple can play. Retailers may need a consistent eating experience and carton presentation, while foodservice and processing buyers can place greater weight on size profile, condition and handling. Ask suppliers to state the variety, count range, class and pack style in the quotation.",
          bullets: [
            "Define colour, finish and size requirements for retail programmes",
            "Confirm whether branded or club-variety requirements apply in the destination market",
            "Specify carton, tray, bag or bulk handling needs before sampling",
            "Agree inspection and claim procedures before product leaves origin",
          ],
        },
        {
          heading: "Cold chain and documentation protect the landed product",
          body: "The buyer's specification is only useful if it remains intact through the route to market. Temperature management, container planning and clear documentary responsibilities all need an owner. Import requirements vary by destination, so phytosanitary, food-safety, label and market-access requirements should be checked with the importer and relevant authorities for each shipment.",
          bullets: [
            "Confirm the agreed temperature and atmosphere protocol with the logistics provider",
            "Request a document checklist before booking, not after cargo is packed",
            "Set out who approves substitutions, claims and quality reports",
            "Keep destination-market rules separate from product-quality preferences",
          ],
        },
      ]}
      faqs={[
        {
          question: "When should a buyer begin planning a South African apple programme?",
          answer:
            "Begin before the intended receiving window, allowing enough time to confirm variety availability, samples, specifications, logistics and destination-market documentation.",
        },
        {
          question: "Can one apple specification work for every market?",
          answer:
            "Usually not. Pack style, labelling, market-access requirements, preferred varieties and count sizes can differ by customer and destination.",
        },
      ]}
      links={[
        { href: "/products/fresh-apples", label: "Fresh apple sourcing" },
        { href: "/sourcing/fresh-apples/germany", label: "Apples for Germany" },
        { href: "/services/export-coordination", label: "Export coordination support" },
      ]}
    />
  ),
});
