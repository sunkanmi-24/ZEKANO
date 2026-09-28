import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Lightbulb, Layers, Shield, Users, Heart, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import philosophyHero from "@/assets/philosophy-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/our-philosophy")({ component: OurPhilosophyPage });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Section({ eyebrow, title, children, altBg, icon: Icon }: { eyebrow: string; title: string; children: React.ReactNode; altBg?: boolean; icon?: any }) {
  return (
    <section className={`px-5 sm:px-8 lg:px-12 py-10 ${altBg ? "bg-secondary/40" : ""}`}>
      <div className="flex gap-4">
        {Icon && <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-dark"><Icon className="h-5 w-5 text-white" /></div>}
        <div className="flex-1 min-w-0">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-brand-dark">{title}</h2>
          <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">{children}</div>
        </div>
      </div>
    </section>
  );
}

function OurPhilosophyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav aria-label="Breadcrumb" className="px-5 pt-6 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li><Link to="/company" className="hover:text-brand-green">Company</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li className="text-brand-dark">Our Philosophy</li>
        </ol>
      </nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR PHILOSOPHY</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Purpose Shapes What We Build.</h1>
        <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
          <p>ZEKANO believes that an institution should exist for more than its own growth. It should create meaningful value for the people and communities it serves.</p>
          <p>Our philosophy begins with a simple belief: <span className="font-semibold text-brand-dark">Business is a means through which purpose can be expressed.</span></p>
          <p>We therefore do not begin by asking what we can build, what we can sell, or how quickly we can grow. We begin by asking:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>What problem are we responsible for helping solve?</li>
            <li>Who are we building for?</li>
            <li>How can we create meaningful value without compromising trust or responsibility?</li>
          </ul>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("philosophy", "hero", philosophyHero)} alt="Philosophy" className="h-80 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: TrendingUp, eyebrow: "PURPOSE BEFORE GROWTH", title: "Growth Should Follow Purpose", body: "We grow to carry greater responsibility." },
            { icon: Layers, eyebrow: "SYSTEMS", title: "Responsibility Made Practical", body: "Systems make responsibility easier to practise." },
            { icon: Shield, eyebrow: "TRUST", title: "Trust Before Growth", body: "Built through consistent responsible action." },
            { icon: Users, eyebrow: "PEOPLE", title: "Technology Serves People", body: "People are at the centre." },
            { icon: Heart, eyebrow: "STEWARDSHIP", title: "Responsibility Before Opportunity", body: "Protect potential while creating value." },
            { icon: Lightbulb, eyebrow: "BUILD FOR NEXT", title: "Preserve & Evolve", body: "Preserve what must endure, improve what should evolve." },
          ].map((c) => (
            <div key={c.title} className="group rounded-xl border border-border p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all">
              <c.icon className="h-7 w-7 text-brand-green group-hover:scale-110 transition-transform" />
              <p className="mt-3 text-xs font-bold tracking-widest text-brand-green">{c.eyebrow}</p><span aria-hidden className="mt-2 block h-0.5 w-8 bg-[#BF953F]" />
              <h3 className="mt-1 text-sm font-bold text-brand-dark">{c.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-green">THE ZEKANO APPROACH</p>
          <p className="mt-3 font-mono text-sm">Purpose → Responsibility → Structure → Trust → Value → Impact</p>
          <p className="mt-3 text-sm text-white/70">Purpose determines why we exist. Responsibility determines how we act. Structure creates the systems. Trust is strengthened through responsible action. Value is created when systems serve people well.</p>
          <p className="mt-2 text-sm font-semibold text-white">We build with purpose. We operate with responsibility. We grow with discipline.</p>
          <Link to="/our-principles" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Principles <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
