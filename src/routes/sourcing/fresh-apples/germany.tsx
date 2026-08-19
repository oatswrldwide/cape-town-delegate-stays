import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/fresh-apples/germany")({
  head: () =>
    buildSeoHead({
      title: "Fresh Apples for Germany | Kaapstays",
      description:
        "South African sourcing with global reach for German importers seeking fresh apples matched to grade, season and volume.",
      path: "/sourcing/fresh-apples/germany",
      keywords: ["south african apples Germany", "fresh apple exporter Germany"],
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="germany" />,
});
