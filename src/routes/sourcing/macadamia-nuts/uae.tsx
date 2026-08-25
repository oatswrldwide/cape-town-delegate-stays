import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("macadamia-nuts", "uae");

export const Route = createFileRoute("/sourcing/macadamia-nuts/uae")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/macadamia-nuts/uae",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="macadamia-nuts" regionKey="uae" />,
});
