import { createFileRoute, notFound } from "@tanstack/react-router";
import { itineraries } from "@/lib/site-data";
import { PageHero, EnquiryForm } from "@/components/site/layout";

export const Route = createFileRoute("/itineraries/$slug")({
  loader: ({ params }) => {
    const it = itineraries.find((i) => i.slug === params.slug);
    if (!it) throw notFound();
    return it;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Itinerary"} — Bahari Asili Safaris` },
      { name: "description", content: loaderData?.summary ?? "Safari itinerary" },
      { property: "og:title", content: loaderData?.name ?? "Itinerary" },
      { property: "og:description", content: loaderData?.summary ?? "Safari itinerary" },
    ],
  }),
  component: Detail,
});

function Detail() {
  const it = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${it.days} days · ${it.country}`} title={it.name} body={it.summary} image={it.image} />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm text-muted-foreground">Route: {it.route.join(" → ")} · from ${it.price.toLocaleString()} pp</p>
        <div className="mt-8 space-y-3">
          {it.dayByDay.map((d) => (
            <details key={d.day} className="rounded-3xl bg-card p-6">
              <summary className="cursor-pointer font-display text-xl font-bold">Day {d.day} · {d.title}</summary>
              <p className="mt-3 text-muted-foreground">{d.body}</p>
              <p className="mt-2 text-sm">Stay: {d.stay} · Meals: {d.meals}</p>
            </details>
          ))}
        </div>
        <div className="mt-12"><EnquiryForm defaultTrip={it.name} /></div>
      </section>
    </>
  );
}
