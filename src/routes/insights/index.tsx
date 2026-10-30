import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import articles from "../../lib/generated-articles.json";
import { buildSeoHead } from "../../lib/seo";

type ArticleSummary = {
  slug: string;
  title: string;
  description: string;
  path: string;
  keyword: string;
  date?: string;
};

export const Route = createFileRoute("/insights/")({
  head: () =>
    buildSeoHead({
      title: "Insights & Buyer Guides | Kaapstays",
      description: "Practical sourcing guides, export checklists and market information for international buyers sourcing products from South Africa.",
      path: "/insights",
      keywords: ["South African product sourcing guides", "South African export requirements", "supplier sourcing advice"],
    }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const sortedArticles = (articles as ArticleSummary[])
    .slice()
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="font-display text-2xl font-semibold">Kaapstays</a>
          <nav className="flex items-center gap-5 text-sm">
            <a href="/" className="hover:text-accent">Home</a>
            <a href="/about" className="hover:text-accent">About</a>
          </nav>
        </div>
      </header>
      <section className="border-b border-border bg-secondary/25">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Kaapstays knowledge desk</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl">Insights for sourcing from South Africa.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">Buyer checklists, export guidance and practical information to help you evaluate suppliers and plan your next order.</p>
          <p className="mt-5 text-sm text-muted-foreground">{sortedArticles.length} {sortedArticles.length === 1 ? "article" : "articles"} published</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        {sortedArticles.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {sortedArticles.map((article) => (
              <article key={article.slug} className="flex flex-col border border-border p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{article.date ? new Date(article.date + "T12:00:00").toLocaleDateString("en-ZA",{day:"numeric",month:"long",year:"numeric"}) : "Kaapstays insight"}</p>
                <h2 className="mt-4 font-display text-2xl leading-snug">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
                <a href={article.path} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">Read article <ArrowUpRight className="h-4 w-4" /></a>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">New articles will appear here when published.</p>
        )}
      </section>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground sm:px-8">
          <a href="/" className="hover:text-foreground">← Back to Kaapstays</a>
        </div>
      </footer>
    </main>
  );
}
