import { createFileRoute } from "@tanstack/react-router";
import { img, reviews } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [
    { title: "Traveller Reviews — Bahari Asili Safaris" },
    { name: "description", content: "Read traveller feedback and safari stories from journeys across East Africa." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Traveller stories" title="Memories made in Africa" body="Every journey is different. Explore a selection of traveller stories from our safari collection." image={img.beach} />
    <section className="mx-auto max-w-6xl px-6 py-20"><SectionHead eyebrow="Guest experiences" title="The moments that stay with you." body="From wildlife encounters to the small details of a well-planned journey."/><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{reviews.map((r,i)=><Reveal key={r.name} i={i} className="flex flex-col justify-between rounded-[1.75rem] bg-card p-8"><div><p className="text-primary" aria-label="Five stars">★★★★★</p><blockquote className="mt-5 text-lg leading-7">“{r.quote}”</blockquote></div><div className="mt-8 border-t border-border pt-4"><p className="font-bold">{r.name}</p><p className="mt-1 text-sm text-muted-foreground">{r.trip}</p></div></Reveal>)}</div><p className="mt-8 text-xs text-muted-foreground">Please ensure all displayed testimonials and traveller names are genuine, approved for publication and accurately attributed before the website goes live.</p></section>
    <CTABanner image={img.amboseli} title="Ready to create a story of your own?" />
  </>
});
