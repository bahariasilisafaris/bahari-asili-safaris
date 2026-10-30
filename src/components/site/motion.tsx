import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function useInView<T extends Element>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  as: Tag = "div",
  i = 0,
  mask = false,
  className,
  children,
  style,
}: {
  as?: ElementType;
  i?: number;
  mask?: boolean;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn(mask ? "reveal-mask" : "reveal", inView && "is-in", className)}
      style={{ ["--i" as string]: i, ...style }}
    >
      {children}
    </Tag>
  );
}

export function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word-rise mr-[0.22em]" style={{ ["--i" as string]: i }}>
          <span>{w}</span>
        </span>
      ))}
    </span>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1800);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const pill = {
  primary: "bg-primary text-primary-foreground",
  light: "bg-card text-foreground",
  dark: "bg-ink text-ink-foreground",
  glass: "glass text-ink-foreground border border-ink-foreground/20",
};

export function PillButton({
  to,
  children,
  variant = "primary",
  className,
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof pill;
  className?: string;
  params?: Record<string, string>;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "btn-arrow group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-transform duration-500 hover:-translate-y-0.5",
        pill[variant],
        className,
      )}
    >
      {children}
      <span className={cn("arrow h-9 w-9 rounded-full", variant === "primary" ? "bg-ink text-ink-foreground" : "bg-primary text-primary-foreground")}>
        <span>↗</span>
        <span>↗</span>
      </span>
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-current/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}
