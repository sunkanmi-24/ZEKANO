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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Stewardship</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>STEWARDSHIP</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Responsibility Before Opportunity.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">An asset entrusted to us is a responsibility before it is an opportunity. At ZEKANO Mobility, stewardship means taking responsibility for what has been placed within our care and managing it in a way that protects its potential, creates responsible value, and considers the future.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("stewardship","hero",heroImg)} alt="Stewardship" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <Section eyebrow="WHAT STEWARDSHIP MEANS TO US" title="Protecting Potential While Creating Value" altBg>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          {[
            { icon: Heart, t: "Responsible Use", d: "Put assets to productive use without compromising purpose or long-term potential." },
            { icon: Eye, t: "Professional Oversight", d: "Attention, coordination, monitoring, and informed decision-making to keep assets productive." },
            { icon: Shield, t: "Protection of Potential", d: "Consider condition, utilization, and viability to protect ability to create value tomorrow." },
            { icon: Users, t: "Accountability", d: "People understand what they are responsible for and what is expected of them." },
            { icon: Leaf, t: "Sustainable Value", d: "Create value without treating the present as though the future does not matter." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl bg-white border border-border p-5">
              <c.icon className="h-6 w-6 text-brand-green mb-2" />
              <h3 className="text-sm font-bold text-brand-dark">{c.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="font-semibold text-brand-dark">Responsible stewardship protects tomorrow's potential while creating value today.</p>
      </Section>

      <Section eyebrow="STEWARDSHIP IS SHARED" title="Opportunity and Responsibility Should Exist Together">
        <p>ZEKANO does not carry every responsibility within the Mobility System alone. Asset Owners, Mobility Professionals, customers, partners, and ZEKANO each have responsibilities. A healthy mobility system works when each participant fulfils the responsibility attached to their role.</p>
      </Section>

      <Section eyebrow="STEWARDSHIP ACROSS THE ASSET LIFECYCLE" title="Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition" altBg>
        <p>Our approach extends beyond the moment an asset enters the system. At each stage, we consider how the asset can continue to create responsible value while protecting its longer-term potential.</p>
        <p className="font-semibold text-brand-dark">Asset management is the structured stewardship of mobility assets toward their responsible and productive potential.</p>
      </Section>

      <Section eyebrow="BEYOND THE ASSET" title="Stewardship of People and Relationships">
        <p>We seek to treat people with respect, honour responsibilities, communicate honestly, protect trust, learn from experience, and improve what we are responsible for. The value of a mobility system is determined not only by its assets but by how responsibly people within that system relate to one another.</p>
        <p className="font-semibold text-brand-dark italic">We do not simply seek to keep assets productive. We seek to keep their potential alive. That is stewardship.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Our Commitment to Stewardship</h2>
          <Link to="/our-commitment" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Commitment <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
