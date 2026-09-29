import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Shield, Eye, Heart, Users, Leaf } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/city-skyline.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/stewardship")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Stewardship</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>STEWARDSHIP</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Responsibility Before Opportunity.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">An asset entrusted to us is a responsibility before it is an opportunity. At ZEKANO Mobility, stewardship means taking responsibility for what has been placed within our care and managing it in a way that protects its potential, creates responsible value, and considers the future.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("stewardship","hero",heroImg)} alt="Stewardship" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      {/* MEANING - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHAT STEWARDSHIP MEANS TO US</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Protecting Potential While Creating Value</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Heart, t: "Responsible Use", d: "Put assets to productive use without compromising purpose." },
            { icon: Eye, t: "Professional Oversight", d: "Attention, coordination, monitoring, informed decisions." },
            { icon: Shield, t: "Protection of Potential", d: "Protect ability to create value tomorrow." },
            { icon: Users, t: "Accountability", d: "Clear responsibilities and expectations." },
            { icon: Leaf, t: "Sustainable Value", d: "Create value without ignoring the future." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <c.icon className="mx-auto h-7 w-7 text-white" />
              <h3 className="mt-3 text-sm font-bold text-white">{c.t}</h3>
              <p className="mt-1 text-xs text-white/60">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-white">Responsible stewardship protects tomorrow's potential while creating value today.</p>
      </section>

      <div className="h-10 bg-white" aria-hidden />

      {/* SHARED + LIFECYCLE side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Users className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>STEWARDSHIP IS SHARED</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Opportunity and Responsibility Together</h2>
            <p className="mt-3 text-sm text-muted-foreground">ZEKANO does not carry every responsibility alone. Owners, Professionals, customers, partners, and ZEKANO each have responsibilities.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Shield className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>ACROSS THE ASSET LIFECYCLE</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition</h2>
            <p className="mt-3 text-sm text-muted-foreground">Asset management is the structured stewardship of mobility assets toward their responsible potential.</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-secondary/40 border border-border p-8 text-center">
            <Eyebrow>BEYOND THE ASSET</Eyebrow><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">Stewardship of People and Relationships</h2>
            <p className="mt-4 text-sm text-muted-foreground">We seek to treat people with respect, honour responsibilities, communicate honestly, protect trust, learn from experience, and improve what we are responsible for.</p>
            <p className="mt-3 text-sm font-semibold italic text-brand-dark">We do not simply seek to keep assets productive. We seek to keep their potential alive.</p>
          </div>
          <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center flex flex-col justify-center">
            <h2 className="text-xl font-bold text-white">Our Commitment to Stewardship</h2>
            <Link to="/our-commitment" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore Our Commitment <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
