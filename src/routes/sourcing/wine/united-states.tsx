import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("wine", "united-states");

export const Route = createFileRoute("/sourcing/wine/united-states")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/wine/united-states",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="united-states" />,
});
