import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const routeTreePath = path.join(rootDir, "src", "routeTree.gen.ts");
const indexHtmlPath = path.join(distDir, "index.html");

const routeTreeSource = await readFile(routeTreePath, "utf8");
const indexHtml = await readFile(indexHtmlPath, "utf8");

const productNames = {
  "dried-fruit": "Dried fruit",
  "fresh-apples": "Fresh apples",
  "macadamia-nuts": "Macadamia nuts",
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

async function renderPageHtml(routePath) {
  const routeFilePath =
    routePath === "/"
      ? path.join(rootDir, "src", "routes", "index.tsx")
      : path.join(rootDir, "src", "routes", `${routePath.slice(1)}.tsx`);
  const routeSource = await readFile(routeFilePath, "utf8");
  const description = routeSource.match(/description:\s*"([^"]+)"/)?.[1];

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
