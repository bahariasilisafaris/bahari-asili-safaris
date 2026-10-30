import { createFileRoute } from "@tanstack/react-router";
import { img, itineraries } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

export const Route = createFileRoute("/safaris")({
  head: () => ({ meta: [
    { title: "Kenya & Tanzania Safaris — Bahari Asili Safaris" },
    { name: "description", content: "Explore private wildlife safaris, Big Five experiences and tailor-made journeys in Kenya and Tanzania." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Into the wild" title="Safaris in Kenya & Tanzania" body="From golden savannahs and elephant country to the great migration, discover East Africa with a journey shaped around you." image={img.jeep} />
    <section className="mx-auto max-w-6xl px-6 py-20"><SectionHead eyebrow="Choose your safari" title="Wild places. Unforgettable days." body="Start with one of these journeys and we'll personalise the route, pace and places to stay." /><div className="mt-12"><ContentCards items={itineraries.filter(x => x.tag !== "Bush & Beach").map(x => ({title:x.name,body:x.summary,image:x.image,meta:x.days+" days · "+x.country,href:"/itineraries/"+x.slug}))} /></div></section>
    <section className="mx-auto max-w-6xl px-6 pb-24"><div className="grid gap-10 rounded-[2rem] bg-sand p-8 md:grid-cols-2 md:p-12"><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Safari styles</p><h2 className="mt-4 text-4xl font-bold">Private, personal and flexible.</h2></div><div className="space-y-4 text-muted-foreground"><p><strong className="text-foreground">Private safari:</strong> travel with your own vehicle and guide, with a schedule built around your interests.</p><p><strong className="text-foreground">Family safari:</strong> balance wildlife time, comfortable stays and activities suited to your family's ages and pace.</p><p><strong className="text-foreground">Bush & beach:</strong> combine game drives with time beside the Indian Ocean or Zanzibar's coast.</p></div></div></section>
    <CTABanner image={img.amboseli} title="Tell us what you hope to see. We'll help plan the route." />
  </>
});
