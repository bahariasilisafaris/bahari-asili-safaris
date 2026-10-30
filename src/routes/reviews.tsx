import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Bahari Asili Safaris" },
      { name: "description", content: "Honest stories from our travellers." },
      { property: "og:title", content: "Reviews — Bahari Asili Safaris" },
      { property: "og:description", content: "Honest stories from our travellers." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Reviews" title="Reviews" body="Honest stories from our travellers." image={img.beach} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
