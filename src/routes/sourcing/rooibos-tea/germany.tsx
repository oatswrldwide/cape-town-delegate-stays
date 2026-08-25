import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("rooibos-tea", "germany");

export const Route = createFileRoute("/sourcing/rooibos-tea/germany")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/rooibos-tea/germany",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="germany" />,
});
