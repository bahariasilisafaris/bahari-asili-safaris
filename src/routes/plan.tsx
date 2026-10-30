import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CTABanner, SectionHead } from "@/components/site/layout";
import { ContentCards } from "@/components/site/content";

const tips = [
  {title:"Choose your season",meta:"Timing",image:img.migration,body:"Wildlife viewing is rewarding throughout the year, but rainfall, migration movements and regional conditions vary. Share your travel month so we can recommend the best areas for your interests."},
  {title:"Set your travel pace",meta:"Your style",image:img.jeep,body:"Decide whether you prefer a focused wildlife itinerary, a slower journey with fewer transfers, a family-friendly pace or a safari combined with the coast."},
  {title:"Pack for variety",meta:"Preparation",image:img.lodge,body:"Bring comfortable neutral layers, sun protection, a hat, closed walking shoes and any personal medication. A light layer is useful for cool early-morning game drives."},
  {title:"Check travel documents",meta:"Before departure",image:img.culture,body:"Check passport validity, entry requirements, visas and recommended travel health advice for every country on your route before departure."},
];
export const Route = createFileRoute("/plan")({
  head: () => ({ meta: [
    { title: "Plan Your Safari — Bahari Asili Safaris" },
    { name: "description", content: "Practical guidance for planning a Kenya or Tanzania safari, including timing, travel style and preparation." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Plan with confidence" title="Your safari, thoughtfully planned" body="A little preparation makes a big difference. Start with the essentials, then let us help you bring the details together." image={img.hero} />
    <section className="mx-auto max-w-6xl px-6 py-20"><SectionHead eyebrow="Before you go" title="Four useful things to think about." body="There is no single best safari for everyone. The right choices depend on your travel dates, interests, group and budget."/><div className="mt-12"><ContentCards items={tips} columns={2}/></div></section>
    <section className="mx-auto max-w-6xl px-6 pb-24"><div className="rounded-[2rem] bg-sand p-8 md:p-12"><h2 className="text-3xl font-bold">What we'll ask when planning your trip</h2><ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2"><li>• Your preferred travel dates and flexibility</li><li>• Number of adults and children travelling</li><li>• Wildlife, culture and coast experiences</li><li>• Accommodation style and comfort level</li><li>• Approximate budget per person</li><li>• Any accessibility or dietary requirements</li></ul></div></section>
    <CTABanner image={img.amboseli} title="Tell us a little about your plans. We'll take it from there." />
  </>
});
