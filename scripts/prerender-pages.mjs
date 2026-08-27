import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const routeTreePath = path.join(rootDir, "src", "routeTree.gen.ts");
const indexHtmlPath = path.join(distDir, "index.html");
const regionalContentPath = path.join(
  rootDir,
  "src",
  "components",
  "seo",
  "regional-product-page.tsx",
);

const SITE_URL = "https://kaapstays.co.za";

const routeTreeSource = await readFile(routeTreePath, "utf8");
const indexHtml = await readFile(indexHtmlPath, "utf8");
const regionalContentSource = await readFile(regionalContentPath, "utf8");

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
const pagePaths = routePaths.filter((routePath) => !routePath.includes("."));

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getRegionalMetaField(productKey, regionKey, fieldName) {
  const productToken = productKey.includes("-") ? `"${productKey}"` : productKey;
  const regionToken = regionKey.includes("-") ? `"${regionKey}"` : regionKey;
  const pattern = new RegExp(
    `${escapeRegex(productToken)}\\s*:\\s*\\{[\\s\\S]*?${escapeRegex(regionToken)}\\s*:\\s*\\{[\\s\\S]*?${fieldName}:\\s*"([^"]+)"`,
  );
  return regionalContentSource.match(pattern)?.[1] ?? null;
}

function resolveRegionalRoute(routeSource) {
  const regionalMatch = routeSource.match(
    /const\s+seo\s*=\s*getRegionalPageMeta\("([^"]+)",\s*"([^"]+)"\);/,
  );
  if (!regionalMatch) return null;
  const [, productKey, regionKey] = regionalMatch;
  return { productKey, regionKey };
}

function resolveMetaDescription(routeSource) {
  const inlineDescription = routeSource.match(/description:\s*"([^"]+)"/)?.[1];
  if (inlineDescription) return inlineDescription;

  const regionalRoute = resolveRegionalRoute(routeSource);
  if (!regionalRoute) return null;

  return getRegionalMetaField(regionalRoute.productKey, regionalRoute.regionKey, "metaDescription");
}

function resolveTitle(routeSource) {
  const inlineTitle = routeSource.match(/title:\s*"([^"]+)"/)?.[1];
  if (inlineTitle) return inlineTitle;

  const regionalRoute = resolveRegionalRoute(routeSource);
  if (!regionalRoute) return null;

  return getRegionalMetaField(regionalRoute.productKey, regionalRoute.regionKey, "metaTitle");
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

function getCanonicalUrl(routePath) {
  if (routePath === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${routePath}`;
}

function getOgImagePath(routePath) {
  if (routePath === "/") return "/og-homepage.jpg";
  if (routePath === "/about") return "/og-about.jpg";
  if (routePath === "/products/rooibos-and-tea") return "/og-rooibos.jpg";
  if (routePath === "/products/fresh-apples") return "/og-apples.jpg";
  if (routePath === "/products/dried-fruit") return "/og-dried-fruit.jpg";
  if (routePath === "/products/nuts") return "/og-nuts.jpg";
  if (routePath === "/products/wine") return "/og-wine.jpg";
  if (routePath === "/services/supplier-sourcing") return "/og-sourcing.jpg";
  if (routePath === "/services/export-coordination") return "/og-export.jpg";

  const regionalPattern = routePath.match(/^\/sourcing\/(macadamia-nuts|rooibos-tea|wine|fresh-apples|dried-fruit)\/(germany|united-states|asia|uae)$/);
  if (!regionalPattern) return "/og-homepage.jpg";

  const [, product, region] = regionalPattern;
  const regionSuffix = region === "united-states" ? "usa" : region;
  const productPrefixMap = {
    "macadamia-nuts": "mac",
    "rooibos-tea": "rooibos",
    wine: "wine",
    "fresh-apples": "apples",
    "dried-fruit": "fruit",
  };

  return `/og-${productPrefixMap[product]}-${regionSuffix}.jpg`;
}

function getRouteLinks(routePath) {
  const shared = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Kaapstays" },
    { href: "/services/supplier-sourcing", label: "Supplier sourcing" },
    { href: "/services/export-coordination", label: "Export coordination" },
  ];

  if (routePath.startsWith("/products/")) {
    return [...shared, { href: routePath, label: "This product page" }];
  }

  if (routePath.startsWith("/sourcing/")) {
    const [, , product] = routePath.split("/");
    return [...shared, { href: `/products/${product === "rooibos-tea" ? "rooibos-and-tea" : product}`, label: "Related product overview" }];
  }

  if (routePath.startsWith("/services/")) {
    return [...shared, { href: "/products/rooibos-and-tea", label: "Rooibos and tea sourcing" }];
  }

  if (routePath === "/about") {
    return [...shared, { href: "/products/wine", label: "South African wine sourcing" }];
  }

  return [...shared, { href: "/products/fresh-apples", label: "Fresh apple sourcing" }];
}

function buildStructuredData(routePath, title, description, canonicalUrl) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Kaapstays",
    url: SITE_URL,
    email: "ongezile@kaapstays.co.za",
    telephone: "068 018 7300",
    areaServed: "Worldwide",
  };

  if (routePath === "/") {
    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "Kaapstays",
      url: `${SITE_URL}/`,
      description,
      publisher: {
        "@id": `${SITE_URL}#organization`,
      },
    };
    return [website, organization];
  }

  if (routePath === "/about") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${canonicalUrl}#about-page`,
        name: title,
        description,
        url: canonicalUrl,
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        about: {
          "@id": `${SITE_URL}#organization`,
        },
      },
      organization,
    ];
  }

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: title,
      description,
      serviceType: "South African supplier sourcing and export coordination",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      areaServed: "Worldwide",
      url: canonicalUrl,
    },
    organization,
  ];
}

function buildCrawlableBody(routePath, title, description) {
  const links = getRouteLinks(routePath)
    .map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`)
    .join("\n");

  return `
    <main>
      <h1>${escapeHtml(getPageH1(routePath))}</h1>
      <p>${escapeHtml(description)}</p>
      <p>Kaapstays helps importers, distributors, retailers and manufacturers source from South Africa with clear product specifications, practical supplier comparisons and dependable export coordination. We focus on buyer-ready information: destination market requirements, product format options, packaging standards, documentation pathways and realistic shipping timelines. This page is part of our wider sourcing network covering rooibos and tea, fresh apples, dried fruit, nuts and wine, with market-specific routes for Germany, the United States, Asia and the UAE.</p>
      <p>For related pathways, explore these internal links:</p>
      <ul>${links}</ul>
      <p>Need pricing and supply guidance for your destination? Use these pages to compare product categories, review service options and send a sourcing brief with your required volume, timing and compliance needs.</p>
    </main>
  `;
}

function buildSeoTags({ title, description, canonicalUrl, ogImageUrl }) {
  return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
    <meta property="og:image:alt" content="${escapeHtml(title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:url" content="${escapeHtml(canonicalUrl)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />
  `;
}

async function renderPageHtml(routePath) {
  const routeFilePath =
    routePath === "/"
      ? path.join(rootDir, "src", "routes", "index.tsx")
      : path.join(rootDir, "src", "routes", `${routePath.slice(1)}.tsx`);

  const routeSource = await readFile(routeFilePath, "utf8");
  const title = resolveTitle(routeSource);
  const description = resolveMetaDescription(routeSource);

  if (!title || !description) {
    throw new Error(`Could not resolve SEO metadata for ${routePath}`);
  }

  const canonicalUrl = getCanonicalUrl(routePath);
  const ogImageUrl = `${SITE_URL}${getOgImagePath(routePath)}`;
  const seoTags = buildSeoTags({ title, description, canonicalUrl, ogImageUrl });
  const structuredDataScripts = buildStructuredData(routePath, title, description, canonicalUrl)
    .map((schema) => {
      const safeJson = JSON.stringify(schema).replaceAll("</script>", "<\\/script>");
      return `<script type="application/ld+json">${safeJson}</script>`;
    })
    .join("\n");

  const bodyHtml = buildCrawlableBody(routePath, title, description);

  return indexHtml
    .replace("</head>", `${seoTags}\n${structuredDataScripts}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
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
