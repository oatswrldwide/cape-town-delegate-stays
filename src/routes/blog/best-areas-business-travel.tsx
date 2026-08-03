import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/blog/best-areas-business-travel")({
  head: () =>
    buildSeoHead({
      title: "Best Area to Stay in Cape Town for Business Travel",
      description:
        "Compare the best areas to stay in Cape Town for business travel, including City Bowl, Sea Point and V&A Waterfront for conference delegates.",
      path: "/blog/best-areas-business-travel",
      keywords: ["best area to stay in cape town for business"],
    }),
  component: BestAreasBusinessTravelPage,
});

function BestAreasBusinessTravelPage() {
  return (
    <SeoContentPage
      eyebrow="Business travel blog"
      title="Best areas to stay in Cape Town for business"
      intro="The best area depends on your event schedule, team setup and preferred lifestyle during the trip. These three neighborhoods cover most delegate needs."
      sections={[
        {
          heading: "City Bowl: strongest central convenience",
          body: "Great for delegates who want short CBD commutes and a broad range of apartment options.",
        },
        {
          heading: "Sea Point: coastal balance and value",
          body: "A strong choice for travelers who want a calmer setting with steady access to CTICC and city meetings.",
        },
        {
          heading: "V&A Waterfront: premium visitor experience",
          body: "Best for executives or hosted trips where convenience, amenities and security are priorities.",
        },
      ]}
      links={[
        { href: "/neighborhood-guides/city-bowl", label: "City Bowl guide" },
        { href: "/neighborhood-guides/sea-point", label: "Sea Point guide" },
        { href: "/neighborhood-guides/v-a-waterfront", label: "V&A Waterfront guide" },
      ]}
    />
  );
}
