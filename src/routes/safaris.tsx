import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/safaris")({
  head: () => ({
    meta: [
      { title: "Safaris — Bahari Asili Safaris" },
      { name: "description", content: "Big Five game drives across Kenya and Tanzania." },
      { property: "og:title", content: "Safaris — Bahari Asili Safaris" },
      { property: "og:description", content: "Big Five game drives across Kenya and Tanzania." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Safaris" title="Safaris" body="Big Five game drives across Kenya and Tanzania." image={img.jeep} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
