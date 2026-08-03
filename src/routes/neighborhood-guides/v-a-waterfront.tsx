import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/neighborhood-guides/v-a-waterfront")({
  head: () =>
    buildSeoHead({
      title: "V&A Waterfront Cape Town Accommodation Guide | Kaap Delegate Stays",
      description:
        "Find V&A Waterfront Cape Town accommodation for delegates and business travelers who want premium location access and strong amenities.",
      path: "/neighborhood-guides/v-a-waterfront",
      keywords: ["waterfront cape town accommodation"],
    }),
  component: WaterfrontGuidePage,
});

function WaterfrontGuidePage() {
  return (
    <SeoContentPage
      eyebrow="Neighborhood guide"
      title="V&A Waterfront accommodation in Cape Town"
      intro="The V&A Waterfront is ideal for travelers who want a premium Cape Town base with easy event access, dining options and walkable attractions."
      sections={[
        {
          heading: "Who this area suits best",
          body: "Waterfront stays work well for executive visitors, first-time Cape Town guests and teams hosting clients around conference schedules.",
          bullets: [
            "High-end accommodation choices",
            "Reliable transport access to CTICC",
            "Strong hospitality and security presence",
          ],
        },
      ]}
      links={[
        { href: "/stays/private-villas", label: "Private villas for teams" },
        { href: "/stays/city-apartments", label: "City apartments near CTICC" },
        { href: "/blog/apartments-vs-hotels", label: "Apartments vs hotels comparison" },
      ]}
    />
  );
}
