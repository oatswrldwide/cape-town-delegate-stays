import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
} from "lucide-react";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "South African Product Sourcing | Kaapstays",
      description:
        "Kaapstays connects international buyers with verified South African producers of rooibos, apples, dried fruit, nuts and wine. Structured sourcing, clear export coordination.",
      path: "/",
      keywords: [
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
      <div className="border-b border-border bg-primary py-2 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-[11px] tracking-wide sm:px-8">
          <span className="font-medium uppercase tracking-[0.14em]">Cape Town · South Africa</span>
          <span className="hidden text-primary-foreground/75 sm:block">
            Supplier sourcing &amp; export coordination
          </span>
          <a href="mailto:ongezile@kaapstays.co.za" className="hover:text-accent">
            ongezile@kaapstays.co.za
          </a>
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
              href="#brief"
              className="inline-flex items-center gap-2 border border-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Make an enquiry <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
          <a
            href="#brief"
            className="border border-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-wide lg:hidden"
          >
            Enquire
          </a>
        </div>
      </header>

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
              A focused sourcing partner for importers, retailers and food businesses looking for
              capable producers, clear commercial information and an orderly path to export.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#brief"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-accent"
              >
                Send a sourcing brief <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center border border-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] hover:border-accent hover:text-accent"
              >
                View product categories
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
            "Rooibos, fresh fruit, dried fruit, nuts & wine",
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
              Categories we know from source to shipment.
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
            Tell us what you need to bring to market.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Share your product, destination, volume, timing and packaging requirements. We will come
            back with the right questions, possible supply paths and a clear next step.
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
