import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Bahari Asili Safaris" },
      { name: "description", content: "Maasai Mara, Serengeti, Ngorongoro, Amboseli and Zanzibar." },
      { property: "og:title", content: "Destinations — Bahari Asili Safaris" },
      { property: "og:description", content: "Maasai Mara, Serengeti, Ngorongoro, Amboseli and Zanzibar." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Destinations" title="Destinations" body="Maasai Mara, Serengeti, Ngorongoro, Amboseli and Zanzibar." image={img.crater} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
