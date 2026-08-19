import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/services/supplier-sourcing")({
  head: () =>
    buildSeoHead({
      title: "South African Supplier Sourcing | Kaapstays",
      description:
        "South African sourcing for global buyers: we turn product, volume and destination needs into focused supplier conversations.",
      path: "/services/supplier-sourcing",
      keywords: ["south african supplier sourcing", "source products from south africa"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Our services"
      title="A clearer starting point for South African supply."
      intro="We turn a buyer's requirement into a focused search for capable producers and useful commercial conversations."
      sections={[
        {
          heading: "Your brief comes first",
          body: "We look at product, volume, destination, timing, packaging and intended use before exploring possible supply paths.",
        },
        {
          heading: "Useful introductions",
          body: "Our role is to help buyers move from a broad idea to the next informed conversation with a relevant producer.",
        },
      ]}
      links={[
        { href: "/services/export-coordination", label: "See export coordination" },
        { href: "/products/rooibos-and-tea", label: "Explore products" },
      ]}
    />
  ),
});
