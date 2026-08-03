import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/neighborhood-guides/city-bowl")({
  head: () =>
    buildSeoHead({
      title: "City Bowl Cape Town Accommodation Guide | Kaap Delegate Stays",
      description:
        "Explore City Bowl accommodation in Cape Town for business travel, events and conference access with strong transport links to CTICC.",
      path: "/neighborhood-guides/city-bowl",
      keywords: ["city bowl cape town accommodation"],
    }),
  component: CityBowlGuidePage,
});

function CityBowlGuidePage() {
  return (
    <SeoContentPage
      eyebrow="Neighborhood guide"
      title="City Bowl accommodation for conference travel"
      intro="City Bowl is one of the most practical neighborhoods for delegates who need quick access to CTICC, the Cape Town CBD and business dining hotspots."
      sections={[
        {
          heading: "Why business travelers pick City Bowl",
          body: "The area blends central convenience with a broad range of apartment and room options, making it a dependable base for conference weeks.",
          bullets: [
            "Close to conference venues and transport links",
            "Strong mix of dining, coffee and after-hours options",
            "Easy transfer options to Sea Point and Waterfront",
          ],
        },
      ]}
      links={[
        { href: "/stays/city-apartments", label: "City apartment stays" },
        { href: "/africa-tech-festival-2026", label: "Africa Tech Festival accommodation" },
        { href: "/blog/best-areas-business-travel", label: "Best areas for business travel" },
      ]}
    />
  );
}
