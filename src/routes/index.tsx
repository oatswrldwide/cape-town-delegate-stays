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

const internalLinkGroups = [
  {
    heading: "Core pages",
    links: [
      { href: "/about", label: "About Kaapstays" },
      { href: "/services/supplier-sourcing", label: "South African supplier sourcing" },
      { href: "/services/export-coordination", label: "South Africa export coordination" },
      { href: "/products/rooibos-and-tea", label: "Rooibos & tea sourcing" },
      { href: "/products/fresh-apples", label: "Fresh apple export sourcing" },
      { href: "/products/dried-fruit", label: "Dried fruit sourcing" },
    ],
  },
  {
    heading: "Rooibos tea by market",
    links: [
      { href: "/sourcing/rooibos-tea/germany", label: "Rooibos tea for Germany" },
      { href: "/sourcing/rooibos-tea/united-states", label: "Rooibos tea for US buyers" },
      { href: "/sourcing/rooibos-tea/asia", label: "Rooibos tea for Asia" },
      { href: "/sourcing/rooibos-tea/uae", label: "Rooibos tea for UAE buyers" },
    ],
  },
  {
    heading: "Fresh apples by market",
    links: [
      { href: "/sourcing/fresh-apples/germany", label: "Fresh apples for Germany" },
      { href: "/sourcing/fresh-apples/united-states", label: "Fresh apples for US buyers" },
      { href: "/sourcing/fresh-apples/asia", label: "Fresh apples for Asia" },
      { href: "/sourcing/fresh-apples/uae", label: "Fresh apples for UAE buyers" },
    ],
  },
  {
    heading: "Dried fruit by market",
    links: [
      { href: "/sourcing/dried-fruit/germany", label: "Dried fruit for Germany" },
      { href: "/sourcing/dried-fruit/united-states", label: "Dried fruit for US buyers" },
      { href: "/sourcing/dried-fruit/asia", label: "Dried fruit for Asia" },
      { href: "/sourcing/dried-fruit/uae", label: "Dried fruit for UAE buyers" },
    ],
  },
  {
    heading: "Macadamia nuts by market",
    links: [
      { href: "/sourcing/macadamia-nuts/germany", label: "Macadamia nuts for Germany" },
      { href: "/sourcing/macadamia-nuts/united-states", label: "Macadamia nuts for US buyers" },
      { href: "/sourcing/macadamia-nuts/asia", label: "Macadamia nuts for Asia" },
      { href: "/sourcing/macadamia-nuts/uae", label: "Macadamia nuts for UAE buyers" },
    ],
  },
  {
    heading: "South African wine by market",
    links: [
      { href: "/sourcing/wine/germany", label: "South African wine for Germany" },
      { href: "/sourcing/wine/united-states", label: "South African wine for US buyers" },
      { href: "/sourcing/wine/asia", label: "South African wine for Asia" },
      { href: "/sourcing/wine/uae", label: "South African wine for UAE buyers" },
    ],
  },
];

const buyerResearchSections = [
  {
    heading: "Why international buyers struggle with supplier selection",
    body: "One of the most expensive sourcing mistakes is believing that a list of suppliers is the same as a reliable buying strategy. In practice, global buyers often receive many introductions but too little decision-grade detail to choose with confidence. A brochure can describe quality, but it does not confirm whether quality remains consistent at the pack format, shipment frequency and timeline your market requires. A quotation can look competitive, but it does not show whether its assumptions match your procurement calendar, retailer expectations or manufacturing continuity targets. This gap between marketing claims and operational evidence creates avoidable pain: teams spend weeks in conversations that cannot advance, commercial deadlines compress, and internal confidence declines because stakeholders are evaluating incomplete information. Buyers operating across multiple categories feel this pain even more strongly because every unclear sourcing path consumes time that should be invested in pricing strategy, assortment planning and contingency readiness. The core issue is not effort. Most procurement teams work hard. The issue is information structure. Without a disciplined brief and a consistent comparison framework, buyers are forced to make high-impact decisions using fragmented inputs. That is where risk begins.",
  },
  {
    heading: "The hidden cost of unclear briefs in cross-border trade",
    body: "When a sourcing brief is vague, the resulting cost is usually hidden until late in the process. A buyer may ask for product availability but omit a critical packaging requirement. The supplier may respond quickly and appear suitable, yet later clarify that packaging conversions require additional lead time and cost. A buyer may request a target volume without clarifying phased demand, causing the supplier to quote for an unrealistic production rhythm. These misalignments can be corrected, but each correction adds friction: revised quotations, delayed approvals, internal rework and uncertainty around launch commitments. In categories tied to seasonal windows or retail resets, small delays can become large commercial losses. The same applies to ingredient supply for manufacturing, where continuity disruptions can affect production plans and customer service levels. Research-informed sourcing methods consistently show that early brief precision reduces downstream negotiation churn and improves delivery reliability. Clear briefs also reduce relationship strain. Suppliers can answer more accurately, and buyers can evaluate more fairly. Instead of repeated back-and-forth on basic facts, both sides spend time on commercially meaningful decisions such as quality tolerances, risk-sharing logic and growth potential. In short, clarity at the start is not an administrative preference; it is a financial control.",
  },
  {
    heading: "A practical framework for better sourcing decisions",
    body: "A practical sourcing framework should be simple enough for teams to execute repeatedly, yet detailed enough to surface execution risk before commitment. The first step is defining non-negotiables: destination market, specification boundaries, timing expectations, compliance constraints and acceptable packaging outcomes. The second step is issuing a structured request so every potential supply path is evaluated against the same baseline. The third step is assumption testing: identify where each response relies on uncertain inputs and request validation early. The fourth step is operational fit review: verify that the commercial proposal can move through quality checks, logistics coordination and internal approval gates without hidden blockers. The fifth step is decision logging: capture why one option is preferred and what conditions must remain true for successful execution. Teams that follow this structure usually make faster decisions with less rework because ambiguity is handled in sequence rather than discovered all at once. The framework also improves executive visibility. Leaders can review decision logic, not just final pricing, and determine whether risk exposure is acceptable. Over time, this repeatable method becomes a strategic asset that supports scaling into new products and markets without resetting process quality for each new opportunity.",
  },
  {
    heading: "Where Kaapstays fits into the buyer workflow",
    body: "Kaapstays is designed to support this structured procurement approach by helping buyers transform early product interest into actionable sourcing intelligence linked to South African origin opportunities. The objective is not to overwhelm teams with generic market noise, but to improve the quality of first-stage decisions. Buyers share their intended market, product direction, volume expectations, timing and practical constraints. That information is then translated into a clearer sourcing conversation so supplier responses are easier to compare on meaningful criteria. This matters because many failed sourcing projects are not failures of product potential; they are failures of alignment between what buyers need and what suppliers understood. Kaapstays helps close that alignment gap early, before teams commit resources to operationally weak options. For procurement teams, this means fewer false starts and stronger confidence in shortlist decisions. For commercial leaders, it means better control over timeline and risk assumptions as opportunities move from exploration toward execution. For operations teams, it means handovers with clearer context and fewer surprises. In short, the role is to support disciplined buyer decision-making from the first enquiry to the point where supplier engagement can progress with realistic expectations and practical next steps.",
  },
  {
    heading: "Evidence buyers should request before moving forward",
    body: "Strong sourcing decisions rely on evidence, not optimism. Before advancing a supplier conversation, buyers should request proof aligned to the specific risk profile of the opportunity. This can include specification confirmation, pack-format readiness, documented lead-time logic, and clarity on how changes will be handled if market conditions shift. Buyers should also test response quality: does the supplier answer the exact brief, or default to generic claims? Do commercial terms reflect operational reality, or depend on assumptions that were never discussed? Is there a credible route from first order to repeat supply under predictable service levels? These questions are especially important in cross-border sourcing because every unresolved assumption can expand once logistics and compliance variables are introduced. A lower initial price can lose value quickly if delivery uncertainty increases or quality variation drives claims and returns. Research-oriented procurement teams therefore treat evidence gathering as a core purchasing discipline, not a delay. Evidence reduces emotional decision pressure and protects internal alignment because stakeholders can see what is confirmed versus what remains uncertain. Better evidence also strengthens negotiation quality. Buyers who understand operational constraints can negotiate terms that are both competitive and executable, improving long-term supplier performance.",
  },
  {
    heading: "Common failure patterns and how to prevent them",
    body: "Across sourcing projects, several failure patterns appear repeatedly. The first is speed without structure: teams accelerate outreach but postpone requirement clarity, creating confusion later. The second is price-led filtering without fit validation: low quotes are prioritized before confirming whether product and service assumptions are compatible with destination needs. The third is fragmented ownership: procurement, quality and logistics work in parallel but without a shared decision framework, causing handover friction. The fourth is weak contingency planning: teams progress with a preferred option but do not define fallback paths if assumptions fail. Prevention does not require complexity; it requires discipline. Start with a standardized brief. Define decision criteria before outreach. Require like-for-like response formatting. Escalate unresolved assumptions early. Run cross-functional reviews before commercial commitment. Document fallback triggers. These steps reduce avoidable volatility and improve execution resilience. They also create a more professional supplier engagement environment, where expectations are clear and performance can be measured fairly. Buyers who implement these controls generally experience fewer emergency corrections and stronger timeline reliability, even when market conditions are volatile. The central lesson is straightforward: process quality in early-stage sourcing determines commercial stability later.",
  },
  {
    heading: "How AI can improve sourcing outcomes when guided properly",
    body: "AI tools can help procurement teams move faster, but only when prompts and source material are structured around real buying decisions. If teams ask AI for broad supplier ideas, output quality may be generic and difficult to operationalize. If teams instead provide a clear brief with destination, volume, timing, packaging and use-case details, AI can produce higher-value outputs such as structured comparison templates, assumption-check lists and clearer draft enquiries. This is why Kaapstays includes AI-ready guidance: the goal is to reduce noise and improve the quality of information entering supplier conversations. AI should not replace buyer judgment, category experience or cross-functional validation. It should support them by accelerating synthesis and surfacing missing questions early. Procurement teams get the best results when they treat AI as a preparation and quality-control assistant rather than a final decision engine. That approach preserves accountability while increasing speed. It also helps standardize sourcing workflows across teams by embedding consistent question sets and documentation logic. In competitive markets, this combination of disciplined human judgment and structured AI assistance can materially improve decision cycle time, reduce rework and strengthen confidence before commitments are made.",
  },
  {
    heading: "From first brief to long-term supply resilience",
    body: "The ultimate objective in sourcing is not a single successful order; it is a resilient supply relationship that can adapt without repeated disruption. Resilience starts with the first brief. When buyers define requirements clearly, validate assumptions early and select partners based on proven fit, they build a stronger base for repeat performance. As orders scale, the same discipline supports better forecasting conversations, smoother issue resolution and more transparent performance management. Teams can evolve terms, packaging strategies and shipment rhythms from a foundation of shared evidence rather than reactive corrections. For organizations sourcing South African products for diverse markets, this matters because demand profiles, regulatory contexts and route constraints can vary significantly across regions. A resilient process lets teams adjust intelligently without losing control. Kaapstays supports this outcome by helping buyers apply structure at the moments where uncertainty usually creates costly errors. The benefit is cumulative: fewer late surprises, clearer internal coordination, stronger supplier dialogue and better strategic optionality when market conditions shift. Buyers who build this capability do more than complete transactions. They create a sourcing system that protects margin, supports growth and improves confidence across every stakeholder involved in delivering product to market.",
  },
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

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Buyer research and decision guidance
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            A research-informed approach to sourcing from South Africa.
          </h2>
          <div className="mt-10 space-y-10">
            {buyerResearchSections.map((section) => (
              <article key={section.heading}>
                <h3 className="text-2xl md:text-3xl">{section.heading}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Explore all pages
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            Sourcing and service pages by category.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {internalLinkGroups.map((group) => (
              <section key={group.heading}>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="underline-offset-4 hover:text-accent hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
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
