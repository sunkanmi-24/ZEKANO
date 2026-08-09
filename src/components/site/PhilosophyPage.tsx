import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import heroImg from "@/assets/philosophy-hero.jpg";
import { getImage } from "@/lib/site-images";

export type PhilosophyItem = {
  icon: LucideIcon;
  title: string;
  body?: string;
  number?: string;
};

export function PhilosophyBreadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="zekano-phil-breadcrumbs px-5 pt-6 sm:px-8 lg:px-12">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm">
        <li>
          <Link to="/" className="hover:text-brand-accent">
            Home
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li>
          <Link to="/company" className="hover:text-brand-accent">
            Company
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5" />
        <li>
          <Link to="/our-philosophy" className="hover:text-brand-accent">
            Our Philosophy
          </Link>
        </li>
        {current !== "Our Philosophy" && (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <li className="text-brand-accent">{current}</li>
          </>
        )}
      </ol>
    </nav>
  );
}

export function PhilosophyHero({
  title,
  tagline,
  body,
  page,
}: {
  title: string;
  tagline: string[];
  body: string[];
  page?: string;
}) {
  // Per-page override first, then the shared "philosophy" key, then the bundled default.
  const shared = getImage("philosophy", "hero", heroImg);
  const src = page ? getImage(page, "hero", shared) : shared;
  return (
    <section className="zekano-phil-hero relative overflow-hidden bg-brand-dark px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <img
        src={src}
        alt="ZEKANO vehicle on a highway at sunset with a city skyline"
        width={1920}
        height={912}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-60"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/20"
      />
      <div className="relative max-w-2xl border-l-2 border-brand-accent pl-5 sm:pl-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent sm:text-xs">
          Our Philosophy
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[52px]">{title}</h1>
        <div className="mt-4 space-y-1 text-base font-semibold leading-snug text-white sm:text-lg lg:text-xl">
          {tagline.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-5 space-y-2 text-sm leading-relaxed text-white/75 sm:text-base">
          {body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GuidingPurpose() {
  return (
    <div className="zekano-phil-purpose mx-auto -mt-6 max-w-none px-5 sm:px-8 lg:px-12">
      <div className="flex items-start gap-4 rounded-xl border border-brand-accent/25 bg-brand-accent/5 p-5 shadow-sm sm:p-7">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-accent/40 text-brand-accent">
          <TargetIcon />
        </span>
        <div className="min-w-0">
          <h2 className="text-base font-bold text-brand-dark sm:text-lg">Our Guiding Purpose</h2>
          <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground sm:text-base">
            To positively impact lives by bringing order, trust, and opportunity to the communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhilosophyGrid({
  items,
  columns = 4,
  numbered = false,
}: {
  items: PhilosophyItem[];
  columns?: 3 | 4 | 6;
  numbered?: boolean;
}) {
  const cols =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 6
        ? "sm:grid-cols-3 lg:grid-cols-6"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`zekano-phil-grid grid gap-4 ${cols}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className="zekano-phil-card rounded-xl border border-border bg-card p-5 transition hover:border-brand-accent/40 hover:shadow-md sm:p-6"
        >
          <div className={numbered ? "flex items-start gap-3" : ""}>
            <item.icon className="h-6 w-6 shrink-0 text-brand-accent" />
            {numbered && item.number && (
              <span className="text-sm font-bold text-brand-accent">{item.number}</span>
            )}
          </div>
          <h3 className="mt-4 text-sm font-bold leading-snug text-brand-dark sm:text-base">{item.title}</h3>
          {item.body && (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.body}</p>
          )}
        </article>
      ))}
    </div>
  );
}

export function PhilosophyLayout({
  current,
  title,
  tagline,
  body,
  page,
  children,
}: {
  current: string;
  title: string;
  tagline: string[];
  body: string[];
  page?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="zekano-phil-page min-h-screen bg-background">
      <Header />
      <PhilosophyBreadcrumbs current={current} />
      <PhilosophyHero title={title} tagline={tagline} body={body} page={page} />
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}

