import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/wine/germany")({
  head: () =>
    buildSeoHead({
      title: "South African Wine for Germany | Kaapstays",
      description:
        "South African sourcing with global reach for German buyers seeking wine producers for import, distribution and hospitality.",
      path: "/sourcing/wine/germany",
      keywords: ["south african wine Germany", "South African wine importer Germany"],
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="germany" />,
});
