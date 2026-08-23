import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { buildSeoHead } from "../lib/seo";

export const Route = createFileRoute("/cape-town-delegate-stays")({
  head: () => {
    const seo = buildSeoHead({
      title: "Cape Town Delegate Stays | Kaapstays",
      description:
        "Legacy Cape Town Delegate Stays content has moved to the current Kaapstays brand pages.",
      path: "/cape-town-delegate-stays",
      canonicalPath: "/about",
    });

    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "noindex, follow" }],
    };
  },
  component: LegacyCapeTownDelegateStaysPage,
});

function LegacyCapeTownDelegateStaysPage() {
  useEffect(() => {
    window.location.replace("/about");
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">This legacy page has moved</h1>
      <p className="mt-4 text-base leading-relaxed text-foreground/80">
        Cape Town Delegate Stays content is no longer maintained on this URL. Kaapstays now operates
        this domain as a South African sourcing gateway.
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
