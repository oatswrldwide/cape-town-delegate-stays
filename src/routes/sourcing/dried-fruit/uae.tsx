import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage, getRegionalPageMeta } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

const seo = getRegionalPageMeta("dried-fruit", "uae");

export const Route = createFileRoute("/sourcing/dried-fruit/uae")({
  head: () =>
    buildSeoHead({
      title: seo.title,
      description: seo.description,
      path: "/sourcing/dried-fruit/uae",
      keywords: seo.keywords,
    }),
  component: () => <RegionalProductPage productKey="dried-fruit" regionKey="uae" />,
});
