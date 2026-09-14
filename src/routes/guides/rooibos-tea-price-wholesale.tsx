import { createFileRoute } from "@tanstack/react-router";
import { buildSeoHead } from "../../lib/seo";
import { SeoContentPage } from "../../components/seo/content-page";

export const Route = createFileRoute("/guides/rooibos-tea-price-wholesale")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea Price and Wholesale Buying Guide | Kaapstays",
      description:
        "Understand rooibos tea price by grade, format, certification, volume, packaging and destination. A practical wholesale sourcing guide for importers and brands.",
      path: "/guides/rooibos-tea-price-wholesale",
      keywords: [
        "rooibos tea price",
        "rooibos tea wholesale price",
        "bulk rooibos tea supplier",
        "rooibos tea cost",
        "buy rooibos tea wholesale",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Rooibos buyer guide"
      title="Rooibos tea price: what wholesale buyers need to compare"
      intro="There is no single rooibos tea price that applies to every order. A useful quotation depends on the product specification, certification, format, volume, packaging, delivery term and destination. This guide helps buyers request comparable offers from South African suppliers."
      sections={[
        {
          heading: "What determines rooibos tea price?",
          body: "The largest price differences usually come from the product itself and the way it will be supplied. Red rooibos and green rooibos follow different processing routes, while organic certification, grade, cut and cleanliness can affect the quotation. Finished consumer packs also include packaging, artwork, packing labour and compliance work that do not apply to bulk raw material.",
          bullets: [
            "Red or green rooibos and the requested cut or particle-size range",
            "Organic, conventional or other certification requirements",
            "Bulk loose leaf, tea-bag cut, extract, powder or finished retail format",
            "Trial quantity, annual volume and minimum order quantity",
          ],
        },
        {
          heading: "Compare like-for-like wholesale quotations",
          body: "A low price can be misleading when suppliers quote different grades, pack sizes or delivery terms. Ask every supplier to state the same assumptions so that the comparison reflects the delivered product rather than a headline number. Keep the approved sample and written specification with the quotation.",
          bullets: [
            "Product name, origin, grade, cut, colour and sensory specification",
            "Net weight, inner liner, carton or sack type and pallet configuration",
            "Incoterm, port of loading, currency and quotation validity period",
            "Lead time, crop or production window and available documentation",
          ],
        },
        {
          heading: "Bulk rooibos, retail packs and private label",
          body: "Wholesale buyers typically choose between bulk ingredient supply, finished branded packs and private-label production. Bulk can suit importers, blenders and foodservice operators that control packing at destination. Retail and private-label programmes require earlier decisions about tea-bag format, artwork, label claims, pack size and destination-market approvals.",
          bullets: [
            "Loose leaf or tea-bag cut for import, blending and foodservice",
            "Finished packs for retail, hospitality and wellness channels",
            "Private-label packaging with agreed artwork ownership and approvals",
            "Flavoured blends where ingredients, allergens and minimum runs are clear",
          ],
        },
        {
          heading: "How to request a rooibos tea quote",
          body: "Send a short but complete brief before asking for price. Include the destination country, intended channel, initial and repeat volume, desired format, certification needs, packaging route and target timing. Suppliers can then confirm whether the request matches an existing product or needs sampling and development.",
          bullets: [
            "State whether the request is for red, green, organic or flavoured rooibos",
            "Give trial volume and expected annual volume separately",
            "Identify the delivery market and preferred delivery basis",
            "Request current certificates, specification sheets and sample terms",
          ],
        },
      ]}
      faqs={[
        {
          question: "How much does bulk rooibos tea cost?",
          answer:
            "Bulk rooibos tea price depends on grade, red or green processing, certification, cut, volume, packaging, delivery term and destination. Buyers should request comparable quotations against a written specification rather than rely on a generic market price.",
        },
        {
          question: "Is wholesale rooibos cheaper than retail tea?",
          answer:
            "Wholesale ingredient supply can have a lower unit cost than finished retail tea because retail packaging, artwork, packing and distribution are handled separately. The right comparison depends on the format and total delivered cost.",
        },
        {
          question: "Can I buy rooibos tea directly from South Africa?",
          answer:
            "International buyers can request supplier introductions for bulk, retail or private-label rooibos programmes. The supplier shortlist should match the destination, volume, format, certification and documentation requirements.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Rooibos and tea sourcing" },
        { href: "/guides/rooibos-tea-guide", label: "Rooibos tea grades and formats" },
        { href: "/sourcing/rooibos-tea/united-states", label: "Rooibos for US buyers" },
        { href: "/sourcing/rooibos-tea/germany", label: "Rooibos for German buyers" },
      ]}
    />
  ),
});
