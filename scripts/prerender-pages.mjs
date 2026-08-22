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
