import { createFileRoute } from "@tanstack/react-router";
import { img, destinations } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

export const Route = createFileRoute("/destinations")({
  head: () => ({ meta: [
    { title: "East Africa Destinations — Bahari Asili Safaris" },
    { name: "description", content: "Explore Maasai Mara, Serengeti, Ngorongoro, Amboseli, Zanzibar and Laikipia with Bahari Asili Safaris." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Kenya · Tanzania" title="Places that stay with you" body="Follow wildlife across open plains, discover dramatic landscapes and finish by the ocean. Explore the destinations that bring East Africa to life." image={img.crater} />
    <section className="mx-auto max-w-6xl px-6 py-20"><SectionHead eyebrow="Explore the map" title="Six remarkable places to begin." body="Each destination has its own rhythm. The best route depends on the season, the wildlife you're hoping to see and how you like to travel." /><div className="mt-12"><ContentCards items={destinations.map(d => ({title:d.name,body:d.body,image:d.image,meta:d.country}))} /></div></section>
    <CTABanner image={img.beach} title="Not sure where to start? Tell us when you're travelling." />
  </>
});
