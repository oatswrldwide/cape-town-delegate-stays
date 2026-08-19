import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/dried-fruit/uae")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit for UAE Buyers | Kaapstays",
      description:
        "South African sourcing with global reach for UAE buyers seeking dried pineapple and fruit formats for retail and ingredients.",
      path: "/sourcing/dried-fruit/uae",
      keywords: ["south african dried fruit UAE", "dried pineapple supplier Dubai"],
    }),
  component: () => <RegionalProductPage productKey="dried-fruit" regionKey="uae" />,
});
