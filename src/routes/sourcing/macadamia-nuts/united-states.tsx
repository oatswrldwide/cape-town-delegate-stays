import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("macadamia-nuts", "united-states");

export const Route = createFileRoute("/sourcing/macadamia-nuts/united-states")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/macadamia-nuts/united-states",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="united-states" />,
});
