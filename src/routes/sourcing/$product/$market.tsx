import { notFound } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../../components/seo/content-page";
import { getExpansionPage } from "../../../lib/expansion-pages";
import { buildSeoHead } from "../../../lib/seo";

export const Route = createFileRoute("/sourcing/$product/$market")({
  head: ({ params }) => {
    const page = getExpansionPage(params.product, params.market);
    return page
      ? buildSeoHead({
          title: page.title,
          description: page.description,
          path: page.path,
          keywords: page.keywords,
        })
      : {};
  },
  loader: ({ params }) => {
    const page = getExpansionPage(params.product, params.market);
    if (!page) throw notFound();
    return page;
  },
  component: ExpansionPage,
});

function ExpansionPage() {
  const page = Route.useLoaderData();
  return <SeoContentPage {...page} />;
}
