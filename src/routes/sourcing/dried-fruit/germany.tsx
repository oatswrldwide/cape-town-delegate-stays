import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/dried-fruit/germany")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit for Germany | Kaapstays",
      description:
        "South African sourcing with global reach for German buyers seeking dried pineapple and fruit formats for retail and ingredients.",
      path: "/sourcing/dried-fruit/germany",
      keywords: ["south african dried fruit Germany", "dried pineapple supplier Germany"],
    }),
  component: () => <RegionalProductPage productKey="dried-fruit" regionKey="germany" />,
});
