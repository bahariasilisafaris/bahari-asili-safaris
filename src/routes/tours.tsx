import { createFileRoute } from "@tanstack/react-router";
import { img, experiences } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

export const Route = createFileRoute("/tours")({
  head: () => ({ meta: [
    { title: "Tours & Experiences — Bahari Asili Safaris" },
    { name: "description", content: "Discover wildlife, culture, coast and private guided tours across East Africa." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Beyond the game drive" title="Tours & experiences" body="Meet the people, landscapes and traditions that make East Africa extraordinary. Combine experiences to make the journey your own." image={img.culture} />
    <section className="mx-auto max-w-6xl px-6 py-20"><SectionHead eyebrow="Explore your interests" title="More than one way to discover Africa." body="Build a trip around the experiences that matter most to you." /><div className="mt-12"><ContentCards items={experiences.map((x) => ({title:x.title,body:x.body,image:x.image}))} columns={4} /></div></section>
    <section className="mx-auto max-w-6xl px-6 pb-24"><div className="grid gap-10 md:grid-cols-2"><div className="overflow-hidden rounded-[2rem]"><img src={img.beach} alt="East African tropical coastline" loading="lazy" className="h-full min-h-72 w-full object-cover" /></div><div className="flex flex-col justify-center"><p className="text-xs font-bold uppercase tracking-widest text-primary">Make it yours</p><h2 className="mt-4 text-4xl font-bold">One trip, several sides of East Africa.</h2><p className="mt-5 leading-7 text-muted-foreground">Pair a wildlife safari with a Swahili coast escape, add a cultural experience, or slow down with extra nights in the places you love. We'll help make the connections work.</p></div></div></section>
    <CTABanner image={img.amboseli} title="What would you love to experience?" />
  </>
});
