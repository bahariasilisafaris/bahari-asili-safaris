import { createFileRoute } from "@tanstack/react-router";
import { img, lodges } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

export const Route = createFileRoute("/lodges")({
  head: () => ({ meta: [
    { title: "Safari Lodges & Camps — Bahari Asili Safaris" },
    { name: "description", content: "Explore a selection of safari camps, lodges and beach stays across Kenya and Tanzania." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Stay somewhere special" title="Lodges & camps" body="From intimate tented camps beneath the stars to relaxed coastal retreats, where you stay is part of the journey." image={img.lodge} />
    <section className="mx-auto max-w-6xl px-6 py-20"><SectionHead eyebrow="A taste of the stay" title="Places to make yourself at home." body="These are examples from our itinerary collection. Accommodation is always subject to availability and can be adjusted to suit your style and budget." /><div className="mt-12"><ContentCards items={lodges.map(l => ({title:l.name,body:l.place, image:l.image,meta:l.tier}))} /></div></section>
    <CTABanner image={img.amboseli} title="Let's find the right place for your journey." />
  </>
});
