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
        <div className="grid gap-4 rounded-3xl bg-card p-6 sm:grid-cols-3">
          <div><p className="text-xs uppercase tracking-widest text-muted-foreground">Duration</p><p className="mt-1 text-xl font-bold">{it.days} days</p></div>
          <div><p className="text-xs uppercase tracking-widest text-muted-foreground">Route</p><p className="mt-1 text-sm font-semibold">{it.route.join(" → ")}</p></div>
          <div><p className="text-xs uppercase tracking-widest text-muted-foreground">Guide price</p><p className="mt-1 text-xl font-bold">from ${it.price.toLocaleString()} pp</p></div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Guide price only. Final pricing depends on dates, availability, accommodation and group size.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="mb-5 font-display text-3xl font-bold">Your day-by-day journey</h2>
            <div className="space-y-3">
          {it.dayByDay.map((d) => (
            <details key={d.day} className="rounded-3xl bg-card p-6">
              <summary className="cursor-pointer font-display text-xl font-bold">Day {d.day} · {d.title}</summary>
              <p className="mt-3 text-muted-foreground">{d.body}</p>
              <p className="mt-2 text-sm">Stay: {d.stay} · Meals: {d.meals}</p>
            </details>
            ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-card p-6"><h3 className="font-display text-xl font-bold">Experiences</h3><ul className="mt-4 space-y-2 text-sm text-muted-foreground">{it.activities.map(x => <li key={x}>• {x}</li>)}</ul></div>
            <div className="rounded-3xl bg-card p-6"><h3 className="font-display text-xl font-bold">Suggested stays</h3><ul className="mt-4 space-y-2 text-sm text-muted-foreground">{it.lodges.map(x => <li key={x}>• {x}</li>)}</ul></div>
          </aside>
        </div>
        <div className="mt-16"><h2 className="mb-6 font-display text-3xl font-bold">Enquire about this itinerary</h2><EnquiryForm defaultTrip={it.name} /></div>
      </section>
    </>
  );
}
