import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/fresh-apples/uae")({
  head: () =>
    buildSeoHead({
      title: "Fresh Apples for UAE Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for UAE importers seeking fresh apples matched to grade, season and volume.",
      path: "/sourcing/fresh-apples/uae",
      keywords: ["south african apples UAE", "fresh apple exporter Dubai"],
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="uae" />,
});
