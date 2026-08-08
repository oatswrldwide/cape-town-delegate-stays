import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero-accommodation.jpg";
import seaviewImage from "../assets/room-seaview.jpg";
import cityImage from "../assets/room-city.jpg";
import villaImage from "../assets/room-villa.jpg";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "Cape Town Accommodation for Business & Events | Kaapstays",
      description:
        "Hand-picked homes, apartments and villas in Cape Town for conference delegates and business travellers. Quiet, safe, close to the CTICC. Enquire now.",
      path: "/",
      keywords: [
        "business travel accommodation cape town",
        "corporate accommodation cape town",
        "conference accommodation cape town",
        "short term rental cape town business",
      ],
    }),
  component: LandingPage,
});

type StayType = "sea-view" | "city-apartment" | "villa" | "private-room";

const stays: { id: StayType; name: string; blurb: string; image: string }[] = [
  {
    id: "sea-view",
    name: "Sea-view room",
    blurb: "Wake up to the Atlantic. Balconies, linen, quiet mornings.",
    image: seaviewImage,
  },
  {
    id: "city-apartment",
    name: "City apartment",
    blurb: "Walk to the CTICC. Table Mountain from your window.",
    image: cityImage,
  },
  {
    id: "villa",
    name: "Private villa",
    blurb: "For teams. Pool, kitchen, space to host and unwind.",
    image: villaImage,
  },
  {
    id: "private-room",
    name: "Private room",
    blurb: "Simple, safe, well-located. Solo delegate friendly.",
    image: seaviewImage,
  },
];

export function LandingPage() {
  const [selected, setSelected] = useState<StayType[]>([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const toggle = (id: StayType) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const mailto = useMemo(() => {
    const picks = selected.length
      ? selected.map((id) => stays.find((s) => s.id === id)?.name).join(", ")
      : "Not specified";
    const body = [
      `Name: ${name || "—"}`,
      `Email: ${email || "—"}`,
      `Phone: ${phone || "—"}`,
      "",
      `Accommodation preference: ${picks}`,
      `Check-in: ${checkIn || "—"}`,
      `Check-out: ${checkOut || "—"}`,
      `Guests: ${guests}`,
      "",
      `Notes: ${notes || "—"}`,
    ].join("\n");
    return `mailto:ongezile@kaapstays.co.za?subject=${encodeURIComponent(
      "Cape Town accommodation enquiry",
    )}&body=${encodeURIComponent(body)}`;
  }, [selected, name, email, phone, checkIn, checkOut, guests, notes]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl italic tracking-tight">Kaap</span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              delegate stays
            </span>
          </a>
          <a href="#enquire" className="group inline-flex items-center gap-2 text-sm font-medium">
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Cape Town · Delegate and business stays
            </p>
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              A simple place to stay
              <span className="italic text-accent"> in Cape Town.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Share your dates and preferred setup. We’ll narrow it down to the best fit for your
              stay in Cape Town.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Start your enquiry
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#options"
                className="inline-flex items-center rounded-sm border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                View stay types
              </a>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li>• Quiet, well-located homes for short city stays</li>
              <li>• Flexible options from single rooms to private villas</li>
              <li>• Fast response with options that match your dates</li>
            </ul>
          </div>

          <div className="rounded-sm border border-border/70 bg-card/70 p-6 shadow-[0_1px_0_var(--border),0_18px_40px_-32px_rgba(0,0,0,0.45)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              What to expect
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="border-b border-border/70 pb-4">
                <div className="font-medium text-foreground">Stay types</div>
                <div className="mt-1">
                  Sea-view rooms, city apartments, villas and private rooms.
                </div>
              </div>
              <div className="border-b border-border/70 pb-4">
                <div className="font-medium text-foreground">Best for</div>
                <div className="mt-1">Solo travellers, couples and teams visiting Cape Town.</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Response time</div>
                <div className="mt-1">A quick reply with options tailored to your dates.</div>
              </div>
            </div>
            <img
              src={heroImage}
              alt="Cape Town balcony at golden hour with Table Mountain and ocean"
              width={1200}
              height={900}
              loading="eager"
              className="mt-6 h-48 w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stay types */}
      <section id="options" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Stay types
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Pick the setup that fits your trip
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {stays.map((s) => (
              <article
                key={s.id}
                className="rounded-sm border border-border/70 bg-background/70 p-5"
              >
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Enquire</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Fill in the form and we’ll shortlist the right stay.
            </h2>
            <p className="mt-6 text-muted-foreground">
              A few details are enough to get started. We’ll use your dates and preferences to send
              the best options.
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
                <MapPin className="h-4 w-4" /> Cape Town, South Africa
              </div>
            </div>
          </div>

          <form
            action="mailto:ongezile@kaapstays.co.za"
            method="post"
            encType="text/plain"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            autoComplete="on"
            className="space-y-8 rounded-sm border border-border/70 bg-card/60 p-6 shadow-[0_1px_0_var(--border),0_18px_40px_-32px_rgba(0,0,0,0.45)] md:p-8"
          >
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What kind of stay?
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {stays.map((s) => {
                  const active = selected.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggle(s.id)}
                      className={
                        "flex items-center justify-between rounded-sm border px-4 py-3 text-left text-sm transition-colors " +
                        (active
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border bg-card hover:border-accent/60")
                      }
                    >
                      <span>{s.name}</span>
                      <span
                        className={
                          "flex h-4 w-4 items-center justify-center rounded-full border " +
                          (active ? "border-accent-foreground" : "border-muted-foreground/40")
                        }
                      >
                        {active && <span className="h-2 w-2 rounded-full bg-current" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Check-in">
                <input
                  type="date"
                  required
                  id="check-in"
                  name="check-in"
                  autoComplete="on"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="Check-out">
                <input
                  type="date"
                  required
                  id="check-out"
                  name="check-out"
                  autoComplete="on"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="Guests">
                <input
                  type="number"
                  min={1}
                  max={20}
                  id="guests"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="input"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={80}
                  className="input"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={120}
                  className="input"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  id="phone"
                  name="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={30}
                  className="input"
                />
              </Field>
              <Field label="Anything else?">
                <input
                  id="notes"
                  name="notes"
                  autoComplete="on"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  placeholder="Accessibility, arrival time, team size…"
                  className="input"
                />
              </Field>
            </div>

            <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                Independent local provider based in Cape Town.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Send enquiry
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl italic text-foreground">Kaap</span>
            <span className="text-xs uppercase tracking-[0.25em]">delegate stays</span>
          </div>
          <div>© {new Date().getFullYear()} — Cape Town. Independent accommodation provider.</div>
        </div>
      </footer>

      <style>{`
        .input {
          width: 100%;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 0.75rem 0.9rem;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: border-color 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }
        .input:hover { border-color: color-mix(in oklab, var(--accent) 45%, var(--border)); }
        .input:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 18%, transparent);
        }
        .input::placeholder { color: color-mix(in oklab, var(--muted-foreground) 80%, transparent); }
        .input:-webkit-autofill,
        .input:-webkit-autofill:focus {
          -webkit-text-fill-color: var(--foreground);
          box-shadow: 0 0 0 1000px var(--card) inset, 0 0 0 3px color-mix(in oklab, var(--accent) 14%, transparent);
        }
      `}</style>
    </div>
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
