import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../components/seo/content-page";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoHead({
      title: "About Kaapstays | A Gateway to South Africa",
      description:
        "Kaapstays is a South African sourcing gateway for international buyers looking for products, suppliers and practical export coordination.",
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
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Explore products" },
        { href: "/services/supplier-sourcing", label: "See our services" },
      ]}
    />
  ),
});
