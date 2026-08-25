import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("fresh-apples", "germany");

export const Route = createFileRoute("/sourcing/fresh-apples/germany")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/fresh-apples/germany",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="germany" />,
});
