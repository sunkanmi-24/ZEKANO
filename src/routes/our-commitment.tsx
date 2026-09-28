import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Shield, Heart, Users, Award, RefreshCw, TrendingUp, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/contact-office.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/our-commitment")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our Commitment</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR COMMITMENT</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Built on Trust. Guided by Responsibility.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Our commitment is to build a mobility institution that people can rely on. We recognize that every asset, relationship, opportunity, and responsibility entrusted to ZEKANO Mobility carries expectations. We therefore commit ourselves to building systems that create clarity, protect trust, and enable responsible value creation across the Mobility System.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("commitment","hero",heroImg)} alt="Commitment" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      {/* COMMITMENTS - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHAT WE COMMIT TO</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Standards We Expect to Live By</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, t: "Building Trusted Systems", d: "Systems that bring structure, clarity, and consistency." },
            { icon: Heart, t: "Responsible Stewardship", d: "Assets as responsibilities before opportunities." },
            { icon: Award, t: "Clear Accountability", d: "Clear responsibilities, accountable actions." },
            { icon: MessageCircle, t: "Honest Communication", d: "Honestly, no false expectations." },
            { icon: Users, t: "Respect for People", d: "Dignity and respect for all participants." },
            { icon: RefreshCw, t: "Continuous Improvement", d: "Learning and improving our systems." },
            { icon: TrendingUp, t: "Responsible Growth", d: "Grow with ability to carry responsibility." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <c.icon className="mx-auto h-7 w-7 text-white" />
              <h3 className="mt-3 text-sm font-bold text-white">{c.t}</h3>
              <p className="mt-1 text-xs text-white/60">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10 bg-white" aria-hidden />

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40 text-center">
        <Eyebrow>A COMMITMENT WE CAN BE HELD TO</Eyebrow><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h2 className="mt-3 mx-auto max-w-2xl text-2xl font-bold text-brand-dark">We Control How We Respond</h2>
        <p className="mt-4 mx-auto max-w-2xl text-sm text-muted-foreground">Our commitment is not that every outcome will be perfect. It is that we will approach our responsibilities with purpose, honesty, structure, and accountability. That is where our commitment begins.</p>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-white">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
          <h2 className="text-xl font-bold text-white">Building Something Worth Trusting</h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white leading-relaxed">We build trusted systems that bring order, trust, and opportunity to the communities we serve. That is the commitment behind the work.</p>
          <p className="mt-2 text-sm font-semibold text-white">Purpose. Trust. Responsibility. Stewardship. Accountability. Continuous improvement.</p>
        </div>
      </section>
      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
