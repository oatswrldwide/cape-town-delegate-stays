import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, MapPin, Wifi, Shield, Utensils, Calendar } from "lucide-react";
import heroImage from "../assets/hero-accommodation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Africa Tech Festival Accommodation | Cape Town Stays" },
      { name: "description", content: "Comfortable, well-located accommodation for Africa Tech Festival delegates in Cape Town. Not affiliated with Africa Tech Festival. Everything you need and more." },
      { property: "og:title", content: "Africa Tech Festival Accommodation | Cape Town Stays" },
      { property: "og:description", content: "Comfortable, well-located accommodation for Africa Tech Festival delegates in Cape Town." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: MapPin,
    title: "Close to the venue",
    description: "Hand-picked apartments and rooms near the Africa Tech Festival event locations.",
  },
  {
    icon: Wifi,
    title: "Work-ready spaces",
    description: "Fast Wi-Fi, desks, and quiet environments so you can stay productive.",
  },
  {
    icon: Shield,
    title: "Safe & secure",
    description: "Secure buildings in trusted neighbourhoods with 24/7 support during your stay.",
  },
  {
    icon: Utensils,
    title: "Fully equipped",
    description: "Kitchens, laundry, linen, and all the essentials you need for a comfortable visit.",
  },
  {
    icon: Calendar,
    title: "Flexible booking",
    description: "Stay for the full festival or just a few nights — we adapt to your schedule.",
  },
  {
    icon: BedDouble,
    title: "Solo or group stays",
    description: "Private rooms, shared apartments, or entire units for teams of any size.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl tracking-tight text-foreground">
            Cape Town Delegate Stays
          </span>
          <a
            href="#enquire"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Enquire now
          </a>
        </div>
      </header>

      {/* Hero — split-screen */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Cape Town · Africa Tech Festival 2026
          </p>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Your perfect stay during the Africa Tech Festival
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Comfortable accommodation designed for delegates. Great locations, work-ready amenities, and everything you need — plus a little more.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Check availability
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              What we offer
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Independent accommodation provider. Not affiliated with Africa Tech Festival.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={heroImage}
              alt="Modern Cape Town apartment with Table Mountain in the background"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-y border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Everything you need, and more
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We take care of the details so you can focus on the festival.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-accent">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="enquire" className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">
            Ready to book your stay?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Send us your dates and group size. We’ll match you with the best option near the festival.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@capetowndelegatestays.co.za"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-background/90"
            >
              Email us
            </a>
            <span className="text-primary-foreground/70">or</span>
            <a
              href="tel:+27215551234"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Call +27 21 555 1234
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Independent accommodation provider. Not affiliated with Africa Tech Festival.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
            <div>
              <span className="font-display text-lg text-foreground">Cape Town Delegate Stays</span>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Providing comfortable accommodation for Africa Tech Festival visitors in Cape Town.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Email: hello@capetowndelegatestays.co.za</p>
              <p>Phone: +27 21 555 1234</p>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cape Town Delegate Stays. Independent provider. Not affiliated with, endorsed by, or sponsored by Africa Tech Festival.
          </div>
        </div>
      </footer>
    </div>
  );
}
