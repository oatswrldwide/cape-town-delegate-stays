import { notFound } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { SeoContentPage } from "../../components/seo/content-page";
import { buildSeoHead } from "../../lib/seo";
import articles from "../../lib/generated-articles.json";

interface Article {
  slug: string;
  title: string;
  description: string;
  path: string;
  keyword: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  sources: { name: string; url: string }[];
  links: { href: string; label: string }[];
}

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const article = (articles as Article[]).find((item) => item.slug === params.slug);
    return article ? buildSeoHead({
      title: article.title,
      description: article.description,
      path: article.path,
      keywords: [article.keyword],
    }) : {};
  },
  loader: ({ params }) => {
    const article = (articles as Article[]).find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: InsightArticle,
});

function InsightArticle() {
  const article = Route.useLoaderData();
  return <SeoContentPage
    eyebrow={article.eyebrow}
    title={article.title}
    intro={article.intro}
    sections={article.sections}
    faqs={article.faqs}
    sources={article.sources.map((source) => source.name + ": " + source.url)}
    links={article.links}
    breadcrumbs={[
      { href: "/", label: "Home" },
      { href: article.path, label: article.title },
    ]}
  />;
}
