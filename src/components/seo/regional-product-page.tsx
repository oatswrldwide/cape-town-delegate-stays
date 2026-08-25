import { SeoContentPage, type SeoContentPageProps } from "./content-page";

export type RegionalProductKey =
  | "macadamia-nuts"
  | "rooibos-tea"
  | "wine"
  | "fresh-apples"
  | "dried-fruit";

export type BuyerRegionKey = "germany" | "united-states" | "asia" | "uae";

interface RegionalPageData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  page: SeoContentPageProps;
}

const commonLinks = [
  { href: "/services/supplier-sourcing", label: "Supplier sourcing" },
  { href: "/services/export-coordination", label: "Export coordination" },
  { href: "/about", label: "About Kaapstays" },
];

const regionalContent: Record<RegionalProductKey, Record<BuyerRegionKey, RegionalPageData>> = {
  "macadamia-nuts": {
    germany: {
      metaTitle: "Macadamia Nuts for Germany | South African Sourcing | Kaapstays",
      metaDescription:
        "South African macadamia nuts for German importers, retailers and manufacturers. Organic, conventional and private-label. EU organic compliance, sustainable packaging.",
      keywords: ["macadamia nuts Germany", "South African nuts", "EU organic macadamia"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Macadamia nuts for buyers in Germany.",
        intro:
          "Germany combines scale with strict quality expectations. South African macadamia supply aligns well with German demand across organic retail, manufacturing and private-label programmes.",
        sections: [
          {
            heading: "What German buyers usually need",
            body: "Requirements differ by channel, but quality consistency and packaging performance are non-negotiable.",
            bullets: [
              "Retail demand for whole kernel and roasted formats",
              "Manufacturing demand for halves, pieces and meal",
              "Private-label options with channel-specific roasting and pack design",
              "Growing preference for lower-plastic and recyclable packaging",
            ],
          },
          {
            heading: "Compliance and logistics",
            body: "Documentation readiness is essential for smooth German market entry.",
            bullets: [
              "EU organic shipment documentation through TRACES where applicable",
              "German-language labelling and allergen declarations",
              "Transit planning into Hamburg, Rotterdam or Bremerhaven",
              "Customs and broker coordination for EORI-linked clearance",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    "united-states": {
      metaTitle: "Macadamia Nuts for US Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African macadamia nuts for US importers, distributors and retailers. FDA-compliant, kosher and halal options. Bulk and private-label formats.",
      keywords: ["macadamia nuts USA", "FDA compliant nut import", "South African macadamia"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Macadamia nuts for buyers in the United States.",
        intro:
          "South African macadamia supports US demand where domestic supply is constrained or price-positioned too high for certain channels, especially manufacturing and private-label.",
        sections: [
          {
            heading: "US channel opportunities",
            body: "The strongest pull is in snack retail, ingredients and value-added formats.",
            bullets: [
              "Whole and roasted kernel for premium snack channels",
              "Pieces and meal for baking, ice cream and confectionery",
              "Flavoured formats aligned to US retail profiles",
              "Bulk formats for foodservice and industrial programmes",
            ],
          },
          {
            heading: "Regulatory and shipping pathway",
            body: "Import planning must align supplier documents with US compliance expectations.",
            bullets: [
              "FDA facility registration verification",
              "FSMA and FSVP document support for importer due diligence",
              "Kosher and Halal certification options where required",
              "Ocean and air freight coordination with customs entry support",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    asia: {
      metaTitle: "Macadamia Nuts for Asia | South African Sourcing | Kaapstays",
      metaDescription:
        "South African macadamia nuts for Asian markets. Japan, China, South Korea, Southeast Asia. Premium whole kernel, gift formats, manufacturing grades.",
      keywords: ["macadamia nuts Asia", "Japan China Korea nuts", "gift kernel sourcing"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Macadamia nuts for buyers in Asia.",
        intro:
          "Asian demand for macadamia is expanding quickly, with very different buying patterns across Japan, China, South Korea and Southeast Asia.",
        sections: [
          {
            heading: "Market-specific demand",
            body: "Successful programmes adapt format, grade and positioning to each destination.",
            bullets: [
              "Japan: top-grade whole kernel with strict visual consistency",
              "China: premium gift and e-commerce presentation formats",
              "South Korea: premium retail and wellness-led categories",
              "Southeast Asia: halal-sensitive channels and growing manufacturing demand",
            ],
          },
          {
            heading: "Execution considerations",
            body: "Transit, storage and document quality all influence landed performance.",
            bullets: [
              "Sea routes via Shanghai, Yokohama, Busan and Singapore",
              "Air freight options for urgent or high-value programmes",
              "Humidity and temperature controls for tropical destinations",
              "Origin and tariff documentation for preference-based import structures",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    uae: {
      metaTitle: "Macadamia Nuts for UAE Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African macadamia nuts for UAE importers, retailers and hospitality. Halal certified, premium gift formats, Horeca supply. Dubai re-export hub.",
      keywords: ["macadamia UAE", "halal nuts Dubai", "GCC re-export nuts"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Macadamia nuts for buyers in the UAE.",
        intro:
          "The UAE combines premium domestic consumption with regional re-export reach. South African macadamia is a strong fit for this dual-market structure.",
        sections: [
          {
            heading: "Channel fit in UAE and GCC",
            body: "Programmes span retail, hospitality and re-export distribution.",
            bullets: [
              "Retail packs for hypermarkets, premium grocers and e-commerce",
              "Hospitality formats for hotels, catering and foodservice",
              "Gift-oriented packaging for seasonal demand cycles",
              "Re-export pathways into GCC and wider MENA trade lanes",
            ],
          },
          {
            heading: "Market requirements and logistics",
            body: "High service levels depend on timing, packaging durability and compliant labels.",
            bullets: [
              "Recognised Halal certification for retail and hospitality channels",
              "Arabic-English labelling support",
              "Ramadan and Eid inventory planning windows",
              "Short sea freight route to Jebel Ali with optional free-zone storage",
            ],
          },
        ],
        links: commonLinks,
      },
    },
  },
  "rooibos-tea": {
    germany: {
      metaTitle: "Rooibos Tea for Germany | South African Sourcing | Kaapstays",
      metaDescription:
        "South African rooibos and honeybush tea for German importers and retailers. Organic, Demeter, bulk and private-label. EU organic compliance.",
      keywords: ["rooibos Germany", "honeybush import", "Demeter rooibos"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Rooibos tea for buyers in Germany.",
        intro:
          "Germany is one of the most established rooibos markets outside South Africa, with strong demand across organic, wellness and family tea segments.",
        sections: [
          {
            heading: "German channel demand",
            body: "Buyer needs differ by channel from discount formats to specialist tea retail.",
            bullets: [
              "Organic and biodynamic-aligned programmes for specialist shops",
              "Private-label tea bag formats for mainstream retail",
              "Green rooibos and functional blends for premium lines",
              "Honeybush as a distinct category with growing recognition",
            ],
          },
          {
            heading: "Compliance and shipping",
            body: "Documentation, language and moisture protection are key to import success.",
            bullets: [
              "TRACES-linked organic inspection records where applicable",
              "German-language label compliance",
              "Dry container shipping with moisture-managed packaging",
              "EUR.1 documentation support for tariff preference pathways",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    "united-states": {
      metaTitle: "Rooibos Tea for US Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African rooibos tea for US importers, retailers and wellness brands. USDA organic, bulk loose leaf, retail packs, private-label. FDA compliant.",
      keywords: ["rooibos USA", "USDA organic rooibos", "FDA tea import"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Rooibos tea for buyers in the United States.",
        intro:
          "US demand for rooibos has broadened from specialty tea to mainstream wellness retail, foodservice beverage menus and ingredient programmes.",
        sections: [
          {
            heading: "Where rooibos performs in the US",
            body: "Use cases now span consumer tea, hospitality and functional product development.",
            bullets: [
              "Retail tea in specialty, natural and mass channels",
              "Foodservice applications including red espresso and rooibos blends",
              "Extract and powder sourcing for beverage and personal-care categories",
              "Private-label formats for direct-to-consumer brands",
            ],
          },
          {
            heading: "US compliance and logistics",
            body: "Programme design should include regulatory readiness from the first supplier conversation.",
            bullets: [
              "FDA documentation and facility registration checks",
              "USDA organic pathway support where required",
              "Testing documentation for state-specific compliance sensitivity",
              "Ocean and air route planning with pallet optimisation",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    asia: {
      metaTitle: "Rooibos Tea for Asia | South African Sourcing | Kaapstays",
      metaDescription:
        "South African rooibos and honeybush for Asian markets. Japan JAS organic, China e-commerce, South Korea wellness. Bulk, retail and private-label.",
      keywords: ["rooibos Asia", "JAS organic rooibos", "rooibos China"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Rooibos tea for buyers in Asia.",
        intro:
          "Rooibos is building a strong niche in Asian wellness and caffeine-free categories, with market requirements varying sharply by country.",
        sections: [
          {
            heading: "Country-by-country demand signals",
            body: "Successful market entry depends on matching positioning and pack style to local expectations.",
            bullets: [
              "Japan: meticulous quality expectations and refined packaging",
              "China: e-commerce growth and wellness-led narratives",
              "South Korea: tea and beauty crossover demand",
              "Southeast Asia: premium retail plus halal-sensitive segments",
            ],
          },
          {
            heading: "Route-to-market execution",
            body: "Regional success relies on documented compliance and packaging suited to humid destinations.",
            bullets: [
              "Sea and air routing flexibility by urgency and value density",
              "Humidity control and pack integrity checks",
              "Country-specific label and additive compliance",
              "Origin certificates aligned to tariff and customs requirements",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    uae: {
      metaTitle: "Rooibos Tea for UAE Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African rooibos tea for UAE retail, hospitality and wellness. Halal certified, premium gift formats, Horeca supply. Arabic labelling support.",
      keywords: ["rooibos UAE", "halal rooibos", "Arabic tea labelling"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Rooibos tea for buyers in the UAE.",
        intro:
          "In the UAE, rooibos is gaining traction as a premium caffeine-free option across wellness retail, hospitality and gifting channels.",
        sections: [
          {
            heading: "Where demand is growing",
            body: "Programmes work best when matched to retail, Horeca and seasonal gift demand.",
            bullets: [
              "Retail formats for hypermarkets, premium grocers and pharmacies",
              "Hospitality use in hotels, cafes and catered events",
              "Wellness-oriented positioning in spa and lifestyle channels",
              "Gift-pack combinations around key seasonal periods",
            ],
          },
          {
            heading: "UAE market requirements",
            body: "Operational clarity reduces lead-time pressure around peak demand windows.",
            bullets: [
              "Recognised Halal certification for retailer confidence",
              "Arabic-English bilingual packaging support",
              "Q4 planning for Q1 Ramadan and Eid demand",
              "Short sea routes and climate-aware storage planning",
            ],
          },
        ],
        links: commonLinks,
      },
    },
  },
  wine: {
    germany: {
      metaTitle: "South African Wine for Germany | Kaapstays",
      metaDescription:
        "South African wine for German importers, retailers and restaurants. Stellenbosch, Paarl, Swartland. Organic, IPW, bulk and bottled. EU compliance.",
      keywords: ["South African wine Germany", "IPW wine", "bottled and bulk wine export"],
      page: {
        eyebrow: "Regional sourcing",
        title: "South African wine for buyers in Germany.",
        intro:
          "Germany is a mature wine market with clear segmentation by price, channel and sustainability expectations. South African wines perform well where value and origin story are both important.",
        sections: [
          {
            heading: "Commercial fit by channel",
            body: "German programmes often combine entry-volume SKUs with premium discovery labels.",
            bullets: [
              "Discount and supermarket programmes with closure and price-point discipline",
              "Organic and specialist channels seeking distinctive producer stories",
              "On-trade demand for food-friendly by-the-glass options",
              "E-commerce and wine-club formats for curated mixed cases",
            ],
          },
          {
            heading: "Regulation and logistics",
            body: "Stable execution depends on compliant labels, clean documents and temperature-aware transport.",
            bullets: [
              "EU organic and importer documentation support",
              "German back-label compliance and sulphite declaration handling",
              "Reefer or protected transport paths for bottled wine quality",
              "EUR.1 and customs documentation coordination",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    "united-states": {
      metaTitle: "South African Wine for US Buyers | Kaapstays",
      metaDescription:
        "South African wine for US importers, distributors and restaurants. TTB compliance, Stellenbosch Cabernet, Chenin Blanc, Pinotage. Bulk and bottled.",
      keywords: ["South African wine USA", "TTB compliance", "US wine importer"],
      page: {
        eyebrow: "Regional sourcing",
        title: "South African wine for buyers in the United States.",
        intro:
          "The US is highly competitive, but South African wines create strong differentiation where buyers build a clear story around value, heritage and style.",
        sections: [
          {
            heading: "US entry channels",
            body: "The strongest route is usually through targeted channels rather than broad commodity placement.",
            bullets: [
              "Specialist retail and sommelier-led on-trade placements",
              "Natural and old-vine portfolios for differentiated shelf stories",
              "Direct-to-consumer and curated wine-club programmes",
              "Bulk and private-label opportunities for scale channels",
            ],
          },
          {
            heading: "Regulatory path",
            body: "Regulatory planning should be built into SKU strategy from the beginning.",
            bullets: [
              "TTB label and analysis readiness",
              "State-level registration and compliance dependencies",
              "Three-tier route planning with importer/distributor fit",
              "Temperature-controlled transit and customs entry preparation",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    asia: {
      metaTitle: "South African Wine for Asia | Kaapstays",
      metaDescription:
        "South African wine for Asian markets. Japan, China, South Korea, Singapore. Premium positioning, old vine Chenin, Pinotage. Import compliance support.",
      keywords: ["South African wine Asia", "wine China Japan", "premium wine sourcing"],
      page: {
        eyebrow: "Regional sourcing",
        title: "South African wine for buyers in Asia.",
        intro:
          "Asian wine demand is expanding across multiple maturity levels, giving South African producers room to position as a high-value discovery category.",
        sections: [
          {
            heading: "Country-level positioning",
            body: "Each destination requires a distinct range and narrative strategy.",
            bullets: [
              "Japan: premium, precise and sommelier-driven selections",
              "China: e-commerce and gift-led premium red programmes",
              "South Korea: hospitality and modern dining demand",
              "Singapore and Hong Kong: regional hubs for premium distribution",
            ],
          },
          {
            heading: "Execution across Asia",
            body: "Transit control and local documentation quality directly affect in-market performance.",
            bullets: [
              "Reefer planning for quality-sensitive routes",
              "Country-specific back-label and additive compliance",
              "Origin and tariff documentation where applicable",
              "Air options for urgent premium and sample programmes",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    uae: {
      metaTitle: "South African Wine for UAE Buyers | Kaapstays",
      metaDescription:
        "South African wine for UAE retail, hospitality and corporate. Stellenbosch, Paarl, premium reds. Halal considerations, duty-free, Horeca supply.",
      keywords: ["South African wine UAE", "Dubai Horeca wine", "Jebel Ali reefer wine"],
      page: {
        eyebrow: "Regional sourcing",
        title: "South African wine for buyers in the UAE.",
        intro:
          "The UAE is a premium, fast-moving market where hospitality depth and re-export position create strong opportunities for South African wine portfolios.",
        sections: [
          {
            heading: "Priority channels",
            body: "Wine programmes are typically built around hotel, restaurant and licensed retail demand.",
            bullets: [
              "Luxury hotel and resort placements",
              "Restaurant programmes from casual to fine dining",
              "Licensed retail and duty-free assortment opportunities",
              "Corporate and events-driven custom case formats",
            ],
          },
          {
            heading: "UAE operating requirements",
            body: "This market rewards disciplined planning and reliable cold-chain execution.",
            bullets: [
              "Work through licensed import and distribution partners",
              "Arabic-English packaging preference for retail channels",
              "Pre-Ramadan inventory planning",
              "Reefer continuity from origin through bonded storage",
            ],
          },
        ],
        links: commonLinks,
      },
    },
  },
  "fresh-apples": {
    germany: {
      metaTitle: "Fresh Apples for Germany | South African Sourcing | Kaapstays",
      metaDescription:
        "South African fresh apples for German importers and retailers. Granny Smith, Royal Gala, Pink Lady. EU organic, counter-seasonal supply, cold chain.",
      keywords: ["fresh apples Germany", "counter seasonal apples", "South African apple export"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Fresh apples for buyers in Germany.",
        intro:
          "South African apples help German buyers maintain continuity during Northern Hemisphere off-season windows, especially from March through August.",
        sections: [
          {
            heading: "Variety focus for Germany",
            body: "Demand is concentrated around proven retail performers with strong storage behaviour.",
            bullets: [
              "Granny Smith for high-volume green apple programmes",
              "Royal Gala and Pink Lady for mainstream and premium tiers",
              "Golden Delicious for mixed retail and processing lines",
              "Retail-ready and bulk carton options by channel requirement",
            ],
          },
          {
            heading: "Import and cold-chain execution",
            body: "Quality on arrival depends on protocol discipline from packhouse to destination hub.",
            bullets: [
              "EU phytosanitary and inspection documentation support",
              "Organic document handling for certified lines",
              "Reefer and controlled-atmosphere routing into European ports",
              "Season planning in advance to secure preferred counts",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    "united-states": {
      metaTitle: "Fresh Apples for US Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African fresh apples for US importers and retailers. Counter-seasonal supply, Granny Smith, Gala, Pink Lady. APHIS compliance, cold treatment.",
      keywords: ["fresh apples USA", "APHIS apple import", "counter seasonal apple supply"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Fresh apples for buyers in the United States.",
        intro:
          "South African apples can complement domestic US programmes with counter-seasonal availability and strong quality in key varieties.",
        sections: [
          {
            heading: "US channel use cases",
            body: "The best fit is often where buyers need continuity outside domestic harvest peaks.",
            bullets: [
              "Retail grocery and club-store bagged programmes",
              "Foodservice and school-linked whole fruit requirements",
              "Processing formats for slicing and manufacturing",
              "Organic lines for natural channel assortments",
            ],
          },
          {
            heading: "Protocol and shipment planning",
            body: "US market entry depends on alignment with federal import and handling standards.",
            bullets: [
              "APHIS import protocol and cold-treatment compliance",
              "Phytosanitary and permit-linked documentation",
              "Grading alignment against buyer expectations",
              "Reefer routing and timing control through US ports",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    asia: {
      metaTitle: "Fresh Apples for Asia | South African Sourcing | Kaapstays",
      metaDescription:
        "South African fresh apples for Asian markets. Japan, China, Southeast Asia. Premium grade, gift packaging, phytosanitary compliance. Counter-seasonal supply.",
      keywords: ["fresh apples Asia", "premium imported apples", "Japan China apple sourcing"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Fresh apples for buyers in Asia.",
        intro:
          "Asian markets reward presentation, colour and texture consistency. South African apples are well-suited to premium and gift-led demand across the region.",
        sections: [
          {
            heading: "Demand patterns across Asia",
            body: "Variety, size and finish requirements vary significantly by country and channel.",
            bullets: [
              "Japan and South Korea: premium finish and strict uniformity",
              "China: high-colour varieties and festival gifting demand",
              "Southeast Asia: modern retail growth and imported fruit positioning",
              "Retail and gift packaging formats tailored to destination expectations",
            ],
          },
          {
            heading: "Import readiness",
            body: "Documentation quality and controlled logistics are critical to maintain fruit condition on arrival.",
            bullets: [
              "Phytosanitary and destination protocol compliance",
              "Reefer transit and controlled-atmosphere planning",
              "Air options for urgent premium replenishment",
              "Certificate of origin support for preference-based tariff treatment",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    uae: {
      metaTitle: "Fresh Apples for UAE Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African fresh apples for UAE importers, retailers and wholesalers. Granny Smith, Royal Gala, premium grade. Jebel Ali logistics, GCC re-export.",
      keywords: ["fresh apples UAE", "Jebel Ali apple import", "GCC re-export apples"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Fresh apples for buyers in the UAE.",
        intro:
          "UAE buyers require visually strong, high-consistency fruit supported by reliable cold-chain execution in hot-climate conditions.",
        sections: [
          {
            heading: "Commercial applications",
            body: "South African apples support retail, Horeca and wholesale distribution in the UAE and nearby markets.",
            bullets: [
              "Hypermarket and premium retail programmes",
              "Hospitality and foodservice format requirements",
              "Wholesale flows into central market channels",
              "Re-export into GCC and East African destinations",
            ],
          },
          {
            heading: "Execution priorities",
            body: "Short transit times are valuable, but temperature continuity and timing still determine landed quality.",
            bullets: [
              "Class and size alignment to UAE buyer expectations",
              "Ramadan and Eid demand planning windows",
              "Reefer continuity from packhouse to Dubai cold storage",
              "Optional JAFZA and Dubai South warehousing support",
            ],
          },
        ],
        links: commonLinks,
      },
    },
  },
  "dried-fruit": {
    germany: {
      metaTitle: "Dried Fruit for Germany | South African Sourcing | Kaapstays",
      metaDescription:
        "South African dried fruit for German importers and retailers. Organic dried pineapple, peaches, pears. EU organic, sulphur-free options, bulk and retail.",
      keywords: ["dried fruit Germany", "organic dried pineapple", "sulphur-free dried fruit"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Dried fruit for buyers in Germany.",
        intro:
          "Germany's strong organic and health-focused retail culture creates sustained demand for high-quality dried fruit with clear specification control.",
        sections: [
          {
            heading: "German demand structure",
            body: "Programmes range from discount value packs to specialist organic assortments and ingredient supply.",
            bullets: [
              "Organic retail demand for natural and low-additive lines",
              "Conventional channel demand for value and consistency",
              "Manufacturing demand for diced and moisture-controlled formats",
              "Private-label opportunities across snack and baking categories",
            ],
          },
          {
            heading: "Compliance and pack standards",
            body: "Smooth supply depends on precise declarations and pack durability.",
            bullets: [
              "EU organic and TRACES documentation where required",
              "SO2 level transparency aligned to importer limits",
              "German-language label compliance",
              "Recyclable and lower-plastic packaging options",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    "united-states": {
      metaTitle: "Dried Fruit for US Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African dried fruit for US importers and retailers. Dried pineapple, peaches, pears. USDA organic, snack packs, ingredient formats. FDA compliant.",
      keywords: ["dried fruit USA", "FDA dried fruit import", "USDA organic dried fruit"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Dried fruit for buyers in the United States.",
        intro:
          "US buyers use dried fruit across snacking, manufacturing and foodservice, with strong demand for reliable quality and clean documentation.",
        sections: [
          {
            heading: "US market applications",
            body: "The category spans premium retail, value packs and ingredient supply at scale.",
            bullets: [
              "Natural and organic retail channels",
              "Club and convenience pack programmes",
              "Ingredient supply for cereal, bakery and confectionery",
              "Foodservice formats for hospitality and catering",
            ],
          },
          {
            heading: "Regulatory alignment",
            body: "Importer confidence depends on complete records and accurate declarations.",
            bullets: [
              "FDA facility registration validation",
              "FSVP-ready documentation packages",
              "USDA organic support where required",
              "Sulphite and testing documentation for label and state needs",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    asia: {
      metaTitle: "Dried Fruit for Asia | South African Sourcing | Kaapstays",
      metaDescription:
        "South African dried fruit for Asian markets. Japan, China, South Korea, Southeast Asia. Premium gift, organic, manufacturing grades. Phytosanitary compliance.",
      keywords: ["dried fruit Asia", "gift dried fruit", "Asian dried fruit import"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Dried fruit for buyers in Asia.",
        intro:
          "Asian demand combines premium gifting, wellness positioning and large-scale manufacturing, making format and presentation strategy essential.",
        sections: [
          {
            heading: "How demand differs by market",
            body: "Each destination has distinct expectations for additives, pack style and commercial positioning.",
            bullets: [
              "Japan: premium presentation and additive sensitivity",
              "China: gift-led and e-commerce-heavy demand",
              "South Korea: health category and premium retail pull",
              "Southeast Asia: halal-sensitive and manufacturing growth segments",
            ],
          },
          {
            heading: "Shipping and handling",
            body: "Moisture control and document accuracy are critical for tropical delivery conditions.",
            bullets: [
              "Humidity-resistant packaging specification",
              "Sea and air routing by programme urgency",
              "Certificate of origin and tariff documentation",
              "Destination-specific label and compliance support",
            ],
          },
        ],
        links: commonLinks,
      },
    },
    uae: {
      metaTitle: "Dried Fruit for UAE Buyers | South African Sourcing | Kaapstays",
      metaDescription:
        "South African dried fruit for UAE importers, retailers and hospitality. Premium gift, Horeca supply, bulk re-export. Halal certified, Arabic labelling.",
      keywords: ["dried fruit UAE", "halal dried fruit", "Dubai re-export dried fruit"],
      page: {
        eyebrow: "Regional sourcing",
        title: "Dried fruit for buyers in the UAE.",
        intro:
          "Dried fruit is a core category in UAE retail and hospitality, with strong seasonal uplift around Ramadan, Eid and gift-led occasions.",
        sections: [
          {
            heading: "UAE demand profile",
            body: "Programmes span family retail packs, premium gifting and foodservice supply.",
            bullets: [
              "Hypermarket and premium grocery demand",
              "Horeca requirements for hotels, catering and events",
              "Duty-free and gift-format opportunities",
              "Wholesale and re-export distribution into GCC and Africa",
            ],
          },
          {
            heading: "Market requirements",
            body: "Clear compliance and robust packaging prevent avoidable supply disruption.",
            bullets: [
              "Recognised Halal certification support",
              "Arabic-English bilingual label readiness",
              "Advance planning for Ramadan-period demand",
              "Moisture-protected packs and climate-aware storage",
            ],
          },
        ],
        links: commonLinks,
      },
    },
  },
};

export function getRegionalPageMeta(productKey: RegionalProductKey, regionKey: BuyerRegionKey) {
  const page = regionalContent[productKey][regionKey];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
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
  const entry = regionalContent[productKey][regionKey];
  return <SeoContentPage {...entry.page} />;
}
