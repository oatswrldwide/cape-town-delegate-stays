import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/wine/uae")({
  head: () =>
    buildSeoHead({
      title: "South African Wine for UAE Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for UAE buyers seeking suitable wine producers for import and hospitality channels.",
      path: "/sourcing/wine/uae",
      keywords: ["south african wine UAE", "South African wine importer Dubai"],
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="uae" />,
});
