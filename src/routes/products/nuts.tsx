import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/nuts")({
  head: () =>
    buildSeoHead({
      title: "Nut Sourcing from South Africa | Kaapstays",
      description:
        "Connect with South African nut supply for wholesale, manufacturing and private-label programmes.",
      path: "/products/nuts",
      keywords: ["south african nuts supplier", "nuts wholesale export south africa"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Nut supply for the next stage of your business."
      intro="We help importers and makers investigate South African nut supply for wholesale, manufacturing and private-label programmes."
      sections={[
        {
          heading: "Designed for real requirements",
          body: "Share your destination, volume, processing, pack and timing requirements so the first conversation is grounded in your operation.",
        },
        {
          heading: "A better connection",
          body: "Kaapstays gives buyers a considered starting point for comparing possible suppliers and planning what comes next.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Explore rooibos and tea" },
        { href: "/about", label: "About Kaapstays" },
      ]}
    />
  ),
});
