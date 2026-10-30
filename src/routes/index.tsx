import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { img, itineraries, experiences } from "@/lib/site-data";
import { Reveal, SplitWords, PillButton, Counter, Eyebrow } from "@/components/site/motion";
import { CTABanner, SectionHead } from "@/components/site/layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bahari Asili Safaris — Discover Africa" },
      { name: "description", content: "Premium tailor-made safaris in Kenya and Tanzania: Maasai Mara, Serengeti, Ngorongoro and Zanzibar." },
      { property: "og:title", content: "Bahari Asili Safaris — Discover Africa" },
      { property: "og:description", content: "Premium tailor-made safaris in Kenya and Tanzania." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Featured />
      <Experiences />
      <Impact />
      <Confidence />
      <CTABanner image={img.amboseli} title="A smarter, simpler way to explore wild Africa." />
      <Reviews />
    </>
  );
}

function Hero() {
  const pins = [
    { x: 120, y: 330, label: "Nairobi", d: "Day 1" },
    { x: 360, y: 210, label: "Maasai Mara", d: "Day 3" },
    { x: 620, y: 290, label: "Serengeti", d: "Day 5" },
    { x: 880, y: 150, label: "Zanzibar", d: "Day 8" },
  ];
  return (
    <section className="p-2 sm:p-3">
      <div className="relative min-h-[100svh] overflow-hidden rounded-[2rem] text-ink-foreground">
        <img src={img.hero} alt="Elephants crossing the savannah at sunset" width={1920} height={1088} className="kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="scrim absolute inset-0" />

        <svg viewBox="0 0 1000 420" className="pointer-events-none absolute inset-x-0 top-[22%] hidden w-full opacity-90 md:block" fill="none">
          <path d="M120 330 C 220 300, 260 200, 360 210 S 520 330, 620 290 S 800 120, 880 150" stroke="currentColor" strokeWidth="2" strokeDasharray="0" className="route-draw" strokeLinecap="round" />
          {pins.map((p, i) => (
            <g key={p.label} className="pin-pop" style={{ ["--i" as string]: i }}>
              <circle cx={p.x} cy={p.y} r="16" className="fill-primary/30" />
              <circle cx={p.x} cy={p.y} r="7" className="fill-primary stroke-ink-foreground" strokeWidth="2" />
              <rect x={p.x - 46} y={p.y - 52} width="92" height="26" rx="13" className="fill-ink/70" />
              <text x={p.x} y={p.y - 35} textAnchor="middle" className="fill-ink-foreground text-[11px] font-semibold">{p.d} · {p.label}</text>
            </g>
          ))}
        </svg>

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-12 pt-36">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal><Eyebrow>Kenya · Tanzania · Zanzibar</Eyebrow></Reveal>
              <h1 className="mt-6 text-5xl font-extrabold sm:text-7xl lg:text-8xl">
                <SplitWords text="Discover Africa." />
                <br />
                <SplitWords text="Your journey starts here." className="text-ink-foreground/75" />
              </h1>
              <Reveal i={6}>
                <p className="mt-6 max-w-lg text-lg text-ink-foreground/80">Tailor-made safaris across Kenya and Tanzania. From your first game drive to your last sunset, everything in one place.</p>
              </Reveal>
              <Reveal i={7} className="mt-8 flex flex-wrap items-center gap-4">
                <PillButton to="/itineraries">Explore itineraries</PillButton>
                <span className="text-sm text-ink-foreground/70">Free trip planning</span>
              </Reveal>
            </div>
            <div className="relative hidden h-[360px] lg:block">
              <div className="float-card glass absolute right-0 top-0 w-64 rounded-3xl border border-ink-foreground/20 p-5" style={{ ["--i" as string]: 0 }}>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-ink-foreground/70">Your next adventure</p>
                <p className="mt-2 font-display text-xl font-bold">A journey shaped around you</p>
                <div className="mt-4 flex items-end justify-between"><span className="text-sm text-ink-foreground/70">Flexible dates</span><span className="font-display text-3xl font-bold">Africa</span></div>
              </div>
              <div className="float-card absolute left-0 top-36 flex items-center gap-3 rounded-full bg-card p-2 pr-5 text-foreground shadow-[var(--shadow-soft)]" style={{ ["--i" as string]: 1 }}>
                <img src={img.culture} alt="" className="h-11 w-11 rounded-full object-cover" />
                <div><p className="text-sm font-bold">Local perspective</p><p className="text-xs text-muted-foreground">Kenya & Tanzania</p></div>
              </div>
              <div className="float-card glass absolute bottom-0 right-6 w-72 rounded-3xl border border-ink-foreground/20 p-5" style={{ ["--i" as string]: 2 }}>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-ink-foreground/70">Itinerary · Day 03</p>
                <p className="mt-1 font-display text-lg font-bold">Maasai Mara · 1,510 km²</p>
                <p className="mt-2 text-sm text-ink-foreground/75">Morning drive along the Mara River, then a bush breakfast under the acacias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const feats = [
    { n: "01", t: "Choose your region", b: "Kenya, Tanzania or both, from the Mara to Zanzibar's reefs." },
    { n: "02", t: "Pick your experience", b: "Big Five drives, walking safaris, beach or culture." },
    { n: "03", t: "Book with confidence", b: "Clear pricing and confirmation within 24 hours." },
    { n: "04", t: "Travel & explore", b: "A local team on call from arrival to departure." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <Reveal mask className="aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img src={img.jeep} alt="Guests watching lions from a safari vehicle" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal i={3} className="absolute -right-4 bottom-10 flex items-center gap-3 rounded-full bg-card p-2 pr-6 shadow-[var(--shadow-soft)] sm:-right-10">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">✓</span>
            <div><p className="text-sm font-bold">Trip confirmed</p><p className="text-xs text-muted-foreground">Serengeti · 8 days · 2 guests</p></div>
          </Reveal>
        </div>
        <div>
          <SectionHead eyebrow="Why Bahari Asili" title="Your journey into the wild begins here." body="Expert guidance, seamless planning and personal experiences designed around how you want to see Africa." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {feats.map((f, i) => (
              <Reveal key={f.n} i={i + 2} className="group rounded-3xl bg-card p-6 transition duration-500 hover:-translate-y-1 hover:bg-ink hover:text-ink-foreground">
                <span className="text-xs font-bold text-primary">{f.n}</span>
                <h3 className="mt-3 text-xl font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground transition group-hover:text-ink-muted">{f.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + itineraries.length) % itineraries.length);
  return (
    <section className="px-2 sm:px-3">
      <div className="rounded-[2rem] bg-ink px-6 py-24 text-ink-foreground">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead dark eyebrow="Featured itineraries" title="Find the perfect safari for your next adventure." />
            <Reveal i={2} className="flex items-center gap-3">
              <span className="mr-2 text-sm text-ink-muted">{String(active + 1).padStart(2, "0")} / {String(itineraries.length).padStart(2, "0")}</span>
              <button aria-label="Previous" onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-ink-foreground/25 transition hover:bg-ink-foreground hover:text-ink">←</button>
              <button aria-label="Next" onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition hover:scale-105">→</button>
            </Reveal>
          </div>
          <Reveal i={3} className="no-scrollbar mt-12 flex h-[520px] snap-x gap-3 overflow-x-auto md:overflow-visible">
            {itineraries.map((it, i) => {
              const on = i === active;
              return (
                <div
                  key={it.slug}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative min-w-[78%] shrink-0 cursor-pointer snap-center overflow-hidden rounded-[1.75rem] transition-[flex,min-width] duration-[900ms] ease-[var(--ease-out-expo)] md:min-w-0 md:shrink",
                    on ? "md:flex-[4]" : "md:flex-[1]",
                  )}
                >
                  <img src={it.image} alt={it.name} loading="lazy" className={cn("absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms]", on ? "scale-100" : "scale-110")} />
                  <div className="scrim absolute inset-0" />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold">{it.tag}</span>
                  <div className={cn("absolute inset-x-0 bottom-0 p-6 transition-all duration-700", on ? "translate-y-0 opacity-100" : "md:translate-y-6 md:opacity-0")}>
                    <p className="text-sm text-ink-foreground/75">{it.days} days · {it.country} · from ${it.price.toLocaleString()}</p>
                    <h3 className="mt-1 text-3xl font-bold">{it.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-ink-foreground/80">{it.summary}</p>
                    <Link to="/itineraries/$slug" params={{ slug: it.slug }} className="mt-4 inline-flex rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-foreground">View itinerary ↗</Link>
                  </div>
                  <span className={cn("absolute bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-sm font-semibold transition-opacity duration-500 [writing-mode:vertical-rl] md:block", on ? "opacity-0" : "opacity-100")}>{it.name}</span>
                </div>
              );
            })}
          </Reveal>
          <p className="mt-6 text-sm text-ink-muted">Hover, swipe or use the arrows to explore.</p>
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead eyebrow="Experiences" title="Plan safaris with ease. Travel with confidence." body="Flexible options, real-time availability and instant confirmation make finding the right trip simple." />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((e, i) => (
          <Reveal key={e.title} i={i} className="group img-zoom relative h-[460px] rounded-[1.75rem]">
            <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="scrim absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground">
              <h3 className="text-2xl font-bold">{e.title}</h3>
              <div className="grid grid-rows-[0fr] transition-all duration-700 group-hover:grid-rows-[1fr]">
                <p className="overflow-hidden text-sm text-ink-foreground/80"><span className="block pt-2">{e.body}</span></p>
              </div>
              <span className="mt-4 inline-grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45">↗</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  const values = [
    { title: "Kenya & Tanzania", body: "Explore two remarkable safari countries in one connected journey." },
    { title: "Wildlife & coast", body: "Pair time in the bush with beaches and island experiences." },
    { title: "Private journeys", body: "Shape the pace, route and details around your group." },
    { title: "Personal planning", body: "Start with a conversation and build an itinerary that fits." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <div className="rounded-[2rem] bg-sand px-6 py-20 sm:px-12">
        <Reveal><h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">Built around the places and experiences you want to discover.</h2></Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => <Reveal key={item.title} i={i} className="border-t border-foreground/15 pt-5">
            <p className="font-display text-2xl font-bold">{item.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Confidence() {
  const items = [
    { t: "Handpicked lodges & camps", b: "From classic tented camps to signature lodges, every property is visited by our team each season.", image: img.lodge },
    { t: "Certified local guides", b: "Kenyan and Tanzanian guides with years of tracking experience and deep knowledge of the land.", image: img.culture },
    { t: "Flexible changes", b: "Plans change. Move dates or swap camps without the stress — we handle it.", image: img.crater },
    { t: "Booking assistance, 24/7", b: "A real person on WhatsApp from your first question until you're home.", image: img.jeep },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal mask className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          {items.map((it, i) => (
            <img key={it.t} src={it.image} alt={it.t} loading="lazy" className={cn("absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms]", i === open ? "scale-100 opacity-100" : "scale-110 opacity-0")} />
          ))}
        </Reveal>
        <div className="flex flex-col justify-center">
          <SectionHead eyebrow="Booking confidence" title="Book safaris with confidence. Travel without hassle." />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {items.map((it, i) => (
              <Reveal key={it.t} i={i + 2}>
                <button onClick={() => setOpen(i)} className="flex w-full items-center justify-between py-6 text-left">
                  <span className={cn("font-display text-xl font-bold transition-colors sm:text-2xl", i === open ? "text-foreground" : "text-muted-foreground")}>{it.t}</span>
                  <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-500", i === open ? "rotate-45 bg-primary text-primary-foreground" : "bg-muted")}>+</span>
                </button>
                <div className={cn("grid transition-all duration-700", i === open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <p className="overflow-hidden text-muted-foreground">{it.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead eyebrow="Traveller stories" title="Your experience could inspire the next journey." body="We're preparing this space for verified guest feedback. In the meantime, speak with us directly about the kind of safari you're planning." />
      <Reveal i={2} className="mt-10"><PillButton to="/contact" variant="dark">Talk to our team</PillButton></Reveal>
    </section>
  );
}
