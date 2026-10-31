import { createFileRoute, Link } from "@tanstack/react-router";
import { img, experiences, itineraries } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

const experienceJourneys: Record<string, string> = {
  "Big Five Safaris": "serengeti-ngorongoro",
  "Beach Extensions": "safari-and-zanzibar",
  "Cultural Tours": "maasai-cultural-journey",
  "Private & Group Departures": "great-migration-classic",
};

const waysToExplore = [
  {
    title: "Wildlife at your pace",
    body: "Spend time in the landscapes that interest you, with game drives planned around the season, your route and the rhythm you prefer.",
    image: img.migration,
  },
  {
    title: "Culture with context",
    body: "Where available, include locally guided visits and conversations that offer a thoughtful introduction to the people and traditions of the region.",
    image: img.culture,
  },
  {
    title: "A slower finish",
    body: "Balance time on the road with a few unhurried days by the Indian Ocean, with coastal stays and excursions discussed around your interests.",
    image: img.beach,
  },
];

export const Route = createFileRoute("/tours")({
  head: () => ({ meta: [
    { title: "Tours & Experiences — Bahari Asili Safaris" },
    { name: "description", content: "Discover wildlife, cultural, coastal and private guided experiences across Kenya and Tanzania with Bahari Asili Safaris." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Beyond the game drive" title="Tours & experiences" body="Meet the landscapes, wildlife, coast and living traditions that make East Africa extraordinary. Bring your interests and we'll help shape the journey around them." image={img.culture} />
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHead eyebrow="Explore your interests" title="More than one way to discover Africa." body="Use these ideas as a starting point. Each experience can be discussed as part of a wider itinerary, subject to location, season and availability." />
      <div className="mt-12"><ContentCards items={experiences.map((x) => {
        const journey = itineraries.find((trip) => trip.slug === experienceJourneys[x.title]);
        const body = x.title === "Big Five Safaris"
          ? "Explore wildlife areas with a local guide. Sightings are never guaranteed and vary with natural conditions."
          : x.title === "Beach Extensions"
            ? "Add time on Zanzibar or Kenya's coast after your safari, with the pace and length shaped around you."
            : x.title === "Cultural Tours"
              ? "Ask about locally hosted cultural visits and guided experiences, arranged respectfully and subject to availability."
              : "Discuss a private route or group journey, with travel dates, group size and preferred pace considered from the start.";
        return { title: x.title, body, image: x.image, href: journey ? "/itineraries/" + journey.slug : "/enquire" };
      })} columns={4} /></div>
      <p className="mt-6 text-sm leading-6 text-muted-foreground">Activities, community visits, transport and optional excursions are confirmed during planning. Availability, seasonal conditions and local guidance may affect what can be included.</p>
    </section>
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="Make it yours" title="Build a journey with more than one side." body="Combine the experiences you care about, while leaving enough room to enjoy each place." />
        <div className="mt-12"><ContentCards items={waysToExplore} columns={3} /></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]"><img src={img.beach} alt="East African tropical coastline" loading="lazy" className="h-full min-h-72 w-full object-cover" /></div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">A journey with balance</p>
          <h2 className="mt-4 text-4xl font-bold">One trip, several sides of East Africa.</h2>
          <p className="mt-5 leading-7 text-muted-foreground">Pair a wildlife safari with time on the Swahili coast, add a cultural experience, or slow down with extra nights in the places you love. We'll help you consider the connections and timing as your plans take shape.</p>
          <Link to="/enquire" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Tell us what you'd love to experience <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
    <CTABanner image={img.amboseli} title="What would you love to experience?" />
  </>
});
