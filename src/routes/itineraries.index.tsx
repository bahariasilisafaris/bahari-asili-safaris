import { createFileRoute, Link } from "@tanstack/react-router";
import { itineraries, img } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/itineraries/")({
  head: () => ({ meta: [
    { title: "Safari Itineraries — Bahari Asili Safaris" },
    { name: "description", content: "Explore tailor-made Kenya and Tanzania safari journeys, from classic wildlife safaris to bush-and-beach escapes." },
  ] }),
  component: ItineraryIndex,
});

function ItineraryIndex() {
  return <>
    <PageHero eyebrow="Made for the way you travel" title="Safari itineraries" body="Thoughtfully paced journeys across Kenya and Tanzania. Choose a starting point, then let us tailor the details around you." image={img.migration} />
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHead eyebrow="Find your journey" title="A few ways to experience East Africa." body="Every itinerary can be adjusted for your dates, pace, travel style and budget." />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {itineraries.map((it, i) => <Reveal key={it.slug} i={i} className="group overflow-hidden rounded-[2rem] bg-card">
          <Link to="/itineraries/$slug" params={{ slug: it.slug }} className="block">
            <div className="relative aspect-[16/9] overflow-hidden"><img src={it.image} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-5 top-5 rounded-full bg-ink/75 px-4 py-2 text-xs font-semibold text-ink-foreground">{it.tag}</span></div>
            <div className="p-7"><p className="text-sm text-muted-foreground">{it.days} days · {it.country} · from ${it.price.toLocaleString()} per person</p><h2 className="mt-2 font-display text-3xl font-bold">{it.name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{it.summary}</p><p className="mt-5 text-sm font-semibold text-primary">View itinerary ↗</p></div>
          </Link>
        </Reveal>)}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">Prices shown are guide prices and may change with travel dates, accommodation, availability and group size. Your final quote will be confirmed before booking.</p>
    </section>
    <CTABanner image={img.amboseli} title="Have different dates or a different dream? We can shape a journey around you." />
  </>;
}
