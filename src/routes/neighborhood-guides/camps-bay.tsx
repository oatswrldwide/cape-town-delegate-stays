import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/neighborhood-guides/camps-bay")({
  head: () =>
    buildSeoHead({
      title: "Camps Bay Villa Rental Guide | Kaap Delegate Stays",
      description:
        "Looking for Camps Bay villa rental options? Compare private villas in Cape Town for executive groups and business team travel.",
      path: "/neighborhood-guides/camps-bay",
      keywords: ["camps bay villa rental"],
    }),
  component: CampsBayGuidePage,
});

function CampsBayGuidePage() {
  return (
    <SeoContentPage
      eyebrow="Neighborhood guide"
      title="Camps Bay villa rental for premium team stays"
      intro="Camps Bay is a top choice for luxury-focused groups that want private space, ocean views and easy transfers to central conference locations."
      sections={[
        {
          heading: "Best for executive and hosted travel",
          body: "Villas in Camps Bay are well suited to teams that value privacy and premium shared spaces for planning sessions and downtime.",
          bullets: [
            "High-quality private villa inventory",
            "Strong fit for team and leadership groups",
            "Simple transfer options to business hubs",
          ],
        },
      ]}
      links={[
        { href: "/stays/private-villas", label: "Browse private villas" },
        { href: "/africa-tech-festival-2026", label: "Festival accommodation options" },
        { href: "/neighborhood-guides/v-a-waterfront", label: "V&A Waterfront guide" },
      ]}
    />
  );
}
