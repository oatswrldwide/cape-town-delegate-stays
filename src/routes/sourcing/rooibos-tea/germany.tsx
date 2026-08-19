import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/rooibos-tea/germany")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea for Germany | Kaapstays",
      description:
        "South African sourcing with global reach for German buyers seeking rooibos tea for bulk, retail and private-label supply.",
      path: "/sourcing/rooibos-tea/germany",
      keywords: ["south african rooibos Germany", "rooibos tea wholesale Germany"],
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="germany" />,
});
