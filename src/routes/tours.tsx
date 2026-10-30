import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours — Bahari Asili Safaris" },
      { name: "description", content: "Cultural, beach and combination tours." },
      { property: "og:title", content: "Tours — Bahari Asili Safaris" },
      { property: "og:description", content: "Cultural, beach and combination tours." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Tours" title="Tours" body="Cultural, beach and combination tours." image={img.culture} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
