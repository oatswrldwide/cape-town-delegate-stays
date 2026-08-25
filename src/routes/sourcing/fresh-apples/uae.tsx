import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("fresh-apples", "uae");

export const Route = createFileRoute("/sourcing/fresh-apples/uae")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/fresh-apples/uae",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="fresh-apples" regionKey="uae" />,
});
