import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/guides/macadamia-grades-guide")({
  head: () =>
    buildSeoHead({
      title: "Macadamia Grades Guide for Wholesale Buyers | Kaapstays",
      description:
        "Understand macadamia sourcing for wholesale programmes: kernel styles, grade specifications, raw and roasted formats, packaging and supplier questions.",
      path: "/guides/macadamia-grades-guide",
      keywords: ["macadamia grades", "macadamia kernel styles", "macadamia wholesale guide"],
    }),
  component: () => (
    <SeoContentPage
      eyebrow="Buyer guide"
      title="Macadamia grades and formats: a wholesale buyer guide"
      intro="Macadamia buying language often combines kernel style, size, condition and finished-product treatment. A practical sourcing brief separates these decisions so that suppliers can quote a comparable product and the buyer can protect the intended eating experience or manufacturing result."
      sections={[
        {
          heading: "Start with the end use",
          body: "The required kernel style depends on whether the product will be sold as a premium snack, used in baking, included in a blend or processed further. Whole kernels can suit certain retail applications, while halves, pieces and smaller styles may be more efficient where appearance is less critical. Describe the finished use before asking for a grade.",
          bullets: [
            "Retail snack packs and premium gifting formats",
            "Bakery, confectionery and ingredient manufacturing",
            "Foodservice and culinary applications",
            "Private-label lines with a defined target price and pack size",
          ],
        },
        {
          heading: "Make the grade measurable",
          body: "Grade names and style terminology need to be checked against the supplier's own specification. Request the size range, permitted broken content, colour expectations, moisture basis and any defect tolerances relevant to the programme. A product name alone does not define what the buyer will receive.",
          bullets: [
            "Ask for the supplier's current style and grade sheet",
            "Confirm whether the offer is raw, roasted, salted, flavoured or otherwise processed",
            "Use approved samples and written specifications together",
            "Agree pack weights, inner liners and carton configuration before ordering",
          ],
        },
        {
          heading: "Protect quality through storage and handling",
          body: "Nuts can be affected by temperature, humidity, odours and physical damage. The logistics plan should identify storage conditions, packaging barriers and responsibility for condition checks at dispatch and arrival. Destination-market requirements for allergens, labels and food compliance need to be verified for each market.",
          bullets: [
            "Confirm storage and shelf-life guidance for the quoted product",
            "Review allergen declarations and label requirements early",
            "Specify transport conditions and arrival-inspection procedures",
            "Keep a documented sample and lot-approval process",
          ],
        },
      ]}
      faqs={[
        {
          question: "Are macadamia grades standard across all suppliers?",
          answer:
            "Grade terminology can vary. Buyers should request the supplier's own current specification, including the measurable criteria behind a named style or grade.",
        },
        {
          question: "Should a buyer choose raw or roasted macadamias?",
          answer:
            "That depends on the planned use and whether the buyer or supplier will perform further processing. The brief should state the desired finished state.",
        },
      ]}
      links={[
        { href: "/products/nuts", label: "Macadamia and nut sourcing" },
        { href: "/sourcing/macadamia-nuts/germany", label: "Macadamias for Germany" },
        { href: "/services/supplier-sourcing", label: "Supplier sourcing support" },
      ]}
    />
  ),
});
