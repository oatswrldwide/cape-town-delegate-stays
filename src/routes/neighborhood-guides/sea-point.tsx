import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/neighborhood-guides/sea-point")({
  head: () =>
    buildSeoHead({
      title: "Sea Point Cape Town Accommodation Guide | Kaap Delegate Stays",
      description:
        "Sea Point accommodation guide for Cape Town delegates, including commute tips from Sea Point to CTICC and practical local travel advice.",
      path: "/neighborhood-guides/sea-point",
      keywords: [
        "sea point cape town guide",
        "cticc to sea point transport",
        "sea point accommodation",
      ],
    }),
  component: SeaPointGuidePage,
});

function SeaPointGuidePage() {
  return (
    <SeoContentPage
      eyebrow="Neighborhood guide"
      title="Sea Point guide for conference travelers"
      intro="Sea Point offers a balanced base for delegates who want coastal surroundings without losing easy access to conference venues and business districts."
      sections={[
        {
          heading: "Getting from Sea Point to CTICC",
          body: "Most delegates use ride-hailing for a direct route, usually around 15–20 minutes outside peak traffic. Early departures help avoid congestion on event mornings.",
        },
        {
          heading: "Why delegates like Sea Point",
          body: "It combines good value, steady accommodation supply and a walkable lifestyle for early runs, dinners and informal meetings.",
          bullets: [
            "Strong mix of private rooms and sea-view options",
            "Convenient access to City Bowl and Waterfront",
            "Suitable for first-time Cape Town visitors",
          ],
        },
      ]}
      links={[
        { href: "/stays/sea-view-rooms", label: "Sea-view room options" },
        { href: "/blog/cape-town-safety-guide", label: "Cape Town safety tips" },
        { href: "/africa-tech-festival-2026", label: "Event accommodation page" },
      ]}
    />
  );
}
