import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/rooibos-tea/uae")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea for UAE Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for UAE buyers seeking rooibos tea for wholesale, retail and private label.",
      path: "/sourcing/rooibos-tea/uae",
      keywords: ["south african rooibos UAE", "rooibos tea wholesale Dubai"],
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="uae" />,
});
