import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/stays/sea-view-rooms")({
  head: () =>
    buildSeoHead({
      title: "Sea View Accommodation in Cape Town | Kaap Delegate Stays",
      description:
        "Book sea view accommodation in Cape Town for business travel and conferences. Ideal for delegates who want calm mornings and quick city access.",
      path: "/stays/sea-view-rooms",
      keywords: ["sea view accommodation cape town", "sea point accommodation"],
    }),
  component: SeaViewRoomsPage,
});

function SeaViewRoomsPage() {
  return (
    <SeoContentPage
      eyebrow="Stay type"
      title="Sea view accommodation in Cape Town"
      intro="Our sea-view rooms are ideal for delegates who want a calm base near Sea Point while staying connected to CTICC and the Cape Town CBD."
      sections={[
        {
          heading: "Designed for conference schedules",
          body: "These rooms combine comfort with practical business travel needs, including consistent connectivity, secure access and fast transport options.",
          bullets: [
            "Ocean-facing options for longer stays",
            "Easy links to restaurants and essentials",
            "Strong fit for solo and duo bookings",
          ],
        },
        {
          heading: "Why Sea Point works",
          body: "Sea Point gives delegates a balanced lifestyle: quick access to the conference and a quieter evening environment compared with core downtown blocks.",
        },
      ]}
      links={[
        { href: "/neighborhood-guides/sea-point", label: "Sea Point neighborhood guide" },
        { href: "/africa-tech-festival-2026", label: "Africa Tech Festival accommodation" },
        { href: "/stays/private-rooms", label: "Private rooms in Cape Town" },
      ]}
    />
  );
}
