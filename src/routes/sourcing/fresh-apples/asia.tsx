import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("fresh-apples", "asia");

export const Route = createFileRoute("/sourcing/fresh-apples/asia")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/fresh-apples/asia",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="asia" />,
});
