import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { img, CONTACT } from "@/lib/site-data";
import { PageHero, SectionHead, EnquiryForm } from "@/components/site/layout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Bahari Asili Safaris" },
    { name: "description", content: "Contact Bahari Asili Safaris by email, phone or WhatsApp to start planning your East Africa journey." },
  ] }),
  component: () => <>
    <PageHero eyebrow="We'd love to hear from you" title="Let's talk about your trip" body="Have a question, an idea or a route in mind? Reach out and tell us what you're dreaming of." image={img.lodge} />
    <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHead eyebrow="Get in touch" title="A real conversation is a great place to start." body="Choose the contact method that works best for you. Share a few details and we'll help with the next step."/><div className="mt-10 space-y-5"><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 rounded-2xl bg-card p-5 hover:shadow-[var(--shadow-soft)]"><Mail className="text-primary"/><span><span className="block text-xs text-muted-foreground">Email</span><strong>{CONTACT.email}</strong></span></a><a href={`tel:${CONTACT.whatsapp}`} className="flex items-center gap-4 rounded-2xl bg-card p-5 hover:shadow-[var(--shadow-soft)]"><Phone className="text-primary"/><span><span className="block text-xs text-muted-foreground">Call</span><strong>{CONTACT.phone}</strong></span></a><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-card p-5 hover:shadow-[var(--shadow-soft)]"><MessageCircle className="text-primary"/><span><span className="block text-xs text-muted-foreground">WhatsApp</span><strong>Chat with us</strong></span></a><div className="flex items-center gap-4 rounded-2xl bg-card p-5"><MapPin className="text-primary"/><span><span className="block text-xs text-muted-foreground">Destinations</span><strong>{CONTACT.address}</strong></span></div></div></div><div><EnquiryForm/></div></div></section>
  </>
});
