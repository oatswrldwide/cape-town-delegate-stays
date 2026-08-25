import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/services/export-coordination")({
  head: () =>
    buildSeoHead({
      title: "South Africa Export Coordination | Kaapstays",
      description:
        "Practical export coordination from South Africa to your destination. Documentation, logistics, timing and compliance kept clear from origin to arrival.",
      path: "/services/export-coordination",
      keywords: ["south africa export coordination", "shipment documentation support"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Service"
      title="Keep the route from origin to destination clear."
      intro="Once product and supplier are selected, execution quality determines commercial success. We coordinate documentation, logistics, compliance and communication so shipments move without avoidable disruption."
      sections={[
        {
          heading: "What we coordinate",
          body: "Our support covers the practical execution points that most often create delays or cost overruns.",
          bullets: [
            "Documentation: permits, certificates, invoices, packing lists and shipping paperwork",
            "Logistics: reefer planning, cold chain oversight, consolidation and insurance handover",
            "Compliance and timing: inspections, labelling checks, customs coordination and schedule alignment",
            "Communication: status updates and escalation when conditions change",
          ],
        },
        {
          heading: "When this service adds most value",
          body: "It is particularly useful for first-time imports from South Africa, private-label launches, fresh produce cold-chain shipments, and multi-supplier consolidations.",
        },
        {
          heading: "How we charge",
          body: "Fees are typically per shipment or on monthly retainer for recurring programmes, depending on destination, product complexity and shipment frequency.",
        },
      ]}
      links={[
        { href: "/services/supplier-sourcing", label: "View supplier sourcing" },
        { href: "/products/fresh-apples", label: "See fresh apple sourcing" },
      ]}
    />
  ),
});
