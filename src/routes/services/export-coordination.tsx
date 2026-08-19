import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/services/export-coordination")({
  head: () =>
    buildSeoHead({
      title: "Export Coordination from South Africa | Kaapstays",
      description:
        "Kaapstays helps buyers and suppliers keep export conversations, requirements and next steps aligned.",
      path: "/services/export-coordination",
      keywords: ["south africa export coordination", "south african export agent"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Our services"
      title="Keep the route from origin to destination clear."
      intro="Once a product and supplier look promising, we help keep the practical export conversation moving."
      sections={[
        {
          heading: "Align the details",
          body: "We help clarify commercial requirements, timing, packaging and the information needed for the next stage of an order.",
        },
        {
          heading: "Plan the next move",
          body: "Export coordination is grounded in the specific product, supplier and destination. We keep the process clear without pretending every shipment follows the same path.",
        },
      ]}
      links={[
        { href: "/services/supplier-sourcing", label: "See supplier sourcing" },
        { href: "/about", label: "About Kaapstays" },
      ]}
    />
  ),
});
