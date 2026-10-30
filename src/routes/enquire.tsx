import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, EnquiryForm } from "@/components/site/layout";

export const Route = createFileRoute("/enquire")({
  head: () => ({ meta: [
    { title: "Enquire & Plan Your Safari — Bahari Asili Safaris" },
    { name: "description", content: "Send your travel dates, group details and safari interests to start planning a tailor-made East Africa trip." },
  ] }),
  component: () => <>
    <PageHero eyebrow="Start planning" title="Tell us about your dream safari" body="Share a few details below. We'll prepare to discuss the route, accommodation and experiences that fit your plans." image={img.hero} />
    <section className="mx-auto max-w-4xl px-6 py-20"><div className="mb-10 text-center"><p className="text-sm font-semibold uppercase tracking-widest text-primary">Your journey starts here</p><h2 className="mt-4 text-4xl font-bold">A few details, then we'll talk.</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">This form opens a WhatsApp message addressed to Bahari Asili Safaris. Review the message and press Send in WhatsApp to deliver your enquiry.</p></div><EnquiryForm/></section>
  </>
});
