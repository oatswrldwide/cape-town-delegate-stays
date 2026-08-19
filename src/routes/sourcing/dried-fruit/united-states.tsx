import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/dried-fruit/united-states")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit for US Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for US buyers seeking dried pineapple and fruit formats for retail and ingredients.",
      path: "/sourcing/dried-fruit/united-states",
      keywords: ["south african dried fruit USA", "dried pineapple supplier United States"],
    }),
  component: () => <RegionalProductPage productKey="dried-fruit" regionKey="united-states" />,
});
