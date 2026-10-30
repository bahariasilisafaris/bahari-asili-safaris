import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner } from "@/components/site/layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bahari Asili Safaris" },
      { name: "description", content: "Talk to a safari specialist in Nairobi." },
      { property: "og:title", content: "Contact — Bahari Asili Safaris" },
      { property: "og:description", content: "Talk to a safari specialist in Nairobi." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Contact" body="Talk to a safari specialist in Nairobi." image={img.lodge} />
      <CTABanner image={img.amboseli} />
    </>
  ),
});
