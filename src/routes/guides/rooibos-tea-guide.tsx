import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/rooibos-tea-guide")({
  head: () =>
    buildSeoHead({
      title: "Rooibos Tea Guide: Grades, Formats & Sourcing | Kaapstays",
      description:
        "A practical rooibos tea sourcing guide for buyers: red and green rooibos, grades, packaging formats, specifications and supplier questions.",
      path: "/guides/rooibos-tea-guide",
      keywords: ["rooibos tea guide", "rooibos tea grades", "bulk rooibos supplier"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Buyer guide"
      title="Rooibos tea sourcing: a buyer's practical guide"
      intro="Rooibos is a South African herbal infusion with a distinctive origin story and broad potential across loose leaf, tea bags, foodservice and private-label programmes. This guide helps buyers turn an initial brief into questions a supplier can answer clearly."
      sections={[
        {
          heading: "Start with the product format, not the supplier list",
          body: "A usable brief identifies where rooibos will be sold and how it will be packed. The same raw material can be specified very differently for a specialty loose-leaf retailer, a tea-bag programme, a café operator or a blending facility. State the intended format, annual or trial volume, destination and target launch date before comparing offers.",
          bullets: [
            "Loose leaf for retail, foodservice or blending",
            "Tea-bag cut suitable for a defined bag format and infusion profile",
            "Bulk ingredient supply for blending, beverages or food applications",
            "Finished or private-label packs with destination-market label requirements",
          ],
        },
        {
          heading: "Red rooibos and green rooibos are different buying decisions",
          body: "Traditional red rooibos is oxidised after harvest and is known for its warm red-brown liquor and rounded profile. Green rooibos is processed to limit oxidation, producing a lighter colour and a fresher profile. Neither is automatically the better option: the right choice depends on the finished product, price position and customer expectation.",
          bullets: [
            "Request a representative sample from the proposed production lot where possible",
            "Confirm the cut, particle-size range and dust tolerance needed for your format",
            "Agree sensory expectations in writing rather than relying on a product name alone",
            "Keep red and green rooibos specifications separate in a blended programme",
          ],
        },
        {
          heading: "Questions that make a supplier quotation comparable",
          body: "Comparable quotes require comparable assumptions. Ask what is included in the pack, grade, certification status, lead time and delivery basis. Certifications and market-compliance claims should be current and verified directly with the relevant supplier or certification body before a purchase decision.",
          bullets: [
            "What are the pack size, inner liner and pallet configuration?",
            "What minimum order quantity applies to the requested grade and format?",
            "Which crop period and production window is being quoted?",
            "What product specification, certificate and test documentation can be supplied?",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is rooibos grown outside South Africa?",
          answer:
            "Commercial rooibos is associated with South African origin. Buyers should confirm a supplier's stated origin and traceability documentation for the product they are purchasing.",
        },
        {
          question: "What should a first rooibos order include?",
          answer:
            "A first order should have an agreed specification, sample approval process, packaging requirement, delivery term, documentation list and realistic lead time.",
        },
      ]}
      links={[
        { href: "/products/rooibos-and-tea", label: "Rooibos sourcing services" },
        { href: "/guides/dried-fruit-buyers-guide", label: "Dried fruit buyer guide" },
        { href: "/services/supplier-sourcing", label: "Supplier sourcing support" },
      ]}
    />
  ),
});
