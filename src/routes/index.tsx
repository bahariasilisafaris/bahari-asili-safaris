import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { img, itineraries, experiences } from "@/lib/site-data";
import { Reveal, SplitWords, PillButton, Eyebrow } from "@/components/site/motion";
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
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setMotionAllowed(!preference.matches);
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  const sourceBase = "https://raw.githubusercontent.com/Sheddymae/bahari-asili-safaris/922fffd454c0b430a5ee4cb11591a8b4c9519796";
  const poster = sourceBase + "/public/images/hero/video-poster.jpg";

  return (
    <section id="home" className="p-2 sm:p-3">
      <div className="group relative isolate min-h-[88svh] overflow-hidden rounded-[2rem] bg-ink text-ink-foreground sm:min-h-[94svh]">
        <img
          src={poster}
          alt="Kenyan safari landscape, the opening view of a Bahari Asili journey"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {motionAllowed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-hidden="true"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src={sourceBase + "/public/videos/hero-drone-mobile.mp4"} media="(max-width: 767px)" type="video/mp4" />
            <source src={sourceBase + "/public/videos/hero-drone-desktop.mp4"} type="video/mp4" />
          </video>
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.32)_100%)]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-6 pb-10 pt-36 sm:min-h-[94svh] sm:pb-14 lg:pb-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <Reveal><Eyebrow>Kenya · Tanzania · Zanzibar</Eyebrow></Reveal>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
                <SplitWords text="Discover Africa." className="block" />
                <SplitWords text="Your journey starts here." className="mt-2 block text-ink-foreground/75" />
              </h1>
              <Reveal i={6}>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                  Tailor-made safaris across Kenya and Tanzania. From your first game drive to your last coastal sunset, every detail starts with you.
                </p>
              </Reveal>
              <Reveal i={7} className="mt-8 flex flex-wrap items-center gap-3">
                <PillButton to="/itineraries">Explore itineraries</PillButton>
                <PillButton to="/contact" variant="dark">Plan your safari</PillButton>
                <span className="text-sm text-white/75">Personal trip planning · No obligation</span>
              </Reveal>
            </div>

            <div className="relative hidden h-[330px] lg:block">
              <div className="glass float-card absolute right-0 top-0 w-64 rounded-3xl border border-white/25 p-5" style={{ ["--i" as string]: 0 }}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">The Bahari Asili difference</p>
                <p className="mt-3 font-display text-2xl font-bold leading-tight">Wild places. Thoughtful journeys.</p>
                <p className="mt-3 text-sm leading-6 text-white/75">Local insight, carefully paced itineraries and room to explore.</p>
              </div>
              <div className="float-card absolute bottom-0 left-0 flex items-center gap-3 rounded-full border border-white/20 bg-white p-2 pr-5 text-foreground shadow-[var(--shadow-soft)]" style={{ ["--i" as string]: 1 }}>
                <img src={img.culture} alt="A glimpse of local culture in East Africa" className="h-12 w-12 rounded-full object-cover" />
                <div><p className="text-sm font-bold">Safari & culture</p><p className="text-xs text-muted-foreground">Kenya and Tanzania</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-5 right-7 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:flex">
          <span className="h-px w-10 bg-white/50" /> Scroll to discover
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const feats = [
    { n: "01", t: "Choose your region", b: "Kenya, Tanzania or both, from the Mara to Zanzibar's reefs." },
    { n: "02", t: "Pick your experience", b: "Big Five drives, walking safaris, beach or culture." },
    { n: "03", t: "Book with confidence", b: "Review itinerary options, inclusions and costs before you confirm." },
    { n: "04", t: "Travel & explore", b: "Stay in touch with your safari contact as you travel." },
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
            <div><p className="text-sm font-bold">Your trip, your pace</p><p className="text-xs text-muted-foreground">A journey designed around you</p></div>
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
    { t: "Accommodation options", b: "Compare a range of camps, lodges and coastal stays to find the right fit for your journey.", image: img.lodge },
    { t: "Regional perspective", b: "Explore Kenya and Tanzania with itinerary ideas shaped around the places you want to discover.", image: img.culture },
    { t: "Flexible itineraries", b: "Adjust the route, travel pace and experiences to suit your dates and group.", image: img.crater },
    { t: "Direct communication", b: "Ask questions and discuss your plans with our team by email or WhatsApp.", image: img.jeep },
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
