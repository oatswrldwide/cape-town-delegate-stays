import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/wine/asia")({
  head: () =>
    buildSeoHead({
      title: "South African Wine for Asia | Kaapstays",
      description:
        "South African sourcing with global reach for Asian buyers seeking wine producers for import, distribution and hospitality.",
      path: "/sourcing/wine/asia",
      keywords: ["south african wine Asia", "South African wine importer Asia"],
    }),
  component: () => <RegionalProductPage productKey="wine" regionKey="asia" />,
});
