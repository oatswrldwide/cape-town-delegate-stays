import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/macadamia-nuts/united-states")({
  head: () =>
    buildSeoHead({
      title: "Macadamia Nuts for US Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for US buyers seeking bulk, roasted or private-label macadamia nuts.",
      path: "/sourcing/macadamia-nuts/united-states",
      keywords: ["south african macadamia nuts USA", "macadamia nuts wholesale United States"],
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="united-states" />,
});
