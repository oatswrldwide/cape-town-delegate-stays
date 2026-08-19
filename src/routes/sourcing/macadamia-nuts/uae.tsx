import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/macadamia-nuts/uae")({
  head: () =>
    buildSeoHead({
      title: "Macadamia Nuts for UAE Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for UAE buyers seeking macadamia nuts for wholesale, retail and private label.",
      path: "/sourcing/macadamia-nuts/uae",
      keywords: ["south african macadamia nuts UAE", "macadamia nuts wholesale Dubai"],
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="uae" />,
});
