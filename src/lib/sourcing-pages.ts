import type { SeoContentPageProps } from "../components/seo/content-page";

export type SourcingProductKey =
  | "macadamia-nuts"
  | "rooibos-tea"
  | "wine"
  | "fresh-apples"
  | "dried-fruit";

export type SourcingMarketKey =
  | "germany"
  | "united-states"
  | "asia"
  | "uae"
  | "uk"
  | "netherlands"
  | "france"
  | "switzerland"
  | "canada"
  | "japan"
  | "south-korea"
  | "singapore"
  | "italy"
  | "spain"
  | "australia"
  | "new-zealand"
  | "saudi-arabia"
  | "qatar"
  | "india"
  | "malaysia"
  | "thailand"
  | "hong-kong"
  | "poland"
  | "sweden";

interface ProductProfile {
  label: string;
  titleLabel: string;
  category: string;
  coreFormats: string;
  primaryBuyerFit: string;
  demandSignals: Record<RegionGroup, string>;
  guidance: string;
  meetingQuestions: string[];
  sourceRefs: string[];
}

interface RegionProfile {
  key: SourcingMarketKey;
  name: string;
  adjective: string;
  group: RegionGroup;
  marketPulse: string;
  routeFit: string;
  retailers: string[];
  regulatoryBodies: Record<SourcingProductKey, string>;
  regulatoryNotes: Record<SourcingProductKey, string>;
  ports: string;
  seaTransit: string;
  airTransit: string;
  containerPlan: string;
  logisticsNote: string;
  seasonalWindow: string;
  culturalPeak: string;
  sourceRefs: string[];
  isHub?: boolean;
}

type RegionGroup = "europe" | "north-america" | "asia-pacific" | "middle-east";

export interface SourcingPage extends SeoContentPageProps {
  product: SourcingProductKey;
  market: SourcingMarketKey;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  lastmod: string;
}

const LASTMOD = "2026-09-15";

const productPages: Record<SourcingProductKey, string> = {
  "macadamia-nuts": "/products/nuts",
  "rooibos-tea": "/products/rooibos-and-tea",
  wine: "/products/wine",
  "fresh-apples": "/products/fresh-apples",
  "dried-fruit": "/products/dried-fruit",
};

const products: Record<SourcingProductKey, ProductProfile> = {
  "macadamia-nuts": {
    label: "macadamia nuts",
    titleLabel: "Macadamia Nuts",
    category: "Macadamia nut export",
    coreFormats: "Style 0/1 whole kernel, halves, pieces, meal, roasted and value-added snack packs",
    primaryBuyerFit: "importers, snack brands, ingredient buyers and private-label retailers",
    demandSignals: {
      europe:
        "European buyers typically split procurement between premium whole-kernel retail lines and cost-controlled ingredient grades for bakery and confectionery programmes.",
      "north-america":
        "North American buyers usually combine branded snack volumes with manufacturing-grade contracts, where consistency of style and moisture drives repeat purchase.",
      "asia-pacific":
        "Across Asia-Pacific, gift-grade visual quality and precise style definitions are central, with buyers often paying premiums for reliable size and colour uniformity.",
      "middle-east":
        "Middle East programmes skew to premium gifting, hospitality and re-export channels, so freshness protection and presentation quality are commercially critical.",
    },
    guidance:
      "Programmes perform best when style definitions, colour tolerance, defect limits, roasting profile and oxygen-barrier packaging are locked before purchase orders.",
    meetingQuestions: [
      "What percentage of annual output meets Style 0 and Style 1 specifications under your current grading system?",
      "Which moisture-control checks are logged pre-shipment and on container loading day?",
      "Can your team support both bulk ingredient cartons and premium retail-ready gift packaging in one season?",
    ],
    sourceRefs: [
      "South African Macadamia Growers' Association seasonal crop and quality updates.",
      "ITC Trade Map HS 0802 market and unit-value data.",
    ],
  },
  "rooibos-tea": {
    label: "rooibos tea",
    titleLabel: "Rooibos Tea",
    category: "Rooibos and herbal tea export",
    coreFormats: "bulk loose leaf, tea-bag cut, green rooibos, flavoured blends and finished retail packs",
    primaryBuyerFit: "tea importers, wellness brands, private-label retailers and foodservice beverage teams",
    demandSignals: {
      europe:
        "European demand remains strong in wellness-led retail, with organic and private-label programmes requiring traceable blend consistency and claim discipline.",
      "north-america":
        "North American demand spans natural retail, mainstream grocery and foodservice menus, creating opportunities for both premium and value formats.",
      "asia-pacific":
        "Asia-Pacific demand is concentrated in caffeine-free wellness and premium gifting niches where pack aesthetics and documentation quality influence velocity.",
      "middle-east":
        "Middle East demand is channelled through hypermarkets, hospitality and pharmacy wellness formats, with flavour profile consistency and halal clarity often required.",
    },
    guidance:
      "Set cut size, liquor colour, flavour formula, pesticide residue standards and final-language artwork rules before supplier shortlisting.",
    meetingQuestions: [
      "Which lots are available in red rooibos versus green rooibos and how are these separated in production records?",
      "What is the lead-time difference between bulk tea-bag cut and finished private-label retail units?",
      "How do you validate flavour consistency across repeat flavoured-blend production runs?",
    ],
    sourceRefs: [
      "South African Rooibos Council market and export updates.",
      "EU and US organic framework references for herbal tea imports.",
    ],
  },
  wine: {
    label: "South African wine",
    titleLabel: "South African Wine",
    category: "Wine export",
    coreFormats: "bottled still wines, private-label ranges and bulk wine for destination bottling",
    primaryBuyerFit: "importers, licensed distributors, hospitality groups and private-label programmes",
    demandSignals: {
      europe:
        "European demand rewards clear price architecture across entry, premium and specialist channels, supported by dependable label compliance.",
      "north-america":
        "North American demand is highly segmented by state and channel, with importer and distributor fit often deciding commercial success more than list price.",
      "asia-pacific":
        "Asia-Pacific demand favours story-led premium positioning, gifting-ready presentation and tight control of additive and back-label requirements.",
      "middle-east":
        "Middle East demand is concentrated in licensed hospitality and retail channels where cold-chain reliability and importer licensing are non-negotiable.",
    },
    guidance:
      "Clarify varietal mix, vintage tolerance, closure format, sulphite declaration approach and destination registration sequence before bottling plans are fixed.",
    meetingQuestions: [
      "Which SKUs already have destination-ready technical sheets, analysis panels and compliant back-label templates?",
      "How is continuity managed if a requested vintage or varietal parcel underperforms before bottling?",
      "Can you support mixed container configurations for on-trade and off-trade buyers within the same shipment window?",
    ],
    sourceRefs: [
      "Wines of South Africa and SAWIS export and varietal data.",
      "Destination alcohol authority guidance (TTB, EU importer rules, local licensing bodies).",
    ],
  },
  "fresh-apples": {
    label: "fresh apples",
    titleLabel: "Fresh Apples",
    category: "Fresh fruit export",
    coreFormats: "cartons, bags and retail-ready packs across Royal Gala, Granny Smith, Pink Lady and Golden Delicious",
    primaryBuyerFit: "produce importers, retail programmes, wholesalers and foodservice distributors",
    demandSignals: {
      europe:
        "European buyers use South African apples to bridge Northern Hemisphere off-season gaps while maintaining category continuity and quality grading discipline.",
      "north-america":
        "North American buyers focus on protocol-compliant counter-seasonal windows, with strict pressure on size counts, cold treatment and arrival firmness.",
      "asia-pacific":
        "Asia-Pacific buyers prioritise visual finish, premium variety presentation and controlled transit timing for festival and hospitality demand windows.",
      "middle-east":
        "Middle East buyers value colour consistency, shelf-life reliability and rapid replenishment to serve both modern retail and wholesale produce channels.",
    },
    guidance:
      "Define variety mix, count profile, class standard, firmness threshold, pallet pattern and arrival temperature target before booking origin slots.",
    meetingQuestions: [
      "Which packhouses are approved for the target destination protocol and what is the latest cold-treatment capability by variety?",
      "How are maturity and pressure checks recorded between packing and container loading?",
      "What contingency plan applies if vessel rollover affects the agreed arrival-sales window?",
    ],
    sourceRefs: [
      "Hortgro and DALRRD export season references for apples.",
      "Destination phytosanitary protocol references (EU, APHIS, regional plant protection bodies).",
    ],
  },
  "dried-fruit": {
    label: "dried fruit",
    titleLabel: "Dried Fruit",
    category: "Dried fruit export",
    coreFormats: "slices, rings, diced fruit, strips, ingredient blends and private-label snack packs",
    primaryBuyerFit: "snack importers, ingredient manufacturers, foodservice buyers and private-label retailers",
    demandSignals: {
      europe:
        "European demand balances clean-label retail snacks with ingredient-grade contracts, where additive disclosure and moisture control are closely audited.",
      "north-america":
        "North American demand includes better-for-you snack lines and bakery ingredient channels, both sensitive to repeat texture and microbial assurance.",
      "asia-pacific":
        "Asia-Pacific demand favours premium pack presentation, gifting blends and adaptable cut formats for modern grocery and online channels.",
      "middle-east":
        "Middle East demand is strong in hospitality, gifting and re-export channels where shelf-life stability under heat is a consistent buying priority.",
    },
    guidance:
      "Set moisture range, additive policy, sulphur declaration, texture target, water-activity controls and packaging barrier requirements before quote comparison.",
    meetingQuestions: [
      "Which products can be supplied without added sugar or sulphur and what are the validated shelf-life limits?",
      "How is moisture drift controlled across production and pre-shipment storage?",
      "Can your facility run bespoke blend ratios and maintain batch-level traceability for each component fruit?",
    ],
    sourceRefs: [
      "South African dried fruit industry and export references.",
      "Destination food labelling and additive regulation references.",
    ],
  },
};

const regions: RegionProfile[] = [
  {
    key: "germany",
    name: "Germany",
    adjective: "German",
    group: "europe",
    marketPulse:
      "Germany is one of Europe's highest-throughput importer markets, with disciplined private-label retail and predictable seasonal planning windows.",
    routeFit:
      "Programmes work when they align value retail, specialist organic and manufacturing channels with clear landed-cost segmentation.",
    retailers: ["Aldi", "Lidl", "dm", "Müller", "REWE", "Edeka"],
    regulatoryBodies: {
      "macadamia-nuts": "EU Organic Regulation 2018/848, TRACES NT and German customs EORI",
      "rooibos-tea": "TRACES NT, EU organic control bodies and German label authorities",
      wine: "SADC-EU EPA route, EU wine framework and German back-label checks",
      "fresh-apples": "EU phytosanitary protocol and destination inspection services",
      "dried-fruit": "EU food labelling and additive disclosure framework",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Shipments requiring organic claims should carry valid COI records in TRACES NT before vessel departure.",
      "rooibos-tea": "Organic and wellness claims should be reconciled with German-language consumer statements before print approval.",
      wine: "Back-label text, allergen statements and fiscal document flow should be verified with importer compliance teams before bottling.",
      "fresh-apples": "Phytosanitary documents and cold-chain records should match declared lot and packhouse details at clearance.",
      "dried-fruit": "Additive, sugar and preservative declarations must align exactly with German-facing ingredient lists.",
    },
    ports: "Hamburg and Bremerhaven",
    seaTransit: "14-18 days",
    airTransit: "12-14 hours",
    containerPlan: "dry containers for stable goods, reefer for temperature-sensitive cargo",
    logisticsNote:
      "EORI-linked clearance and inland distribution booking should be fixed before cargo lands to avoid warehouse bottlenecks.",
    seasonalWindow:
      "Q4 planning for Q1 shelf resets and Christmas gifting allocations",
    culturalPeak: "Christmas and winter wellness season",
    sourceRefs: ["Destatis trade data", "German Federal Office for Consumer Protection"],
  },
  {
    key: "united-states",
    name: "the United States",
    adjective: "US",
    group: "north-america",
    marketPulse:
      "The US combines scale with fragmented state-by-state route-to-market requirements, so importer and channel alignment decide execution speed.",
    routeFit:
      "The strongest route blends mainstream volume channels with premium niche placement backed by compliance-first documentation.",
    retailers: ["Costco", "Sam's Club", "Whole Foods", "Sprouts", "Kroger", "Walmart"],
    regulatoryBodies: {
      "macadamia-nuts": "FDA facility registration, FSMA and FSVP",
      "rooibos-tea": "FDA food regulation, USDA NOP (where organic), Prop 65 risk checks",
      wine: "TTB COLA plus state registration and three-tier distribution compliance",
      "fresh-apples": "USDA APHIS import protocol and cold-treatment requirements",
      "dried-fruit": "FDA labelling framework and state-level additive/claim checks",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Prior notice, allergen declaration and importer FSVP ownership should be locked before shipment release.",
      "rooibos-tea": "Herbal and functional claims should be screened against federal and state-level marketing boundaries.",
      wine: "Label approval sequence should precede production lock-in to avoid state registration delays.",
      "fresh-apples": "Protocol scheduling must consider APHIS cold-treatment windows and destination port handling capacity.",
      "dried-fruit": "Ingredient ordering and nutrition panel consistency should be checked for every private-label SKU.",
    },
    ports: "Los Angeles, Long Beach, New York and Savannah",
    seaTransit: "20-28 days",
    airTransit: "15-18 hours",
    containerPlan: "dry and reefer by product sensitivity, with ISF filing lead time",
    logisticsNote:
      "ISF, FDA prior notice and broker entry filing should be prepared pre-departure to avoid demurrage exposure.",
    seasonalWindow: "Q3 planning for Thanksgiving and Q4 holiday sell-through",
    culturalPeak: "Thanksgiving and Christmas",
    sourceRefs: ["USITC and USDA trade references", "FDA and TTB guidance"],
  },
  {
    key: "asia",
    name: "Asia",
    adjective: "Asian",
    group: "asia-pacific",
    marketPulse:
      "Asia behaves as a multi-market cluster rather than one demand profile, with premium, value and e-commerce channels moving at different speeds.",
    routeFit:
      "Programmes succeed when Japan, China, South Korea and Southeast Asia are planned as separate channel tracks under one sourcing brief.",
    retailers: ["Isetan", "Takashimaya", "Tmall", "JD.com", "NTUC FairPrice", "Lotte"],
    regulatoryBodies: {
      "macadamia-nuts": "JAS, SACU-China tariff structures and destination phytosanitary checks",
      "rooibos-tea": "JAS, destination food additive rules and import label authorities",
      wine: "Country-specific additive and alcohol import rules across North and Southeast Asia",
      "fresh-apples": "Destination phytosanitary protocols by country and treatment pathway",
      "dried-fruit": "Country-level labelling and additive declarations with e-commerce compliance checks",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Do not treat Asia as one compliance regime; each shipment file should be country-specific before booking.",
      "rooibos-tea": "Certificate formats and claim language should be localized for each destination and selling channel.",
      wine: "Importer route and back-label expectations differ materially across Japan, China and Korea and need separate validation.",
      "fresh-apples": "Treatment, inspection and lot-trace requirements should be checked market by market, not at regional level.",
      "dried-fruit": "E-commerce packs, gifting packs and bulk ingredient packs often trigger different local label expectations.",
    },
    ports: "Yokohama, Shanghai, Busan and Singapore",
    seaTransit: "18-26 days",
    airTransit: "12-16 hours",
    containerPlan: "dry and reefer by product type with humidity management for tropical lanes",
    logisticsNote:
      "Route design should separate premium short-shelf demand from replenishment volumes and reserve buffer for customs variation.",
    seasonalWindow: "festival-led buying cycles with long pre-booking windows",
    culturalPeak: "Lunar New Year, Mid-Autumn and year-end gifting",
    sourceRefs: ["ITC country-level data", "MAFF and destination import authority references"],
    isHub: true,
  },
  {
    key: "uae",
    name: "the UAE",
    adjective: "UAE",
    group: "middle-east",
    marketPulse:
      "The UAE combines local premium demand with regional re-export functionality, making speed, documentation and packaging durability equally important.",
    routeFit:
      "Winning programmes align retail, hospitality and GCC redistribution with Ramadan-timed inventory decisions.",
    retailers: ["Carrefour", "Lulu", "Waitrose", "Spinneys", "Choithrams", "Boots"],
    regulatoryBodies: {
      "macadamia-nuts": "Halal frameworks (SANHA/MJC), ESMA-aligned labelling and importer approvals",
      "rooibos-tea": "Halal validation, ESMA labelling and Arabic-English packaging standards",
      wine: "Licensed alcohol importer/distributor controls and municipality trading rules",
      "fresh-apples": "ESMA food labelling and destination phytosanitary checks",
      "dried-fruit": "ESMA ingredient disclosure and Arabic-first pack requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Halal status and bilingual packaging should be signed off before production to protect Ramadan channel deadlines.",
      "rooibos-tea": "Arabic ingredient declarations and importer registration references should match final SKU artwork.",
      wine: "Only licensed importers can clear wine; distribution route and bonded handling must be confirmed in writing.",
      "fresh-apples": "Temperature logs and Arabic labelling readiness should be included in pre-arrival documentation packs.",
      "dried-fruit": "Shelf-life statements should be validated for high-heat retail environments before listing.",
    },
    ports: "Jebel Ali",
    seaTransit: "10-12 days",
    airTransit: "9-11 hours",
    containerPlan: "dry and reefer with heat-risk controls and bonded storage options",
    logisticsNote:
      "Short sea transit is an advantage only when customs file quality and free-zone handover are managed before ETA.",
    seasonalWindow: "Ramadan and Eid planning 6-8 weeks in advance",
    culturalPeak: "Ramadan, Eid and National Day gifting",
    sourceRefs: ["Dubai Customs and ESMA references", "GCC retail channel data"],
  },
  {
    key: "uk",
    name: "the United Kingdom",
    adjective: "UK",
    group: "europe",
    marketPulse:
      "The UK market rewards consistent private-label performance and disciplined compliance after Brexit border and documentation adjustments.",
    routeFit:
      "Programmes perform when value-tier and premium-tier ranges are planned separately with importer-led replenishment cadence.",
    retailers: ["Tesco", "Sainsbury's", "Waitrose", "M&S", "Holland & Barrett"],
    regulatoryBodies: {
      "macadamia-nuts": "UK importer documentation and allergy labelling requirements",
      "rooibos-tea": "UK food labelling and organic equivalence processes",
      wine: "UK alcohol labelling and importer duty handling",
      "fresh-apples": "UK phytosanitary checks and destination produce standards",
      "dried-fruit": "UK ingredient and claim labelling controls",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Buyer audits typically request full allergen and origin trace files at onboarding.",
      "rooibos-tea": "Claim language should be checked against UK advertising and packaging guardrails.",
      wine: "Duty and excise workflows should be mapped to avoid delay between customs release and distribution.",
      "fresh-apples": "Retail pack labels and lot traceability should align to post-Brexit customs data fields.",
      "dried-fruit": "Sugar-addition and preservative disclosures need precise line-item label consistency.",
    },
    ports: "Felixstowe and London Gateway",
    seaTransit: "16-21 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with strict delivery slot booking into UK distribution centres",
    logisticsNote: "Retail programmes often require precise booking windows and barcode standards before final dispatch.",
    seasonalWindow: "summer contracting for autumn/winter promotions",
    culturalPeak: "Christmas confectionery and wellness tea demand",
    sourceRefs: ["UK government import guidance", "Kantar retail trend references"],
  },
  {
    key: "netherlands",
    name: "the Netherlands",
    adjective: "Dutch",
    group: "europe",
    marketPulse:
      "The Netherlands is both a consumer market and a redistribution hub, so packaging and pallet strategy influence downstream margins.",
    routeFit:
      "Best-fit programmes combine Dutch importer efficiency with onward EU channel planning from day one.",
    retailers: ["Albert Heijn", "Jumbo", "PLUS", "Ekoplaza", "Holland & Barrett"],
    regulatoryBodies: {
      "macadamia-nuts": "EU customs and organic records via Dutch entry points",
      "rooibos-tea": "EU organic and Dutch label standards",
      wine: "EU wine import framework and Dutch excise handling",
      "fresh-apples": "EU phytosanitary checks through Dutch hubs",
      "dried-fruit": "EU additive and labelling controls",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Rotterdam entry files should be prepared for possible re-distribution inspections inside the EU.",
      "rooibos-tea": "Importer records should distinguish local Dutch sale from re-export lots.",
      wine: "Excise and warehouse processes should be mapped early for bottled and bulk lanes.",
      "fresh-apples": "Reefer release and onward trucking plans should be reserved before vessel berthing.",
      "dried-fruit": "Private-label ingredient declarations should anticipate multilingual EU re-export needs.",
    },
    ports: "Rotterdam",
    seaTransit: "15-19 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with cross-dock planning for EU redistribution",
    logisticsNote: "Hub-market economics improve when onward trucking and warehouse handling are pre-priced.",
    seasonalWindow: "Q1 and Q3 range reviews for major grocery chains",
    culturalPeak: "year-end gifting and spring wellness resets",
    sourceRefs: ["CBS Netherlands trade data", "Dutch customs guidance"],
  },
  {
    key: "france",
    name: "France",
    adjective: "French",
    group: "europe",
    marketPulse:
      "France blends premium specialist demand with high-volume grocery channels, making range architecture and language precision central.",
    routeFit:
      "Programmes are strongest when premium storytelling and retail price competitiveness are balanced in separate SKU ladders.",
    retailers: ["Carrefour", "E.Leclerc", "Monoprix", "Auchan", "Naturalia"],
    regulatoryBodies: {
      "macadamia-nuts": "EU food and organic framework with French label presentation requirements",
      "rooibos-tea": "EU organic checks and French language pack compliance",
      wine: "EU wine framework plus French importer registration",
      "fresh-apples": "EU phytosanitary and destination quality inspection standards",
      "dried-fruit": "EU additive and French-language labelling rules",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Allergen and origin wording should be reviewed in French before final print sign-off.",
      "rooibos-tea": "Wellness messaging should avoid unsupported claims in consumer-facing labels.",
      wine: "Importer tax and duty routing should be synced to channel launch dates.",
      "fresh-apples": "Fruit class and pack declarations should align with importer QA intake protocols.",
      "dried-fruit": "Sweetener and additive call-outs should be synchronized across front and back label panels.",
    },
    ports: "Le Havre and Marseille",
    seaTransit: "16-20 days",
    airTransit: "11-14 hours",
    containerPlan: "dry and reefer with inland trucking planned around regional DC locations",
    logisticsNote: "Regional distribution into north and south France should be priced as separate scenarios.",
    seasonalWindow: "autumn listings for winter promotions",
    culturalPeak: "holiday gifting and post-holiday wellness cycles",
    sourceRefs: ["French customs and DGCCRF references", "French retail channel data"],
  },
  {
    key: "switzerland",
    name: "Switzerland",
    adjective: "Swiss",
    group: "europe",
    marketPulse:
      "Switzerland is premium-heavy with strict documentation discipline and high consumer expectations on quality consistency.",
    routeFit:
      "The best route combines premium format control with predictable replenishment for smaller but higher-value purchase orders.",
    retailers: ["Migros", "Coop", "Manor", "Globus", "Alnatura"],
    regulatoryBodies: {
      "macadamia-nuts": "Swiss import documentation with supporting EU alignment where relevant",
      "rooibos-tea": "Swiss food and organic claim compliance controls",
      wine: "Swiss alcohol import and label standards",
      "fresh-apples": "Swiss phytosanitary and quality intake checks",
      "dried-fruit": "Swiss additive and language labelling requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Premium channels often request additional quality evidence beyond baseline customs files.",
      "rooibos-tea": "Organic and sustainability claims should be mapped to certifier scope before buyer onboarding.",
      wine: "Label and importer file sequencing should account for cantonal distribution pathways.",
      "fresh-apples": "Arrival-condition reporting should be prepared for higher QA scrutiny in premium retail channels.",
      "dried-fruit": "Texture and shelf-life tolerance should be clearly defined before private-label production.",
    },
    ports: "Basel-linked inland gateways via Rotterdam or Antwerp",
    seaTransit: "17-22 days including inland movement",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with added inland handover documentation",
    logisticsNote: "Inland customs and warehousing handoffs should be contractually clear before dispatch.",
    seasonalWindow: "Q3 planning for year-end premium retail events",
    culturalPeak: "year-end gifting and winter hospitality",
    sourceRefs: ["Swiss Federal Food Safety references", "Swiss customs guidelines"],
  },
  {
    key: "canada",
    name: "Canada",
    adjective: "Canadian",
    group: "north-america",
    marketPulse:
      "Canada combines concentrated national retail accounts with regional bilingual labelling expectations and strong natural-product growth.",
    routeFit:
      "Programmes succeed when national listings and province-level distribution realities are modelled separately.",
    retailers: ["Loblaws", "Sobeys", "Metro", "Costco Canada", "Whole Foods Canada"],
    regulatoryBodies: {
      "macadamia-nuts": "CFIA import and bilingual label requirements",
      "rooibos-tea": "CFIA tea import controls and organic claim validation",
      wine: "Provincial liquor board systems and importer licensing",
      "fresh-apples": "CFIA phytosanitary and produce quality checks",
      "dried-fruit": "CFIA additive and nutrition labelling controls",
    },
    regulatoryNotes: {
      "macadamia-nuts": "French-English labelling readiness is often required before distributor acceptance.",
      "rooibos-tea": "Natural-health style claims should be reviewed against category-specific compliance boundaries.",
      wine: "Province-specific board approval cadence should guide launch timelines.",
      "fresh-apples": "Cold-chain and lot records should support cross-province redistribution.",
      "dried-fruit": "Sugar content and portion-format claims should be validated against Canadian packaging norms.",
    },
    ports: "Vancouver, Montreal and Halifax",
    seaTransit: "22-30 days",
    airTransit: "16-19 hours",
    containerPlan: "dry and reefer with province-specific onward freight planning",
    logisticsNote: "Transit modelling should include inland rail or trucking where destination DCs are landlocked.",
    seasonalWindow: "winter replenishment and spring range planning",
    culturalPeak: "winter wellness and holiday gifting",
    sourceRefs: ["Statistics Canada trade references", "CFIA importer guidance"],
  },
  {
    key: "japan",
    name: "Japan",
    adjective: "Japanese",
    group: "asia-pacific",
    marketPulse:
      "Japan is precision-driven with high willingness to pay for verified quality, disciplined documentation and premium-ready packaging.",
    routeFit:
      "Routes fit best when premium department-store demand and manufacturing demand are managed as separate quality tiers.",
    retailers: ["Isetan", "Mitsukoshi", "Takashimaya", "Loft", "Tokyu Hands"],
    regulatoryBodies: {
      "macadamia-nuts": "JAS organic framework, phytosanitary checks and importer quality protocols",
      "rooibos-tea": "JAS and Japanese food additive controls",
      wine: "Japanese alcohol import rules and additive compliance checks",
      "fresh-apples": "Japanese phytosanitary treatment and inspection protocols",
      "dried-fruit": "Food additive and label requirements under Japanese standards",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Style grading evidence and certificate validity should accompany each shipment file.",
      "rooibos-tea": "Ingredient naming and additive status should be translated and validated before print.",
      wine: "Back-label translation should be reviewed by importer compliance teams before bottling.",
      "fresh-apples": "Treatment method and inspection documentation should be fully traceable to each lot.",
      "dried-fruit": "Sweetener, preservative and allergen wording should be tested against local conventions.",
    },
    ports: "Yokohama and Osaka",
    seaTransit: "18-25 days",
    airTransit: "14-16 hours",
    containerPlan: "reefer for sensitive cargo, dry for shelf-stable formats",
    logisticsNote: "Arrival inspection booking and label-file readiness should be completed before vessel departure.",
    seasonalWindow: "orders placed 6-9 months before major gifting windows",
    culturalPeak: "O-chugen (July) and O-seibo (December)",
    sourceRefs: ["MAFF and Japanese customs references", "Japan retail channel observations"],
  },
  {
    key: "south-korea",
    name: "South Korea",
    adjective: "South Korean",
    group: "asia-pacific",
    marketPulse:
      "South Korea's premium grocery and convenience channels reward consistent quality and modern, health-oriented positioning.",
    routeFit:
      "Programmes should separate premium retail SKUs from e-commerce and gifting SKUs to protect margin and replenishment speed.",
    retailers: ["E-Mart", "Lotte Mart", "Homeplus", "Olive Young", "Coupang"],
    regulatoryBodies: {
      "macadamia-nuts": "MFDS import food controls and Korean label requirements",
      "rooibos-tea": "MFDS standards and additive compliance framework",
      wine: "Korean alcohol import and label approval processes",
      "fresh-apples": "Korean phytosanitary import controls",
      "dried-fruit": "Korean food additive and labelling rules",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Importer-led label compliance checks should happen before first production run.",
      "rooibos-tea": "Functional wording should be screened against local claim restrictions.",
      wine: "Distributor registration and back-label compliance should be sequenced before shipment booking.",
      "fresh-apples": "Cold-chain records should support rapid quality-release decisions on arrival.",
      "dried-fruit": "Texture and sweetness descriptions should align with Korean retail expectations.",
    },
    ports: "Busan and Incheon",
    seaTransit: "19-24 days",
    airTransit: "13-15 hours",
    containerPlan: "dry and reefer with humidity protection for premium formats",
    logisticsNote: "E-commerce-driven replenishment benefits from conservative safety stock plans for first orders.",
    seasonalWindow: "Q2 planning for Chuseok and year-end promotions",
    culturalPeak: "Chuseok and Lunar New Year gifting",
    sourceRefs: ["Korean Customs Service references", "MFDS import guidance"],
  },
  {
    key: "singapore",
    name: "Singapore",
    adjective: "Singapore",
    group: "asia-pacific",
    marketPulse:
      "Singapore is a premium urban market and redistribution node where execution speed and packaging precision are highly visible.",
    routeFit:
      "Routes work when domestic premium retail demand and Southeast Asian re-export possibilities are planned separately.",
    retailers: ["NTUC FairPrice", "Cold Storage", "CS Fresh", "RedMart", "Don Don Donki"],
    regulatoryBodies: {
      "macadamia-nuts": "SFA import controls and destination labelling standards",
      "rooibos-tea": "SFA food standards and ingredient labelling rules",
      wine: "Singapore alcohol import and excise framework",
      "fresh-apples": "SFA phytosanitary and produce quality checks",
      "dried-fruit": "SFA additive and nutrition labelling controls",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Premium retail buyers often request moisture and shelf-life data as part of onboarding.",
      "rooibos-tea": "Clean-label positioning should be backed by clear ingredient and claim evidence.",
      wine: "Duty and excise handling should be aligned with bonded warehousing plans.",
      "fresh-apples": "High turnover channels benefit from arrival-date certainty and rapid DC transfer planning.",
      "dried-fruit": "Resealable convenience packs are common and should be scoped in the first quotation cycle.",
    },
    ports: "Singapore Port",
    seaTransit: "13-17 days",
    airTransit: "10-12 hours",
    containerPlan: "dry and reefer with tropical-condition storage design",
    logisticsNote: "Humidity management and shelf-ready packaging are central in this climate and channel mix.",
    seasonalWindow: "quarterly promotional calendar with festival spikes",
    culturalPeak: "Chinese New Year and Mid-Autumn demand bursts",
    sourceRefs: ["Singapore Food Agency guidance", "Singapore retail market reports"],
  },
  {
    key: "italy",
    name: "Italy",
    adjective: "Italian",
    group: "europe",
    marketPulse:
      "Italy mixes premium specialty retail and strong food-manufacturing demand, requiring nuanced format and price segmentation.",
    routeFit:
      "Best-fit routes combine foodservice and retail SKUs with manufacturer-grade formats under one supply plan.",
    retailers: ["Coop Italia", "Conad", "Esselunga", "Eataly", "NaturaSì"],
    regulatoryBodies: {
      "macadamia-nuts": "EU import and Italian-language label requirements",
      "rooibos-tea": "EU organic and Italian pack compliance controls",
      wine: "EU wine framework and Italian importer documentation",
      "fresh-apples": "EU phytosanitary checks and destination quality standards",
      "dried-fruit": "EU additive and Italian ingredient-labelling framework",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Premium grocery buyers often ask for transparent origin and processing documentation.",
      "rooibos-tea": "Tea category positioning should avoid unsupported wellness claims in consumer copy.",
      wine: "Private-label timelines should include importer legal review before bottling start.",
      "fresh-apples": "Variety and count accuracy are important for retail and wholesale wholesale planning.",
      "dried-fruit": "Label translations should reflect exact additive and sweetener composition.",
    },
    ports: "Genoa and Trieste",
    seaTransit: "16-21 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with inland distribution to northern and central hubs",
    logisticsNote: "Regional warehousing split should be planned in the landed-cost model.",
    seasonalWindow: "spring and autumn retail listing cycles",
    culturalPeak: "Christmas confectionery and summer hospitality",
    sourceRefs: ["Italian customs references", "Italian retail distribution reports"],
  },
  {
    key: "spain",
    name: "Spain",
    adjective: "Spanish",
    group: "europe",
    marketPulse:
      "Spain is price-aware but responsive to premium origin stories when supported by reliable supply and clear pack positioning.",
    routeFit:
      "Routes should combine mainstream retail volume with regional specialty opportunities in one demand calendar.",
    retailers: ["Mercadona", "Carrefour Spain", "El Corte Inglés", "Alcampo", "Lidl Spain"],
    regulatoryBodies: {
      "macadamia-nuts": "EU requirements and Spanish-language pack controls",
      "rooibos-tea": "EU organic and Spanish market label standards",
      wine: "EU wine framework and importer documentation",
      "fresh-apples": "EU phytosanitary protocol and distribution quality checks",
      "dried-fruit": "EU additive and nutrition disclosure rules",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Value-channel tenders often require tight spec and moisture tolerance documentation.",
      "rooibos-tea": "Private-label packs should align to bilingual or Spanish-first channel expectations.",
      wine: "On-trade and off-trade label variants should be planned to reduce rework.",
      "fresh-apples": "Arrival scheduling should account for Mediterranean port congestion periods.",
      "dried-fruit": "Ingredient transparency is central for modern health-conscious retail segments.",
    },
    ports: "Valencia and Barcelona",
    seaTransit: "15-20 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with Iberian distribution planning",
    logisticsNote: "Port choice should be linked to final DC geography and promotion timing.",
    seasonalWindow: "Q2 contracting for summer and back-to-school periods",
    culturalPeak: "summer tourism season and year-end festive demand",
    sourceRefs: ["Spanish customs references", "Spanish grocery and hospitality channel data"],
  },
  {
    key: "australia",
    name: "Australia",
    adjective: "Australian",
    group: "asia-pacific",
    marketPulse:
      "Australia is specification-driven with strict biosecurity standards and mature retail category management.",
    routeFit:
      "Best-fit programmes emphasise compliance certainty, shelf-ready execution and repeatable quality evidence.",
    retailers: ["Woolworths", "Coles", "IGA", "Harris Farm", "Chemist Warehouse"],
    regulatoryBodies: {
      "macadamia-nuts": "DAFF biosecurity and Australian label controls",
      "rooibos-tea": "Food Standards Australia New Zealand (FSANZ) and importer checks",
      wine: "Australian import and alcohol distribution rules",
      "fresh-apples": "Australian biosecurity import pathways and phytosanitary protocol",
      "dried-fruit": "FSANZ additive and labelling framework",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Biosecurity file accuracy and pack integrity are key in importer onboarding.",
      "rooibos-tea": "Functional claim wording should be reviewed for Australian advertising compliance.",
      wine: "Importer duty and channel restrictions should be mapped before SKU finalisation.",
      "fresh-apples": "Destination protocol and cold-chain timing should be pre-cleared with import partners.",
      "dried-fruit": "Added-sugar and preservative statements should match FSANZ expectations exactly.",
    },
    ports: "Melbourne and Sydney",
    seaTransit: "14-19 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with quarantine-prepared documentation",
    logisticsNote: "Quarantine readiness should be tested with trial lots before larger commitments.",
    seasonalWindow: "retail programme planning ahead of summer and school cycles",
    culturalPeak: "Christmas summer season and back-to-school",
    sourceRefs: ["Australian DAFF and FSANZ references", "Australian retail category reports"],
  },
  {
    key: "new-zealand",
    name: "New Zealand",
    adjective: "New Zealand",
    group: "asia-pacific",
    marketPulse:
      "New Zealand is smaller but quality-sensitive, with importers prioritising reliable replenishment and specification consistency.",
    routeFit:
      "Routes should balance premium quality expectations with practical minimum-order and restocking cycles.",
    retailers: ["Countdown", "New World", "Pak'nSave", "Farro", "HealthPost"],
    regulatoryBodies: {
      "macadamia-nuts": "MPI import controls and destination labelling requirements",
      "rooibos-tea": "MPI and FSANZ-linked food standard controls",
      wine: "Importer and alcohol distribution compliance pathways",
      "fresh-apples": "MPI phytosanitary and biosecurity checks",
      "dried-fruit": "FSANZ and MPI labelling/additive controls",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Small-volume premium programmes still require full batch and document traceability.",
      "rooibos-tea": "Label and ingredient files should be reviewed for both domestic and online sales channels.",
      wine: "Portfolio planning should account for importer shelf-space discipline in smaller chains.",
      "fresh-apples": "Arrival-condition consistency often matters more than large-volume discounting.",
      "dried-fruit": "Shelf-life proofs should reflect New Zealand storage and distribution conditions.",
    },
    ports: "Auckland and Tauranga",
    seaTransit: "15-21 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with biosecurity-ready paperwork",
    logisticsNote: "Smaller market replenishment cycles should be matched to conservative safety stock assumptions.",
    seasonalWindow: "Q1 and Q3 category refresh cycles",
    culturalPeak: "summer holiday and winter wellness periods",
    sourceRefs: ["MPI references", "New Zealand retail demand data"],
  },
  {
    key: "saudi-arabia",
    name: "Saudi Arabia",
    adjective: "Saudi",
    group: "middle-east",
    marketPulse:
      "Saudi Arabia offers large-scale grocery and hospitality demand where halal confidence, Arabic packaging and timing discipline are central.",
    routeFit:
      "Programmes should separate premium modern-trade listings from foodservice and wholesale channels.",
    retailers: ["Panda", "Danube", "Tamimi", "Carrefour KSA", "BinDawood"],
    regulatoryBodies: {
      "macadamia-nuts": "SFDA import standards, halal documentation and Arabic labelling controls",
      "rooibos-tea": "SFDA food registration and halal/label checks",
      wine: "Alcohol import restrictions require route exclusion or alternative market strategy",
      "fresh-apples": "SFDA phytosanitary and produce label requirements",
      "dried-fruit": "SFDA additive, shelf-life and Arabic label requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Halal and bilingual files should be complete before final production planning.",
      "rooibos-tea": "Importer product registration timelines should be built into launch plans.",
      wine: "This route should be treated as non-viable for standard commercial wine import channels.",
      "fresh-apples": "High-heat logistics controls should be documented throughout the route.",
      "dried-fruit": "Ingredient and preservative statements should match SFDA registration records.",
    },
    ports: "Jeddah and Dammam",
    seaTransit: "12-16 days",
    airTransit: "9-11 hours",
    containerPlan: "dry and reefer with heat-protection and rapid clearance focus",
    logisticsNote: "Summer temperature exposure requires robust pack barriers and tighter warehouse handover timing.",
    seasonalWindow: "pre-Ramadan and Hajj-related demand planning",
    culturalPeak: "Ramadan, Eid and Hajj hospitality",
    sourceRefs: ["SFDA and Saudi customs references", "KSA retail and horeca channel reports"],
  },
  {
    key: "qatar",
    name: "Qatar",
    adjective: "Qatari",
    group: "middle-east",
    marketPulse:
      "Qatar's concentrated premium retail and hospitality landscape rewards dependable service and high-format consistency.",
    routeFit:
      "The route works best with importer partnerships that can serve both high-end retail and hotel demand.",
    retailers: ["Carrefour Qatar", "Lulu Qatar", "Monoprix Qatar", "Megamart", "Spar Qatar"],
    regulatoryBodies: {
      "macadamia-nuts": "MOPH food controls, halal confidence and Arabic-English labelling standards",
      "rooibos-tea": "Qatar import food standards and bilingual labelling",
      wine: "Licensed importer route required for alcohol channels",
      "fresh-apples": "Qatar phytosanitary and produce import controls",
      "dried-fruit": "Qatar additive and shelf-life labelling requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Small but premium channel demand requires strict freshness and visual-consistency controls.",
      "rooibos-tea": "Bilingual pack standards should be approved by importer before print production.",
      wine: "Licensed channel selection and bonded handling should be clear before procurement starts.",
      "fresh-apples": "Arrivals should be timed to minimise warm-chain exposure at final handover.",
      "dried-fruit": "Resealable and premium gift-ready formats tend to perform better in this market.",
    },
    ports: "Hamad Port",
    seaTransit: "12-15 days",
    airTransit: "9-10 hours",
    containerPlan: "dry and reefer with climate-protection controls",
    logisticsNote: "Stock planning should align with hospitality event calendars and importer storage capacity.",
    seasonalWindow: "pre-Ramadan and major sporting/event cycles",
    culturalPeak: "Ramadan and Eid gifting",
    sourceRefs: ["Qatar customs and food authority guidance", "Qatar hospitality demand reports"],
  },
  {
    key: "india",
    name: "India",
    adjective: "Indian",
    group: "asia-pacific",
    marketPulse:
      "India combines large addressable demand with high price sensitivity and complex import compliance administration.",
    routeFit:
      "Routes should split premium metro demand from value-driven national distribution strategies.",
    retailers: ["Reliance Retail", "Big Bazaar", "Nature's Basket", "Spencer's", "Amazon India"],
    regulatoryBodies: {
      "macadamia-nuts": "FSSAI import controls and destination labelling requirements",
      "rooibos-tea": "FSSAI tea and herbal product import standards",
      wine: "State-level alcohol route complexity and importer licensing",
      "fresh-apples": "Plant quarantine and phytosanitary controls under Indian import rules",
      "dried-fruit": "FSSAI additive and nutrition disclosure requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Price architecture should include duties and local distribution markups before quoting.",
      "rooibos-tea": "Blended or flavoured SKUs may require additional ingredient scrutiny at clearance.",
      wine: "State registration and distributor onboarding timelines should be modelled upfront.",
      "fresh-apples": "Monsoon timing and inland transit should be considered in cold-chain planning.",
      "dried-fruit": "Sweetness profile and pack-size affordability are major commercial drivers.",
    },
    ports: "Nhava Sheva and Chennai",
    seaTransit: "15-21 days",
    airTransit: "10-12 hours",
    containerPlan: "dry and reefer with monsoon-aware storage and inland movement controls",
    logisticsNote: "Importer cash cycle and inland distribution should be factored into first-order sizing.",
    seasonalWindow: "festival-led peaks with long procurement lead windows",
    culturalPeak: "Diwali and wedding season",
    sourceRefs: ["DGFT and FSSAI guidance", "Indian retail and import trend data"],
  },
  {
    key: "malaysia",
    name: "Malaysia",
    adjective: "Malaysian",
    group: "asia-pacific",
    marketPulse:
      "Malaysia's modern retail and halal-sensitive demand profile favours compliance-ready products with reliable tropical storage performance.",
    routeFit:
      "Programmes should integrate halal confidence, bilingual pack readiness and pragmatic retail price points.",
    retailers: ["Tesco Lotus Malaysia", "AEON", "Jaya Grocer", "Mydin", "Shopee Malaysia"],
    regulatoryBodies: {
      "macadamia-nuts": "JAKIM halal ecosystem and Malaysian food label standards",
      "rooibos-tea": "MOH food standards and halal-adjacent channel expectations",
      wine: "Licensed importer and channel restrictions for alcohol sales",
      "fresh-apples": "DOA phytosanitary and import produce checks",
      "dried-fruit": "Malaysian additive/labelling controls with halal-channel requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Halal signal clarity can materially impact modern-trade listing confidence.",
      "rooibos-tea": "Functional positioning should be matched to local category and claim controls.",
      wine: "Channel access is limited to licensed routes and should be validated before procurement.",
      "fresh-apples": "Humidity and shelf-life protections are central in tropical retail conditions.",
      "dried-fruit": "Pack barriers and resealable formats help reduce quality complaints post-arrival.",
    },
    ports: "Port Klang",
    seaTransit: "13-18 days",
    airTransit: "10-12 hours",
    containerPlan: "dry and reefer with tropical humidity control",
    logisticsNote: "Tropical storage and shelf-life checks should be tested with trial consignments.",
    seasonalWindow: "Ramadan-adjacent and year-end retail campaign cycles",
    culturalPeak: "Ramadan and Hari Raya",
    sourceRefs: ["Malaysia MOH and customs references", "JAKIM and channel reports"],
  },
  {
    key: "thailand",
    name: "Thailand",
    adjective: "Thai",
    group: "asia-pacific",
    marketPulse:
      "Thailand combines strong hospitality demand with modern retail growth, making channel-specific pack design important.",
    routeFit:
      "The route should separate tourism/hospitality volume from premium grocery and gifting demand.",
    retailers: ["Big C", "Tops", "Gourmet Market", "Lotus's", "Lazada Thailand"],
    regulatoryBodies: {
      "macadamia-nuts": "Thai FDA import and labelling controls",
      "rooibos-tea": "Thai FDA food category and additive standards",
      wine: "Licensed alcohol import and excise controls",
      "fresh-apples": "Thai phytosanitary and produce import controls",
      "dried-fruit": "Thai FDA additive and nutrition-labelling requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Tourism-driven demand can create short-notice replenishment pressure in peak seasons.",
      "rooibos-tea": "Ready-to-drink or flavoured adaptations may need extra regulatory planning.",
      wine: "Importer licensing and tax setup should be confirmed before committing production volumes.",
      "fresh-apples": "Distribution to Bangkok and resort zones should be split in logistics costing.",
      "dried-fruit": "Heat and humidity resilience should be validated at final retail pack level.",
    },
    ports: "Laem Chabang",
    seaTransit: "14-19 days",
    airTransit: "10-12 hours",
    containerPlan: "dry and reefer with humidity controls and staged distribution",
    logisticsNote: "Tourism season spikes should be reflected in safety-stock assumptions.",
    seasonalWindow: "Songkran and year-end tourism cycles",
    culturalPeak: "Songkran and New Year gifting",
    sourceRefs: ["Thai FDA and customs references", "Thai retail/hospitality demand data"],
  },
  {
    key: "hong-kong",
    name: "Hong Kong",
    adjective: "Hong Kong",
    group: "asia-pacific",
    marketPulse:
      "Hong Kong is a premium import market with strong gifting and cross-border commercial influence into Greater China channels.",
    routeFit:
      "Routes should combine high-end retail requirements with agile replenishment for specialty distributors.",
    retailers: ["ParknShop", "Wellcome", "CitySuper", "HKTVmall", "YATA"],
    regulatoryBodies: {
      "macadamia-nuts": "Hong Kong food import and label standards",
      "rooibos-tea": "Hong Kong food additive and labelling controls",
      wine: "Hong Kong alcohol import and retail framework",
      "fresh-apples": "Hong Kong produce import and phytosanitary checks",
      "dried-fruit": "Hong Kong additive and nutrition labelling requirements",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Premium gift channels require strong visual consistency and quick restock capability.",
      "rooibos-tea": "Bilingual format and premium positioning copy should be tested with channel partners.",
      wine: "Fine-wine channels value provenance and packaging condition evidence at intake.",
      "fresh-apples": "Fast turnover channels require strict arrival-date and condition control.",
      "dried-fruit": "Retailers often prefer elegant, resealable and gift-friendly pack structures.",
    },
    ports: "Hong Kong Port",
    seaTransit: "17-22 days",
    airTransit: "12-14 hours",
    containerPlan: "dry and reefer with premium pack-protection focus",
    logisticsNote: "Premium distribution channels expect short release-to-shelf cycles.",
    seasonalWindow: "pre-Lunar New Year and Mid-Autumn gift windows",
    culturalPeak: "Lunar New Year and Mid-Autumn Festival",
    sourceRefs: ["Hong Kong customs and CFS references", "Hong Kong premium retail channel data"],
  },
  {
    key: "poland",
    name: "Poland",
    adjective: "Polish",
    group: "europe",
    marketPulse:
      "Poland's fast-growing retail landscape is price-aware but increasingly receptive to quality-differentiated import lines.",
    routeFit:
      "Programmes should pair value-format reliability with selective premium innovation in modern grocery channels.",
    retailers: ["Biedronka", "Lidl Poland", "Żabka", "Auchan Poland", "Carrefour Poland"],
    regulatoryBodies: {
      "macadamia-nuts": "EU import controls and Polish label requirements",
      "rooibos-tea": "EU organic and Polish-language labelling compliance",
      wine: "EU wine import and destination excise/document pathways",
      "fresh-apples": "EU phytosanitary and produce standards",
      "dried-fruit": "EU additive and ingredient-labelling rules",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Value retail programmes need strict cost control without relaxing moisture or defect tolerances.",
      "rooibos-tea": "Consumer education copy may be needed for newer rooibos SKUs in mainstream chains.",
      wine: "Portfolio should align to value and mid-tier channels with clear importer economics.",
      "fresh-apples": "Hub-entry and inland distribution costs can materially alter landed price competitiveness.",
      "dried-fruit": "Private-label tender cycles reward stable specification and reliable lead-time performance.",
    },
    ports: "Gdańsk via North European gateways",
    seaTransit: "18-23 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with cost-optimised inland routing",
    logisticsNote: "Cost-sensitive channels require transparent landed-cost breakdowns before listing decisions.",
    seasonalWindow: "autumn contracting and winter demand peaks",
    culturalPeak: "Christmas confectionery and family retail demand",
    sourceRefs: ["Polish customs references", "Central European retail reports"],
  },
  {
    key: "sweden",
    name: "Sweden",
    adjective: "Swedish",
    group: "europe",
    marketPulse:
      "Sweden is sustainability-oriented with premium grocery expectations and strong attention to transparent claim substantiation.",
    routeFit:
      "The route should prioritize certified, traceable and premium-ready formats with conservative lead-time planning.",
    retailers: ["ICA", "Coop Sweden", "Willys", "Hemköp", "Apotea"],
    regulatoryBodies: {
      "macadamia-nuts": "EU rules plus Swedish-facing sustainability and label expectations",
      "rooibos-tea": "EU organic framework and Swedish-language market compliance",
      wine: "EU wine rules and Swedish importer/retail channel controls",
      "fresh-apples": "EU phytosanitary and quality controls",
      "dried-fruit": "EU additive/nutrition rules with Swedish market label discipline",
    },
    regulatoryNotes: {
      "macadamia-nuts": "Sustainability statements should be evidenced and not treated as generic marketing copy.",
      "rooibos-tea": "Organic and ethical-sourcing claims are commercially important and should be document-backed.",
      wine: "Channel route and monopoly-system considerations should be validated with importer partners.",
      "fresh-apples": "Winter handling and storage planning can influence quality outcomes materially.",
      "dried-fruit": "Packaging recyclability and ingredient transparency often influence buyer scoring.",
    },
    ports: "Gothenburg",
    seaTransit: "18-23 days",
    airTransit: "11-13 hours",
    containerPlan: "dry and reefer with winter-condition handling plans",
    logisticsNote: "Cold-season warehouse and inland delivery timing should be included in first-route simulations.",
    seasonalWindow: "Q3 planning for winter retail demand",
    culturalPeak: "Christmas and winter wellness",
    sourceRefs: ["Swedish customs and food authority references", "Nordic grocery trend reports"],
  },
];

function sentenceVariant(seed: number, lines: string[]) {
  return lines[Math.abs(seed) % lines.length];
}

function toTitle(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildRelatedLinks(productKey: SourcingProductKey, marketKey: SourcingMarketKey) {
  const currentProduct = products[productKey];
  const otherProducts = (Object.keys(products) as SourcingProductKey[])
    .filter((key) => key !== productKey)
    .slice(0, 2)
    .map((key) => ({
      href: `/sourcing/${key}/${marketKey}`,
      label: `${products[key].titleLabel} for ${regionsByKey[marketKey].name}`,
    }));

  return [
    { href: productPages[productKey], label: `${currentProduct.titleLabel} sourcing overview` },
    ...otherProducts,
    { href: "/services/supplier-sourcing", label: "Supplier sourcing service" },
    { href: "/services/export-coordination", label: "Export coordination service" },
  ];
}

function buildPage(productKey: SourcingProductKey, marketKey: SourcingMarketKey): SourcingPage {
  const region = regionsByKey[marketKey];
  const product = products[productKey];
  const indexSeed = `${productKey}-${marketKey}`.length + marketKey.length;

  const title = `${product.titleLabel} for Buyers in ${region.name} | Kaapstays`;
  const description = `${toTitle(product.label)} for ${region.name} buyers. ${region.regulatoryBodies[productKey]}. ${region.ports} transit planning and ${region.seasonalWindow.toLowerCase()}.`;
  const path = `/sourcing/${productKey}/${marketKey}`;

  const marketDataFacts = [
    region.marketPulse,
    product.demandSignals[region.group],
    `Primary channel signal in ${region.name}: ${region.routeFit.toLowerCase()}`,
    `Named buyer channels include ${region.retailers.slice(0, 4).join(", ")}, with sourcing calendars concentrated around ${region.culturalPeak.toLowerCase()}.`,
  ];

  const intro = `${sentenceVariant(indexSeed, [
    `${region.name} is a practical destination for South African ${product.label} when programmes are designed around real channel behaviour, not generic export assumptions.`,
    `For buyers in ${region.name}, ${product.label} performs best when sourcing decisions connect channel goals, compliance requirements and route design from the start.`,
    `South African ${product.label} can deliver strong commercial value in ${region.name}, but only when product, documentation and route timing are planned as one operating model.`,
  ])} ${marketDataFacts[0]} ${marketDataFacts[1]} ${marketDataFacts[2]} ${marketDataFacts[3]}`;

  const routeFitBody = `${sentenceVariant(indexSeed + 1, [
    `This route fits ${region.name} because buyers can align procurement quality tiers with destination channel economics before supplier nomination.`,
    `The route works in ${region.name} when the buying brief separates launch objectives, repeat-supply requirements and channel-specific product formats.`,
    `Commercially, ${region.name} rewards buyers who turn sourcing into a channel-by-channel plan rather than a single headline price comparison.`,
  ])} For ${product.label}, the core format base is ${product.coreFormats}. The primary buyer fit in this market is ${product.primaryBuyerFit}. Named channels such as ${region.retailers.slice(0, 5).join(", ")} help anchor realistic pricing and packaging assumptions before sampling starts. Buyers should separate first-shipment commercial goals from repeat-year goals so that supplier evaluation reflects the actual commercial job, not a generic catalogue quote.`;

  const regulatoryBody = `Regulatory execution in ${region.name} should be treated as a front-end design task, not a post-production checklist. The core authorities and frameworks for this product route are ${region.regulatoryBodies[productKey]}. ${region.regulatoryNotes[productKey]} Buyers should require current certificate scope, legal-entity alignment and destination-ready artwork review before production capacity is reserved. This reduces avoidable delays at customs and protects listing timelines with retail or hospitality partners. A practical document pack should include certificate validity evidence, exact lot linkage, importer details, label version control and contingency ownership if a clearance query is raised after arrival.`;

  const productGuidance = `Product guidance for ${product.label} in ${region.name} should combine channel fit, packaging discipline and realistic replenishment cadence. ${product.guidance} Packaging norms should reflect ${region.group === "middle-east" ? "high-heat distribution conditions" : region.group === "asia-pacific" ? "multi-channel premium presentation and humidity controls" : region.group === "north-america" ? "high-throughput retail handling and importer compliance checks" : "private-label shelf consistency and multilingual label discipline"}. Pricing and range architecture should be set with a clear split between launch volume and repeat volume, especially around ${region.seasonalWindow.toLowerCase()}. Where possible, buyers should run two scenarios in parallel: a conservative route with strict specifications and a growth route with wider format options, then select the route that protects margin and service reliability in the target channel.`;

  const logisticsBody = `Logistics to ${region.name} are usually routed via ${region.ports}, with typical sea transit of ${region.seaTransit} and air transit of ${region.airTransit}. Container planning should use ${region.containerPlan}. ${region.logisticsNote} Buyers should set document ownership, temperature or moisture controls, and contingency buffers before vessel booking. For first orders, include extra time for clearance learning, intake QA checks and any final-mile relabelling tasks. Shipment planning should also define escalation contacts at origin, freight, broker and importer levels so that operational issues can be resolved without delaying shelf or production commitments.`;

  const designRouteBody = `Designing the route to ${region.name} should follow five steps: (1) lock specification and channel objective, (2) shortlist suppliers against document and capacity evidence, (3) approve samples and destination artwork, (4) confirm logistics handovers and document responsibilities, and (5) close arrival with an acceptance review linked to the approved specification. In this market, route design must explicitly account for ${region.seasonalWindow.toLowerCase()} and ${region.culturalPeak.toLowerCase()} demand behaviour. The goal is not one shipment, but a repeatable operating pattern that protects quality, timing and landed margin. Buyers should capture first-shipment lessons in a controlled review so the second order uses real evidence on lead time, quality drift, packaging performance and customs handling reliability.`;

  const supplierQuestions = [
    ...product.meetingQuestions,
    `Which records prove compliance with ${region.regulatoryBodies[productKey]} for the exact product format quoted?`,
    `How will the shipment plan protect quality across the ${region.ports} route and the expected ${region.seaTransit} sea transit window?`,
    `What lead time is realistic for orders scheduled around ${region.culturalPeak.toLowerCase()} demand?`,
  ];

  const sources = [
    ...product.sourceRefs,
    ...region.sourceRefs,
    `${region.regulatoryBodies[productKey]} official guidance and importer circulars for current-period compliance checks.`,
  ];

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: productPages[productKey], label: product.titleLabel },
    { href: path, label: `${product.titleLabel} for ${region.name}` },
  ];

  return {
    product: productKey,
    market: marketKey,
    path,
    title,
    description,
    keywords: [
      `${product.label} ${region.name}`,
      `${product.titleLabel} sourcing ${region.name}`,
      `South African ${product.label} export ${region.name}`,
    ],
    lastmod: LASTMOD,
    eyebrow: `${region.adjective} market sourcing`,
    intro,
    sections: [
      {
        heading: `Why this route fits ${region.name}`,
        body: routeFitBody,
      },
      {
        heading: `Regulatory landscape in ${region.name}`,
        body: regulatoryBody,
      },
      {
        heading: `Product-specific guidance for ${region.name}`,
        body: productGuidance,
      },
      {
        heading: `Logistics to ${region.name}`,
        body: logisticsBody,
      },
      {
        heading: `Design the route to ${region.name}`,
        body: designRouteBody,
      },
      {
        heading: `Questions to take into the supplier meeting`,
        body: `Use these questions to validate capability, documentation and execution readiness for ${region.name}.`,
        bullets: supplierQuestions,
      },
      {
        heading: `Market data checkpoints for ${region.name}`,
        body: `Before scaling volume, validate three market checkpoints: (1) channel sell-through assumptions, (2) destination landed-cost sensitivity, and (3) compliance workload for each SKU. In ${region.name}, these checkpoints should reference named channels such as ${region.retailers.slice(0, 3).join(", ")} and timing signals around ${region.culturalPeak.toLowerCase()}. This keeps sourcing decisions linked to commercial reality instead of static annual assumptions.`,
      },
      {
        heading: `Season timing and inventory discipline`,
        body: `${region.seasonalWindow.charAt(0).toUpperCase()}${region.seasonalWindow.slice(1)} should be mapped backward into origin production dates, container booking windows and importer clearance capacity. Buyers should avoid over-ordering before first-cycle evidence is collected; a phased inventory plan usually performs better than a single oversized arrival. For ${product.label}, this is especially important when channel pricing, promotional timing and shelf-life exposure change between standard retail periods and cultural-peak periods in ${region.name}.`,
      },
      {
        heading: `How Kaapstays supports this buying route`,
        body: "Kaapstays supports sourcing briefs, supplier comparison, sample coordination, document alignment and shipment planning while keeping final import decisions with the buyer and appointed destination advisers.",
      },
      {
        heading: `Decision summary for ${region.name}`,
        body: `A strong ${product.label} programme for ${region.name} starts with a written brief, then tests suppliers against the same technical, regulatory and logistics criteria. The commercial edge usually comes from execution reliability and timing discipline, not from headline price alone. Use first-shipment evidence to calibrate the repeat-order model before scale commitments. If the route performs against agreed quality, timing and document controls, scale can proceed with higher confidence and lower operational volatility.`,
      },
    ],
    links: buildRelatedLinks(productKey, marketKey),
    sources,
    breadcrumbs,
    serviceSchema: {
      name: `${product.titleLabel} for ${region.name}`,
      description,
      path,
      category: product.category,
      areaServed: region.name,
    },
  };
}

export const sourcingMarkets = regions.map((region) => region.key);
export const sourcingProducts = Object.keys(products) as SourcingProductKey[];

const regionsByKey = Object.fromEntries(regions.map((region) => [region.key, region])) as Record<
  SourcingMarketKey,
  RegionProfile
>;

export const sourcingPages: SourcingPage[] = sourcingMarkets.flatMap((marketKey) =>
  sourcingProducts.map((productKey) => buildPage(productKey, marketKey)),
);

export const expansionPages = sourcingPages.filter(
  (page) => !["germany", "united-states", "asia", "uae"].includes(page.market),
);

export function getSourcingPage(product: string, market: string) {
  return sourcingPages.find((page) => page.product === product && page.market === market);
}

export function getExpansionPage(product: string, market: string) {
  return expansionPages.find((page) => page.product === product && page.market === market);
}

export function getExpansionPageByPath(path: string) {
  return expansionPages.find((page) => page.path === path);
}
