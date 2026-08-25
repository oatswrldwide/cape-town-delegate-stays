import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("rooibos-tea", "uae");

export const Route = createFileRoute("/sourcing/rooibos-tea/uae")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/rooibos-tea/uae",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="rooibos-tea" regionKey="uae" />,
});
