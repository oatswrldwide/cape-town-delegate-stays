import { createFileRoute } from "@tanstack/react-router";
import { RegionalProductPage } from "../../../components/seo/regional-product-page";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/dried-fruit/asia")({
  head: () =>
    buildSeoHead({
      title: "Dried Fruit for Asia | Kaapstays",
      description:
        "South African sourcing with global reach for Asian buyers seeking dried pineapple and fruit formats for retail and ingredients.",
      path: "/sourcing/dried-fruit/asia",
      keywords: ["south african dried fruit Asia", "dried pineapple supplier Asia"],
    }),
  component: () => <RegionalProductPage productKey="dried-fruit" regionKey="asia" />,
});
