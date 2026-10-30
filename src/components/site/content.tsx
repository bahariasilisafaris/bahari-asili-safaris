import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";

export type ContentCardItem = {
  title: string;
  body: string;
  image: string;
  meta?: string;
  href?: string;
};

export function ContentCards({ items, columns = 3 }: { items: ContentCardItem[]; columns?: 2 | 3 | 4 }) {
  const grid = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-5 ${grid}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} i={index} className="group overflow-hidden rounded-[1.75rem] bg-card transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
          <div className="img-zoom relative aspect-[5/4] overflow-hidden">
            <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
            {item.meta && <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-ink-foreground backdrop-blur">{item.meta}</span>}
          </div>
          <div className="p-6">
            <h3 className="font-display text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
            {item.href && <Link to={item.href as never} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3">Explore more <span aria-hidden="true">↗</span></Link>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
