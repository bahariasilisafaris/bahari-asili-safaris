import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/lodges")({
  head: () => ({
    meta: [
      { title: "Lodges & Camps — Bahari Asili Safaris" },
      { name: "description", content: "Handpicked lodges and tented camps." },
      { property: "og:title", content: "Lodges & Camps — Bahari Asili Safaris" },
      { property: "og:description", content: "Handpicked lodges and tented camps." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Lodges & Camps" title="Lodges & Camps" body="Handpicked lodges and tented camps." image={img.lodge} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
