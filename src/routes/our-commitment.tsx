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
function Section({ eyebrow, title, children, altBg }: { eyebrow: string; title: string; children: React.ReactNode; altBg?: boolean }) {
  return (
    <section className={`px-5 sm:px-8 lg:px-12 py-10 ${altBg ? "bg-secondary/40" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-2xl font-bold text-brand-dark">{title}</h2>
      <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our Commitment</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR COMMITMENT</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Built on Trust. Guided by Responsibility.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Our commitment is to build a mobility institution that people can rely on. We recognize that every asset, relationship, opportunity, and responsibility entrusted to ZEKANO Mobility carries expectations. We therefore commit ourselves to building systems that create clarity, protect trust, and enable responsible value creation across the Mobility System.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("commitment","hero",heroImg)} alt="Commitment" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <Section eyebrow="WHAT WE COMMIT TO" title="Standards We Expect to Live By" altBg>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, t: "Building Trusted Systems", d: "Continually developing systems that bring structure, clarity, and consistency." },
            { icon: Heart, t: "Responsible Stewardship", d: "Treating assets and opportunities as responsibilities before opportunities." },
            { icon: Award, t: "Clear Accountability", d: "Making responsibilities clear and holding ourselves accountable." },
            { icon: MessageCircle, t: "Honest Communication", d: "Communicating honestly, not creating false expectations." },
            { icon: Users, t: "Respect for People", d: "Treating all participants with dignity and respect." },
            { icon: RefreshCw, t: "Continuous Improvement", d: "Learning from experience and improving the systems through which we operate." },
            { icon: TrendingUp, t: "Responsible Growth", d: "Growing in proportion to our ability to carry greater responsibility." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl bg-white border border-border p-5">
              <c.icon className="h-6 w-6 text-brand-green mb-2" />
              <h3 className="text-sm font-bold text-brand-dark">{c.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="A COMMITMENT WE CAN BE HELD TO" title="We Control How We Respond">
        <p>Our commitment is not that every outcome will be perfect. It is that we will approach our responsibilities with purpose, honesty, structure, and accountability. We cannot control every circumstance within mobility. We can control how we respond to the circumstances we encounter. That is where our commitment begins.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Building Something Worth Trusting</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">We build trusted systems that bring order, trust, and opportunity to the communities we serve. That is the commitment behind the work.</p>
          <p className="mt-2 text-sm font-semibold text-brand-green">Purpose. Trust. Responsibility. Stewardship. Accountability. Continuous improvement.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
