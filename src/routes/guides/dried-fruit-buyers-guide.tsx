import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/dried-fruit-buyers-guide")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit Buyer Guide: Specifications & Packaging | Kaapstays",
      description:
        "A dried fruit buyer guide covering product specifications, moisture, additives, cut sizes, packaging, shelf life and supplier questions for import programmes.",
      path: "/guides/dried-fruit-buyers-guide",
      keywords: [
        "dried fruit buyer guide",
        "bulk dried fruit specifications",
        "dried fruit packaging",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Buyer guide"
      title="Dried fruit sourcing: specifications before sampling"
      intro="Dried fruit can look simple on a product list, but commercially useful buying starts with a clear specification. Fruit type, cut, moisture, additives, packaging and intended use all influence the product a supplier should offer and the documents a buyer needs to review."
      sections={[
        {
          heading: "Write a product specification a supplier can price",
          body: "A clear request avoids comparing a premium retail snack against an ingredient-grade product. Describe the fruit, cut or format, target use, additive preference, expected pack size and destination. A supplier can then confirm what is available, which elements are standard and where a custom run or additional lead time may apply.",
          bullets: [
            "Whole, halves, slices, diced, strips or ingredient-specific formats",
            "Target colour, texture and moisture range where relevant",
            "Sulphured, unsulphured, sweetened or no-added-sugar requirements",
            "Retail-ready, foodservice or bulk industrial packaging",
          ],
        },
        {
          heading: "Quality is more than visual appearance",
          body: "A sample is important, but it is only one part of approval. Buyers should agree the objective criteria that matter to their customer, such as cut consistency, foreign-material controls, microbiological requirements, allergen handling and pack integrity. The applicable tests and legal requirements depend on the destination market and finished product.",
          bullets: [
            "Agree a written specification and sample-approval record",
            "Request the supplier's current product and food-safety documentation",
            "Confirm allergen, additive and labelling declarations for the destination",
            "Set a practical process for reporting and resolving quality claims",
          ],
        },
        {
          heading: "Packaging and storage are part of product quality",
          body: "Dried fruit is sensitive to humidity, damage and odour transfer. A strong product can arrive in poor condition if the inner liner, carton strength, palletisation or storage plan is unsuitable. Match packaging to the route, climate and how the buyer will handle the product after arrival.",
          bullets: [
            "State net weight, liner requirement and pallet configuration",
            "Check storage conditions and shelf-life basis for the product",
            "Consider humidity and temperature exposure on the full route",
            "Confirm whether destination-market labels must be applied at origin",
          ],
        },
      ]}
      faqs={[
        {
          question: "What details should a dried fruit specification include?",
          answer:
            "It should include the fruit type, format or cut, additive preference, target use, quality criteria, packaging, volume, destination and required documentation.",
        },
        {
          question: "Is unsulphured dried fruit always the same as no-added-sugar fruit?",
          answer:
            "No. These are separate product attributes. Buyers should ask suppliers to confirm ingredients and processing details for the exact product offered.",
        },
      ]}
      links={[
        { href: "/products/dried-fruit", label: "Dried fruit sourcing" },
        { href: "/guides/rooibos-tea-guide", label: "Rooibos buyer guide" },
        { href: "/sourcing/dried-fruit/united-states", label: "Dried fruit for the United States" },
      ]}
    />
  ),
});
