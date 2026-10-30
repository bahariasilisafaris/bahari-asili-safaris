import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/itineraries/")({
  head: () => ({
    meta: [
      { title: "Itineraries — Bahari Asili Safaris" },
      { name: "description", content: "Handcrafted day-by-day safari itineraries." },
      { property: "og:title", content: "Itineraries — Bahari Asili Safaris" },
      { property: "og:description", content: "Handcrafted day-by-day safari itineraries." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Itineraries" title="Itineraries" body="Handcrafted day-by-day safari itineraries." image={img.migration} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
