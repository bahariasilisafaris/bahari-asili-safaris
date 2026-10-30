import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Globe2, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sparkles, X, Plane, CalendarDays, Users, ChevronDown, Play } from "lucide-react";
import { destinations, img, itineraries, CONTACT } from "@/lib/site-data";
import { EnquiryForm } from "@/components/site/layout";

function Heading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center"><p className="ba-eyebrow">{eyebrow}</p><h2 className="ba-heading mt-3">{title}</h2>{body && <p className="mt-4 text-sm leading-7 text-[var(--ba-muted)] sm:text-base">{body}</p>}</div>;
}

export function HomeExperience() {
  const [destination, setDestination] = useState("Any destination");
  const [duration, setDuration] = useState("Any duration");
  const [travellers, setTravellers] = useState("Any group");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [filtered, setFiltered] = useState(false);
  const tours = useMemo(() => itineraries.filter((tour) => {
    const byPlace = destination === "Any destination" || tour.country === destination || (destination === "Both countries");
    const byDays = duration === "Any duration" || (duration === "1–5 days" ? tour.days <= 5 : duration === "6–9 days" ? tour.days >= 6 && tour.days <= 9 : tour.days >= 10);
    return byPlace && byDays;
  }), [destination, duration]);
  const faqs = [
    ["When is the best time to visit Kenya or Tanzania?", "Wildlife viewing is rewarding throughout the year, with seasonal highlights that vary by region. The best timing depends on the places you want to visit, the migration pattern you hope to follow and your travel style."],
    ["Can I combine Kenya and Tanzania in one safari?", "Yes. A cross-border journey can connect places such as the Maasai Mara and Serengeti. We’ll help consider border arrangements, flight connections, travel time and the pace that suits your trip."],
    ["Are your safaris private or shared?", "The itineraries shown are starting points for planning. Tell us your group size and preferences and we can discuss a private journey or suitable group options."],
    ["Can I add Zanzibar or the Kenyan coast?", "A beach extension can be paired with a safari, subject to your dates and flight connections. Zanzibar and Kenya’s coast offer different ways to slow down after time in the bush."],
    ["How do I get a price for my safari?", "Prices shown on selected itineraries are guide prices from the existing programme data. Your final proposal depends on dates, accommodation, transport, group size and inclusions."],
    ["What should I include in my first enquiry?", "Share your approximate dates, number of travellers, destinations of interest and a comfortable budget range. If your plans are still flexible, that’s absolutely fine."],
  ] as const;
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, answer]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <div className="ba-home">
    <section className="ba-hero">
      <img src={img.hero} alt="" fetchPriority="high" className="ba-hero-image" />
      <video className="ba-hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://raw.githubusercontent.com/Sheddymae/bahari-asili-safaris/922fffd454c0b430a5ee4cb11591a8b4c9519796/public/images/hero/video-poster.jpg" aria-hidden="true">
        <source src="https://raw.githubusercontent.com/Sheddymae/bahari-asili-safaris/922fffd454c0b430a5ee4cb11591a8b4c9519796/public/videos/hero-drone-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="https://raw.githubusercontent.com/Sheddymae/bahari-asili-safaris/922fffd454c0b430a5ee4cb11591a8b4c9519796/public/videos/hero-drone-desktop.mp4" type="video/mp4" />
      </video>
      <div className="ba-hero-shade" />
      <div className="ba-hero-copy">
        <p className="ba-eyebrow ba-eyebrow-light">KENYA · TANZANIA · EAST AFRICA</p>
        <h1>Wild Africa.<br/><em>Wonderfully personal.</em></h1>
        <p>Discover the wild beauty of Kenya and Tanzania on a safari shaped around your interests, your pace and the moments you want to remember.</p>
        <div className="ba-hero-actions">
          <button className="ba-button" onClick={() => setQuoteOpen(true)}>Plan your safari <ArrowRight size={16}/></button>
          <a className="ba-button ba-button-outline" href="#safaris">Explore safari journeys</a>
        </div>
        <div className="ba-trust"><span><ShieldCheck size={16}/> Personal trip planning</span><span><Globe2 size={16}/> Kenya & Tanzania</span><span><HeartHandshake size={16}/> Journeys shaped around you</span></div>
      </div>
      <div className="ba-search">
        <label><span>Destination</span><select value={destination} onChange={e=>setDestination(e.target.value)}><option>Any destination</option><option>Kenya</option><option>Tanzania</option><option>Both countries</option></select></label>
        <label><span>Duration</span><select value={duration} onChange={e=>setDuration(e.target.value)}><option>Any duration</option><option>1–5 days</option><option>6–9 days</option><option>10+ days</option></select></label>
        <label><span>Travellers</span><select value={travellers} onChange={e=>setTravellers(e.target.value)}><option>Any group</option><option>1–2 travellers</option><option>3–4 travellers</option><option>5+ travellers</option></select></label>
        <button onClick={()=>{setFiltered(true);document.getElementById("safaris")?.scrollIntoView({behavior:"smooth"});}} className="ba-button">Find my safari <ArrowRight size={16}/></button>
      </div>
    </section>

    <section className="ba-section ba-destinations" id="destinations">
      <Heading eyebrow="Explore East Africa" title="A remarkable region, many ways to explore" body="From open savannah and volcanic highlands to warm Indian Ocean shores, discover the places that make your journey your own."/>
      <div className="ba-destination-grid">{destinations.slice(0,4).map((place,i)=><Link key={place.slug} to="/destinations/$slug" params={{slug:place.slug}} className="ba-destination-card"><img src={place.image} alt={place.name} loading="lazy"/><div><small>{place.country}</small><h3>{place.name}</h3><p>{place.body}</p></div><span className="ba-round-arrow"><ArrowRight size={18}/></span></Link>)}</div>
      <div className="mt-8 text-center"><Link className="ba-text-link" to="/destinations">View all destinations <ArrowRight size={16}/></Link></div>
    </section>

    <section className="ba-combo-wrap"><div className="ba-combo"><div><p className="ba-eyebrow ba-eyebrow-light">ONE JOURNEY · TWO COUNTRIES</p><h2>Why choose one when you can experience both?</h2><p>Connect Kenya’s iconic wildlife country with Tanzania’s vast plains. We’ll help you plan a route that makes sense for your dates and pace.</p><button className="ba-button ba-button-light" onClick={()=>setQuoteOpen(true)}>Plan a combined safari <ArrowRight size={16}/></button></div><div className="ba-route" aria-label="Illustrative route connecting Nairobi, Maasai Mara, Serengeti and Zanzibar"><div className="ba-route-line"/>{[["Nairobi","8%","12%"],["Maasai Mara","32%","35%"],["Serengeti","61%","20%"],["Zanzibar","85%","66%"]].map(([name,left,top])=><span key={name} className="ba-route-stop" style={{left,top}}><i/>{name}</span>)}</div></div></section>

    <section className="ba-section" id="safaris"><Heading eyebrow="Find your safari" title="Journeys made for the wild at heart" body="Explore a selection of our Kenya and Tanzania itineraries. Each can be a starting point for a journey shaped around you."/>{filtered && <p className="mb-5 text-center text-sm text-[var(--ba-muted)]">Showing {tours.length} matching itineraries · {travellers.toLowerCase()} <button className="ba-text-link ml-2" onClick={()=>{setDestination("Any destination");setDuration("Any duration");setTravellers("Any group");setFiltered(false);}}>Clear filters</button></p>}<div className="ba-tour-grid">{(filtered?tours:itineraries).map((tour)=><article className="ba-tour-card" key={tour.slug}><Link to="/itineraries/$slug" params={{slug:tour.slug}} className="ba-tour-image"><img src={tour.image} alt={tour.name} loading="lazy"/><span>{tour.tag}</span></Link><div className="ba-tour-content"><p className="ba-tour-meta">{tour.days} days <i/> {tour.country}</p><h3>{tour.name}</h3><p>{tour.summary}</p><div className="ba-tour-bottom"><strong>{tour.price ? `From $${tour.price.toLocaleString()}` : "Price on request"}</strong><Link to="/itineraries/$slug" params={{slug:tour.slug}}>View tour <ArrowRight size={15}/></Link></div></div></article>)}</div><div className="mt-9 text-center"><Link to="/itineraries" className="ba-button ba-button-dark">View all safaris <ArrowRight size={16}/></Link></div></section>

    <section className="ba-group"><img src={img.lodge} alt="Safari camp set within the East African landscape" loading="lazy"/><div><p className="ba-eyebrow ba-eyebrow-light">PRIVATE & GROUP SAFARIS</p><h2>Travelling together? We’ll help bring it all together.</h2><p>From family holidays and celebrations to friends travelling as a group, we’ll help coordinate the route, stays and experiences around everyone.</p><button className="ba-button ba-button-light" onClick={()=>setQuoteOpen(true)}>Tell us about your group <ArrowRight size={16}/></button></div></section>

    <section className="ba-section ba-difference"><div className="ba-difference-image"><img src={img.jeep} alt="Safari vehicle exploring the open plains" loading="lazy"/><span>Curiosity leads the way.</span></div><div><p className="ba-eyebrow">THE BAHARI ASILI APPROACH</p><h2 className="ba-heading">The details make the difference.</h2><p className="mt-4 text-[var(--ba-muted)] leading-7">A rewarding safari is more than a list of places. It’s a journey with the right rhythm, considered connections and room for the unexpected.</p><div className="ba-feature-list"><div><Compass/><span><b>Thoughtful routes</b><small>Journeys designed around geography, season and the time you have.</small></span></div><div><HeartHandshake/><span><b>Personal planning</b><small>A conversation-led approach to shaping the trip around your interests.</small></span></div><div><MapPin/><span><b>Regional variety</b><small>Wildlife, landscapes, culture and coast across East Africa.</small></span></div><div><Sparkles/><span><b>Flexible by design</b><small>Use an existing itinerary as a starting point, then make it yours.</small></span></div></div></div></section>

    <section className="ba-video-section"><Heading eyebrow="A glimpse of the journey" title="Let the landscapes speak" body="A little inspiration for the places and experiences waiting across East Africa."/><div className="ba-video-grid">{([[img.migration,"Across the Maasai Mara"],[img.beach,"From safari plains to the coast"]] as const).map(([image,title])=><button key={title} className="ba-video-card" onClick={()=>setVideoOpen(true)}><img src={image} alt={title} loading="lazy"/><span className="ba-play"><Play fill="currentColor"/></span><b>{title}</b></button>)}</div><p className="ba-note">TODO: Replace these image-led video placeholders with Bahari Asili Safaris footage.</p></section>

    <section className="ba-section ba-proof"><Heading eyebrow="Confidence in every detail" title="A safari company you can get to know" body="We believe trust starts with clear information and a real conversation. We’ll share the details of your proposed journey before you make a decision."/><div className="ba-proof-grid"><div className="ba-proof-card"><ShieldCheck size={30}/><h3>Licensing & recognition</h3><p>Company registrations, tourism licences and verified memberships will be listed here once supplied and confirmed.</p><small>TODO: Add verified licences and association memberships.</small></div><div className="ba-proof-card ba-proof-review"><p className="ba-eyebrow">GUEST FEEDBACK</p><h3>Real journeys. Real voices.</h3><p>We’re preparing this space for verified guest reviews. Until then, speak with our team about your plans and questions.</p><Link to="/contact" className="ba-text-link">Talk to our team <ArrowRight size={16}/></Link><small>TODO: Add approved review platform links and verified testimonials.</small></div></div></section>

    <section className="ba-section ba-faq"><Heading eyebrow="Good to know" title="Kenya & Tanzania safari FAQs" body="A few helpful answers as you begin planning your East Africa journey."/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><div className="ba-faq-grid">{faqs.map(([q,a],i)=><div className="ba-faq-item" key={q}><button aria-expanded={activeFaq===i} onClick={()=>setActiveFaq(activeFaq===i?-1:i)}><span>{q}</span><ChevronDown className={activeFaq===i?"rotate-180":""}/></button>{activeFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="ba-planning"><div><p className="ba-eyebrow ba-eyebrow-light">BEHIND EVERY ITINERARY</p><h2>The planning details matter as much as the destination.</h2><p>We’ll help you think through the practical pieces so your time in East Africa feels well considered from the start.</p><ul><li>Route planning and realistic travel times</li><li>Accommodation options and trip inclusions</li><li>Seasonal considerations and activity choices</li><li>Clear next steps before you confirm</li></ul></div><div className="ba-planning-cards"><article><Plane/><b>Connected journeys</b><span>Cross-border routes and onward connections considered together.</span></article><article><CalendarDays/><b>Made to fit your dates</b><span>Flexible itineraries shaped around your available time.</span></article><article><Users/><b>Personal to your group</b><span>Experiences and pacing suited to the people travelling.</span></article></div></section>

    <section className="ba-cta"><p className="ba-eyebrow ba-eyebrow-light">YOUR NEXT CHAPTER STARTS HERE</p><h2>Ready to plan your Kenya or Tanzania safari?</h2><p>Tell us what you have in mind. We’ll help you take the next step.</p><div><button className="ba-button ba-button-light" onClick={()=>setQuoteOpen(true)}>Ask a safari expert <ArrowRight size={16}/></button><Link to="/contact" className="ba-button ba-button-outline">Get a free quote</Link></div></section>

    <section className="ba-contact-section"><div><p className="ba-eyebrow">LET’S TALK</p><h2 className="ba-heading">Want to know more? Talk to us.</h2><p className="mt-4 max-w-lg leading-7 text-[var(--ba-muted)]">Have a question, a special occasion or an idea taking shape? We’d be glad to hear what you’re planning.</p><div className="ba-contact-links"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={`tel:${CONTACT.whatsapp}`}>{CONTACT.phone}</a><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat on WhatsApp</a></div><button className="ba-button ba-button-dark mt-7" onClick={()=>setQuoteOpen(true)}>Customise my trip <ArrowRight size={16}/></button></div><img src={img.amboseli} alt="Elephants in the golden light of an East African evening" loading="lazy"/></section>

    <section className="ba-brochure"><img src={img.migration} alt="Wildlife in the Maasai Mara" loading="lazy"/><div><p className="ba-eyebrow ba-eyebrow-light">PLAN YOUR NEXT ADVENTURE</p><h2>Keep the inspiration close.</h2><p>Ask us for a tailored safari proposal with itinerary ideas, accommodation options and practical details.</p><button className="ba-button ba-button-light" onClick={()=>setQuoteOpen(true)}>Request a safari proposal <ArrowRight size={16}/></button></div></section>

    <section className="ba-partners"><p className="ba-eyebrow">OUR INDUSTRY CONNECTIONS</p><p>Verified partners and memberships will be shown here once confirmed.</p><small>TODO: Supply approved partner and association logos. No affiliations are implied.</small></section>

    <button className="ba-custom-trip" onClick={()=>setQuoteOpen(true)}>Customise my trip <ArrowRight size={15}/></button>\n    {quoteOpen&&<div className="ba-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setQuoteOpen(false)}}><div className="ba-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title"><button className="ba-modal-close" aria-label="Close enquiry form" onClick={()=>setQuoteOpen(false)}><X/></button><p className="ba-eyebrow">START PLANNING</p><h2 id="quote-title" className="ba-heading mb-5">Tell us about your safari</h2><EnquiryForm/><p className="ba-note">Your enquiry opens WhatsApp so you can review and send it to our team.</p></div></div>}
    {videoOpen&&<div className="ba-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setVideoOpen(false)}}><div className="ba-video-modal" role="dialog" aria-modal="true" aria-label="Safari video placeholder"><button className="ba-modal-close" aria-label="Close video" onClick={()=>setVideoOpen(false)}><X/></button><img src={img.hero} alt="East African safari landscape" /><div><Play/><b>Video coming soon</b><p>TODO: Add Bahari Asili Safaris video footage and hosted video URLs.</p></div></div></div>}
  </div>;
}
