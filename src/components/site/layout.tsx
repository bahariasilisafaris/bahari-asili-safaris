import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Facebook, Instagram, Youtube, ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, CONTACT } from "@/lib/site-data";
import { PillButton, Reveal, SplitWords, Eyebrow } from "./motion";

const NAV = [
  { to: "/destinations", label: "Destinations" },
  { to: "/itineraries", label: "Safari packages" },
  { to: "/tours", label: "Tours" },
  { to: "/lodges", label: "Lodges" },
  { to: "/about", label: "About us" },
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
 const [open,setOpen]=useState(false);
 return <>
  <div className="ba-utility"><div><a href={`tel:${CONTACT.whatsapp}`}>{CONTACT.phone}</a><span>Kenya & Tanzania safari specialists</span></div><div><Link to="/contact">Schedule a consultation</Link><Link to="/contact" className="ba-utility-quote">Get free quote</Link><span className="ba-language">EN <span aria-hidden="true">⌄</span></span></div></div>
  <header className="ba-header"><nav className="ba-nav"><Logo/><ul className="ba-nav-links">
   <li><Link to="/">Home</Link></li><li className="ba-nav-dropdown"><Link to="/destinations">Destinations <span>⌄</span></Link><div><Link to="/destinations">Maasai Mara</Link><Link to="/destinations">Amboseli</Link><Link to="/destinations">Serengeti</Link><Link to="/destinations">Zanzibar</Link><Link to="/destinations">All destinations</Link></div></li>
   <li><Link to="/itineraries">Kenya safaris</Link></li><li><Link to="/itineraries">Tanzania safaris</Link></li><li><Link to="/itineraries">Tours & packages</Link></li><li><Link to="/about">Travel guides</Link></li><li><Link to="/about">About us</Link></li><li><Link to="/contact">Contact</Link></li>
  </ul><Link to="/contact" className="ba-nav-cta">Plan your safari <ArrowRight size={15}/></Link><button aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="ba-menu-button">{open?<X/>:<Menu/>}</button></nav>
  {open&&<div className="ba-mobile-menu">{[{to:"/",label:"Home"},{to:"/destinations",label:"Destinations"},{to:"/itineraries",label:"Kenya safaris"},{to:"/itineraries",label:"Tanzania safaris"},{to:"/itineraries",label:"Tours & packages"},{to:"/about",label:"Travel guides"},{to:"/about",label:"About us"},{to:"/contact",label:"Contact"}].map((item,i)=><Link key={i} to={item.to} onClick={()=>setOpen(false)}>{item.label}<ArrowRight size={15}/></Link>)}</div>}</header>
 </>;
}

export function Footer() {
 return <footer className="ba-footer"><div className="ba-footer-grid"><div><Logo/><p className="mt-5 max-w-xs text-sm leading-7 text-white/65">Thoughtfully planned safaris across Kenya and Tanzania. Discover East Africa at your own pace.</p><p className="mt-5 text-xs uppercase tracking-widest text-white/45">Kenya · Tanzania · Zanzibar</p></div>
 <div><h3>Explore</h3><Link to="/destinations">Destinations</Link><Link to="/itineraries">Safari packages</Link><Link to="/tours">Tours & experiences</Link><Link to="/lodges">Safari lodges</Link></div>
 <div><h3>Bahari Asili</h3><Link to="/about">About us</Link><Link to="/contact">Contact</Link><Link to="/reviews">Guest feedback</Link><Link to="/contact">FAQs</Link></div>
 <div><h3>Get in touch</h3><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={`tel:${CONTACT.whatsapp}`}>{CONTACT.phone}</a><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp us ↗</a><p>{CONTACT.address}</p><p className="mt-4 text-xs leading-6 text-white/55">For enquiries and trip support, contact our team directly.</p></div></div>
 <div className="ba-footer-bottom"><span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span><span>Made for meaningful journeys across East Africa.</span></div></footer>;
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
 const [sent,setSent]=useState(false);
 if(sent) return <div className="rounded-xl bg-card p-8 text-center"><h3 className="text-2xl font-bold">Your enquiry is ready.</h3><p className="mt-3 text-sm text-muted-foreground">WhatsApp should have opened with your trip details. Press Send there to deliver your enquiry.</p><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Open WhatsApp ↗</a></div>;
 const field="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
 return <form onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);const message=[
 "Hello Bahari Asili Safaris, I'd like to enquire about a safari.",
 `Name: ${data.get("name")}`,`Email: ${data.get("email")}`,`Phone / WhatsApp: ${data.get("phone")}`,
 `Destination: ${data.get("destination")}`,`Travel dates: ${data.get("dates")||"Flexible"}`,
 `Travellers: ${data.get("travellers")}`,`Budget: ${data.get("budget")||"To discuss"}`,`Message: ${data.get("details")||"Please contact me to discuss"}`
 ].join("\n");window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");setSent(true);}} className="grid gap-3 sm:grid-cols-2">
 <input name="name" required placeholder="Full name" autoComplete="name" className={field}/>
 <input name="email" required type="email" placeholder="Email address" autoComplete="email" className={field}/>
 <input name="phone" required placeholder="Phone / WhatsApp" autoComplete="tel" className={field}/>
 <select name="destination" defaultValue={defaultTrip||"Kenya & Tanzania"} className={field}><option>Kenya & Tanzania</option><option>Kenya</option><option>Tanzania</option><option>Zanzibar / coast</option><option>Not sure yet</option></select>
 <input name="dates" type="text" placeholder="Travel dates (e.g. July 2027)" className={field}/>
 <select name="travellers" defaultValue="2 travellers" className={field}><option>1 traveller</option><option>2 travellers</option><option>3–4 travellers</option><option>5–8 travellers</option><option>9+ travellers</option></select>
 <select name="budget" defaultValue="" className={field}><option value="">Approx. budget per person</option><option>Under $2,000</option><option>$2,000–$4,000</option><option>$4,000–$6,000</option><option>$6,000+</option><option>Not decided</option></select>
 <textarea name="details" rows={4} placeholder="Tell us a little about the safari you have in mind" className={field+" sm:col-span-2"}/>
 <button type="submit" className="rounded-md bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 sm:col-span-2">Continue to WhatsApp ↗</button>
 </form>;
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


/** Persistent WhatsApp contact shortcut, available from every page. */
/** Quiet, persistent WhatsApp shortcut with a hover-only desktop label. */
export function FloatingWhatsApp() {
  const message = "Hello Bahari Asili Safaris, I have a question about planning a safari in Kenya or Tanzania.";
  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="Chat with Bahari Asili Safaris on WhatsApp" className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-[60] inline-flex items-center gap-0 sm:right-7">
      <span className="whatsapp-label pointer-events-none mr-3 translate-x-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-foreground opacity-0 shadow-[0_4px_18px_rgb(0_0_0_/_14%)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        Need Help? <strong className="font-bold">Chat with us</strong>
      </span>
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_5px_18px_rgb(0_0_0_/_18%)] transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16">
        <svg viewBox="0 0 32 32" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3.2A12.7 12.7 0 0 0 5.12 22.38L3.4 28.65l6.42-1.68A12.72 12.72 0 1 0 16.04 3.2Zm0 23.12c-1.96 0-3.88-.53-5.55-1.54l-.4-.24-3.81 1 1.02-3.71-.26-.41a10.38 10.38 0 1 1 9 4.9Zm5.7-7.78c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.19.21-.37.24-.69.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.63s1.14 3.05 1.3 3.26c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z"/>
        </svg>
      </span>
    </a>
  );
}
