import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/services/product-sourcing")({
  head: () =>
    buildSeoHead({
      title: "Product Sourcing in South Africa for Importers | Kaapstays",
      description:
        "Find and assess South African product suppliers with a clearer brief. Kaapstays supports international buyers with supplier research, quote comparisons and export coordination.",
      path: "/services/product-sourcing",
      keywords: [
        "product sourcing south africa",
        "south african sourcing company",
        "sourcing agent south africa",
        "find suppliers in south africa",
        "south african product suppliers",
        "supplier sourcing for importers",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing for international buyers"
      title="Find South African suppliers with a clearer sourcing process."
      intro="Kaapstays helps importers, retailers, distributors and product brands turn a buying requirement into a practical supplier brief. We research potential South African supply options, clarify specifications and commercial details, and help you identify the questions that need answers before you commit. Supplier availability, certifications, capacity and export requirements are checked for the specific brief rather than assumed."
      sections={[
        {
          heading: "What products can you source from South Africa?",
          body: "Our current product categories include rooibos and tea, fresh apples, dried fruit, nuts and wine. If you need another South African product, share the details and we can assess whether a useful sourcing route is feasible. The right supplier depends on the product, order size, destination market, quality requirements and delivery timeline.",
          bullets: [
            "Rooibos and tea for bulk, foodservice, retail and private-label programmes",
            "Fresh apples and dried fruit for wholesale and distribution",
            "Nuts and other selected agricultural products, subject to specification and availability",
            "Wine and other South African-supplied goods, subject to market and trade requirements",
          ],
        },
        {
          heading: "How our product sourcing process works",
          body: "Good sourcing starts with a clear specification, not a long list of unqualified supplier names. We establish what you need, research possible sources, compare the information available and identify gaps that must be verified before a commercial decision.",
          bullets: [
            "Define the product, grade, format, intended use and destination",
            "Identify potential suppliers whose stated capabilities fit the brief",
            "Request or compare available information on price basis, minimum order, lead time and packaging",
            "Flag documentation, quality, certification or capacity questions that still need confirmation",
            "Coordinate the next step, such as a supplier introduction, sample request or export-planning discussion",
          ],
        },
        {
          heading: "What to include in a supplier sourcing brief",
          body: "You do not need every detail to begin, but more specific information makes the first review more useful. If you are still exploring the market, tell us what is known and which decisions remain open.",
          bullets: [
            "Product name, technical specification, grade or reference sample",
            "Destination country and how the product will be used or sold",
            "Trial order quantity and expected repeat or annual volume",
            "Packaging format, labelling, certification and quality requirements",
            "Target delivery date, preferred shipping terms and indicative target price",
          ],
        },
        {
          heading: "Compare the full commercial offer, not only the unit price",
          body: "Supplier quotations are only comparable when they use the same product specification and delivery assumptions. Packaging, minimum order quantities, sample costs, payment terms, freight, insurance, duties and destination requirements can change the total economics. Ask suppliers to state what is included and which details remain provisional.",
          bullets: [
            "Confirm currency, quote validity, quantity breaks and minimum order",
            "Compare packaging, palletisation and shipment assumptions",
            "Clarify lead time, sample approval and repeat-order capacity",
            "Check current certificates and product documents directly with the relevant supplier",
          ],
        },
        {
          heading: "Export documentation and compliance depend on the product and market",
          body: "There is no single document list that applies to every South African export. Customs declarations, permits, certificates of origin, phytosanitary documents, food-safety records and destination-market requirements may apply depending on the goods and route. We help identify the questions to raise early, while product-specific legal or regulatory requirements should be confirmed with the relevant authorities, customs broker and qualified service providers.",
          bullets: [
            "Confirm whether the product is restricted or requires an export permit",
            "Identify origin, traceability, inspection or phytosanitary requirements where relevant",
            "Review destination-market labelling and product compliance before production",
            "Agree who is responsible for each document and shipment milestone",
          ],
        },
        {
          heading: "A practical, transparent starting point",
          body: "Kaapstays is a sourcing and coordination partner, not a guarantee that every requested product will be available or that every supplier will meet your requirements. Before work proceeds, we clarify the scope, deliverables, commercial terms and what can realistically be verified. Confirmed facts are separated from details that still require supplier or authority confirmation.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Rooibos and tea sourcing" },
        { href: "/products/fresh-apples", label: "South African fresh apples" },
        { href: "/products/dried-fruit", label: "Dried fruit sourcing" },
        { href: "/products/nuts", label: "Nuts and macadamia sourcing" },
        { href: "/services/supplier-sourcing", label: "Supplier sourcing support" },
        { href: "/services/export-coordination", label: "Export coordination" },
        { href: "/about", label: "About Kaapstays" },
      ]}
    />
  ),
});
