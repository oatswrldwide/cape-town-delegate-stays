import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/dried-fruit")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit Sourcing South Africa | Kaapstays",
      description:
        "Dried pineapple, peaches, pears and mixed fruit from South Africa. Retail, foodservice and ingredient formats. Private-label and bulk options.",
      path: "/products/dried-fruit",
      keywords: ["dried fruit sourcing south africa", "dried pineapple export", "bulk dried fruit"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Dried fruit with room to build."
      intro="South Africa's dried fruit sector supplies stable, export-ready formats for snack retail, foodservice and ingredient manufacturing."
      sections={[
        {
          heading: "Product range and specification",
          body: "We source dried pineapple, peaches, pears, apple formats and custom blends tailored to your end use.",
          bullets: [
            "Rings, slices, diced cuts, flakes and blend formats",
            "Sulphured and natural options depending on shelf-life and colour requirements",
            "Moisture and grade targets matched to retail or manufacturing applications",
          ],
        },
        {
          heading: "Packaging and quality systems",
          body: "Pack format, certification and consistency are set upfront to avoid downstream friction.",
          bullets: [
            "Bulk, retail and industrial pack options",
            "HACCP, BRC and ISO-aligned processor options",
            "Organic volumes available in selected programmes",
          ],
        },
      ]}
      links={[
        { href: "/sourcing/dried-fruit/germany", label: "Dried fruit for Germany" },
        { href: "/sourcing/dried-fruit/united-states", label: "Dried fruit for the United States" },
      ]}
    />
  ),
});
