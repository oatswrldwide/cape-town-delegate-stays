import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../components/seo/content-page";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoHead({
      title: "About Kaapstays | South African Sourcing Gateway",
      description:
        "Learn how Kaapstays connects international buyers with South African producers through structured sourcing and practical export coordination.",
      path: "/about",
      keywords: [
        "about kaapstays",
        "south african sourcing gateway",
        "south african supplier network",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="About Kaapstays"
      title="A gateway built around good connections."
      intro="Kaapstays was founded on a simple observation: international buyers interested in South African products often lose weeks on introductions that lead nowhere. The issue is not a shortage of suppliers, but a shortage of decision-ready information when it matters most."
      sections={[
        {
          heading: "What we believe",
          body: "Focused categories create better outcomes. We work deeply in rooibos, apples, dried fruit, nuts and wine because these are categories where South Africa has real export strength.",
          bullets: [
            "Focused, not scattered: we source selected categories with regional and seasonal understanding.",
            "Briefs before introductions: product, destination, volume, timing and packaging come first.",
            "Commercially curious: we design for repeat business, not one-off transactions.",
          ],
        },
        {
          heading: "Where we work",
          body: "Our supplier network is rooted in key South African agricultural regions and aligned to export channels.",
          bullets: [
            "Western Cape: apples, wine, rooibos and dried fruit",
            "Mpumalanga and Limpopo: macadamia nuts and pecans",
            "Cederberg: rooibos and indigenous teas",
            "Export coordination through Cape Town and Durban, with air freight where shelf life requires it",
          ],
        },
        {
          heading: "Who we work with",
          body: "Our buyers include importers and distributors, private-label retail teams, food manufacturers and hospitality groups building South African ranges.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Explore rooibos and tea sourcing" },
        { href: "/services/supplier-sourcing", label: "View supplier sourcing service" },
      ]}
    />
  ),
});
