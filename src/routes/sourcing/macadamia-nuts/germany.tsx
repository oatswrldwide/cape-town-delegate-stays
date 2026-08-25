import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("macadamia-nuts", "germany");

export const Route = createFileRoute("/sourcing/macadamia-nuts/germany")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/macadamia-nuts/germany",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="germany" />,
});
