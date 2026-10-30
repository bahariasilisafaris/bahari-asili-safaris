import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip — Bahari Asili Safaris" },
      { name: "description", content: "When to go, what to pack and how we plan." },
      { property: "og:title", content: "Plan Your Trip — Bahari Asili Safaris" },
      { property: "og:description", content: "When to go, what to pack and how we plan." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Plan Your Trip" title="Plan Your Trip" body="When to go, what to pack and how we plan." image={img.hero} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
