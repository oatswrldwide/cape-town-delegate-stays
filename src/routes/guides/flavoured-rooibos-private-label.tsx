import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/flavoured-rooibos-private-label")({
  head: () =>
    buildSeoHead({
      title: "Flavoured Rooibos Tea and Private Label Guide | Kaapstays",
      description:
        "Source flavoured rooibos tea and private-label formats from South Africa. Compare blends, ingredients, packaging, MOQ, certification and export requirements.",
      path: "/guides/flavoured-rooibos-private-label",
      keywords: [
        "flavoured rooibos tea",
        "flavoured rooibos supplier",
        "rooibos private label",
        "rooibos tea brands",
        "rooibos tea blends wholesale",
        "private label rooibos tea",
      ],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Rooibos buyer guide"
      title="Flavoured rooibos tea and private label: a practical buying guide"
      intro="Flavoured rooibos can extend a tea range into wellness, hospitality, gifting and specialty retail. A successful programme starts with the blend, destination-market claims, pack format and production brief rather than a flavour name alone."
      sections={[
        {
          heading: "What to specify in a flavoured rooibos blend",
          body: "Flavour performance depends on the rooibos base, botanical ingredients, flavour system, cut and intended preparation. Describe the finished cup and channel clearly so a supplier can recommend a workable formula and sample it consistently.",
          bullets: [
            "Red or green rooibos base and desired liquor colour",
            "Flavour profile, intensity, botanical ingredients and allergen position",
            "Loose leaf, tea-bag cut, pyramid bag or foodservice format",
            "Target price position, pack size and expected repeat volume",
          ],
        },
        {
          heading: "Private-label rooibos tea versus an existing brand",
          body: "An existing brand may offer a faster route to market when the product, packaging and destination fit. Private label gives the buyer more control over positioning and pack design, but requires artwork, approvals, minimum production runs, ownership decisions and a realistic lead time.",
          bullets: [
            "Existing branded product for a defined importer or distribution programme",
            "Private-label tea bags or loose leaf with buyer-owned artwork",
            "Contract blending or flavour development for a differentiated range",
            "Retail, hospitality, gifting and direct-to-consumer pack routes",
          ],
        },
        {
          heading: "Ingredients, claims and destination compliance",
          body: "The label must describe the actual formula and meet the rules of the market where the product will be sold. Wellness language, organic claims, natural flavour statements, allergens and language requirements should be reviewed before artwork is approved.",
          bullets: [
            "Full ingredient declaration and flavour documentation",
            "Allergen and cross-contact review for botanicals and added ingredients",
            "Organic claim review against the certificate and product scope",
            "Destination-market nutrition, language and packaging requirements",
          ],
        },
        {
          heading: "How to compare flavoured rooibos suppliers",
          body: "Ask suppliers to quote the same formula, pack format, volume and delivery basis. Approve a representative sample and retain the specification so the first commercial lot can be compared against the agreed product.",
          bullets: [
            "Confirm sample ownership, revision notes and approval timeline",
            "Compare minimum order, setup costs, lead time and repeat capacity",
            "Check current food-safety, origin and certification documentation",
            "Agree lot coding, shelf life, packaging barrier and shipment conditions",
          ],
        },
      ]}
      faqs={[
        {
          question: "Where can I buy flavoured rooibos tea wholesale?",
          answer:
            "International buyers can request introductions to South African suppliers and packers for flavoured rooibos, tea bags, loose leaf and private-label programmes. The supplier match should reflect volume, formula, packaging, certification and destination.",
        },
        {
          question: "Can I create a private-label rooibos tea brand?",
          answer:
            "Private-label rooibos can be possible through a suitable producer or packer. Feasibility depends on the formula, sample approval, artwork, minimum order, certification, packaging and market requirements.",
        },
        {
          question: "What flavours work well with rooibos tea?",
          answer:
            "Common commercial directions include fruit, spice, citrus, vanilla, herbal and botanical profiles. The right blend depends on the target customer, preparation method, ingredient availability, label requirements and desired price position.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Rooibos and tea sourcing" },
        { href: "/guides/organic-rooibos-tea-sourcing", label: "Organic rooibos guide" },
        { href: "/guides/rooibos-tea-price-wholesale", label: "Rooibos tea price guide" },
        { href: "/guides/rooibos-tea-guide", label: "Rooibos grades and formats" },
      ]}
    />
  ),
});
