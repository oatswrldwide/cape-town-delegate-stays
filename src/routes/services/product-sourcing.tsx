import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/services/product-sourcing")({
  head: () =>
    buildSeoHead({
      title: "Product Sourcing in South Africa | Kaapstays",
      description:
        "Looking to source products from South Africa? Kaapstays helps international buyers clarify requirements, research suppliers, compare options and coordinate next steps.",
      path: "/services/product-sourcing",
      keywords: [
        "product sourcing south africa",
        "south african sourcing company",
        "sourcing agent south africa",
        "find suppliers in south africa",
        "south african product suppliers",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Source products from South Africa with a clearer process."
      intro="Kaapstays works with international buyers who need help finding suitable South African supply. Start with a specific product, a category, or a brief that still needs refining. We assess the request and map out practical next steps before you commit to a supplier."
      sections={[
        {
          heading: "What can you source?",
          body: "Our existing category pages cover rooibos and tea, fresh apples, dried fruit, nuts and wine. If you need a different product, you can still bring us the brief. Feasibility depends on supplier availability, specifications, order size, destination rules and timing; we will clarify those constraints rather than promise a match before checking.",
          bullets: [
            "Food products and ingredients",
            "Wholesale, retail and private-label product requirements",
            "Other South African-made or South African-supplied goods, subject to a feasibility check",
          ],
        },
        {
          heading: "How the sourcing process works",
          body: "We start by understanding what you need and what a viable supplier must be able to deliver. We then research potential sources, request or organise relevant commercial details where possible, and help you compare the options against your requirements.",
          bullets: [
            "Clarify product specifications, quantity, packaging and target market",
            "Research potential suppliers and assess fit against the brief",
            "Compare available information such as minimum order quantities, lead times and documentation",
            "Coordinate introductions and discuss the next steps towards samples, negotiation or export planning",
          ],
        },
        {
          heading: "What to prepare before a meeting",
          body: "You do not need a perfect brief to start. Bring whatever you know about the product and we can identify the missing information together.",
          bullets: [
            "Product name, specification or reference example",
            "Destination country and intended use",
            "Estimated order volume and repeat-order expectations",
            "Packaging, quality, certification or compliance requirements",
            "Target timing and any indicative budget or target price",
          ],
        },
        {
          heading: "A practical, transparent starting point",
          body: "Kaapstays is a sourcing and coordination partner, not a guarantee that every requested item will be available. We will discuss scope, research needs, deliverables and commercial terms before work proceeds, and distinguish confirmed supplier information from details that still need verification.",
        },
      ]}
      links={[
        { href: "/services/supplier-sourcing", label: "Supplier sourcing support" },
        { href: "/services/export-coordination", label: "Export coordination" },
        { href: "/about", label: "About Kaapstays" },
      ]}
    />
  ),
});
