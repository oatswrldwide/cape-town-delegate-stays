import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero-accommodation.jpg";
import seaviewImage from "../assets/room-seaview.jpg";
import cityImage from "../assets/room-city.jpg";
import villaImage from "../assets/room-villa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cape Town Stays for Africa Tech Festival Delegates" },
      {
        name: "description",
        content:
          "Sea-view rooms, city apartments and private villas in Cape Town for Africa Tech Festival delegates. Independent — not affiliated with Africa Tech Festival.",
      },
      { property: "og:title", content: "Cape Town Stays for Africa Tech Festival Delegates" },
      {
        property: "og:description",
        content:
          "Sea-view rooms, city apartments and private villas in Cape Town for Africa Tech Festival delegates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
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

function Index() {
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
    return `mailto:ongezile.mqokeli@gmail.com?subject=${encodeURIComponent(
      "Africa Tech Festival stay enquiry",
    )}&body=${encodeURIComponent(body)}`;
  }, [selected, name, email, phone, checkIn, checkOut, guests, notes]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl italic tracking-tight">Kaap</span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              delegate stays
            </span>
          </a>
          <a
            href="#enquire"
            className="group inline-flex items-center gap-2 text-sm font-medium"
          >
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Cape Town · 16–20 November 2026
            </p>
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              A quiet place to land
              <span className="italic text-accent"> between sessions.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Hand-picked homes across Cape Town for delegates of the Africa Tech Festival.
              Sea-view rooms, city apartments, or a whole villa for the team.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-3 gap-3 text-sm md:text-right">
              <div className="col-span-3 border-l border-border pl-4 md:border-l-0 md:border-r md:pl-0 md:pr-4">
                <div className="font-display text-3xl">4</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Stay types
                </div>
              </div>
              <div className="col-span-3 border-l border-border pl-4 md:border-l-0 md:border-r md:pl-0 md:pr-4">
                <div className="font-display text-3xl">10 min</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  To the CTICC
                </div>
              </div>
              <div className="col-span-3 border-l border-border pl-4 md:border-l-0 md:border-r md:pl-0 md:pr-4">
                <div className="font-display text-3xl">24/7</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Local support
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm">
          <img
            src={heroImage}
            alt="Cape Town balcony at golden hour with Table Mountain and ocean"
            width={1600}
            height={1200}
            loading="eager"
            className="h-[52vh] w-full object-cover md:h-[70vh]"
          />
        </div>
      </section>

      {/* Stay options — asymmetric editorial grid */}
      <section id="stays" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="col-span-7 font-display text-4xl leading-tight md:text-5xl">
              Pick a home that fits the week
            </h2>
            <p className="col-span-5 text-muted-foreground md:text-right">
              Every option is quiet, safe and close to the festival. Choose one — or a couple —
              and we'll match availability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            {stays.map((s, i) => (
              <article
                key={s.id}
                className={
                  "group " +
                  (i % 4 === 0
                    ? "md:col-span-7"
                    : i % 4 === 1
                      ? "md:col-span-5"
                      : i % 4 === 2
                        ? "md:col-span-5"
                        : "md:col-span-7")
                }
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={s.image}
                    alt={s.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] md:aspect-[3/2]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">{s.name}</h3>
                    <p className="mt-1 max-w-md text-sm text-muted-foreground">{s.blurb}</p>
                  </div>
                  <span className="mt-1 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Enquire
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Tell us your dates. We'll do the rest.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Send this form and it'll open your email app addressed to Ongezile. He'll come
              back with options that match your preferences.
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <a
                href="mailto:ongezile.mqokeli@gmail.com"
                className="flex items-center gap-3 hover:text-accent"
              >
                <Mail className="h-4 w-4" /> ongezile.mqokeli@gmail.com
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
            action="mailto:ongezile.mqokeli@gmail.com"
            method="post"
            encType="text/plain"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="space-y-8 md:col-span-7"
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
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="Check-out">
                <input
                  type="date"
                  required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={120}
                  className="input"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={30}
                  className="input"
                />
              </Field>
              <Field label="Anything else?">
                <input
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
                Independent provider. Not affiliated with Africa Tech Festival.
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
          <div>© {new Date().getFullYear()} — Cape Town. Independent, not affiliated with Africa Tech Festival.</div>
        </div>
      </footer>

      <style>{`
        .input {
          width: 100%;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 0.7rem 0.85rem;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: border-color 150ms;
        }
        .input:focus { outline: none; border-color: var(--accent); }
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
