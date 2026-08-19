import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/rooibos-tea/asia")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea for Asia | Kaapstays",
      description:
        "South African sourcing with global reach for Asian buyers seeking rooibos tea for wholesale, retail and foodservice.",
      path: "/sourcing/rooibos-tea/asia",
      keywords: ["south african rooibos Asia", "rooibos tea wholesale Asia"],
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="asia" />,
});
