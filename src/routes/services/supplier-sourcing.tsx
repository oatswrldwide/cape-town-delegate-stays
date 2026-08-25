import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/services/supplier-sourcing")({
  head: () =>
    buildSeoHead({
      title: "South African Supplier Sourcing | Kaapstays",
      description:
        "Kaapstays turns your buyer brief into a focused search for capable South African producers. Structured comparisons, verified capability, practical introductions.",
      path: "/services/supplier-sourcing",
      keywords: ["supplier sourcing south africa", "buyer brief supplier shortlist"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Service"
      title="A clearer starting point for South African supply."
      intro="Most sourcing projects fail through misalignment, not product quality. We turn your requirement into a shortlist of producers who can meet your specification, with a clear comparison framework for decision-making."
      sections={[
        {
          heading: "What the service includes",
          body: "We structure sourcing in four practical stages.",
          bullets: [
            "Requirement clarification: spec, destination, volume, timing, packaging and certifications",
            "Market search and verification: capacity, audit status, export history, MOQ and lead time",
            "Structured comparison: commercial and technical view by your criteria",
            "Introductions and next steps: support into sampling and negotiation",
          ],
        },
        {
          heading: "Commercial model",
          body: "Projects are typically split between an initial brief-and-search fee and a success fee on confirmed order, with retainer options for recurring programmes.",
        },
      ]}
      links={[
        { href: "/services/export-coordination", label: "View export coordination" },
        { href: "/about", label: "About Kaapstays" },
      ]}
    />
  ),
});
