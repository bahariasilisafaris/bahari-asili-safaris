import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, CalendarDays, Check, Clock3, Compass, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { itineraries } from "@/lib/site-data";
import { PageHero, EnquiryForm } from "@/components/site/layout";

export const Route = createFileRoute("/itineraries/$slug")({
  loader: ({ params }) => {
    const it = itineraries.find((item) => item.slug === params.slug);
    if (!it) throw notFound();
    return it;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.seoTitle ?? `${loaderData?.name ?? "Safari itinerary"} | Bahari Asili Safaris` },
      { name: "description", content: loaderData?.seoDescription ?? loaderData?.summary ?? "Explore tailor-made safaris in Kenya and Tanzania with Bahari Asili Safaris." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bahari Asili Safaris" },
      { property: "og:title", content: loaderData?.seoTitle ?? loaderData?.name ?? "Safari itinerary" },
      { property: "og:description", content: loaderData?.seoDescription ?? loaderData?.summary ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: loaderData?.seoTitle ?? loaderData?.name ?? "Safari itinerary" },
      { name: "twitter:description", content: loaderData?.seoDescription ?? loaderData?.summary ?? "" },
      { name: "twitter:image", content: loaderData?.image ?? "" },
    ],
  }),
  component: Detail,
});

function Detail() {
  const it = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${it.days} days · ${it.country} · ${it.tag}`} title={it.name} body={it.summary} image={it.image} />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-3 rounded-[1.75rem] border border-border bg-card p-5 shadow-sm sm:grid-cols-3 sm:p-7">
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><CalendarDays size={20}/></span><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Trip length</p><p className="mt-1 font-display text-xl font-bold">{it.days} days</p></div></div>
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/10 text-secondary"><Compass size={20}/></span><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Journey</p><p className="mt-1 text-sm font-semibold">{it.route.join(" → ")}</p></div></div>
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Sparkles size={20}/></span><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Guide price</p><p className="mt-1 font-display text-xl font-bold">from ${it.price.toLocaleString()} <span className="font-body text-xs font-medium text-muted-foreground">per person</span></p></div></div>
        </div>
        <p className="mt-3 text-xs leading-5 text-muted-foreground">This is an indicative guide price, not a live quote. Your final price is confirmed around your travel dates, group size, accommodation and availability.</p>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">The experience, day by day</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Here’s how your journey unfolds.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">A thoughtful route with time to explore, enjoy the scenery and make the most of each stop. Your private itinerary can be adjusted to suit your dates and interests.</p>
            </div>
            <div className="relative space-y-4 before:absolute before:bottom-8 before:left-[1.35rem] before:top-8 before:w-px before:bg-border sm:space-y-5">
              {it.dayByDay.map((day) => (
                <article key={day.day} className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 sm:gap-4">
                  <div className="z-10 grid h-11 w-11 place-items-center rounded-2xl border-4 border-background bg-primary font-display text-sm font-extrabold text-primary-foreground shadow-sm">{String(day.day).padStart(2,"0")}</div>
                  <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary">Day {day.day}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin size={12}/>{it.route[Math.min(Math.floor((day.day-1)*it.route.length/it.days),it.route.length-1)]}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{day.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{day.body}</p>
                    <div className="mt-5 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
                      <div className="flex items-start gap-2"><span className="mt-0.5 text-primary"><MapPin size={16}/></span><div><p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Where you’ll stay</p><p className="mt-1 text-sm font-semibold">{day.stay}</p></div></div>
                      <div className="flex items-start gap-2"><span className="mt-0.5 text-secondary"><Clock3 size={16}/></span><div><p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Meals</p><p className="mt-1 text-sm font-semibold">{day.meals}</p></div></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] bg-ink p-6 text-ink-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Make it yours</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Your dates. Your pace. Your safari.</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">Tell us who’s travelling and what matters most. We’ll help shape the details and confirm a tailored quote.</p>
              <a href="#itinerary-enquiry" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:brightness-110">Request a tailored quote <ArrowRight size={16}/></a>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold">What you can look forward to</h3>
              <ul className="mt-4 space-y-3">{it.activities.map((activity) => <li key={activity} className="flex items-start gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-primary"/><span>{activity}</span></li>)}</ul>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold">Suggested stays</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">Examples of accommodation featured in this sample itinerary; final properties are subject to confirmation.</p>
              <ul className="mt-4 space-y-2">{it.lodges.map((lodge) => <li key={lodge} className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-secondary"/>{lodge}</li>)}</ul>
            </div>
            <div className="rounded-[1.5rem] bg-primary/5 p-6">
              <div className="flex items-center gap-2 font-semibold"><MessageCircle size={17} className="text-primary"/> Need help choosing?</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Ask us about the best time to travel, route options and what to expect on safari.</p>
              <a href="https://wa.me/254745043121" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Chat on WhatsApp <ArrowRight size={15}/></a>
            </div>
          </aside>
        </div>

        <section id="itinerary-enquiry" className="mt-16 scroll-mt-28 rounded-[2rem] bg-card p-5 sm:p-8">
          <div className="mb-7 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Start planning</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Let’s make this your journey.</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Share a few details and our team can help tailor this itinerary to your travel dates, group and budget.</p></div>
          <EnquiryForm defaultTrip={it.name} />
        </section>
      </section>
    </>
  );
}
