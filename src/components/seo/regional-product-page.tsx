import { notFound } from "@tanstack/react-router";
import { SeoContentPage } from "./content-page";
import {
  getSourcingPage,
  type SourcingMarketKey as BuyerRegionKey,
  type SourcingProductKey as RegionalProductKey,
} from "../../lib/sourcing-pages";

export type { BuyerRegionKey, RegionalProductKey };

export function getRegionalPageMeta(productKey: RegionalProductKey, regionKey: BuyerRegionKey) {
  const page = getSourcingPage(productKey, regionKey);
  if (!page) throw notFound();

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
}

export function RegionalProductPage({
  productKey,
  regionKey,
}: {
  productKey: RegionalProductKey;
  regionKey: BuyerRegionKey;
}) {
  const page = getSourcingPage(productKey, regionKey);
  if (!page) throw notFound();

  return <SeoContentPage {...page} />;
}
