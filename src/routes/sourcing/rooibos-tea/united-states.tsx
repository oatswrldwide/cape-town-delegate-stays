import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("rooibos-tea", "united-states");

export const Route = createFileRoute("/sourcing/rooibos-tea/united-states")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/rooibos-tea/united-states",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="united-states" />,
});
