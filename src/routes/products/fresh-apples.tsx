import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/fresh-apples")({
  head: () =>
    buildSeoHead({
      title: "Fresh Apple Sourcing from South Africa | Kaapstays",
      description:
        "Explore South African fresh apple sourcing for importers, distributors and retailers with Kaapstays.",
      path: "/products/fresh-apples",
      keywords: ["south african apple export", "fresh apple supplier south africa"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Fresh apples for international markets."
      intro="We connect buyers with South African apple supply suited to destination, season, grade and commercial requirements."
      sections={[
        {
          heading: "Start with the specification",
          body: "Share your preferred varieties, pack format, destination, forecast volume and timing so the sourcing conversation starts with useful detail.",
        },
        {
          heading: "Coordinate with clarity",
          body: "We help keep buyer and supplier conversations aligned as you assess availability, commercial fit and next steps.",
        },
      ]}
      links={[
        { href: "/products/dried-fruit", label: "Explore dried fruit" },
        { href: "/services/export-coordination", label: "See export coordination" },
      ]}
    />
  ),
});
