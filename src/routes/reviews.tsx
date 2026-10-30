import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";


export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [
    { title: "Traveller Reviews — Bahari Asili Safaris" },
    { name: "description", content: "Read traveller feedback and safari stories from journeys across East Africa." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Traveller stories" title="Memories made in Africa" body="Every journey is different. Explore a selection of traveller stories from our safari collection." image={img.beach} />
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <SectionHead eyebrow="Guest experiences" title="Good journeys deserve honest stories." body="We're preparing this space for genuine traveller feedback shared with permission. If you've travelled with Bahari Asili Safaris, we'd love to hear about your experience." />
      <div className="mt-10"><a href="mailto:bahariasilisafaris@gmail.com?subject=My%20Bahari%20Asili%20Safari%20feedback" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Share your feedback ↗</a></div>
    </section>
    <CTABanner image={img.amboseli} title="Ready to create a story of your own?" />
  </>
});
