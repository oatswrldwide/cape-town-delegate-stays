import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../components/seo/content-page";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoHead({
      title: "About Kaapstays | South African Sourcing Gateway",
      description:
        "South African sourcing with global reach. Kaapstays connects international buyers with products, suppliers and practical export support.",
      path: "/about",
      keywords: ["south africa sourcing agent", "gateway to south africa"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="About Kaapstays"
      title="A gateway to South Africa, built around good connections."
      intro="Kaapstays helps global buyers find a thoughtful starting point for South African goods and supply relationships."
      sections={[
        {
          heading: "Focused, not scattered",
          body: "We begin with a focused set of product categories and a clear buyer brief, so conversations can be useful from the start.",
        },
        {
          heading: "Commercially curious",
          body: "We ask the questions that matter to product, destination, volume, timing and the shape of a relationship beyond a first order.",
        },
        {
          heading: "Brand architecture and legacy accommodation pages",
          body: "Kaapstays is the active sourcing brand on this domain. Legacy Africa Tech Festival accommodation URLs are retained only to guide visitors and search engines toward current Kaapstays pages, while accommodation-specific event logistics are treated as a separate service stream.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Explore products" },
        { href: "/services/supplier-sourcing", label: "See our services" },
      ]}
    />
  ),
});
