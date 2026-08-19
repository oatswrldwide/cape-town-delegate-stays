import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/dried-fruit")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit Sourcing from South Africa | Kaapstays",
      description:
        "Source dried pineapple and other South African dried fruit formats for retail, foodservice and ingredients.",
      path: "/products/dried-fruit",
      keywords: ["dried pineapple supplier", "south african dried fruit wholesale"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Dried fruit with room to build."
      intro="Dried pineapple and other fruit formats can travel well across retail, foodservice and ingredient applications."
      sections={[
        {
          heading: "Formats that fit",
          body: "Tell us about pack size, processing expectations, destination and end use so we can focus the search around a commercially useful format.",
        },
        {
          heading: "From sample to supply",
          body: "We help turn a clear product brief into an informed supplier conversation and a path toward repeat orders.",
        },
      ]}
      links={[
        { href: "/products/nuts", label: "Explore nuts" },
        { href: "/services/supplier-sourcing", label: "See supplier sourcing" },
      ]}
    />
  ),
});
