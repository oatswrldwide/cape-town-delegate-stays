import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("wine", "germany");

export const Route = createFileRoute("/sourcing/wine/germany")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/wine/germany",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="germany" />,
});
