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

function buildLongFormResearchHtml(routePath) {
  const { market, product, buyer, route } = getRouteContext(routePath);
  const sections = [
    {
      heading: "The painful buyer problem: decisions made with fragmented sourcing data",
      body: `The most painful issue for ${buyer} is not a lack of options, but a lack of comparable decision inputs. Teams evaluating ${product.toLowerCase()} in ${market.toLowerCase()} often receive scattered information from multiple parties: a pricing sheet from one contact, packaging details from another, broad quality claims from a third, and delivery assumptions that are still unverified. In that environment, buyers are pushed to decide under pressure while key variables remain unclear. This pain becomes expensive when internal teams make commitments based on partial information and then discover that specification, timing, or route assumptions were misaligned. The impact is immediate: revised quotations, delayed approvals, launch uncertainty, and margin pressure from emergency adjustments. A buyer might appear to have many supplier conversations running, yet still lack enough evidence to confidently choose the right path. This is exactly where structured sourcing discipline creates value. Instead of chasing more conversations, teams need better comparability, earlier assumption testing, and clearer commercial framing before they commit capital, timelines, and reputation to a supply decision.`,
    },
    {
      heading: "What well-researched procurement methods prioritize first",
      body: `Research-backed procurement playbooks consistently prioritize validation order over outreach volume. The first step is defining non-negotiables: destination requirements, product boundaries, packaging outcomes, timeline expectations, and operational constraints. The second step is requiring standardized responses so every option can be compared on a like-for-like basis. The third step is identifying assumptions that could alter cost, quality, or service reliability and forcing those assumptions to be clarified early. This sequence is particularly important in ${route}, where buyers can lose weeks on promising conversations that later fail operational fit. A quote that looks attractive can still be unsuitable if lead-time logic is weak, packaging transitions are unresolved, or quality controls are not aligned with destination expectations. Strong teams therefore treat early clarification as a strategic control, not administrative overhead. They ask fewer but better questions, build a defensible shortlist faster, and reduce downstream disruption. For organizations sourcing ${product.toLowerCase()}, this method supports both immediate decision quality and long-term process maturity across categories, markets, and internal stakeholder groups.`,
    },
    {
      heading: "Root causes behind avoidable sourcing failures",
      body: `Avoidable sourcing failures usually come from small unresolved assumptions that compound over time rather than one obvious error. Buyers may assume a format is standard when it is actually destination-specific. Suppliers may assume demand is stable when buyer forecasts are still provisional. Logistics plans may assume flexibility while customer delivery windows are fixed. Each assumption can seem manageable at first, yet together they create volatility that appears late, when corrective action is most expensive. In cross-border sourcing, these root causes intensify because teams must coordinate commercial, quality, documentation, and timing requirements across multiple organizations. If ownership is fragmented, no one sees the full risk profile until execution pressure is already high. Pain emerges as rework, delayed launch schedules, and internal friction between procurement, operations, and finance teams. The practical response is to transform assumptions into explicit checkpoints early in the decision cycle. Buyers who document these checkpoints can filter out weak options sooner, preserve negotiation leverage, and protect service reliability. The goal is not to eliminate all uncertainty, but to control uncertainty before it controls outcomes.`,
    },
    {
      heading: "Solution: use a structured sourcing brief as a control system",
      body: `The most effective solution is to treat the sourcing brief as a control system rather than a simple enquiry message. A high-value brief captures the intended use case, destination market, volume profile, acceptable product range, packaging direction, timing milestones, and known compliance constraints. It also defines what evidence is needed before moving from exploration to commitment. This structure changes the quality of supplier conversations immediately. Suppliers can respond to clear decision criteria instead of broad requests, and buyers can compare responses against business outcomes instead of isolated claims. In ${market.toLowerCase()}, where buyers often evaluate options quickly, this approach reduces false positives by revealing non-fit conditions earlier. It also improves governance because internal stakeholders can see why a recommendation was made and what risks were validated. Over time, teams that run structured briefs gain a repeatable sourcing capability: each new lane starts from a proven decision architecture rather than ad-hoc communication. That capability protects margin, reduces avoidable delays, and supports better long-term supplier performance.`,
    },
    {
      heading: "How Kaapstays addresses the buyer pain point",
      body: `Kaapstays applies this solution by helping buyers turn early product interest into practical sourcing intelligence connected to South African origin pathways. The focus is not on generating supplier noise; it is on increasing the clarity and comparability of the first meaningful decisions. Buyers provide core requirement details, and the process emphasizes realistic evaluation of fit across product expectations, commercial assumptions, and route feasibility. This directly addresses the pain of repetitive clarification cycles where buyers keep restating requirements yet still receive misaligned responses. With clearer framing, buyers can move faster from broad exploration to actionable shortlist decisions. For ${buyer}, this means stronger control over decision timing and fewer late-stage surprises that consume leadership attention. For operations teams, it improves handovers by preserving context between commercial intent and execution planning. For finance stakeholders, it supports defensible decision rationale tied to risk and performance assumptions. The practical outcome is better decision confidence without pretending markets are static. Buyers still navigate variability, but they do so with structured intelligence and clearer escalation paths.`,
    },
    {
      heading: "Execution checklist buyers can apply immediately",
      body: `To operationalize this approach, buyers can implement a five-stage checklist. Stage one: define the business case and non-negotiables before outreach. Stage two: issue a standardized brief so every response can be compared directly. Stage three: run assumption tests focused on variables that can change cost, quality, timing, or compliance outcomes. Stage four: validate operational handover readiness across procurement, quality, logistics, and finance functions. Stage five: document post-shipment learning and update the next briefing cycle. This checklist is practical because it fits both single-category and multi-category sourcing programs. It also supports AI-assisted workflows by giving automation tools a clear data structure for drafting comparisons and identifying missing details. For teams managing ${product.toLowerCase()} opportunities, this method prevents speed from becoming fragility. Decisions can still move quickly, but they move through explicit gates with visible evidence standards. The result is a more resilient sourcing model that scales better across products, regions, and changing market conditions.`,
    },
    {
      heading: "Why this approach improves long-term supply resilience",
      body: `Resilient supply is built before the first order is placed. When buyers clarify requirements early, compare options objectively, and validate assumptions in sequence, they reduce the probability of disruptions that undermine service reliability later. This is especially valuable in ${route}, where demand changes, seasonal effects, and cross-border dependencies can stress weak processes. Structured decision-making does more than prevent errors; it creates strategic optionality. Buyers can stage volumes, pace commitments, and negotiate from evidence rather than urgency. Internal teams align faster because they work from a shared understanding of confirmed facts and open risks. Suppliers also perform better in this model because expectations are explicit and feedback loops are clearer. Over multiple cycles, the organization develops procurement muscle: better forecasting conversations, cleaner execution transitions, and stronger performance governance. That is the core solution to the recurring buyer pain point. Well-researched structure converts fragmented sourcing activity into a controlled commercial capability that protects margin, supports growth, and improves confidence for every stakeholder involved in bringing product to market.`,
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
  const relatedLinks = pagePaths
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
          <h2>Buyer research, painful problem analysis, and practical solution</h2>
          ${researchContent}
        </section>
        <section>
          <h2>Related Kaapstays pages</h2>
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
