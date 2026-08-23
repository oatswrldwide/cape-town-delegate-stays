import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/africa-tech-festival-accommodation")({
  head: () => {
    const seo = buildSeoHead({
      title: "Africa Tech Festival Accommodation | Kaapstays",
      description:
        "Legacy accommodation content has moved. Kaapstays now focuses on South African sourcing support.",
      path: "/africa-tech-festival-accommodation",
      canonicalPath: "/about",
    });

    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "noindex, follow" }],
    };
  },
  component: LegacyAccommodationPage,
});

function LegacyAccommodationPage() {
  useEffect(() => {
    window.location.replace("/about");
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">This accommodation page has moved</h1>
      <p className="mt-4 text-base leading-relaxed text-foreground/80">
        Africa Tech Festival accommodation content is no longer maintained here. This domain now
        focuses on Kaapstays sourcing services.
      </p>
      <p className="mt-4">
        Continue to{" "}
        <a className="underline" href="/about">
          About Kaapstays
        </a>
        .
      </p>
    </main>
  );
}
