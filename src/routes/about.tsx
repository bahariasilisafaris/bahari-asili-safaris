import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Bahari Asili Safaris" },
    { name: "description", content: "Get to know Bahari Asili Safaris and our approach to tailor-made journeys across East Africa." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Our approach" title="Africa, experienced with care" body="Bahari Asili Safaris creates tailor-made journeys across Kenya and Tanzania, connecting remarkable wildlife, welcoming places to stay and meaningful local experiences." image={img.culture} />
    <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid items-center gap-12 md:grid-cols-2"><Reveal mask className="overflow-hidden rounded-[2rem]"><img src={img.jeep} alt="Safari vehicle on an East African landscape" loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal><div><SectionHead eyebrow="What guides us" title="Thoughtful journeys, not one-size-fits-all packages." body="We believe a great safari should feel personal. That starts with listening to what you want from the journey, then shaping a practical route around your dates, interests and comfort level." /><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Local perspective.</strong> Discover destinations through the people and places that make them unique.</p><p><strong className="text-foreground">Your pace.</strong> Choose a relaxed escape, an active wildlife itinerary or a combination of both.</p><p><strong className="text-foreground">Clear planning.</strong> Understand the route, accommodation options and costs before you confirm.</p></div></div></div></section>
    <section className="bg-ink px-6 py-20 text-ink-foreground"><div className="mx-auto max-w-6xl"><SectionHead dark eyebrow="The journey" title="From first idea to the final sunset." body="We make the planning process clear, collaborative and flexible."/><div className="mt-12 grid gap-8 md:grid-cols-3">{[{n:"01",t:"Tell us what you love",b:"Share your dates, group size, interests and the kind of trip you have in mind."},{n:"02",t:"Shape your itinerary",b:"Review a suggested route, accommodation options and a transparent quote."},{n:"03",t:"Travel with confidence",b:"Once confirmed, use your trip plan to prepare for the journey ahead."}].map(x=><div key={x.n} className="rounded-3xl border border-ink-foreground/15 p-7"><p className="text-sm font-bold text-primary">{x.n}</p><h3 className="mt-4 text-2xl font-bold">{x.t}</h3><p className="mt-3 text-sm leading-6 text-ink-muted">{x.b}</p></div>)}</div></div></section>
    <CTABanner image={img.amboseli} title="Let's start planning your Africa story." />
  </>
});
