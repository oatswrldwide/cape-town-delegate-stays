import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/fresh-apples/united-states")({
  head: () =>
    buildSeoHead({
      title: "Fresh Apples for US Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for US importers seeking fresh apples matched to destination, grade and volume.",
      path: "/sourcing/fresh-apples/united-states",
      keywords: ["south african apples USA", "fresh apple exporter United States"],
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="united-states" />,
});
