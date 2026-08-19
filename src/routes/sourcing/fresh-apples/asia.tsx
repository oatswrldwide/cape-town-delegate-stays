import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/fresh-apples/asia")({
  head: () =>
    buildSeoHead({
      title: "Fresh Apples for Asia | Kaapstays",
      description:
        "South African sourcing with global reach for Asian importers seeking fresh apples matched to grade, season and volume.",
      path: "/sourcing/fresh-apples/asia",
      keywords: ["south african apples Asia", "fresh apple exporter Asia"],
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="asia" />,
});
