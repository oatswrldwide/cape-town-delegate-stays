import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("rooibos-tea", "asia");

export const Route = createFileRoute("/sourcing/rooibos-tea/asia")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/rooibos-tea/asia",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="asia" />,
});
