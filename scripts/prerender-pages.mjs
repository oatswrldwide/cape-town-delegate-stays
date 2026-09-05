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

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getRegionalMetaDescription(productKey, regionKey) {
  const productToken = productKey.includes("-") ? `"${productKey}"` : productKey;
  const regionToken = regionKey.includes("-") ? `"${regionKey}"` : regionKey;
  const pattern = new RegExp(
    `${escapeRegex(productToken)}\\s*:\\s*\\{[\\s\\S]*?${escapeRegex(regionToken)}\\s*:\\s*\\{[\\s\\S]*?metaDescription:\\s*"([^"]+)"`,
  );
  return regionalContentSource.match(pattern)?.[1];
}

function resolveMetaDescription(routeSource) {
  const inlineDescription = routeSource.match(/description:\s*"([^"]+)"/)?.[1];
  if (inlineDescription) return inlineDescription;

  const regionalMatch = routeSource.match(
    /const\s+seo\s*=\s*getRegionalPageMeta\("([^"]+)",\s*"([^"]+)"\);/,
  );
  if (!regionalMatch) return null;

  const [, productKey, regionKey] = regionalMatch;
  return getRegionalMetaDescription(productKey, regionKey) ?? null;
}

function getPageH1(routePath) {
  if (routePath === "/") return "Good products. Right at the source.";
  if (routePath === "/about") return "A gateway to South Africa, built around good connections.";
  if (routePath === "/guides/rooibos-tea-guide") {
    return "Rooibos tea sourcing: a buyer's practical guide";
  }
  if (routePath === "/guides/south-african-apple-season") {
    return "South African apple season: how buyers plan supply";
  }
  if (routePath === "/guides/dried-fruit-buyers-guide") {
    return "Dried fruit sourcing: specifications before sampling";
  }
  if (routePath === "/guides/macadamia-grades-guide") {
    return "Macadamia grades and formats: a wholesale buyer guide";
  }
  if (routePath === "/guides/south-african-wine-buyers-guide") {
    return "South African wine sourcing: from brief to shipment";
  }
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

async function renderPageHtml(routePath) {
  const routeFilePath =
    routePath === "/"
      ? path.join(rootDir, "src", "routes", "index.tsx")
      : path.join(rootDir, "src", "routes", `${routePath.slice(1)}.tsx`);
  const routeSource = await readFile(routeFilePath, "utf8");
  const description = resolveMetaDescription(routeSource);

  if (!description) {
    throw new Error(`Could not find a meta description for ${routePath}`);
  }

  const metaDescription = `<meta name="description" content="${escapeHtml(description)}" />`;
  const heading = `<h1>${escapeHtml(getPageH1(routePath))}</h1>`;
  return indexHtml
    .replace(
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      (match) => `${match}\n    ${metaDescription}`,
    )
    .replace('<div id="root"></div>', `<div id="root">${heading}</div>`);
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
