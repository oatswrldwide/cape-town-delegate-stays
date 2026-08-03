import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/stays/private-villas")({
  head: () =>
    buildSeoHead({
      title: "Private Villas in Cape Town for Teams | Kaap Delegate Stays",
      description:
        "Browse private villa rentals in Cape Town for teams, executives and extended business groups attending conferences and events.",
      path: "/stays/private-villas",
      keywords: ["private villa cape town", "villa rental cape town", "team accommodation cape town"],
    }),
  component: PrivateVillasPage,
});

function PrivateVillasPage() {
  return (
    <SeoContentPage
      eyebrow="Stay type"
      title="Private villas in Cape Town for team travel"
      intro="Need team accommodation in Cape Town? Our private villas offer shared space, privacy and comfort for founders, sponsors and business groups visiting for major events."
      sections={[
        {
          heading: "Why teams choose villas",
          body: "A villa helps your group stay together, coordinate faster and host informal planning sessions without relying on hotel meeting rooms.",
          bullets: [
            "Multiple bedrooms and shared living areas",
            "Ideal for leadership teams and hosted dinners",
            "Flexible stay lengths around event dates",
          ],
        },
        {
          heading: "Good fit for November conference season",
          body: "Cape Town gets busy during major events, so villa options are best reserved early when your team dates are confirmed.",
        },
      ]}
      links={[
        { href: "/neighborhood-guides/camps-bay", label: "Camps Bay villa rental guide" },
        { href: "/africa-tech-festival-2026", label: "Event accommodation near CTICC" },
        { href: "/blog/apartments-vs-hotels", label: "Apartments vs hotels in Cape Town" },
      ]}
    />
  );
}
