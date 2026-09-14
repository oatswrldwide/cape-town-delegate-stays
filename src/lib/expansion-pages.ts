import type { SeoContentPageProps } from "../components/seo/content-page";

export type ExpansionProduct =
  "rooibos-tea" | "macadamia-nuts" | "fresh-apples" | "dried-fruit" | "wine";

export interface ExpansionPage extends SeoContentPageProps {
  product: ExpansionProduct;
  market: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

const products: Record<
  ExpansionProduct,
  {
    name: string;
    buyer: string;
    origin: string;
    formats: string;
    specification: string;
  }
> = {
  "rooibos-tea": {
    name: "Rooibos tea",
    buyer: "tea importers, wellness brands and private-label retailers",
    origin:
      "Cederberg origin, red and green processing, and a traceable South African supply chain",
    formats: "bulk loose leaf, tea-bag cut, finished retail packs and private label",
    specification:
      "cut, liquor colour, organic status, flavour formula, pack format and destination label",
  },
  "macadamia-nuts": {
    name: "Macadamia nuts",
    buyer: "nut importers, snack brands, food manufacturers and private-label retailers",
    origin:
      "South African orchards and processors with kernel styles suited to retail and manufacturing",
    formats: "whole kernels, halves, pieces, meal, raw, roasted and value-added formats",
    specification:
      "kernel style, size, colour, defect tolerance, moisture, roasting profile and pack barrier",
  },
  "fresh-apples": {
    name: "Fresh apples",
    buyer: "produce importers, retail programmes, wholesalers and foodservice distributors",
    origin:
      "Western Cape growing regions with export packhouse and controlled-atmosphere capability",
    formats: "cartons, trays, bags, bins and retail-ready packs across major export varieties",
    specification:
      "variety, count, class, colour, firmness, pack format, arrival window and cold-chain plan",
  },
  "dried-fruit": {
    name: "Dried fruit",
    buyer: "snack importers, food manufacturers, ingredient buyers and private-label retailers",
    origin:
      "South African fruit processors supplying stable formats for retail, foodservice and manufacturing",
    formats: "slices, rings, diced fruit, strips, blends, bulk sacks and retail packs",
    specification:
      "fruit type, cut, moisture, additives, colour, shelf life, packaging and end use",
  },
  wine: {
    name: "South African wine",
    buyer: "wine importers, distributors, hospitality groups and private-label programmes",
    origin:
      "Western Cape producers across Stellenbosch, Paarl, Franschhoek, Walker Bay and Swartland",
    formats:
      "bottled wine, private label, hospitality formats and bulk wine for destination bottling",
    specification:
      "style, varietal, vintage, price position, packaging, label route, volume and importer role",
  },
};

const markets: Record<
  string,
  {
    name: string;
    adjective: string;
    channel: string;
    compliance: string;
    logistics: string;
  }
> = {
  uk: {
    name: "the United Kingdom",
    adjective: "British",
    channel: "specialist retail, foodservice and importer-led private label",
    compliance: "UK labelling, importer documentation and post-Brexit customs checks",
    logistics: "Cape Town to UK port planning with arrival-date and warehouse coordination",
  },
  netherlands: {
    name: "the Netherlands",
    adjective: "Dutch",
    channel: "European distribution, retail and ingredient consolidation",
    compliance: "EU product, labelling and customs requirements with Dutch importer coordination",
    logistics: "Rotterdam routing and onward European distribution planning",
  },
  france: {
    name: "France",
    adjective: "French",
    channel: "specialty retail, hospitality and premium food distribution",
    compliance: "French-language labels, EU food rules and destination documentation",
    logistics: "container planning into French ports or Rotterdam with inland delivery",
  },
  switzerland: {
    name: "Switzerland",
    adjective: "Swiss",
    channel: "premium retail, hospitality and specialist importers",
    compliance: "Swiss labelling, customs and product documentation alongside any EU paperwork",
    logistics: "landed-cost planning through European gateways into Swiss distribution",
  },
  canada: {
    name: "Canada",
    adjective: "Canadian",
    channel: "natural retail, national grocery, foodservice and ethnic distribution",
    compliance: "Canadian labelling, importer records and product-specific inspection requirements",
    logistics: "ocean transit, seasonal timing and inland distribution by province",
  },
  japan: {
    name: "Japan",
    adjective: "Japanese",
    channel: "premium retail, gifting, hospitality and quality-led manufacturing",
    compliance: "Japanese labels, importer review and exact specification documentation",
    logistics: "long transit protection, moisture control and arrival inspection planning",
  },
  "south-korea": {
    name: "South Korea",
    adjective: "South Korean",
    channel: "wellness retail, premium grocery, gifting and food manufacturing",
    compliance: "Korean-language labels, importer registration and market-specific approvals",
    logistics: "Busan routing, moisture protection and channel launch timing",
  },
  singapore: {
    name: "Singapore",
    adjective: "Singaporean",
    channel: "premium retail, foodservice, hospitality and regional distribution",
    compliance:
      "Singapore food labelling and importer documentation for local and re-export channels",
    logistics:
      "port efficiency, tropical storage protection and Southeast Asian re-export planning",
  },
  italy: {
    name: "Italy",
    adjective: "Italian",
    channel: "specialty food, hospitality, ingredient manufacturing and retail",
    compliance: "Italian-language presentation, EU food rules and importer records",
    logistics: "Mediterranean port options, pallet configuration and inland delivery",
  },
  spain: {
    name: "Spain",
    adjective: "Spanish",
    channel: "retail, hospitality, food manufacturing and Mediterranean distribution",
    compliance: "Spanish labels, EU documentation and product-specific market checks",
    logistics: "Iberian delivery planning with port, pallet and seasonal timing controls",
  },
  australia: {
    name: "Australia",
    adjective: "Australian",
    channel: "specialty retail, natural products, foodservice and manufacturing",
    compliance: "Australian biosecurity, labelling and importer documentation",
    logistics: "long-distance transit, quarantine readiness and arrival-condition controls",
  },
  "new-zealand": {
    name: "New Zealand",
    adjective: "New Zealand",
    channel: "premium grocery, hospitality, natural retail and food manufacturing",
    compliance: "MPI-linked import checks, labelling and product documentation",
    logistics: "biosecurity planning, ocean transit and smaller-market replenishment cycles",
  },
  "saudi-arabia": {
    name: "Saudi Arabia",
    adjective: "Saudi",
    channel: "premium grocery, hospitality, gifting and foodservice",
    compliance: "Arabic-English labels, halal documentation where relevant and importer approvals",
    logistics: "Jeddah or Dammam routing, heat protection and seasonal demand planning",
  },
  qatar: {
    name: "Qatar",
    adjective: "Qatari",
    channel: "hospitality, premium retail, catering and regional distribution",
    compliance: "Arabic-English labels, importer records and product-specific certificates",
    logistics: "Gulf routing, heat-resistant packaging and controlled inventory cycles",
  },
  india: {
    name: "India",
    adjective: "Indian",
    channel: "tea, snack, ingredient, hospitality and premium retail channels",
    compliance: "Indian importer registration, labels and product-specific clearance",
    logistics: "port selection, monsoon-aware scheduling and price-sensitive pack planning",
  },
  malaysia: {
    name: "Malaysia",
    adjective: "Malaysian",
    channel: "halal retail, foodservice, hospitality and ingredient manufacturing",
    compliance: "halal documentation, Bahasa-facing labels and importer requirements",
    logistics: "tropical storage protection, Port Klang routing and regional distribution",
  },
  thailand: {
    name: "Thailand",
    adjective: "Thai",
    channel: "hospitality, premium grocery, food manufacturing and gifting",
    compliance: "Thai labels, importer review and relevant food or alcohol documentation",
    logistics: "humidity control, Bangkok distribution and arrival-condition management",
  },
  "hong-kong": {
    name: "Hong Kong",
    adjective: "Hong Kong",
    channel: "premium retail, gifting, hospitality and China-facing distribution",
    compliance: "local label and importer requirements with channel-specific documentation",
    logistics: "compact shipment planning, premium presentation and regional re-export options",
  },
  poland: {
    name: "Poland",
    adjective: "Polish",
    channel: "value-conscious retail, food manufacturing and European distribution",
    compliance: "Polish-language labels, EU requirements and importer documentation",
    logistics: "Northern European gateway planning and cost-efficient pallet configuration",
  },
  sweden: {
    name: "Sweden",
    adjective: "Swedish",
    channel: "organic retail, sustainability-led brands and premium foodservice",
    compliance: "Swedish presentation, EU rules and substantiated sustainability claims",
    logistics: "Baltic or North Sea routing, packaging performance and winter warehouse planning",
  },
};

const productAngles: Record<ExpansionProduct, string[]> = {
  "rooibos-tea": [
    "organic certification and claim control",
    "tea-bag cut and private-label launch planning",
    "green rooibos and premium wellness positioning",
    "bulk ingredient and blending supply",
    "flavoured formulation and repeat-batch consistency",
  ],
  "macadamia-nuts": [
    "whole-kernel presentation and premium gifting",
    "manufacturing grades and yield economics",
    "roasting, flavouring and private-label development",
    "halal, organic and traceability documentation",
    "moisture protection and long-distance storage",
  ],
  "fresh-apples": [
    "arrival window and retail shelf-life planning",
    "variety, count and packhouse specification",
    "controlled-atmosphere storage and cold-chain execution",
    "retail-ready presentation and seasonal continuity",
    "phytosanitary documentation and claim procedures",
  ],
  "dried-fruit": [
    "moisture, additives and clean-label positioning",
    "ingredient formats and manufacturing consistency",
    "private-label snack packaging and shelf life",
    "tropical storage protection and pack barriers",
    "fruit blends, cuts and foodservice flexibility",
  ],
  wine: [
    "importer price architecture and bottled range selection",
    "private-label label development and approvals",
    "bulk versus bottled route-to-market",
    "regional style selection and hospitality fit",
    "sustainability claims, documentation and repeat supply",
  ],
};

const related = {
  "rooibos-tea": "/products/rooibos-and-tea",
  "macadamia-nuts": "/products/nuts",
  "fresh-apples": "/products/fresh-apples",
  "dried-fruit": "/products/dried-fruit",
  wine: "/products/wine",
} satisfies Record<ExpansionProduct, string>;

function buildLongFormSections(
  product: (typeof products)[ExpansionProduct],
  market: (typeof markets)[string],
  productKey: ExpansionProduct,
  marketKey: string,
  angle: string,
) {
  const productLabel = product.name.toLowerCase();
  const destination = market.name;
  const sections = [
    {
      heading: `Start with the commercial job the product must do`,
      body: `A sourcing project becomes easier to manage when the buyer describes the job before describing the item. For ${destination}, that may mean a retail line that needs dependable presentation, a food manufacturer that needs a repeatable input, a hospitality programme that needs consistent service packs, or an importer building a portfolio over several seasons. The right ${productLabel} supplier is therefore not simply the supplier with the lowest first quotation. It is the supplier whose product, documentation, capacity and communication fit the job. The working brief should explain where the product will be sold, who will handle it after arrival, what quality the end customer will notice and which date the first commercial delivery must meet. That context makes the following supplier conversation more useful and helps separate a realistic offer from a catalogue description.`,
      bullets: [
        `Define the ${market.channel} before choosing the pack or grade`,
        "Separate the launch requirement from the repeat-supply ambition",
        "Record which decisions are fixed and which can be adjusted after sampling",
      ],
    },
    {
      heading: `What South African origin contributes`,
      body: `South African origin matters commercially when it is connected to a verifiable production story. For ${productLabel}, the relevant starting point is ${product.origin}. Origin alone does not prove that a quotation meets a buyer's specification, but it can create useful access to producers, processors and export routes that understand international supply. Buyers should ask how origin is recorded, which facility performs each processing step, and whether the proposed lot can be traced from source through packing and dispatch. This is especially important when the marketing position depends on a named region, an organic claim, a varietal identity or a particular growing season. Kaapstays frames origin as one part of supplier verification, alongside capability, current documents, sample approval and a practical route to the destination market.`,
      bullets: [
        "Confirm the physical origin and processing location separately",
        "Ask for lot or batch traceability before approving artwork",
        "Distinguish an origin statement from a certification or quality claim",
      ],
    },
    {
      heading: `Formats and channel decisions for ${productLabel}`,
      body: `The format determines much of the commercial and operational work that follows. South African suppliers may offer ${product.formats}, but availability, minimum order and lead time can differ between an established line and a custom programme. A retail buyer may value pack appearance, shelf-life presentation and label readiness. An ingredient buyer may prioritise a stable specification, pallet efficiency and predictable replenishment. A hospitality buyer may need smaller packs, simple storage and reliable deliveries rather than a highly customised product. Set out the intended format before requesting prices so that suppliers quote the same commercial object. If more than one format is viable, compare them as separate scenarios with their own packaging, handling, compliance and landed-cost assumptions.`,
      bullets: [
        "Describe the end use and preparation method, not only the product name",
        "Request pack weight, inner protection, carton details and pallet pattern",
        "Ask whether the quoted format is standard, customised or subject to a minimum run",
      ],
    },
    {
      heading: `A specification that suppliers can actually quote`,
      body: `A useful specification is specific enough to compare but practical enough for a producer to answer. For this programme, the core variables include ${product.specification}. Add the intended volume, trial quantity, delivery location, target timing and preferred commercial term. Buyers should also state which attributes are essential and which are preferences. For example, an exact size or colour range may be central to a retail product but negotiable for an ingredient application. The specification should be versioned when samples change, because a supplier can otherwise quote against an earlier assumption while the buyer evaluates a newer sample. A signed or acknowledged specification is not a substitute for inspection, but it gives both parties a common reference when production and arrival checks begin.`,
      bullets: [
        "Give measurable ranges where an attribute affects acceptance",
        "Keep product requirements separate from destination-market legal requirements",
        "Attach the approved sample reference to the commercial quotation",
      ],
    },
    {
      heading: `Quality approval before a purchase order`,
      body: `Sampling should answer more than whether the product tastes or looks good on one day. The buyer should understand how representative the sample is, which lot or production window it comes from, and what will happen if the first commercial lot differs. For ${productLabel}, approval can include sensory or visual checks, physical condition, packaging performance, documentation, test results and the way the product behaves in the buyer's own process. The final approval record should identify the agreed specification, tolerances, testing responsibility and claim process. Buyers should avoid treating a supplier brochure as the specification. A brochure introduces a capability; a controlled sample and documented acceptance criteria define what the programme is buying.`,
      bullets: [
        "Ask whether the sample is production-representative",
        "Record approval comments and unresolved deviations",
        "Agree who pays for testing, inspection and any rework before ordering",
      ],
    },
    {
      heading: `Certification, claims and evidence`,
      body: `${market.compliance} should be reviewed against the exact product, facility and transaction rather than copied from a general supplier presentation. Organic, halal, sustainability, allergen, origin and wellness claims each require their own evidence and may be interpreted differently by the destination market. The buyer should request current certificates, scope details, expiry dates and the relationship between the certificate holder and the quoted facility. Where a claim is not necessary for the sale, removing it can reduce avoidable compliance complexity. Where it is commercially essential, it should be planned at the beginning of the brief so that the correct supplier and pack route are shortlisted. This approach protects both the buyer's launch and the credibility of the finished product.`,
      bullets: [
        "Check certificate scope, validity and named legal entity",
        "Have destination-market label claims reviewed before artwork approval",
        "Keep supporting documents with the lot and shipment records",
      ],
    },
    {
      heading: `Design the route to ${destination}`,
      body: `The physical route should be designed around the product's sensitivity, the buyer's receiving capability and the destination deadline. For this market, planning includes ${market.logistics.toLowerCase()}. The route discussion should identify the port or airport, expected transit assumptions, storage conditions, insurance responsibility, customs handover and the point at which the buyer takes control. Fresh, fragile or temperature-sensitive products need a different plan from shelf-stable goods, while high-value retail formats may need stronger packaging and tighter inventory controls than bulk formats. A first shipment should include contingency time for document review and clearance. The goal is not to promise a universal transit period; it is to expose the assumptions early enough for the buyer and supplier to make a responsible decision.`,
      bullets: [
        "Work backwards from the required receiving or launch date",
        "Assign responsibility for each document and logistics handover",
        "Build a contingency for inspection, port delay or document correction",
      ],
    },
    {
      heading: `Landed cost without false precision`,
      body: `A useful landed-cost view is a decision tool, not a manufactured price promise. The calculation should show the quoted product basis, packing, inland movement, export handling, freight, insurance, destination charges, customs or taxes where applicable, broker fees, storage and the buyer's own distribution costs. Currency, quotation validity and volume assumptions should be visible. For ${productLabel}, a cheaper origin quote can lose its advantage if it requires a different pack, more handling, a longer clearance process or a higher level of destination rework. Buyers should compare at least two scenarios when format or delivery term is still open. Kaapstays can help structure the questions, but current freight, duties, taxes and regulatory charges should be confirmed with the appointed logistics and import professionals.`,
      bullets: [
        "Compare like-for-like Incoterms and delivery points",
        "Separate recurring unit cost from one-time artwork or setup charges",
        "Show currency, validity period and volume assumptions on every comparison",
      ],
    },
    {
      heading: `Supplier due diligence and capability checks`,
      body: `Supplier due diligence should answer whether the proposed partner can deliver this programme, not whether the company has a polished website. Capability checks can cover production location, ownership of the facility, relevant export history, current capacity, minimum order, lead time, quality system, documentation practice and escalation contacts. Buyers should understand what the supplier performs directly and what is outsourced. A capable processor may still be unsuitable if it cannot pack the requested format or support the destination documentation. Conversely, a smaller producer may be appropriate when the programme values a narrow specification and close communication. The decision should be recorded against the buyer's criteria so that supplier selection remains defensible when price, timing or sample results create pressure.`,
      bullets: [
        "Verify the legal supplier and physical facility",
        "Ask for evidence of relevant export experience, not generic export language",
        "Confirm capacity for both the trial order and the expected repeat programme",
      ],
    },
    {
      heading: `Packaging, storage and shelf-life discipline`,
      body: `Packaging is part of the product specification because it influences damage, contamination risk, shelf life, handling cost and customer perception. The buyer should decide whether the shipment needs bulk protection, retail presentation, bilingual information, tamper evidence, moisture barrier, temperature management or a particular pallet footprint. Storage conditions should be written into the handover plan and matched to the product and route. For a ${productLabel} programme, the supplier should state the shelf-life basis, lot coding and recommended storage conditions, while the buyer should confirm that the destination warehouse can maintain them. A well-designed pack does not solve every logistics risk, but it reduces ambiguity between origin, carrier, warehouse and final customer.`,
      bullets: [
        "Specify inner liner, carton strength, pallet pattern and lot coding",
        "Confirm shelf life at dispatch and expected life on arrival",
        "Match packaging claims and language to the final selling market",
      ],
    },
    {
      heading: `A launch plan for ${market.channel}`,
      body: `The first order should be treated as a controlled launch rather than a smaller version of a mature programme. For ${destination}, the buyer may need samples, artwork, importer approval, customer testing, a forecast, warehouse booking and a coordinated release date. The product brief should identify which milestones must happen before production and which can happen in parallel. A realistic launch plan protects the buyer from accepting a shipment before the sales channel is ready and protects the supplier from manufacturing against an unapproved label or uncertain volume. If the product is intended for a seasonal event, work backwards from the customer's selling date and include time for customs, relabelling and quality checks after arrival.`,
      bullets: [
        "Create a milestone schedule from sample to first repeat-order decision",
        "Approve artwork and documents before committing production capacity",
        "Keep sales launch timing separate from vessel departure timing",
      ],
    },
    {
      heading: `How to manage the first shipment`,
      body: `A first shipment creates the evidence needed to improve the second one. Before dispatch, confirm the final specification, lot, pack count, documents, marks, delivery term, inspection plan and contact list. During transit, track the milestones that can affect condition or clearance rather than sending updates that do not help a decision. At arrival, record the condition of the cargo, document any deviation promptly and compare the delivered product with the approved sample and agreed specification. This process is particularly valuable when ${angle} is central to the programme. It shows whether the supplier's promise survives the complete route and reveals which controls should become standard for future orders.`,
      bullets: [
        "Use a pre-dispatch checklist signed by the responsible parties",
        "Photograph or record condition where the product or packaging is sensitive",
        "Close the shipment with a documented lessons-learned review",
      ],
    },
    {
      heading: `Building repeat supply instead of repeating the first order`,
      body: `Repeat supply depends on translating the first transaction into a stable operating rhythm. The buyer and supplier should agree forecast visibility, reorder points, production windows, seasonal constraints, approved substitutions and the process for changing a specification. A repeat programme can also justify better packaging planning, consolidated shipments or a more efficient label workflow. Do not assume that a successful first shipment proves unlimited capacity. Ask how the supplier allocates production during peak periods and how early the buyer must reserve volume. For ${productLabel}, the repeat conversation should review quality consistency, claims, inventory age, customer feedback, working capital and the cost of maintaining the chosen format.`,
      bullets: [
        "Review the first order before setting an annual forecast",
        "Reserve seasonal capacity only after the specification is stable",
        "Define change control for formulas, packs, suppliers and certificates",
      ],
    },
    {
      heading: `Risks a professional buyer should surface early`,
      body: `Every international sourcing project carries risks involving specification, supply, compliance, transport, currency and demand. The responsible response is to identify the material risks and give each one an owner. A buyer may need a second approved supplier, a substitute pack, extra transit time, a testing budget or a smaller trial before scaling. Market-specific assumptions should be checked with the importer and qualified local advisers because requirements can change and product categories are not regulated identically. Kaapstays can structure supplier conversations and export coordination, but it should not replace the buyer's legal, tax, customs, food-safety or alcohol specialists. Clear boundaries are part of trustworthy sourcing advice.`,
      bullets: [
        "Rank risks by commercial impact and probability",
        "Record a contingency before the shipment is under pressure",
        "Escalate legal, tax, customs and regulatory questions to qualified advisers",
      ],
    },
    {
      heading: `Questions to take into the supplier meeting`,
      body: `A good supplier meeting is specific enough to produce decisions. Ask what is available now, what requires development, which facility will make the product, what the minimum order is, how the supplier controls quality, which certificates are current, how the product is packed, what the lead time includes and how claims are handled. For ${destination}, add questions about ${market.compliance.toLowerCase()} and ${market.logistics.toLowerCase()}. Ask the supplier to distinguish a confirmed capability from a possible capability that depends on a third party. The answers should be captured in a comparison document so that the buyer can evaluate suppliers consistently rather than relying on the most persuasive conversation.`,
      bullets: [
        "Ask for written answers to every requirement that affects approval",
        "Record open questions, owners and due dates",
        "Do not treat an unverified certificate or capacity statement as complete evidence",
      ],
    },
    {
      heading: `How Kaapstays supports the buying process`,
      body: `Kaapstays is positioned between a buyer's commercial brief and the practical work of supplier conversations. The useful output is a focused shortlist, a comparison framework, clearer sample and document requests, and support as a viable order moves toward shipment. The work is strongest when the buyer shares the product, destination, volume, timing, channel, packaging route and decision criteria at the beginning. It is not a guarantee of supplier performance, a substitute for destination-market advice or a published price list. For ${destination} buyers considering ${productLabel}, the next step is to turn the page's general framework into a brief that can be checked against real suppliers and current documents.`,
      bullets: [
        "Start with a written buyer brief and the decision deadline",
        "Use supplier introductions after the specification is sufficiently clear",
        "Keep responsibility for final approval and import compliance explicit",
      ],
    },
    {
      heading: `Decision summary for this ${productLabel} programme`,
      body: `The strongest next step is a written brief that connects the ${destination} buyer's channel to a realistic supply plan. State the product format, quality threshold, trial quantity, repeat expectation, packaging route, certification needs, delivery point and required date. Then ask a small number of capable suppliers to answer the same questions and provide the same core documents. Compare the offers on delivered suitability rather than headline price alone. A supplier that can explain its facility, specification, certificate scope, capacity, packaging and shipment responsibilities is easier to manage than a supplier that offers an attractive number without evidence. Keep assumptions visible, approve a representative sample, and use the first shipment to test the complete route. This creates a defensible basis for scaling the programme while leaving room to revise the specification when customer feedback or market conditions justify it.`,
      bullets: [
        "Write the brief before requesting a broad supplier list",
        "Use comparable evidence to make the shortlist decision",
        "Scale only after the first shipment confirms product and route performance",
      ],
    },
  ];

  return sections.map((section) => ({
    ...section,
    heading: `${section.heading} | ${market.adjective} ${productKey.replaceAll("-", " ")} programme`,
  }));
}

export const expansionPages: ExpansionPage[] = (Object.keys(markets) as string[]).flatMap(
  (marketKey, marketIndex) =>
    (Object.keys(products) as ExpansionProduct[]).map((productKey, productIndex) => {
      const product = products[productKey];
      const market = markets[marketKey];
      const angle =
        productAngles[productKey][(marketIndex + productIndex) % productAngles[productKey].length];
      const path = `/sourcing/${productKey}/${marketKey}`;
      const title = `${product.name} from South Africa for ${market.name} | Kaapstays`;
      const description = `Source ${product.name.toLowerCase()} from South Africa for ${market.name}. ${angle}; export-ready formats, documentation and practical buyer coordination.`;
      const page = {
        product: productKey,
        market: marketKey,
        path,
        title,
        description,
        keywords: [
          `South African ${product.name.toLowerCase()} ${market.name}`,
          `${product.name} importer ${market.name}`,
          `${product.name} wholesale ${market.name}`,
        ],
        eyebrow: `${market.adjective} market sourcing`,
        intro: `A focused route for ${market.name} buyers seeking ${product.name.toLowerCase()} from South Africa. This page is built around ${angle}, with the commercial brief shaped for ${market.channel}.`,
        sections: [
          {
            heading: `Why this ${product.name.toLowerCase()} route fits ${market.name}`,
            body: `${product.name} programmes work best when the buyer's channel, volume and arrival or launch window are defined before supplier conversations begin. South African supply offers ${product.origin}.`,
            bullets: [
              `Primary buyer fit: ${market.channel}`,
              `Available route: ${product.formats}`,
              `Commercial angle: ${angle}`,
            ],
          },
          {
            heading: "Build the specification before requesting quotes",
            body: `A comparable quotation should state ${product.specification}. Kaapstays can turn those requirements into a supplier shortlist and keep samples, documents and commercial assumptions aligned.`,
            bullets: [
              "State trial volume separately from forecast repeat volume",
              "Approve the product or sample against a written specification",
              "Confirm minimum order, lead time, delivery term and quotation validity",
            ],
          },
          {
            heading: "Market execution and arrival planning",
            body: `${market.compliance} should be confirmed before artwork, production or shipment approval. The route also requires ${market.logistics.toLowerCase()}, with responsibility for documents and claims agreed in advance.`,
            bullets: [
              "Assign an owner for import documents and destination clearance",
              "Match packaging and storage protection to the full journey",
              "Plan the first shipment around the buyer's actual receiving or launch date",
            ],
          },
          ...buildLongFormSections(product, market, productKey, marketKey, angle),
        ],
        faqs: [
          {
            question: `Can buyers in ${market.name} source ${product.name.toLowerCase()} directly from South Africa?`,
            answer: `Yes. The practical route depends on volume, format, destination documentation, packaging and the buyer's channel. A clear brief helps identify suppliers able to support the intended programme.`,
          },
          {
            question: `What should a ${market.name} buyer include in a ${product.name.toLowerCase()} brief?`,
            answer: `Include the intended use, specification, trial and repeat volume, packaging, certification needs, delivery location and target timing. Those details make supplier quotations meaningfully comparable.`,
          },
        ],
        links: [
          { href: related[productKey], label: `${product.name} sourcing` },
          { href: "/services/supplier-sourcing", label: "Supplier sourcing support" },
          { href: "/services/export-coordination", label: "Export coordination" },
        ],
        sources: [
          "South African Department of Agriculture, Land Reform and Rural Development: export and phytosanitary guidance.",
          "South African Revenue Service: customs and export documentation guidance.",
          `${market.name} competent authorities and importer guidance should be checked for current product-specific requirements.`,
          "Kaapstays sourcing desk: buyer brief, supplier verification and shipment coordination methodology.",
        ],
      };
      const wordCount = JSON.stringify(page).split(/\s+/).length;
      if (wordCount < 3000) {
        throw new Error(`${path} contains ${wordCount} words; expected at least 3000`);
      }
      return page;
    }),
);

export function getExpansionPage(product: string, market: string) {
  return expansionPages.find((page) => page.product === product && page.market === market);
}

export function getExpansionPageByPath(path: string) {
  return expansionPages.find((page) => page.path === path);
}
