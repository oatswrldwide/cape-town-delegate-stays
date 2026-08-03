import { createFileRoute } from "@tanstack/react-router";
import { buildSeoHead } from "../../lib/seo";

export const Route = createFileRoute("/neighborhood-guides/sea-point")({
  head: () =>
    buildSeoHead({
      title: "Sea Point Accommodation | Cape Town Guide for Business Travellers | Kaapstays",
      description:
        "Sea Point is Cape Town's Atlantic seaboard hub. Safe, walkable, 10 mins from CTICC. See why delegates choose our sea-view rooms here.",
      path: "/neighborhood-guides/sea-point",
      keywords: [
        "sea point cape town guide",
        "cticc to sea point transport",
        "sea point accommodation business travel",
      ],
    }),
  component: SeaPointGuidePage,
});

function SeaPointGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Neighborhood guide</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            Sea Point: The Atlantic Side of Your Business Trip
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Sea Point is where Cape Town's business travellers go when they want to wake up to the
            ocean. It's a 10-minute drive from the CTICC, flat enough for morning runs, and packed
            with cafes that actually open before 8am.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            If your Africa Tech Festival schedule is packed but you still want to feel like you're
            in Cape Town — not a conference bubble — Sea Point is your neighbourhood.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-16">
        <article>
          <h2 className="text-2xl md:text-3xl">Why Delegates Stay in Sea Point</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>
              <strong className="text-foreground">The promenade</strong> — A 5km waterfront
              walkway. Run it before your 9am keynote.
            </li>
            <li>
              <strong className="text-foreground">The restaurants</strong> — From client-dinner
              spots (The Bungalow) to quick pre-session coffee (Bootlegger, Starbucks).
            </li>
            <li>
              <strong className="text-foreground">The safety</strong> — Sea Point is one of Cape
              Town's most walkable evening neighbourhoods. Our properties are on well-lit streets
              with security.
            </li>
            <li>
              <strong className="text-foreground">The views</strong> — Every Kaapstays sea-view
              room looks out over the Atlantic. That's your decompression view after a day of
              panels.
            </li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">Sea Point to CTICC — Transport Guide</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Method</th>
                  <th className="py-3 pr-4">Time</th>
                  <th className="py-3 pr-4">Cost</th>
                  <th className="py-3">Best For</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/70">
                  <td className="py-3 pr-4 font-medium text-foreground">Uber / Bolt</td>
                  <td className="py-3 pr-4">10–12 min</td>
                  <td className="py-3 pr-4">R60–R90</td>
                  <td className="py-3">Convenience, late nights</td>
                </tr>
                <tr className="border-b border-border/70">
                  <td className="py-3 pr-4 font-medium text-foreground">MyCiti Bus</td>
                  <td className="py-3 pr-4">20–25 min</td>
                  <td className="py-3 pr-4">R12</td>
                  <td className="py-3">Budget, daytime travel</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Rental car</td>
                  <td className="py-3 pr-4">10 min</td>
                  <td className="py-3 pr-4">Parking at CTICC ~R50/day</td>
                  <td className="py-3">Exploring after the festival</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Pro tip: Book your morning Uber 10 minutes earlier than you think. Cape Town traffic on
            Main Road peaks at 8:15am.
          </p>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">The Best Pre-Conference Coffee Spots</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Bootlegger Sea Point — Reliable Wi-Fi, opens 6:30am, power at every table.</li>
            <li>Coco Safar — If you need to impress a client before the first session.</li>
            <li>Seattle Coffee Co. — Fast, friendly, right on Main Road.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">Where to Eat After the Festival</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>The Bungalow — Clifton Beach. Sunset cocktails. Book ahead.</li>
            <li>KOI — Asian fusion on Beach Road. Good for team dinners.</li>
            <li>Mojo Market — Food hall with 20+ vendors. Casual, loud, fun.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">Is Sea Point Safe?</h2>
          <p className="mt-4 text-muted-foreground">
            Sea Point is one of Cape Town's safer neighbourhoods for visitors, but standard
            precautions apply:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Walk on the promenade after dark (it's lit and patrolled)</li>
            <li>Avoid walking alone on side streets past midnight</li>
            <li>Our properties all have secure access and off-street parking where possible</li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">Our Sea Point Properties</h2>
          <p className="mt-4 text-muted-foreground">
            We list sea-view rooms and full apartments in Sea Point and neighbouring Bantry Bay.
            All include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Atlantic Ocean views</li>
            <li>Fibre Wi-Fi</li>
            <li>Workspace or dining table setup</li>
            <li>24/7 support contact</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href="/stays/sea-view-rooms" className="rounded-sm bg-primary px-4 py-2 text-primary-foreground">
              View Sea Point stays
            </a>
          </div>
        </article>
      </section>

      <section className="border-t border-border/70 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl">Other Neighbourhoods to Consider</h2>
          <p className="mt-4 text-muted-foreground">
            Not sure Sea Point is right for you? Compare City Bowl (walk to CTICC) or Camps Bay
            (luxury villas).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/neighborhood-guides/city-bowl" className="text-sm underline-offset-4 hover:underline">
              City Bowl guide
            </a>
            <a href="/neighborhood-guides/camps-bay" className="text-sm underline-offset-4 hover:underline">
              Camps Bay guide
            </a>
            <a href="/africa-tech-festival-2026" className="text-sm underline-offset-4 hover:underline">
              Africa Tech Festival accommodation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
