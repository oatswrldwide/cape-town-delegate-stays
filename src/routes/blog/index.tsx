import { createFileRoute } from "@tanstack/react-router";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeoHead({
      title: "Cape Town Business Travel Blog | Kaap Delegate Stays",
      description:
        "Practical Cape Town business travel articles covering CTICC planning, neighborhoods, accommodation and conference logistics for delegates.",
      path: "/blog",
      keywords: ["cape town business travel blog", "cticc cape town"],
    }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Business travel blog</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            Cape Town accommodation guidance for conference weeks
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Practical reading for delegates, teams and planners who need to make quick, confident
            accommodation decisions around CTICC, the CBD and nearby event venues.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-border/70 bg-card/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured article</p>
            <h2 className="mt-4 text-2xl md:text-3xl">CTICC Cape Town guide for conference delegates</h2>
            <p className="mt-4 text-muted-foreground">
              Learn which neighborhoods make CTICC event weeks easier, what to book first, and how
              to choose accommodation that keeps your schedule flexible.
            </p>
            <a
              href="/blog/cticc-cape-town-business-travel"
              className="mt-6 inline-flex rounded-sm bg-primary px-4 py-2 text-sm text-primary-foreground"
            >
              Read the article
            </a>
          </article>

          <article className="rounded-sm border border-border/70 bg-card/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">More guides</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/blog/best-areas-business-travel" className="hover:underline">
                  Best areas to stay in Cape Town for business
                </a>
              </li>
              <li>
                <a href="/blog/coworking-near-cticc" className="hover:underline">
                  Coworking spaces near CTICC
                </a>
              </li>
              <li>
                <a href="/blog/apartments-vs-hotels" className="hover:underline">
                  Apartments vs hotels for delegates
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}