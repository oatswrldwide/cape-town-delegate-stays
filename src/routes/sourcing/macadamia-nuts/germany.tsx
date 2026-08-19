import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/macadamia-nuts/germany")({
  head: () =>
    buildSeoHead({
      title: "Macadamia Nuts for Germany | Kaapstays",
      description:
        "South African sourcing with global reach for German buyers seeking macadamia nuts for wholesale, ingredients and private label.",
      path: "/sourcing/macadamia-nuts/germany",
      keywords: ["south african macadamia nuts Germany", "macadamia nuts wholesale Germany"],
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="germany" />,
});
