import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/stays/private-rooms")({
  head: () =>
    buildSeoHead({
      title: "Private Rooms in Cape Town | Kaap Delegate Stays",
      description:
        "Book private room accommodation in Cape Town for solo delegates and budget-conscious business travelers who still need safe, central locations.",
      path: "/stays/private-rooms",
      keywords: ["private room cape town"],
    }),
  component: PrivateRoomsPage,
});

function PrivateRoomsPage() {
  return (
    <SeoContentPage
      eyebrow="Stay type"
      title="Private room accommodation in Cape Town"
      intro="Private rooms are ideal for solo delegates who want affordable, safe and practical accommodation near key business areas in Cape Town."
      sections={[
        {
          heading: "Simple and efficient for short stays",
          body: "These options focus on comfort, reliability and easy city access so you can keep your trip budget controlled without losing convenience.",
          bullets: [
            "Great for independent delegates",
            "Suitable for short conference stays",
            "Reliable support for check-in and local guidance",
          ],
        },
        {
          heading: "A smart alternative to expensive hotels",
          body: "When event demand spikes, private rooms can give you better value than hotels while still keeping you close to meeting venues and transport links.",
        },
      ]}
      links={[
        { href: "/stays/city-apartments", label: "Explore city apartments" },
        { href: "/africa-tech-festival-2026", label: "Event accommodation page" },
        { href: "/blog/apartments-vs-hotels", label: "Compare apartments vs hotels" },
      ]}
    />
  );
}
