import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("dried-fruit", "germany");

export const Route = createFileRoute("/sourcing/dried-fruit/germany")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/dried-fruit/germany",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="dried-fruit" regionKey="germany" />,
});
