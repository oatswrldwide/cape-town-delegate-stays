import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("wine", "asia");

export const Route = createFileRoute("/sourcing/wine/asia")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/wine/asia",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="asia" />,
});
