import { createFileRoute, Link } from "@tanstack/react-router";
import { img, itineraries, lodges } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

const lodgeJourneys: Record<string, string> = {
  "Mara Plains Camp": "great-migration-classic",
  "Crater Lodge": "serengeti-ngorongoro",
  "Tortilis Camp": "kilimanjaro-amboseli",
  "Namiri Plains": "safari-and-zanzibar",
  "Zuri Zanzibar": "safari-and-zanzibar",
  "Naboisho Camp": "maasai-cultural-journey",
};

const stayStyles = [
  {
    title: "Safari camps",
    body: "Tented camps bring you close to the sounds and atmosphere of the bush. The right location depends on your route, season and preferred level of comfort.",
    image: img.lodge,
  },
  {
    title: "Classic lodges",
    body: "A lodge can offer a relaxed base between game drives, with the setting and facilities varying from one property to another.",
    image: img.crater,
  },
  {
    title: "Coastal stays",
    body: "After time on safari, a beach stay in Zanzibar or along Kenya's coast can add a slower finish to your East African journey.",
    image: img.beach,
  },
];

export const Route = createFileRoute("/lodges")({
  head: () => ({ meta: [
    { title: "Safari Lodges & Camps — Bahari Asili Safaris" },
    { name: "description", content: "Explore example safari camps, lodges and beach stays featured in Bahari Asili Safaris itineraries across Kenya and Tanzania." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Stay somewhere special" title="Lodges & camps" body="The places you stay shape the rhythm of your journey. Explore a few properties featured in our sample itineraries, then tell us what kind of stay feels right for you." image={img.lodge} />
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHead eyebrow="A taste of the stay" title="Find your kind of wild." body="From canvas under the stars to a relaxed island retreat, we can shape accommodation around your route, travel style and budget." />
      <div className="mt-12"><ContentCards items={lodges.map((l) => {
        const journey = itineraries.find((trip) => trip.slug === lodgeJourneys[l.name]);
        return {
          title: l.name,
          body: l.place + ". Featured in our " + (journey?.name ?? "sample journey") + " itinerary. Ask us to confirm current availability and suitable alternatives.",
          image: l.image,
          meta: l.tier,
          href: journey ? "/itineraries/" + journey.slug : "/enquire",
        };
      })} /></div>
      <p className="mt-6 text-sm leading-6 text-muted-foreground">These are example properties from our itinerary collection, not a live availability list or a guarantee of inclusion. Final accommodation is confirmed against your dates and preferences; suitable alternatives may be proposed.</p>
    </section>
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="Choose your atmosphere" title="Three ways to make yourself at home." body="Tell us which style appeals to you and we'll discuss options that fit the route." />
        <div className="mt-12"><ContentCards items={stayStyles} columns={3} /></div>
      </div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
      <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Thoughtful planning</p><h2 className="mt-4 text-3xl font-bold">The right stay depends on the whole journey.</h2></div>
      <div className="space-y-4 text-muted-foreground">
        <p><strong className="text-foreground">Location:</strong> where you stay can reduce long transfers and give you more time to explore the areas that interest you.</p>
        <p><strong className="text-foreground">Travel style:</strong> let us know whether you prefer a simple base, a classic lodge, a tented camp or a beach retreat.</p>
        <p><strong className="text-foreground">Dates and budget:</strong> rates and availability vary by season and property. We'll discuss suitable choices before your itinerary is confirmed.</p>
        <Link to="/enquire" className="inline-flex items-center gap-2 pt-2 font-semibold text-primary">Share your accommodation preferences <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
    <CTABanner image={img.amboseli} title="Let's find the right place for your journey." />
  </>
});
