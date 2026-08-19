import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/rooibos-tea/united-states")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea for US Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for US buyers seeking rooibos tea for bulk ingredients, retail and private label.",
      path: "/sourcing/rooibos-tea/united-states",
      keywords: ["south african rooibos USA", "rooibos tea wholesale United States"],
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="united-states" />,
});
