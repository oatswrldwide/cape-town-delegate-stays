import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/nuts")({
  head: () =>
    buildSeoHead({
      title: "Nut Export Sourcing South Africa | Kaapstays",
      description:
        "South African macadamia and pecan supply for wholesale, manufacturing and private-label. Raw, roasted and value-added formats. Export coordination included.",
      path: "/products/nuts",
      keywords: ["south african macadamia export", "pecan sourcing", "nut private label supply"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Nut supply for the next stage of your business."
      intro="South Africa's mature macadamia sector and growing pecan volumes create a strong supply base for retail, manufacturing and private-label programmes."
      sections={[
        {
          heading: "Macadamia and pecan formats",
          body: "We support sourcing from whole kernel programmes through manufacturing grades and value-added formats.",
          bullets: [
            "Macadamia kernel styles for snack, bakery, confectionery and industrial use",
            "Raw, dry roasted, oil roasted and selected flavoured options",
            "Pecan halves, pieces and meal for retail and processing",
          ],
        },
        {
          heading: "Export readiness",
          body: "Timing, grading and documentation are built into supplier comparisons from the start.",
          bullets: [
            "Vacuum and bulk pack options aligned to channel needs",
            "Certification pathways including HACCP, BRC, ISO and market-specific requirements",
            "Season planning to secure allocation from leading processors",
          ],
        },
      ]}
      links={[
        { href: "/sourcing/macadamia-nuts/germany", label: "Macadamia nuts for Germany" },
        { href: "/sourcing/macadamia-nuts/asia", label: "Macadamia nuts for Asia" },
      ]}
    />
  ),
});
