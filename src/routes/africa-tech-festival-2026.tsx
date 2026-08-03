import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../components/seo/content-page";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/africa-tech-festival-2026")({
  head: () =>
    buildSeoHead({
      title: "Africa Tech Festival 2026 Accommodation in Cape Town | Kaap Delegate Stays",
      description:
        "Find Africa Tech Festival accommodation near CTICC: sea-view rooms, city apartments and team villas for delegates visiting Cape Town in November 2026.",
      path: "/africa-tech-festival-2026",
      keywords: [
        "africa tech festival accommodation",
        "africa tech festival 2026 accommodation",
        "cticc accommodation",
        "hotels near cticc",
      ],
    }),
  component: AfricaTechFestivalPage,
});

function AfricaTechFestivalPage() {
  return (
    <SeoContentPage
      eyebrow="Africa Tech Festival · Cape Town"
      title="Africa Tech Festival 2026 accommodation near CTICC"
      intro="Looking for where to stay for Africa Tech Festival? We help delegates, founders and teams secure practical accommodation near CTICC with fast links to the city, V&A Waterfront and Sea Point."
      sections={[
        {
          heading: "Why delegates stay with us",
          body: "Our portfolio includes sea-view rooms, city apartments and private villas. Every option is selected for reliable Wi-Fi, easy ride-hailing access and smooth transport to the conference venue.",
          bullets: [
            "Short commute options for early sessions and evening events",
            "Flexible layouts for solo travelers or team accommodation",
            "Local host support throughout November 2026",
          ],
        },
        {
          heading: "CTICC accommodation without the hotel markup",
          body: "If you are comparing hotels near CTICC, apartments and villas often give more space, better kitchen access and stronger value for longer business trips.",
        },
        {
          heading: "Built for business travel",
          body: "Share your check-in dates and we will shortlist homes by commute time, group size and budget so you can focus on the festival itself.",
        },
      ]}
      faqs={[
        {
          question: "Where should I stay for Africa Tech Festival in Cape Town?",
          answer:
            "Most delegates choose City Bowl, the V&A Waterfront or Sea Point for quick CTICC access and strong dining options after sessions.",
        },
        {
          question: "Can you place teams in one property?",
          answer:
            "Yes. We can match groups to private villas or adjacent apartments depending on capacity and privacy requirements.",
        },
      ]}
      links={[
        { href: "/stays/city-apartments", label: "City apartments near CTICC" },
        { href: "/stays/private-villas", label: "Private villas for teams" },
        { href: "/neighborhood-guides/sea-point", label: "Sea Point guide" },
      ]}
    />
  );
}
