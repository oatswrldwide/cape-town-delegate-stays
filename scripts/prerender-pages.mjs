import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const routeTreePath = path.join(rootDir, "src", "routeTree.gen.ts");
const indexHtmlPath = path.join(distDir, "index.html");

const routeTreeSource = await readFile(routeTreePath, "utf8");
const indexHtml = await readFile(indexHtmlPath, "utf8");
const viteServer = await createServer({
  root: rootDir,
  configFile: path.join(rootDir, "vite.pages.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});
const expansionModule = await viteServer.ssrLoadModule(
  path.join(rootDir, "src", "lib", "expansion-pages.ts"),
);
const contentPageModule = await viteServer.ssrLoadModule(
  path.join(rootDir, "src", "components", "seo", "content-page.tsx"),
);
const sourcingModule = await viteServer.ssrLoadModule(
  path.join(rootDir, "src", "lib", "sourcing-pages.ts"),
);

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
if (!routesBlockMatch) throw new Error("Could not find route paths in src/routeTree.gen.ts");

const routePaths = [...routesBlockMatch[1].matchAll(/'([^']+)'/g)].map((match) => match[1]);
const expansionPaths = expansionModule.expansionPages.map((page) => page.path);
const pagePaths = [...new Set([...routePaths, ...expansionPaths])].filter((routePath) => {
  if (routePath.includes(".")) return false;
  if (routePath.includes("$")) return false;
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

function resolveMetaTitle(routeSource) {
  const inlineTitle = routeSource.match(/title:\s*"([^"]+)"/)?.[1];
  if (inlineTitle) return inlineTitle;

  const regionalMatch = routeSource.match(
    /const\s+seo\s*=\s*getRegionalPageMeta\("([^"]+)",\s*"([^"]+)"\);/,
  );
  if (!regionalMatch) return null;

  const [, productKey, regionKey] = regionalMatch;
  return sourcingModule.getSourcingPage(productKey, regionKey)?.title ?? null;
}

function resolveMetaDescription(routeSource) {
  const inlineDescription = routeSource.match(/description:\s*"([^"]+)"/)?.[1];
  if (inlineDescription) return inlineDescription;

  const regionalMatch = routeSource.match(
    /const\s+seo\s*=\s*getRegionalPageMeta\("([^"]+)",\s*"([^"]+)"\);/,
  );
  if (!regionalMatch) return null;

  const [, productKey, regionKey] = regionalMatch;
  return sourcingModule.getSourcingPage(productKey, regionKey)?.description ?? null;
}

function getPageH1(routePath) {
  if (routePath === "/") return "Good products. Right at the source.";
  if (routePath === "/about") return "A gateway to South Africa, built around good connections.";

  const parts = routePath.split("/").filter(Boolean);
  if (parts[0] === "products") return `${productNames[parts[1]]} from South African origin.`;
  if (parts[0] === "sourcing") return `${productNames[parts[1]]} for buyers in ${regionNames[parts[2]] ?? parts[2]}.`;
  return "South African product sourcing.";
}

async function renderPageHtml(routePath) {
  if (expansionPaths.includes(routePath)) {
    const [, , productKey, marketKey] = routePath.split("/");
    const page = expansionModule.getExpansionPage(productKey, marketKey);
    const pageTitle = `<title>${escapeHtml(page.title)}</title>`;
    const metaDescription = `<meta name="description" content="${escapeHtml(page.description)}" />`;
    const renderedContent = renderToStaticMarkup(
      React.createElement(contentPageModule.SeoContentPage, page),
    );
    return indexHtml
      .replace(/<title>[\s\S]*?<\/title>/, pageTitle)
      .replace(
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        (match) => `${match}\n    ${metaDescription}`,
      )
      .replace('<div id="root"></div>', `<div id="root">${renderedContent}</div>`);
  }

  const routeFilePath =
    routePath === "/"
      ? path.join(rootDir, "src", "routes", "index.tsx")
      : path.join(rootDir, "src", "routes", `${routePath.slice(1)}.tsx`);
  const routeSource = await readFile(routeFilePath, "utf8");
  const title = resolveMetaTitle(routeSource);
  const description = resolveMetaDescription(routeSource);

  if (!title || !description) throw new Error(`Could not find SEO metadata for ${routePath}`);

  const pageTitle = `<title>${escapeHtml(title)}</title>`;
  const metaDescription = `<meta name="description" content="${escapeHtml(description)}" />`;
  const heading = `<h1>${escapeHtml(getPageH1(routePath))}</h1>`;
  return indexHtml
    .replace(/<title>[\s\S]*?<\/title>/, pageTitle)
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
  await writeFile(path.join(distDir, `${normalizedPath}.html`), pageHtml);
}

console.log(`Prerendered ${pagePaths.length} static route pages with SEO metadata.`);
await viteServer.close();
