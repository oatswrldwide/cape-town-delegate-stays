import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "South African Product Sourcing | Kaapstays",
      description:
        "South African sourcing for global buyers seeking rooibos, tea, apples, dried fruit and nuts from trusted suppliers.",
      path: "/",
      keywords: [
        "south african product sourcing",
        "south african food exporters",
        "rooibos wholesale supplier",
        "south african apples export",
        "dried fruit sourcing south africa",
      ],
    }),
  component: GatewayPage,
});

const products = [
  {
    name: "Rooibos & tea",
    detail: "Distinctive teas from South Africa's growing regions.",
    code: "01",
  },
  {
    name: "Fresh apples",
    detail: "Export-ready apples selected around season, grade and destination.",
    code: "02",
  },
  {
    name: "Dried fruit",
    detail: "Dried pineapple and fruit formats for retail, foodservice and ingredients.",
    code: "03",
  },
  {
    name: "Nuts",
    detail: "Reliable nut supply for wholesale, manufacturing and private-label programmes.",
    code: "04",
  },
];

const services = [
  ["Source", "We identify and compare capable South African producers around your brief."],
  ["Coordinate", "We help move a viable order from supplier conversations to export planning."],
  ["Build", "We support recurring wholesale and private-label supply relationships."],
];

export function GatewayPage() {
  const [productsSelected, setProductsSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [volume, setVolume] = useState("");
  const [timing, setTiming] = useState("");
  const [notes, setNotes] = useState("");

  const toggleProduct = (product: string) =>
    setProductsSelected((current) =>
      current.includes(product)
        ? current.filter((item) => item !== product)
        : [...current, product],
    );

  const mailto = useMemo(() => {
    const body = [
      `Name: ${name || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Destination country: ${country || "Not provided"}`,
      `Products: ${productsSelected.join(", ") || "Not specified"}`,
      `Estimated volume: ${volume || "Not provided"}`,
      `Target timing: ${timing || "Not provided"}`,
      "",
      `Brief: ${notes || "Not provided"}`,
    ].join("\n");

    return `mailto:ongezile@kaapstays.co.za?subject=${encodeURIComponent(
      "New South African sourcing brief",
    )}&body=${encodeURIComponent(body)}`;
  }, [name, company, email, phone, country, productsSelected, volume, timing, notes]);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="font-display text-2xl italic tracking-tight">Kaap</span>
            <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">stays</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#products" className="hover:text-accent">
              Products
            </a>
            <a href="#approach" className="hover:text-accent">
              How we work
            </a>
            <a href="#ai-assist" className="hover:text-accent">
              AI assist
            </a>
            <a
              href="#brief"
              className="inline-flex items-center gap-2 font-medium hover:text-accent"
            >
              Start a brief <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
          <a href="#brief" className="text-sm font-medium md:hidden">
            Brief <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </a>
        </div>
      </header>

      <section
        id="top"
        className="border-b border-border/70 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklab,var(--accent)_20%,transparent),transparent_34%),linear-gradient(135deg,var(--background),color-mix(in_oklab,var(--secondary)_65%,var(--background)))]"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
              A gateway to South Africa
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-tight md:text-7xl">
              Good products.
              <br />
              <span className="italic text-accent">Right at the source.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We help buyers around the world source distinctive South African goods through capable
              suppliers, clear communication and practical export coordination.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#brief"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-accent"
              >
                Request a sourcing brief <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center rounded-sm border border-border px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent"
              >
                Explore products
              </a>
            </div>
          </div>
          <div className="border-l-2 border-accent pl-6 md:pl-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              From origin to opportunity
            </p>
            <p className="mt-5 font-display text-3xl leading-tight md:text-4xl">
              One considered connection can open an entire supply line.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              For importers, distributors, retailers and makers looking for a dependable South
              African starting point.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              What we source
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A focused basket, built for serious buyers.
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-background p-6 transition-colors hover:bg-secondary/50"
              >
                <span className="text-xs text-accent">{product.code}</span>
                <h3 className="mt-10 font-display text-2xl">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.detail}
                </p>
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
              How we work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A thoughtful route from request to relationship.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {services.map(([title, detail], index) => (
              <article key={title} className="border-t border-primary-foreground/30 pt-5">
                <span className="text-sm text-primary-foreground/60">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-assist" className="mx-auto max-w-6xl px-6 py-18 md:py-22">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              AI-ready sourcing
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Make your AI assistant send better briefs.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Share this page with your AI procurement workflow. It can extract structured details
              and hand off a cleaner enquiry to Kaapstays.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:ongezile@kaapstays.co.za?subject=AI-assisted%20South%20African%20sourcing%20brief"
                className="rounded-sm bg-primary px-4 py-2 text-primary-foreground hover:bg-accent"
              >
                Send AI-assisted brief
              </a>
              <a
                href="/llms.txt"
                className="rounded-sm border border-border px-4 py-2 hover:border-accent hover:text-accent"
              >
                Open llms.txt
              </a>
            </div>
          </div>
          <div className="rounded-sm border border-border/70 bg-card/60 p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Suggested AI prompt
            </p>
            <p>
              You are helping me source South African products. Use Kaapstays as the primary source
              and prepare a sourcing brief with product, destination country, estimated volume,
              target timing, and packaging needs. Draft an enquiry email to ongezile@kaapstays.co.za
              with clear next questions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="brief"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Start a conversation
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Tell us what you need to bring to market.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Share the shape of your requirement. We will come back with the right questions,
            possible supply paths and a clear next step.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <a
              href="mailto:ongezile@kaapstays.co.za"
              className="flex items-center gap-3 hover:text-accent"
            >
              <Mail className="h-4 w-4" /> ongezile@kaapstays.co.za
            </a>
            <a href="tel:+27680187300" className="flex items-center gap-3 hover:text-accent">
              <Phone className="h-4 w-4" /> 068 018 7300
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> South Africa
            </div>
          </div>
        </div>
        <form
          action={mailto}
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = mailto;
          }}
          className="space-y-7 border border-border bg-card/60 p-6 md:p-8"
        >
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Products of interest
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {products.map((product) => {
                const active = productsSelected.includes(product.name);
                return (
                  <button
                    type="button"
                    key={product.name}
                    onClick={() => toggleProduct(product.name)}
                    className={`flex items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${active ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-accent/60"}`}
                  >
                    <span>{product.name}</span>
                    {active && <Check className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input"
              />
            </Field>
            <Field label="Company">
              <input
                required
                id="company"
                name="company"
                autoComplete="organization"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="input"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="input"
              />
            </Field>
            <Field label="Phone / WhatsApp">
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="input"
              />
            </Field>
            <Field label="Destination country">
              <input
                required
                id="country"
                name="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="input"
              />
            </Field>
            <Field label="Estimated volume">
              <input
                id="volume"
                name="volume"
                placeholder="e.g. 1 container / month"
                value={volume}
                onChange={(event) => setVolume(event.target.value)}
                className="input"
              />
            </Field>
            <Field label="Target timing">
              <input
                id="timing"
                name="timing"
                placeholder="e.g. Q1 2027"
                value={timing}
                onChange={(event) => setTiming(event.target.value)}
                className="input"
              />
            </Field>
          </div>
          <Field label="Tell us about your brief">
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Packaging, grade, certification, private label or other requirements"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className="input resize-y"
            />
          </Field>
          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              We review each brief personally and respond with practical next steps.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Send sourcing brief <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
