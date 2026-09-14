import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { CASE_STUDIES, TESTIMONIAL_SNIPPETS } from "../../components/seo/trust-proof";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/products/rooibos-and-tea")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea Supplier South Africa | Organic & Bulk | Kaapstays",
      description:
        "Buy rooibos tea from verified South African suppliers. Organic, flavoured, red and green rooibos in bulk, retail and private-label formats.",
      path: "/products/rooibos-and-tea",
      keywords: [
        "rooibos tea supplier",
        "rooibos tea price",
        "where to buy rooibos tea",
        "organic rooibos tea",
        "flavoured rooibos tea",
        "rooibos tea brands",
        "south african tea export",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Product sourcing"
      title="Rooibos and tea, from South African origin."
      intro="Rooibos grows exclusively in South Africa's Cederberg region. For buyers, that means true origin distinction with strong relevance in wellness, specialty and premium tea programmes."
      sections={[
        {
          heading: "What we can source",
          body: "We support bulk and value-added tea sourcing across retail and manufacturing use cases.",
          bullets: [
            "Traditional fermented rooibos and green rooibos",
            "Organic options aligned to EU, USDA and other market standards",
            "Bulk loose leaf, tea bags, foodservice formats and private-label packaging",
            "Honeybush, buchu and indigenous blends where required",
          ],
        },
        {
          heading: "Sourcing considerations",
          body: "Quality, timing and documentation need to match your destination market and product format.",
          bullets: [
            "Seasonality planning for summer harvest windows",
            "Grade alignment based on cut, colour and dust levels",
            "Current certification verification before supplier introductions",
            "Documentation support for origin claims and market compliance",
          ],
        },
        {
          heading: "Rooibos tea price and buying options",
          body: "Rooibos tea price depends on origin, red or green processing, organic status, cut, order volume, packaging and delivery destination. We help importers, retailers, wellness brands and foodservice buyers compare current supplier quotations against the same specification.",
          bullets: [
            "Bulk loose-leaf and tea-bag cut for import and blending programmes",
            "Organic and conventional options with current certification checks",
            "Finished retail, foodservice and private-label packaging pathways",
            "Quote comparisons based on grade, minimum order, Incoterm and timing",
          ],
        },
        {
          heading: "Organic, flavoured and branded rooibos tea",
          body: "Buyers can source plain red or green rooibos, organic lines, and flavoured blends through South African producers and packers. Flavour development, label ownership and minimum order quantities should be agreed before selecting a rooibos tea brand or private-label route.",
          bullets: [
            "Flavoured rooibos blends for wellness, hospitality and specialty retail",
            "Private-label tea bags and loose-leaf packs for destination markets",
            "Sample approval against liquor colour, aroma, cut and infusion profile",
            "Supplier documentation for origin, allergens, ingredients and claims",
          ],
        },
      ]}
      faqs={[
        {
          question: "Where can you buy rooibos tea?",
          answer:
            "International buyers can request a rooibos sourcing brief through Kaapstays for introductions to verified South African suppliers. We compare bulk loose-leaf, tea-bag cut, organic, flavoured and private-label options against destination, volume and timing.",
        },
        {
          question: "How much does rooibos tea cost?",
          answer:
            "Rooibos tea price varies by red or green grade, organic certification, cut, packaging, order volume, Incoterm and destination. A useful quote requires the required format, annual or trial volume, delivery market and target timing.",
        },
        {
          question: "Can I buy organic or flavoured rooibos tea?",
          answer:
            "Yes. South African suppliers can support organic rooibos and flavoured rooibos programmes, subject to current certification, ingredients, labelling and minimum order requirements. Samples and documentation should be approved before a commercial order.",
        },
        {
          question: "Which rooibos tea brands and formats are available?",
          answer:
            "Availability depends on the target market and supplier programme. Buyers can compare bulk ingredient supply, finished retail packs, tea bags, loose leaf and private-label formats rather than relying on a single rooibos tea brand.",
        },
        {
          question: "What rooibos products can buyers source?",
          answer:
            "Available rooibos products include red rooibos, green rooibos, organic lines, flavoured blends, loose leaf, tea bags, foodservice formats and private-label retail packs. The final range depends on the supplier, certification, specification and order volume.",
        },
      ]}
      caseStudies={[CASE_STUDIES.usRooibosLaunch]}
      testimonials={[TESTIMONIAL_SNIPPETS[1]]}
      links={[
        { href: "/guides/rooibos-tea-price-wholesale", label: "Rooibos tea price guide" },
        { href: "/guides/organic-rooibos-tea-sourcing", label: "Organic rooibos guide" },
        { href: "/guides/flavoured-rooibos-private-label", label: "Flavoured rooibos guide" },
        { href: "/guides/rooibos-tea-guide", label: "Rooibos tea buyer guide" },
        { href: "/sourcing/rooibos-tea/germany", label: "Rooibos for Germany" },
        { href: "/sourcing/rooibos-tea/united-states", label: "Rooibos for the United States" },
      ]}
    />
  ),
});
