import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, CONTACT } from "@/lib/site-data";
import { PillButton, Reveal, SplitWords, Eyebrow } from "./motion";

const NAV = [
  { to: "/safaris", label: "Safaris" },
  { to: "/tours", label: "Tours" },
  { to: "/destinations", label: "Destinations" },
  { to: "/itineraries", label: "Itineraries" },
  { to: "/lodges", label: "Lodges" },
  { to: "/about", label: "About" },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Bahari Asili Safaris home" className={cn("inline-flex items-center", className)}>
      <img
        src="/images/logo/logo-horizontal.png"
        alt="Bahari Asili Safaris"
        className="h-9 w-auto max-w-[190px] object-contain sm:h-10"
      />
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 transition-all duration-700",
          scrolled ? "bg-card/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl" : "glass text-ink-foreground",
        )}
      >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium opacity-80 transition hover:bg-current/10 hover:opacity-100"
                activeProps={{ className: "opacity-100 bg-current/10" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden rounded-full px-4 py-2 text-sm font-medium md:block">Contact</Link>
          <PillButton to="/enquire" className="hidden sm:inline-flex">Enquire</PillButton>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground lg:hidden">
            <span className="text-lg">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-card p-4 text-foreground shadow-[var(--shadow-soft)] lg:hidden">
          {[...NAV, { to: "/plan", label: "Plan your trip" }, { to: "/reviews", label: "Reviews" }, { to: "/contact", label: "Contact" }, { to: "/enquire", label: "Enquire" }].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium hover:bg-muted">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-4 pb-8 pt-20 text-ink-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-muted">Tailor-made safaris across Kenya and Tanzania, from the Mara to Zanzibar's shores.</p>
            <div className="mt-6 flex gap-2">
              <a href="https://www.instagram.com/bahariasilisafaris/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/20 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"><Instagram aria-hidden="true" size={17} strokeWidth={1.8} /></a>
              <a href="https://www.facebook.com/bahariasilisafaris/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/20 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"><Facebook aria-hidden="true" size={17} strokeWidth={1.8} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink-muted">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (<li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink-muted">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/plan" className="hover:text-primary">Plan your trip</Link></li>
              <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/enquire" className="hover:text-primary">Enquire</Link></li>
            </ul>
            <div className="mt-6 space-y-1 text-sm text-ink-muted">
              <a href={`tel:${CONTACT.whatsapp}`} className="block transition hover:text-primary">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="block transition hover:text-primary">{CONTACT.email}</a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="inline-block transition hover:text-primary">Chat on WhatsApp ↗</a>
              <p>{CONTACT.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink-muted">Field notes</h4>
            <p className="mt-4 text-sm text-ink-muted">Seasonal sightings and new itineraries, once a month.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("email");
                const subject = encodeURIComponent("Please add me to Bahari Asili Safaris field notes");
                const body = encodeURIComponent(`Please send occasional safari updates to: ${email}`);
                window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
                toast.info("Your email app will open so you can request updates.");
              }}
              className="mt-4 flex rounded-full bg-ink-foreground/10 p-1"
            >
              <input name="email" required type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-ink-muted" />
              <button type="submit" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Request</button>
            </form>
          </div>
        </div>
        <div className="footer-marquee mt-16" aria-label="Bahari Asili Safaris">
          <div className="footer-marquee-track" aria-hidden="true">
            <span>Bahari Asili Safaris</span>
            <span>Bahari Asili Safaris</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-ink-foreground/10 pt-6 text-xs text-ink-muted sm:flex-row">
          <span>© 2026 {BRAND}</span>
          <span>Safaris · Tours · Lodges · Support</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, body, image, children }: { eyebrow: string; title: string; body?: string; image: string; children?: ReactNode }) {
  return (
    <section className="p-2 sm:p-3">
      <div className="relative flex min-h-[78vh] items-end overflow-hidden rounded-[2rem] text-ink-foreground">
        <img src={image} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="scrim absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-40">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold sm:text-7xl"><SplitWords text={title} /></h1>
          {body && <Reveal i={4}><p className="mt-5 max-w-xl text-lg text-ink-foreground/80">{body}</p></Reveal>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, body, dark }: { eyebrow: string; title: string; body?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <Reveal><Eyebrow className={dark ? "text-ink-foreground" : ""}>{eyebrow}</Eyebrow></Reveal>
      <Reveal i={1}><h2 className="mt-5 text-4xl font-bold sm:text-6xl">{title}</h2></Reveal>
      {body && <Reveal i={2}><p className={cn("mt-5 text-lg", dark ? "text-ink-muted" : "text-muted-foreground")}>{body}</p></Reveal>}
    </div>
  );
}

export function EnquiryForm({ defaultTrip = "" }: { defaultTrip?: string }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="rounded-[2rem] bg-card p-10 text-center">
        <h3 className="text-3xl font-bold">Your enquiry is ready.</h3>
        <p className="mt-3 text-muted-foreground">WhatsApp should have opened with your trip details. Press Send there to deliver your enquiry to our team.</p>
        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Open WhatsApp ↗</a>
      </div>
    );
  const field = "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary";
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      const message = [
        "Hello Bahari Asili Safaris, I'd like to enquire about a trip.",
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone / WhatsApp: ${data.get("phone") || "Not provided"}`,
        `Trip of interest: ${data.get("trip") || "Open to suggestions"}`,
        `Travel month: ${data.get("month") || "Flexible"}`,
        `Travellers: ${data.get("travellers")}`,
        `Trip details: ${data.get("details") || "Not provided"}`,
      ].join("\n");
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setSent(true);
    }} className="grid gap-4 rounded-[2rem] bg-card p-6 sm:grid-cols-2 sm:p-10">
      <input name="name" required placeholder="Full name" autoComplete="name" className={field} />
      <input name="email" required type="email" placeholder="Email" autoComplete="email" className={field} />
      <input name="phone" placeholder="Phone / WhatsApp" autoComplete="tel" className={field} />
      <input name="trip" placeholder="Trip of interest" defaultValue={defaultTrip} className={field} />
      <input name="month" type="month" aria-label="Travel month" className={field} />
      <select name="travellers" className={field} defaultValue="2"><option value="1">1 traveller</option><option value="2">2 travellers</option><option value="3–4">3–4 travellers</option><option value="5+">5+ travellers</option></select>
      <textarea name="details" rows={4} placeholder="Tell us about your dream safari" className={cn(field, "sm:col-span-2")} />
      <button type="submit" className="rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition hover:-translate-y-0.5 sm:col-span-2">Continue to WhatsApp ↗</button>
    </form>
  );
}

export function CTABanner({ image, title = "Your Africa story starts with one conversation." }: { image: string; title?: string }) {
  return (
    <section className="px-2 py-2 sm:px-3">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-28 text-center text-ink-foreground">
        <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal><h2 className="text-4xl font-bold sm:text-6xl">{title}</h2></Reveal>
          <Reveal i={2} className="mt-8 flex justify-center"><PillButton to="/enquire">Start planning</PillButton></Reveal>
        </div>
      </div>
    </section>
  );
}
