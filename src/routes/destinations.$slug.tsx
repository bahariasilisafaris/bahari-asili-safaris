import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { destinations, itineraries } from "@/lib/site-data";
import { PageHero, SectionHead, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = destinations.find((item) => item.slug === params.slug);
    if (!destination) throw notFound();
    const related = itineraries.filter((item) => item.country === destination.country);
    return { destination, related };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.destination.name ?? "Destination"} Safaris — Bahari Asili Safaris` },
      { name: "description", content: loaderData?.destination.body ?? "Explore East Africa with Bahari Asili Safaris." },
    ],
  }),
  component: DestinationDetail,
});

function DestinationDetail() {
  const { destination, related } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={destination.country + " · Destination guide"} title={destination.name} body={destination.body} image={destination.image} />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Discover {destination.name}</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A different side of East Africa.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{destination.body} Our team can help you shape the right route around your travel dates, interests and preferred pace.</p>
          </div>
          <div className="rounded-3xl bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your journey</p>
            <p className="mt-2 font-display text-2xl font-bold">{destination.country}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Combine this destination with other highlights across Kenya and Tanzania, or make it the focus of a private journey.</p>
            <Link to="/contact" className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Plan this destination</Link>
          </div>
        </div>
        <div className="mt-16">
          <SectionHead eyebrow="Suggested journeys" title={`Explore ${destination.country} itineraries`} body="These sample journeys offer a starting point. Every itinerary can be tailored to your dates and travel style." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-3xl bg-card">
                <img src={item.image} alt={item.name} className="aspect-[16/9] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{item.days} days · from ${item.price.toLocaleString()} pp</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                  <Link to="/itineraries/$slug" params={{ slug: item.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">View itinerary <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABanner image={destination.image} title={`Let's plan your ${destination.name} journey.`} />
    </>
  );
}
