import { createFileRoute } from "@tanstack/react-router";

import {
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
} from "lucide-react";
import { buildSeoHead } from "../lib/seo";
import { MEETING_URL } from "../lib/site";
import {
  AuthorByline,
  TESTIMONIAL_SNIPPETS,
  TrustBadgesBar,
  TrustSignalHeader,
} from "../components/seo/trust-proof";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "South African Product Sourcing | Kaapstays",
      description:
        "Kaapstays helps international buyers source products from South Africa, from food and ingredients to other product categories subject to supplier availability. Supplier research, comparisons and export coordination.",
      path: "/",
      keywords: [
        "product sourcing south africa",
        "south african sourcing company",
        "supplier sourcing south africa",
        "south african product sourcing",
        "rooibos export south africa",
        "fresh apples export south africa",
        "dried fruit sourcing",
        "macadamia and pecan export",
        "south african wine sourcing",
      ],
    }),
  component: GatewayPage,
});

const products = [
  {
    name: "Rooibos & Tea",
    detail:
      "Distinctive teas from South Africa's Cederberg growing region, available for bulk, retail, foodservice and private-label programmes.",
    href: "/products/rooibos-and-tea",
    cta: "Explore Rooibos Sourcing",
    code: "01",
  },
  {
    name: "Fresh Apples",
    detail:
      "Export-ready apples from the Western Cape with variety-specific sourcing around season, grade and destination requirements.",
    href: "/products/fresh-apples",
    cta: "Explore Apple Sourcing",
    code: "02",
  },
  {
    name: "Dried Fruit",
    detail:
      "Dried pineapple, peaches, pears and mixed formats for retail, foodservice and ingredient applications.",
    href: "/products/dried-fruit",
    cta: "Explore Dried Fruit Sourcing",
    code: "03",
  },
  {
    name: "Nuts",
    detail:
      "Macadamia and pecan supply for wholesale, manufacturing and private-label programmes in raw, roasted and value-added formats.",
    href: "/products/nuts",
    cta: "Explore Nut Sourcing",
    code: "04",
  },
  {
    name: "Wine",
    detail:
      "Wines from Stellenbosch, Paarl and the broader Western Cape for import, distribution, hospitality and private-label programmes.",
    href: "/products/wine",
    cta: "Explore Wine Sourcing",
    code: "05",
  },
];

const services = [
  [
    "Source",
    "We identify and compare capable South African producers around your brief. You receive a shortlist with verified capability, not a scattered list of names.",
  ],
  [
    "Coordinate",
    "We help move a viable order from supplier conversations to export planning, covering packaging, documentation, timing and compliance.",
  ],
  [
    "Build",
    "We support recurring wholesale and private-label supply relationships so your second order is smoother than your first.",
  ],
];

export function GatewayPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="border-b border-border bg-primary py-2 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-[11px] tracking-wide sm:px-8">
          <span className="font-medium uppercase tracking-[0.14em]">Cape Town · South Africa</span>
          <span className="hidden text-primary-foreground/75 sm:block">
            Supplier sourcing &amp; export coordination
          </span>
          <span className="text-primary-foreground/90">ongezile.mqokeli@gmail.com</span>
        </div>
      </div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Kaapstays home">
            <span className="grid h-9 w-9 place-items-center border border-primary font-display text-xl font-semibold">
              K
            </span>
            <span>
              <span className="block font-display text-xl font-semibold leading-none tracking-tight">
                Kaapstays
              </span>
              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Trading &amp; Sourcing
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex">
            <a href="#products" className="hover:text-accent transition-colors">
              Products
            </a>
            <a href="#approach" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="/about" className="hover:text-accent transition-colors">
              About us
            </a>
            <a
              href={MEETING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Book an Export Meeting <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
          <a
            href={MEETING_URL} target="_blank" rel="noopener noreferrer"
            className="border border-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-wide lg:hidden"
          >
            Enquire
          </a>
        </div>
      </header>
      <TrustSignalHeader compact />

      <section id="top" className="border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-5 py-16 sm:px-8 md:py-24 lg:py-28">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" /> South African sourcing desk
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              Sourcing South African goods, <span className="italic">without the guesswork.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              A sourcing partner for international buyers looking for products made or supplied in South Africa. We clarify your brief, research potential suppliers, compare options and help coordinate the next steps towards export.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={MEETING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-accent"
              >
                Book an Export Meeting <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <aside className="border-t border-border bg-primary px-5 py-12 text-primary-foreground sm:px-8 lg:border-l lg:border-t-0 lg:py-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              What a brief gives you
            </p>
            <div className="mt-9 space-y-7">
              {[
                [
                  PackageCheck,
                  "Relevant supplier options",
                  "Matched to product, format and likely order profile.",
                ],
                [
                  FileCheck2,
                  "Export-ready context",
                  "Practical questions on grades, packaging and documentation.",
                ],
                [
                  Globe2,
                  "A clear next step",
                  "A concise route forward for your destination market.",
                ],
              ].map(([Icon, title, detail]) => {
                const ItemIcon = Icon as typeof PackageCheck;
                return (
                  <div
                    key={title as string}
                    className="flex gap-4 border-b border-primary-foreground/20 pb-6 last:border-0"
                  >
                    <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h2 className="text-sm font-semibold">{title as string}</h2>
                      <p className="mt-1 text-sm leading-6 text-primary-foreground/70">
                        {detail as string}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            "Food, ingredients and other product categories",
            "Built for wholesale, retail & private label",
            "Based in Cape Town, working across South Africa",
          ].map((item, index) => (
            <p
              key={item}
              className="py-5 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground md:px-6"
            >
              0{index + 1} <span className="ml-2 text-foreground">{item}</span>
            </p>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Product categories
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Start with familiar categories—or bring us a different product brief.
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-background p-6 transition-colors hover:bg-secondary/50"
              >
                <span className="text-xs text-accent">{product.code}</span>
                <h3 className="mt-6 font-display text-2xl">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.detail}
                </p>
                <a
                  href={product.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
                >
                  {product.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="border-y border-border/70 bg-primary text-primary-foreground"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/65">
              How We Work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Source. Coordinate. Build.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {services.map(([title, detail], index) => (
              <article key={title} className="border-t border-primary-foreground/30 pt-5">
                <span className="text-sm text-primary-foreground/60">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{detail}</p>
              </article>
            ))}
          </div>
          <a
            href="/services/product-sourcing"
            className="mt-10 inline-flex items-center gap-2 border border-primary-foreground/40 px-4 py-3 text-sm font-medium hover:bg-primary-foreground/10"
          >
            Explore our product sourcing service <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="border-b border-border/70 bg-secondary/25">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <blockquote className="border-l-2 border-accent pl-4 text-sm italic text-muted-foreground">
            “{TESTIMONIAL_SNIPPETS[0]}”
          </blockquote>
        </div>
      </section>

      <section
        id="brief"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Start a Conversation
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Tell us what you want to source from South Africa.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Share the product, destination market, volume, specifications and timeline you have in mind. We will assess the brief, identify practical next steps and clarify whether suitable supplier options can be found.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" /> <span>ongezile.mqokeli@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" /> <span>068 018 7300</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> South Africa
            </div>
          </div>
          <AuthorByline compact />
          <TrustBadgesBar />
        </div>
        <div className="flex flex-col justify-center border border-border bg-card/60 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Book a conversation</p>
          <h3 className="mt-4 font-display text-3xl md:text-4xl">Let&apos;s discuss your sourcing requirements.</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Choose a meeting time to discuss your product brief, supplier requirements, destination market, order volumes and possible sourcing approach.</p>
          <a href={MEETING_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-accent">Book an Export Meeting <ArrowUpRight className="h-4 w-4" /></a>
          <p className="mt-5 text-sm text-muted-foreground">Direct email: ongezile.mqokeli@gmail.com</p>
        </div>
      </section>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-xl italic text-foreground">Kaap</span>
            <span className="text-xs uppercase tracking-[0.24em]">stays</span>
          </div>
          <span>South African goods, connected globally. © {new Date().getFullYear()}</span>
        </div>
      </footer>
      <style>{`.input { width: 100%; background: var(--card); border: 1px solid var(--border); border-radius: 3px; padding: 0.75rem 0.9rem; font-size: 0.95rem; color: var(--foreground); } .input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 18%, transparent); } .input::placeholder { color: color-mix(in oklab, var(--muted-foreground) 80%, transparent); }`}</style>
    </main>
  );
}

