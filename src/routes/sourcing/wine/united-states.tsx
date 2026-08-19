import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/wine/united-states")({
  head: () =>
    buildSeoHead({
      title: "South African Wine for US Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for US buyers seeking wine producers for import, distribution and hospitality.",
      path: "/sourcing/wine/united-states",
      keywords: ["south african wine USA", "South African wine importer United States"],
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="united-states" />,
});
