import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/blog/cape-town-safety-guide")({
  head: () =>
    buildSeoHead({
      title: "Cape Town Safety Tips for Business Travelers",
      description:
        "Useful Cape Town safety tips for business travelers visiting conferences and events, including transport and accommodation best practices.",
      path: "/blog/cape-town-safety-guide",
      keywords: ["cape town safety tips business travelers"],
    }),
  component: CapeTownSafetyGuidePage,
});

function CapeTownSafetyGuidePage() {
  return (
    <SeoContentPage
      eyebrow="Business travel blog"
      title="Cape Town safety tips for business travelers"
      intro="Cape Town is welcoming and vibrant, and like any major city, it helps to follow practical safety habits when moving between events, meetings and accommodation."
      sections={[
        {
          heading: "Transport best practices",
          body: "Use trusted ride-hailing options for late returns, verify pickup points and avoid displaying high-value devices while waiting on public sidewalks.",
        },
        {
          heading: "Accommodation habits that reduce risk",
          body: "Choose professionally managed stays, confirm late check-in procedures and share your itinerary with teammates when attending evening networking events.",
          bullets: [
            "Keep digital and printed copies of booking details",
            "Ask hosts about secure parking and entry protocols",
            "Use in-room safes where available",
          ],
        },
      ]}
      links={[
        { href: "/neighborhood-guides/sea-point", label: "Sea Point practical guide" },
        { href: "/neighborhood-guides/city-bowl", label: "City Bowl guide" },
        { href: "/africa-tech-festival-2026", label: "Conference accommodation options" },
      ]}
    />
  );
}
