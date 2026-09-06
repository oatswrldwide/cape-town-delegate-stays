import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "../../lib/site";
import { buildSeoHead } from "../../lib/seo";

const destinations = [
  ["1", "China", "$79.7M", "24,733 tons", "80.2%", "$3,224"],
  ["2", "Vietnam", "$15.2M", "4,684 tons", "15.3%", "$3,236"],
  ["3", "Lithuania", "$1.8M", "604 tons", "1.8%", "$2,919"],
  ["4", "Japan", "$514K", "52 tons", "0.5%", "$9,885"],
  ["5", "Hong Kong", "$492K", "125 tons", "0.5%", "$3,936"],
  ["6", "Germany", "$392K", "85 tons", "0.4%", "$4,612"],
  ["7", "Kenya", "$388K", "503 tons", "0.4%", "$771"],
  ["8", "Netherlands", "$383K", "25 tons", "0.4%", "$15,320"],
  ["9", "United States", "$202K", "17 tons", "0.2%", "$11,882"],
  ["10", "Singapore", "$183K", "32 tons", "0.2%", "$5,719"],
] as const;

const premiumMarkets = [
  ["Netherlands", "$15,320/ton", "4.8×"],
  ["United States", "$11,882/ton", "3.7×"],
  ["Malaysia", "$11,417/ton", "3.5×"],
  ["Japan", "$9,885/ton", "3.1×"],
  ["Singapore", "$5,719/ton", "1.8×"],
  ["Germany", "$4,612/ton", "1.4×"],
] as const;

export const Route = createFileRoute("/guides/south-africa-macadamia-export-map")({
  head: () =>
    buildSeoHead({
      title: "South Africa's Macadamia Export Map | Kaapstays",
      description:
        "South Africa's 2025 in-shell macadamia export data reveals a concentrated China and Vietnam market—and premium opportunities in the USA, Japan and Europe.",
      path: "/guides/south-africa-macadamia-export-map",
      keywords: [
        "South Africa macadamia exports",
        "macadamia export markets",
        "macadamia wholesale pricing",
        "South African macadamia suppliers",
      ],
    }),
  component: MacadamiaExportMap,
});

function MacadamiaExportMap() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-secondary/25">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Market intelligence · 2025 trade data
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl leading-tight md:text-6xl">
            South Africa&apos;s Macadamia Export Map: Why 95% of Volume Goes to Two Markets—and
            Where the Real Money Is
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            South Africa exported $99.4 million of in-shell macadamia nuts in 2025. The headline is
            impressive; the destination mix reveals a more urgent story about concentration,
            value-add and premium-market access.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            <a href="#brief" className="rounded-sm bg-primary px-4 py-2 text-primary-foreground">
              Start a sourcing brief
            </a>
            <a
              href="#export-data"
              className="rounded-sm border border-border px-4 py-2 hover:border-accent"
            >
              View the data
            </a>
          </div>
        </div>
      </header>

      <section id="export-data" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          The concentration problem
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          Two countries account for 95.5% of export value.
        </h2>
        <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
          China and Vietnam pay approximately $3,200 per ton and account for nearly all South
          African in-shell macadamia exports. That makes the sector highly efficient at serving
          commodity demand—but acutely exposed to a narrow buyer base.
        </p>
        <div className="mt-8 overflow-x-auto border border-border">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                {["Rank", "Destination", "Value", "Volume", "Share", "Unit value"].map(
                  (heading) => (
                    <th key={heading} className="px-4 py-3 font-medium">
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70">
              {destinations.map(([rank, destination, value, volume, share, unitValue]) => (
                <tr key={destination} className="hover:bg-secondary/30">
                  <td className="px-4 py-3 text-muted-foreground">{rank}</td>
                  <td className="px-4 py-3 font-medium">{destination}</td>
                  <td className="px-4 py-3">{value}</td>
                  <td className="px-4 py-3">{volume}</td>
                  <td className="px-4 py-3">{share}</td>
                  <td className="px-4 py-3">{unitValue}/ton</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Insight
            title="Price pressure"
            text="When one buyer controls four-fifths of the market, it has leverage during harvest season, especially when processors are cash-flow sensitive."
          />
          <Insight
            title="Policy exposure"
            text="A change in Chinese import policy, currency controls or domestic production can directly affect 80% of South African export revenue."
          />
          <Insight
            title="Value leaving origin"
            text="Commodity in-shell shipments can transfer cracking, grading, roasting, packaging and retail margin to the destination market."
          />
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The premium gap
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            The same nut can earn almost five times more.
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
            At modest volumes, premium markets demonstrate the value available when South African
            macadamia reaches the right buyer in the right grade, format and certification pathway.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {premiumMarkets.map(([market, price, multiple]) => (
              <div key={market} className="bg-background p-5">
                <p className="font-medium">{market}</p>
                <p className="mt-3 text-2xl">{price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {multiple} the China unit value
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="text-2xl">China buys commodity in-shell.</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Most Chinese imports are raw in-shell nuts shipped in bulk. Cracking, grading,
                roasting, packaging and retail distribution can then happen at destination.
              </p>
            </article>
            <article>
              <h3 className="text-2xl">Premium markets buy finished product.</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The Netherlands, United States and Japan can import graded kernel, including
                vacuum-packed, roasted, organic-certified and traceable formats. The premium price
                reflects a different product category—not simply a different destination.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Potential versus current trade
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl">High-potential markets remain under-served.</h2>
        <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
          The ITC&apos;s export-potential ranking identifies China, the United States, Germany, the
          Netherlands, Japan and Vietnam among the strongest markets for South African macadamia.
          Outside China and Vietnam, current shipments remain strikingly small.
        </p>
        <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "China",
            "United States",
            "Germany",
            "Netherlands",
            "Japan",
            "Vietnam",
            "Spain",
            "Australia",
            "Chinese Taipei",
            "Belgium",
          ].map((market, index) => (
            <li key={market} className="border border-border p-4">
              <span className="text-sm text-muted-foreground">#{index + 1}</span>
              <p className="mt-1 font-medium">{market}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border/70 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Market by market
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Where the real opportunity lies.</h2>
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <Market
              title="United States — The sleeping giant"
              stats="$202K · 17 tons · $11,882/ton · ITC potential #2"
              text="The opportunity is substantial, but access depends on buyer-ready infrastructure: FDA-registered processing, FSMA documentation and often Kosher or organic certification. Health-food, keto and paleo channels can reward a disciplined premium-kernel programme."
            />
            <Market
              title="Japan — Quality over quantity"
              stats="$514K · 52 tons · $9,885/ton · ITC potential #5"
              text="Japan rewards meticulous specifications. Supreme-grade whole kernel, Style 0 and Style 1 requirements and complete documentation create smaller-volume but exceptional-margin opportunities. South Africa's season complements Australia for supply continuity."
            />
            <Market
              title="Germany — Europe’s organic engine"
              stats="$392K · 85 tons · $4,612/ton · ITC potential #3"
              text="Germany combines deep nut demand with rigorous sustainability and organic requirements. EU organic equivalency and TRACES NT documentation can help access specialised retail and ingredient channels."
            />
            <Market
              title="Netherlands — The premium outlier"
              stats="$383K · 25 tons · $15,320/ton · ITC potential #4"
              text="The Netherlands’ exceptional unit value points to premium kernel, likely for re-export or high-end food manufacturing. A foothold in Rotterdam or Amsterdam can create access to the broader European distribution network."
            />
            <Market
              title="Vietnam — The processing hub"
              stats="$15.2M · 4,684 tons · $3,236/ton · ITC potential #6"
              text="Vietnam is a major buyer, but also a processor and re-exporter. Producers should evaluate whether qualifying volumes can be diverted to finished-kernel programmes aimed directly at end markets."
            />
            <Market
              title="Kenya — A cautionary anomaly"
              stats="$388K · 503 tons · $771/ton"
              text="The very low unit value may reflect transshipment, low-grade or reject material, or a classification issue. It underlines why exporters need to understand exactly what each destination is buying."
            />
          </div>
        </div>
      </section>

      <section id="brief" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The bottom line
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Diversification is a margin imperative.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            South Africa produces world-class macadamia, yet its export mix remains heavily weighted
            to two commodity markets. The trade data shows that graded, certified and properly
            positioned kernel can command materially higher unit values in the United States, Japan,
            the Netherlands and Germany.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Kaapstays connects international buyers with verified South African macadamia
            processors. We structure the brief, verify the supplier and coordinate the export—so you
            can access premium kernel at the source, not commodity in-shell through a middleman.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Macadamia%20sourcing%20brief`}
            className="mt-8 inline-block rounded-sm bg-primary px-5 py-3 text-sm text-primary-foreground"
          >
            Start a macadamia sourcing brief
          </a>
          <div className="mt-12 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">Sources</p>
            <p className="mt-2">
              ITC Trade Map, South Africa exports HS 080261 (fresh or dried macadamia nuts, in
              shell), 2025; ITC Export Potential Map, Macadamia nuts — South Africa, 2025; data
              analysis by Kaapstays.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Insight({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-border p-5">
      <h3 className="text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}
function Market({ title, stats, text }: { title: string; stats: string; text: string }) {
  return (
    <article className="border border-border bg-background p-6">
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-3 text-sm font-medium text-primary">{stats}</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}
