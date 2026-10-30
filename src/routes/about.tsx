import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bahari Asili Safaris" },
      { name: "description", content: "A Kenyan-Tanzanian team of safari specialists." },
      { property: "og:title", content: "About — Bahari Asili Safaris" },
      { property: "og:description", content: "A Kenyan-Tanzanian team of safari specialists." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="About" title="About" body="A Kenyan-Tanzanian team of safari specialists." image={img.culture} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
