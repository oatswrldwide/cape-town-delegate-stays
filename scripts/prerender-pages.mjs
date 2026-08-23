import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const routeTreePath = path.join(rootDir, "src", "routeTree.gen.ts");
const indexHtmlPath = path.join(distDir, "index.html");
const siteUrl = "https://kaapstays.co.za";
const contactEmail = "ongezile@kaapstays.co.za";

const routeTreeSource = await readFile(routeTreePath, "utf8");
const indexHtml = await readFile(indexHtmlPath, "utf8");

const productNames = {
  "dried-fruit": "Dried fruit",
  "fresh-apples": "Fresh apples",
  "macadamia-nuts": "Macadamia nuts",
  nuts: "Nuts",
  "rooibos-and-tea": "Rooibos and tea",
  "rooibos-tea": "Rooibos tea",
  wine: "South African wine",
};

const regionNames = {
  asia: "Asia",
  germany: "Germany",
  uae: "the UAE",
  "united-states": "the United States",
};

const routesBlockMatch = routeTreeSource.match(/fullPaths:\s*([\s\S]*?)\n\s*fileRoutesByTo:/);

if (!routesBlockMatch) {
  throw new Error("Could not find route paths in src/routeTree.gen.ts");
}

const routePaths = [...routesBlockMatch[1].matchAll(/'([^']+)'/g)].map((match) => match[1]);
const pagePaths = routePaths.filter((routePath) => {
  if (routePath.includes(".")) return false;
  return true;
});

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getPageH1(routePath) {
  if (routePath === "/") return "Good products. Right at the source.";
  if (routePath === "/about") return "A gateway to South Africa, built around good connections.";
  if (routePath === "/services/supplier-sourcing") {
    return "A clearer starting point for South African supply.";
  }
  if (routePath === "/services/export-coordination") {
    return "Keep the route from origin to destination clear.";
  }

  const parts = routePath.split("/").filter(Boolean);
  if (parts[0] === "products") {
    return `${productNames[parts[1]]} from South African origin.`;
  }
  if (parts[0] === "sourcing") {
    return `${productNames[parts[1]]} for buyers in ${regionNames[parts[2]]}.`;
  }

  return "South African product sourcing.";
}

function titleCaseSegment(value) {
  return value
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function getPageLabel(routePath) {
  if (routePath === "/") return "Home";
  if (routePath === "/about") return "About";

  const parts = routePath.split("/").filter(Boolean);
  if (parts[0] === "services") return `Service: ${titleCaseSegment(parts[1])}`;
  if (parts[0] === "products") return `Product: ${titleCaseSegment(parts[1])}`;
  if (parts[0] === "sourcing") {
    return `Sourcing: ${titleCaseSegment(parts[1])} in ${titleCaseSegment(parts[2])}`;
  }

  return titleCaseSegment(parts[parts.length - 1]);
}

function getRouteContext(routePath) {
  if (routePath === "/") {
    return {
      market: "global destination markets",
      product: "South African products",
      buyer: "importers, distributors, retailers and manufacturers",
      route: "multi-category sourcing decisions",
    };
  }

  if (routePath === "/about") {
    return {
      market: "international buyer programs",
      product: "South African product categories",
      buyer: "procurement leaders and sourcing teams",
      route: "cross-border sourcing partnerships",
    };
  }

  const parts = routePath.split("/").filter(Boolean);
  if (parts[0] === "products") {
    return {
      market: "destination-specific import channels",
      product: productNames[parts[1]] ?? "South African products",
      buyer: "buyers building volume programs",
      route: "product-specific sourcing evaluation",
    };
  }

  if (parts[0] === "services") {
    return {
      market: "origin-to-destination export routes",
      product: "buyer briefs and supplier pathways",
      buyer: "teams aligning procurement with operations",
      route: "service-led sourcing execution",
    };
  }

  if (parts[0] === "sourcing") {
    const product = productNames[parts[1]] ?? "South African products";
    const market = regionNames[parts[2]] ?? "international markets";
    return {
      market,
      product,
      buyer: `buyers planning ${product.toLowerCase()} procurement`,
      route: "regional sourcing feasibility decisions",
    };
  }

  return {
    market: "international sourcing markets",
    product: "South African products",
    buyer: "global procurement teams",
    route: "cross-border sourcing execution",
  };
}

function getRouteProfile(routePath) {
  const parts = routePath.split("/").filter(Boolean);
  const productKey = parts[1];
  const regionKey = parts[2];
  const product = productNames[productKey] ?? "South African products";
  const region = regionNames[regionKey] ?? "international markets";

  const productDemandSignals = {
    "dried-fruit":
      "stable snack demand, ingredient reformulation programs, and private-label expansion schedules",
    "fresh-apples":
      "seasonal retail refresh cycles, wholesale consistency requirements, and shelf-life-sensitive planning",
    "macadamia-nuts":
      "premium snacking growth, bakery and confectionery usage, and branded gifting programs",
    nuts: "portfolio expansion into snack and ingredient lines with consistent quality expectations",
    "rooibos-and-tea":
      "wellness-positioned beverage demand, private-label tea launches, and clean-label ingredient programs",
    "rooibos-tea":
      "herbal tea portfolio growth, wellness-led buyer demand, and multi-channel beverage programs",
    wine: "on-trade and retail assortment planning, portfolio differentiation, and route-to-market calendar management",
  };

  const productPlanningRisks = {
    "dried-fruit":
      "format assumptions, moisture expectations, and packaging transitions can create late-stage rework",
    "fresh-apples":
      "pack profile mismatches, timing assumptions, and shelf-life handling decisions can reduce service reliability",
    "macadamia-nuts":
      "grade interpretation, roasting expectations, and lot consistency assumptions can alter commercial outcomes",
    nuts: "specification clarity, volume ramp assumptions, and quality tolerance alignment can shift landed economics",
    "rooibos-and-tea":
      "blend expectations, pack format choices, and compliance assumptions can delay launch readiness",
    "rooibos-tea":
      "taste profile assumptions, blending boundaries, and destination packaging preferences can impact route fit",
    wine: "portfolio mix assumptions, labeling requirements, and shipment cadence choices can change margin outcomes",
  };

  const regionOperationalFocus = {
    asia: "channel mix, launch cadence, and distributor handover readiness across multiple destination patterns",
    germany:
      "retail precision, documentation discipline, and repeatability expectations in structured buying programs",
    uae: "rapid procurement cycles, hospitality-driven demand shifts, and importer timeline sensitivity",
    "united-states":
      "multi-state distribution complexity, timing discipline, and high visibility around consistency and compliance",
  };

  const regionBuyingStyle = {
    asia: "buyers balancing speed with comparability across diverse market pathways",
    germany: "buyers prioritizing documentation quality and operational precision",
    uae: "buyers moving quickly while expecting clear commercial and logistics framing",
    "united-states":
      "buyers evaluating scale potential while requiring disciplined execution detail",
  };

  if (routePath === "/") {
    return {
      pageType: "home",
      audience: "international importers and procurement teams",
      market: "cross-border destination markets",
      product: "South African product categories",
      demandSignal:
        "multi-category sourcing programs seeking stronger comparability and faster path-to-decision",
      planningRisk: "fragmented buyer data creates avoidable cost pressure and delayed commitments",
      operatingFocus: "clear brief design, route evaluation, and execution handover discipline",
      buyingStyle: "teams building resilient sourcing capability across categories and regions",
    };
  }

  if (routePath === "/about") {
    return {
      pageType: "about",
      audience: "procurement leaders exploring origin partnerships",
      market: "global buyer programs connected to South African origin",
      product: "product and service pathways",
      demandSignal:
        "buyers requiring a reliable bridge between commercial intent and executable sourcing conversations",
      planningRisk:
        "misaligned assumptions between buying teams and supply routes can erode confidence",
      operatingFocus:
        "practical buyer guidance, structured supplier engagement, and route transparency",
      buyingStyle: "teams seeking repeatable procurement processes instead of one-off transactions",
    };
  }

  if (parts[0] === "services") {
    return {
      pageType: "service",
      audience: "buyers shaping sourcing strategy and delivery readiness",
      market: "origin-to-destination sourcing and export lanes",
      product:
        parts[1] === "supplier-sourcing"
          ? "supplier discovery pathways"
          : "export coordination pathways",
      demandSignal:
        parts[1] === "supplier-sourcing"
          ? "clearer supplier comparability before commercial commitments"
          : "stronger handover from commercial intent to export execution",
      planningRisk:
        parts[1] === "supplier-sourcing"
          ? "unstructured outreach that creates noise without improving decision confidence"
          : "late-stage coordination gaps that disrupt timing, documentation, and service reliability",
      operatingFocus:
        parts[1] === "supplier-sourcing"
          ? "brief quality, shortlist discipline, and assumption validation"
          : "shipment readiness, stakeholder alignment, and predictable destination delivery",
      buyingStyle:
        parts[1] === "supplier-sourcing"
          ? "teams seeking better first conversations with capable producers"
          : "teams converting sourcing decisions into repeatable export performance",
    };
  }

  if (parts[0] === "products") {
    return {
      pageType: "product",
      audience: "category managers and import teams",
      market: "destination-specific buying channels",
      product,
      demandSignal:
        productDemandSignals[productKey] ??
        "buyer demand for dependable product formats and practical supply pathways",
      planningRisk:
        productPlanningRisks[productKey] ??
        "late clarification around quality, format, and timing assumptions can create avoidable risk",
      operatingFocus:
        "product brief precision, comparability discipline, and route feasibility checks",
      buyingStyle:
        "teams converting product interest into commercially defensible sourcing decisions",
    };
  }

  if (parts[0] === "sourcing") {
    return {
      pageType: "regional-product",
      audience: `import and procurement teams in ${region}`,
      market: region,
      product,
      demandSignal:
        productDemandSignals[productKey] ??
        "regional buyers requiring clearer product-fit and route-fit visibility",
      planningRisk:
        productPlanningRisks[productKey] ??
        "route assumptions can undermine otherwise attractive supply options",
      operatingFocus:
        regionOperationalFocus[regionKey] ??
        "market-fit, timing discipline, and route execution clarity",
      buyingStyle:
        regionBuyingStyle[regionKey] ?? "buyers balancing speed with reliable sourcing structure",
    };
  }

  return {
    pageType: "general",
    audience: "global procurement teams",
    market: "international sourcing environments",
    product: "South African products",
    demandSignal: "buyers looking for practical sourcing clarity",
    planningRisk: "unvalidated assumptions can compound into avoidable cost and delay",
    operatingFocus: "structured buyer briefs and execution discipline",
    buyingStyle: "teams seeking predictable sourcing outcomes",
  };
}

function getContextualRelatedPaths(routePath) {
  const related = [];
  const parts = routePath.split("/").filter(Boolean);

  if (routePath === "/") {
    return [
      "/about",
      "/services/supplier-sourcing",
      "/services/export-coordination",
      "/products/rooibos-and-tea",
    ];
  }

  if (routePath === "/about") {
    return ["/", "/services/supplier-sourcing", "/services/export-coordination", "/products/nuts"];
  }

  if (parts[0] === "services") {
    related.push("/");
    related.push(
      parts[1] === "supplier-sourcing"
        ? "/services/export-coordination"
        : "/services/supplier-sourcing",
    );
    related.push("/products/rooibos-and-tea");
    related.push("/about");
    return related;
  }

  if (parts[0] === "products") {
    related.push("/");
    related.push("/services/supplier-sourcing");
    related.push(`/sourcing/${parts[1]}/germany`);
    related.push("/about");
    return related;
  }

  if (parts[0] === "sourcing") {
    related.push("/");
    related.push(`/products/${parts[1]}`);
    related.push("/services/export-coordination");
    related.push("/about");
    return related;
  }

  return ["/", "/about", "/services/supplier-sourcing", "/services/export-coordination"];
}

function buildLongFormResearchHtml(routePath) {
  const profile = getRouteProfile(routePath);
  const { market, product, buyer, route } = getRouteContext(routePath);
  const sections = [
    {
      heading: `Market brief for ${profile.product} in ${profile.market}`,
      body: `This page focuses on ${profile.audience} navigating ${profile.market.toLowerCase()} with a sourcing requirement linked to ${profile.product.toLowerCase()}. The demand signal currently centers on ${profile.demandSignal}. Instead of treating this as generic market noise, the useful move is to translate demand into a structured brief that can be compared across suppliers and service routes. Buyers who document scope, timing, packaging direction, and acceptable quality boundaries early tend to reduce late-stage rework and protect commercial optionality. For teams evaluating ${product.toLowerCase()} in ${market.toLowerCase()}, the first gain is clearer evidence for selection decisions, not simply a larger stack of supplier messages.`,
    },
    {
      heading: `Primary execution risk on ${routePath}`,
      body: `The most material planning risk for this specific route is that ${profile.planningRisk}. This risk usually appears after early momentum has already built, which is why teams experience avoidable friction between procurement, operations, and finance. A stronger sequence starts with clear non-negotiables, then forces comparability through standardized responses, then pressure-tests assumptions before commitment. In ${route}, this validation order keeps attractive-but-fragile options from reaching late-stage dependency. For ${buyer}, disciplined assumption testing is less about slowing decisions and more about preserving margin, timeline control, and confidence while options are still flexible.`,
    },
    {
      heading: "What teams should validate first for this URL",
      body: `A route-specific validation stack for this page should emphasize ${profile.operatingFocus}. Practical validation begins with product and market-fit boundaries, then maps those boundaries to realistic route assumptions before pricing decisions are locked. Teams that skip this sequence often revisit earlier choices under time pressure when a hidden assumption fails. The stronger method is to convert every high-impact unknown into a visible checkpoint with ownership and evidence requirements. In practice, this gives buying teams a defensible shortlist faster and creates cleaner handovers from commercial intent to execution planning.`,
    },
    {
      heading: `Buyer behavior pattern in ${profile.market}`,
      body: `The common buyer behavior on this route is ${profile.buyingStyle}. That pattern creates speed advantages only when briefing quality and response structure are handled early. When teams move quickly without explicit checkpoint design, unresolved assumptions tend to surface in packaging, timeline, quality interpretation, or documentation readiness. A well-scoped brief acts as a control system by requiring comparable data inputs before choices are escalated internally. This helps commercial, logistics, and quality stakeholders align on the same evidence base while still preserving decision speed.`,
    },
    {
      heading: "Kaapstays fit for this route",
      body: `Kaapstays supports this page's route by framing early buyer interest into a practical sourcing sequence tied to South African origin options. The emphasis is on quality of comparison, not volume of supplier noise. For ${profile.audience}, this means each step can be reviewed against route feasibility, execution readiness, and commercial impact before commitment. The outcome is a decision path that stays usable even when market variables shift, because assumptions are documented, ownership is clearer, and escalation points are defined before pressure peaks.`,
    },
    {
      heading: "Route-specific implementation checklist",
      body: `For this page, the most useful implementation flow is: define route non-negotiables, issue a comparable brief, validate high-impact assumptions, align execution handover criteria, and capture post-cycle learning. The route can then be repeated with stronger baseline clarity. This is especially relevant for teams sourcing ${product.toLowerCase()} because decision quality depends on synchronized assumptions across product requirements, destination expectations, and operational constraints. Consistent checklist discipline helps teams avoid urgent firefighting and maintain leverage in negotiation and planning.`,
    },
    {
      heading: "Commercial protection priorities",
      body: `Commercial protection on ${routePath} should focus on assumption visibility before contract stage. Teams should test whether pricing logic still holds when realistic timing, packaging, quality, and coordination conditions are applied. In ${market.toLowerCase()}, minor planning misses can compound into measurable margin pressure once execution begins. Buyers that document assumption sensitivity early generally avoid false savings and negotiate with stronger clarity around risk ownership. This creates a stronger link between sourcing intent and financial performance for both first orders and repeat cycles.`,
    },
    {
      heading: "Continuous improvement loop for this market route",
      body: `After each sourcing cycle linked to this URL, teams should compare expected outcomes against actual delivery, quality, timing, and communication performance. Deviations should be mapped directly to original assumptions so briefing templates and supplier qualification criteria can be improved before the next cycle starts. Over multiple cycles, this turns one-off activity into a repeatable capability with better onboarding, cleaner governance, and stronger supplier conversations. For organizations active in ${market.toLowerCase()}, the compounding value comes from preserving what worked and correcting what failed while evidence is still fresh.`,
    },
    {
      heading: "Why this page's approach strengthens resilience",
      body: `The resilience gain from this route is not tied to optimism; it comes from disciplined structure. When teams translate buyer intent into explicit checkpoints, compare options on shared criteria, and validate operational assumptions early, they retain control under pressure. In ${route}, that discipline supports stronger service reliability, cleaner internal alignment, and better commercial consistency across repeat programs. The practical outcome is a sourcing model that scales with fewer avoidable surprises and more confidence at each decision gate.`,
    },
  ];

  return sections
    .map(
      (section) => `
         <article>
           <h2>${escapeHtml(section.heading)}</h2>
           <p>${escapeHtml(section.body)}</p>
         </article>`,
    )
    .join("");
}

async function renderPageHtml(routePath) {
  const routeFilePath =
    routePath === "/"
      ? path.join(rootDir, "src", "routes", "index.tsx")
      : path.join(rootDir, "src", "routes", `${routePath.slice(1)}.tsx`);
  const routeSource = await readFile(routeFilePath, "utf8");
  const title = routeSource.match(/title:\s*"([^"]+)"/)?.[1];
  const description = routeSource.match(/description:\s*"([^"]+)"/)?.[1];

  if (!title || !description) {
    throw new Error(`Could not find title/description SEO data for ${routePath}`);
  }

  const canonicalUrl = `${siteUrl}${routePath}`;
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  const heading = escapeHtml(getPageH1(routePath));
  const relatedLinks = getContextualRelatedPaths(routePath)
    .map((pagePath) => {
      const href = pagePath === "/" ? "/" : `${pagePath}/`;
      return `<li><a href="${href}">${escapeHtml(getPageLabel(pagePath))}</a></li>`;
    })
    .join("");
  const researchContent = buildLongFormResearchHtml(routePath);
  const staticContent = `
      <main>
        <header>
          <p>Kaapstays</p>
          <nav>
            <a href="/">Home</a>
            <a href="/about/">About</a>
            <a href="/services/supplier-sourcing/">Supplier sourcing</a>
            <a href="/services/export-coordination/">Export coordination</a>
          </nav>
        </header>
        <article>
          <h1>${heading}</h1>
          <p>${escapedDescription}</p>
          <p>
            Kaapstays helps global buyers source South African products through practical supplier conversations and clear export planning.
            Use this page to understand the route for your market, compare supply paths, and prepare a clear brief with product, destination, estimated volume, and timing.
            For direct support, email <a href="mailto:${contactEmail}">${contactEmail}</a>.
          </p>
        </article>
        <section>
          <h2>Route-specific buyer research and practical sourcing model</h2>
          <p>
            This URL contains route-specific guidance for procurement teams that need deeper decision support before supplier engagement.
            The analysis below focuses on this page's market and product context so buyers can move from broad interest to clearer assumptions,
            stronger comparability, and better execution control from first enquiry through repeat supply.
          </p>
          ${researchContent}
        </section>
        <section>
          <h2>Related pages for this route</h2>
          <ul>
            ${relatedLinks}
          </ul>
        </section>
      </main>`;
  return indexHtml
    .replace(
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      (match) =>
        `${match}
    <title>${escapedTitle}</title>
    <meta name="description" content="${escapedDescription}" />
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapedTitle}" />
    <meta name="twitter:description" content="${escapedDescription}" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
}

for (const routePath of pagePaths) {
  const normalizedPath = routePath.replace(/^\/+|\/+$/g, "");
  const pageHtml = await renderPageHtml(routePath);

  if (!normalizedPath) {
    await writeFile(indexHtmlPath, pageHtml);
    continue;
  }

  const targetDir = path.join(distDir, normalizedPath);
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, "index.html"), pageHtml);

  const flatHtmlPath = path.join(distDir, `${normalizedPath}.html`);
  await writeFile(flatHtmlPath, pageHtml);
}

console.log(`Prerendered ${pagePaths.length} static route pages with SEO metadata.`);
