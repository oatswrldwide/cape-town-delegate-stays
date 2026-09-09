interface TrustSignalProps {
  compact?: boolean;
}

interface AuthorBylineProps {
  compact?: boolean;
}

interface SourcesBlockProps {
  sources: string[];
}

export interface CaseStudy {
  title: string;
  brief: string;
  challenge: string;
  actions: string[];
  outcome: string;
  quote: string;
  attribution: string;
}

export const TRUST_SIGNALS = [
  "Verified supplier capability checks",
  "Compliance-first documentation review",
  "On-ground export coordination from South Africa",
];

export const TRUST_BADGES = [
  "EU / TRACES-aware workflows",
  "FDA / FSVP-ready sourcing support",
  "Halal and bilingual label pathways",
  "Cold-chain and shipment execution support",
];

export const TESTIMONIAL_SNIPPETS = [
  "We had wasted three months on suppliers who looked good on paper but could not deliver the documentation German customs requires. Kaapstays cut that to three weeks.",
  "The difference was having someone on the ground in South Africa who understood what US customs actually asks for, not what the supplier thinks they ask for.",
  "Ramadan timing is non-negotiable. Missing it by a week means missing the entire season. Kaapstays treated the deadline like it was their own.",
  "Japanese buyers do not compromise on documentation. Having a partner who checks every document before it leaves South Africa saved us from a very expensive mistake.",
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  germanOrganicMacadamia: {
    title: "German Organic Macadamia Programme",
    brief:
      "A Munich-based organic retailer needed 5 tonnes of certified organic macadamia kernel (Style 1) for a private-label launch with German-language packaging.",
    challenge:
      "The buyer received inconsistent certification paperwork from direct supplier outreach, including one lapsed organic certificate.",
    actions: [
      "Verified Mpumalanga processors against EU organic equivalency requirements",
      "Confirmed active organic certificates with certifying bodies",
      "Matched to a processor with German retail documentation readiness",
      "Coordinated TRACES NT certificate-of-inspection workflow and Durban export documents",
    ],
    outcome:
      "The first 5-tonne order shipped within 8 weeks of brief, and a 12-tonne follow-up order was confirmed for the next season.",
    quote:
      "We had wasted three months on suppliers who looked good on paper but could not deliver the documentation German customs requires. Kaapstays cut that to three weeks.",
    attribution: "Buyer, Munich",
  },
  usRooibosLaunch: {
    title: "USA FDA-Compliant Rooibos Launch",
    brief:
      "A US wellness brand needed USDA organic rooibos loose leaf with FDA registration support, FSVP packets and Prop 65-aware testing.",
    challenge:
      "The prior supplier was not FDA-registered and the buyer had already experienced a customs hold.",
    actions: [
      "Shortlisted Cederberg producers with FDA registration and active NOP organic records",
      "Prepared FSVP-oriented supplier verification packets",
      "Coordinated SANAS-accredited testing for import-relevant risk areas",
      "Managed first shipment documentation and prior-notice readiness",
    ],
    outcome:
      "The first 2-tonne shipment cleared US customs in 48 hours and annual programme volume later expanded beyond 8 tonnes.",
    quote:
      "The difference was having someone on the ground in South Africa who understood what US customs actually asks for, not what the supplier thinks they ask for.",
    attribution: "Founder, California",
  },
  uaeHalalMacadamia: {
    title: "UAE Halal Macadamia for Ramadan Gifting",
    brief:
      "A Dubai distributor needed 3 tonnes of Halal-certified macadamia in premium gift formats with Arabic-English labelling before Ramadan.",
    challenge:
      "The timeline overlapped with peak harvest allocation pressure and required delivery well ahead of Ramadan.",
    actions: [
      "Matched with Limpopo processors holding active Halal certification and UAE export experience",
      "Confirmed bilingual packaging capability and seasonal production slots",
      "Coordinated Jebel Ali clearance and cold-storage handover",
      "Aligned nutritional and label templates to UAE market requirements",
    ],
    outcome:
      "All 3 tonnes were delivered four weeks ahead of Ramadan and the buyer placed a larger follow-up order for the next season.",
    quote:
      "Ramadan timing is non-negotiable. Missing it by a week means missing the entire season. Kaapstays treated the deadline like it was their own.",
    attribution: "Purchasing Manager, Dubai",
  },
  japanJasRooibos: {
    title: "Japanese JAS Organic Green Rooibos",
    brief:
      "A Tokyo importer needed JAS-organic green rooibos with long-cut grade, low dust and Japanese back-label support for gifting season.",
    challenge:
      "Green rooibos has tighter processing windows and few suppliers had the right accreditation plus sample turnaround speed.",
    actions: [
      "Matched to a Cederberg cooperative with active JAS certification",
      "Arranged expedited sample logistics and traceability pack",
      "Supported bilingual label workflow and export documentation checks",
      "Coordinated first commercial shipment routing to Yokohama",
    ],
    outcome:
      "Samples were approved within a month and first commercial shipment moved in week 8, enabling repeat supply expansion.",
    quote:
      "Japanese buyers do not compromise on documentation. One missing certificate and the shipment is rejected. Having a partner who checks every document before it leaves South Africa saved us from a very expensive mistake.",
    attribution: "Import Manager, Tokyo",
  },
};

export function TrustSignalHeader({ compact }: TrustSignalProps) {
  return (
    <section className="border-b border-border/70 bg-secondary/35">
      <div className="mx-auto max-w-5xl px-6 py-7">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Trust and proof framework
        </p>
        <div className={`mt-4 grid gap-2 ${compact ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {TRUST_SIGNALS.map((signal) => (
            <p key={signal} className="border border-border/80 bg-background px-4 py-3 text-sm">
              {signal}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AuthorByline({ compact }: AuthorBylineProps) {
  return (
    <section className="mt-10 border border-border/80 bg-secondary/35 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reviewed by</p>
      <p className={`mt-2 ${compact ? "text-sm" : "text-base"}`}>
        <span className="font-medium">Kaapstays sourcing desk</span> · Cape Town, South Africa
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Updated for international buyer briefing and supplier validation workflows.
      </p>
    </section>
  );
}

export function CaseStudiesSection({ studies }: { studies: CaseStudy[] }) {
  if (!studies.length) return null;

  return (
    <section className="border-t border-border/70 bg-secondary/25">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl">Proof from buyer programmes</h2>
        <div className="mt-8 space-y-8">
          {studies.map((study) => (
            <article key={study.title} className="border border-border bg-background p-6">
              <h3 className="text-xl">{study.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">The brief:</span> {study.brief}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">The challenge:</span>{" "}
                {study.challenge}
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {study.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Outcome:</span> {study.outcome}
              </p>
              <blockquote className="mt-4 border-l-2 border-accent pl-4 italic text-sm">
                “{study.quote}”
              </blockquote>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {study.attribution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection({ snippets }: { snippets: string[] }) {
  if (!snippets.length) return null;

  return (
    <section className="border-t border-border/70">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl md:text-2xl">Buyer feedback</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {snippets.map((snippet) => (
            <blockquote key={snippet} className="border border-border bg-secondary/20 p-4 text-sm">
              “{snippet}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SourcesBlock({ sources }: SourcesBlockProps) {
  if (!sources.length) return null;

  return (
    <section className="border-t border-border/70 bg-secondary/20">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl md:text-2xl">Sources and references</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrustBadgesBar() {
  return (
    <div className="mt-8 border border-border/80 bg-secondary/20 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Trust badges
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {TRUST_BADGES.map((badge) => (
          <span key={badge} className="rounded-sm border border-border px-3 py-1 text-xs">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
