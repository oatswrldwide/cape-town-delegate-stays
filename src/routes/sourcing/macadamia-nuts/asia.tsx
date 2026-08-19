import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/macadamia-nuts/asia")({
  head: () =>
    buildSeoHead({
      title: "Macadamia Nuts for Asia | Kaapstays",
      description:
        "South African sourcing with global reach for Asian buyers seeking macadamia nuts for wholesale, ingredients and retail.",
      path: "/sourcing/macadamia-nuts/asia",
      keywords: ["south african macadamia nuts Asia", "macadamia nuts wholesale Asia"],
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="asia" />,
});
