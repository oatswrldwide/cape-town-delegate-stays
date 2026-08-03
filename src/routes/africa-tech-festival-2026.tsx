import { createFileRoute } from "@tanstack/react-router";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/africa-tech-festival-2026")({
  head: () =>
    buildSeoHead({
      title: "Africa Tech Festival 2026 Accommodation | CTICC Stays | Kaapstays",
      description:
        "Book hand-picked homes and apartments near the CTICC for Africa Tech Festival 2026 (16–20 Nov). Sea views, city apartments & team villas. Enquire now.",
      path: "/africa-tech-festival-2026",
      keywords: [
        "africa tech festival accommodation",
        "africa tech festival 2026 accommodation",
        "cticc accommodation",
        "cticc stays",
      ],
    }),
  component: AfricaTechFestivalPage,
});

function AfricaTechFestivalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Africa Tech Festival · Cape Town
          </p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            Africa Tech Festival 2026 Accommodation — A Quiet Place to Land
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The Africa Tech Festival returns to the CTICC from 16–20 November 2026. If you're a
            delegate, speaker, or part of a sponsor team, where you stay shapes your entire week.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Kaapstays reserves a portfolio of homes within 10 minutes of the CTICC for festival
            delegates. No generic hotels. No surprises. Just quiet, safe spaces where you can prep
            for your panel, debrief with your team, or sleep off the jet lag.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-16">
        <article>
          <h2 className="text-2xl md:text-3xl">Where Should You Stay?</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Neighbourhood</th>
                  <th className="py-3 pr-4">Best For</th>
                  <th className="py-3 pr-4">Distance to CTICC</th>
                  <th className="py-3">Our Properties</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/70">
                  <td className="py-3 pr-4 font-medium text-foreground">Sea Point / Bantry Bay</td>
                  <td className="py-3 pr-4">Solo delegates, morning runners, ocean lovers</td>
                  <td className="py-3 pr-4">10–12 min drive</td>
                  <td className="py-3">Sea-view rooms with balconies</td>
                </tr>
                <tr className="border-b border-border/70">
                  <td className="py-3 pr-4 font-medium text-foreground">City Bowl / CBD</td>
                  <td className="py-3 pr-4">Speakers, tight schedules, nightlife</td>
                  <td className="py-3 pr-4">5–10 min walk</td>
                  <td className="py-3">City apartments with Table Mountain views</td>
                </tr>
                <tr className="border-b border-border/70">
                  <td className="py-3 pr-4 font-medium text-foreground">Camps Bay / Clifton</td>
                  <td className="py-3 pr-4">Executive teams, after-hours entertaining</td>
                  <td className="py-3 pr-4">15–20 min drive</td>
                  <td className="py-3">Private villas with pools</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Woodstock / Observatory</td>
                  <td className="py-3 pr-4">Startups, budget-conscious teams</td>
                  <td className="py-3 pr-4">10–15 min drive</td>
                  <td className="py-3">Private rooms in shared homes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">Why Book Accommodation Early for Africa Tech Festival?</h2>
          <p className="mt-4 text-muted-foreground">
            Cape Town in mid-November is peak season. Hotels near the CTICC sell out 3–4 months in
            advance. Our homes are held specifically for festival delegates, but availability
            tightens quickly.
          </p>
          <p className="mt-6 text-muted-foreground">What you get when you book with Kaapstays:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Pre-festival check-in coordination (we know your flight lands at 11pm)</li>
            <li>Properties vetted for reliable Wi-Fi — because that demo call doesn't wait</li>
            <li>Flexible team bookings (need to add two engineers last minute? We handle it)</li>
            <li>
              Local recommendations: best coffee near CTICC, where to take clients for dinner, and
              how to get an Uber at 11pm
            </li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl md:text-3xl">Getting to the CTICC from Your Stay</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>From Sea Point: 10-min Uber / Bolt ride along Beach Road. R60–R80.</li>
            <li>From City Bowl: Walk. It's 5–10 minutes through the CBD.</li>
            <li>From Camps Bay: 15–20 mins. Beat traffic by leaving before 8am.</li>
            <li>From Woodstock: 10–15 mins. MyCiti bus runs directly to the CBD.</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            We include a printed transport guide in every property.
          </p>
        </article>
      </section>

      <section className="border-t border-border/70 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <article>
              <h3 className="text-xl text-foreground">
                Is Cape Town safe for Africa Tech Festival delegates?
              </h3>
              <p className="mt-2">
                Yes. The CTICC and surrounding CBD are well-patrolled during major events. We only
                list properties in neighbourhoods our team would stay in themselves. Every booking
                includes a local safety briefing.
              </p>
            </article>
            <article>
              <h3 className="text-xl text-foreground">Can I book for my entire team?</h3>
              <p className="mt-2">
                Absolutely. Our private villas sleep 6–12 people. We also coordinate multiple
                apartments in the same building for larger teams.
              </p>
            </article>
            <article>
              <h3 className="text-xl text-foreground">What's included in the rate?</h3>
              <p className="mt-2">
                Wi-Fi, linen, cleaning before arrival, and 24/7 phone support. Airport transfers
                and mid-week cleans can be added.
              </p>
            </article>
            <article>
              <h3 className="text-xl text-foreground">When should I book?</h3>
              <p className="mt-2">
                Now. November is peak season and festival dates are fixed. The best properties are
                typically 70% booked by September.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="enquire" className="border-t border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl">Ready to Reserve Your Spot?</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Send us your dates and team size. Ongezile will reply within 4 hours with matched
            options.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:ongezile@kaapstays.co.za?subject=Africa%20Tech%20Festival%202026%20Accommodation%20Enquiry"
              className="rounded-sm bg-primary px-4 py-2 text-primary-foreground"
            >
              Enquire now
            </a>
            <a href="/neighborhood-guides/sea-point" className="rounded-sm border border-border px-4 py-2">
              See Sea Point guide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
