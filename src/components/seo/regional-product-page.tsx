import { SeoContentPage, type SeoContentPageProps } from "./content-page";

export type RegionalProductKey =
  "macadamia-nuts" | "rooibos-tea" | "wine" | "fresh-apples" | "dried-fruit";

export type BuyerRegionKey = "germany" | "united-states" | "asia" | "uae";

const productDetails: Record<RegionalProductKey, { name: string; origin: string; use: string }> = {
  "macadamia-nuts": {
    name: "Macadamia nuts",
    origin: "South African macadamia producers",
    use: "snacking, ingredients, manufacturing and private label",
  },
  "rooibos-tea": {
    name: "Rooibos tea",
    origin: "South African rooibos and tea producers",
    use: "bulk ingredients, retail, foodservice and private label",
  },
  wine: {
    name: "South African wine",
    origin: "South African wine producers",
    use: "import, distribution, hospitality and private label",
  },
  "fresh-apples": {
    name: "Fresh apples",
    origin: "South African apple growers and packers",
    use: "retail, wholesale and fresh-produce distribution",
  },
  "dried-fruit": {
    name: "Dried fruit",
    origin: "South African dried-fruit producers",
    use: "retail, foodservice, ingredients and private label",
  },
};

const regionDetails: Record<BuyerRegionKey, { name: string; market: string }> = {
  germany: { name: "Germany", market: "German importers, distributors and retailers" },
  "united-states": {
    name: "the United States",
    market: "US importers, distributors and retailers",
  },
  asia: { name: "Asia", market: "Asian importers, distributors and regional buyers" },
  uae: { name: "the UAE", market: "UAE importers, distributors and retailers" },
};

const relatedLinks = [
  { href: "/services/supplier-sourcing", label: "Supplier sourcing" },
  { href: "/services/export-coordination", label: "Export coordination" },
  { href: "/about", label: "About Kaapstays" },
];

export function RegionalProductPage({
  productKey,
  regionKey,
}: {
  productKey: RegionalProductKey;
  regionKey: BuyerRegionKey;
}) {
  const product = productDetails[productKey];
  const region = regionDetails[regionKey];
  const props: SeoContentPageProps = {
    eyebrow: `${product.name} sourcing · ${region.name}`,
    title: `${product.name} for buyers in ${region.name}.`,
    intro: `Kaapstays connects ${region.market.toLowerCase()} with ${product.origin.toLowerCase()}, supporting practical sourcing conversations from South Africa to global markets.`,
    sections: [
      {
        heading: "Built around your market",
        body: `We help ${region.market.toLowerCase()} investigate ${product.name.toLowerCase()} for ${product.use}. Share your destination, volume, format and timing so the first conversation starts with useful detail.`,
      },
      {
        heading: "A clear route from origin",
        body: `Your brief helps us explore suitable ${product.name.toLowerCase()} supply in South Africa, compare possible supply paths and clarify the next export conversation for ${region.name}.`,
      },
    ],
    links: relatedLinks,
  };

  return <SeoContentPage {...props} />;
}
