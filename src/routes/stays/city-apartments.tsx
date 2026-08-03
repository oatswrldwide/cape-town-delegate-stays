import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/stays/city-apartments")({
  head: () =>
    buildSeoHead({
      title: "Cape Town City Apartments for Delegates | Kaap Delegate Stays",
      description:
        "Find Cape Town city and CBD apartments for conference trips. Great for delegates who want short commutes, dining access and business-ready stays.",
      path: "/stays/city-apartments",
      keywords: ["cape town city apartment", "cape town cbd apartment"],
    }),
  component: CityApartmentsPage,
});

function CityApartmentsPage() {
  return (
    <SeoContentPage
      eyebrow="Stay type"
      title="Cape Town city apartments near the CBD"
      intro="City apartments are a strong choice for business travelers who want to stay close to CTICC, the CBD and major transport routes."
      sections={[
        {
          heading: "Built for business convenience",
          body: "Our apartment options are selected for practical conference stays with dependable internet, self-catering flexibility and smooth check-in experiences.",
          bullets: [
            "Fast rides to CTICC and nearby coworking spaces",
            "Walkable access to restaurants and supermarkets",
            "Suitable for short-term rental business trips",
          ],
        },
        {
          heading: "Ideal for solo delegates and small teams",
          body: "If your group wants privacy without the size of a villa, city apartments strike the right balance between location and value.",
        },
      ]}
      links={[
        { href: "/africa-tech-festival-2026", label: "Africa Tech Festival 2026 stays" },
        { href: "/blog/coworking-near-cticc", label: "Coworking spaces near CTICC" },
        { href: "/neighborhood-guides/city-bowl", label: "City Bowl accommodation guide" },
      ]}
    />
  );
}
