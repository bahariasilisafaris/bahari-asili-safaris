import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/enquire")({
  head: () => ({
    meta: [
      { title: "Enquire & Book — Bahari Asili Safaris" },
      { name: "description", content: "Tell us about your dream safari." },
      { property: "og:title", content: "Enquire & Book — Bahari Asili Safaris" },
      { property: "og:description", content: "Tell us about your dream safari." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Enquire & Book" title="Enquire & Book" body="Tell us about your dream safari." image={img.hero} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
