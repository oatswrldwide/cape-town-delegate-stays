import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("fresh-apples", "united-states");

export const Route = createFileRoute("/sourcing/fresh-apples/united-states")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/fresh-apples/united-states",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="united-states" />,
});
