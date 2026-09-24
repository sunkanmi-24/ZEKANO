import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Heart, Shield, Layers, Users, Star, RefreshCw } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/philosophy-hero.jpg";
import { getImage } from "@/lib/site-images";


export const Route = createFileRoute("/our-principles")({ component: Page });

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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our Principles</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR PRINCIPLES</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">The Principles Behind How We Build.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Our principles guide how we make decisions, build relationships, manage mobility assets, and serve the communities connected to our work. They help us remain consistent as ZEKANO Mobility grows and as the systems around us evolve.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("principles","hero",heroImg)} alt="Principles" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Star, eyebrow: "PURPOSE BEFORE PROFIT", title: "Profit Matters. Purpose Decides How", body: "We seek sustainable value while remaining faithful to our purpose." },
            { icon: Shield, eyebrow: "TRUST BEFORE GROWTH", title: "We Do Not Grow at Expense of Trust", body: "Trust is earned through consistency, transparency, accountability." },
            { icon: Heart, eyebrow: "RESPONSIBILITY BEFORE OPPORTUNITY", title: "An Asset Is a Responsibility", body: "Every opportunity carries responsibility." },
            { icon: Layers, eyebrow: "STRUCTURE CREATES CLARITY", title: "We Bring Structure to Mobility", body: "Clearer responsibilities, stronger accountability." },
            { icon: Users, eyebrow: "PEOPLE MATTER", title: "Dignity, Fairness, Respect", body: "Treat people with dignity while maintaining standards." },
            { icon: Heart, eyebrow: "STEWARDSHIP", title: "Keep Potential Alive", body: "Create value while protecting future potential." },
            { icon: Shield, eyebrow: "ACCOUNTABILITY", title: "Clear Expectations", body: "Shared responsibilities strengthen trust." },
            { icon: RefreshCw, eyebrow: "CONTINUOUS IMPROVEMENT", title: "Preserve & Improve", body: "We preserve what must endure while improving what should evolve." },
          ].map((c) => (
            <div key={c.title} className="group rounded-xl border border-border p-6 bg-white hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all">
              <c.icon className="h-7 w-7 text-brand-green group-hover:scale-110 transition-transform" />
              <p className="mt-3 text-xs font-bold tracking-widest text-brand-green">{c.eyebrow}</p>
              <h3 className="mt-1 text-sm font-bold text-brand-dark">{c.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-white">HOW THESE PRINCIPLES WORK TOGETHER</p>
        <h2 className="mt-3 text-xl font-bold text-white">A Way of Thinking</h2>
        <p className="mt-3 text-sm text-white leading-relaxed">Purpose gives us direction. Trust determines the foundation on which we grow. Responsibility shapes how we use opportunity. Structure creates clarity. People remain at the centre. Stewardship protects long-term potential. Accountability strengthens relationships. Continuous improvement keeps the system capable of serving well.</p>
        <p className="mt-4 text-sm font-semibold text-white">These are not simply principles we communicate. They are standards we expect to live by.</p>
        <Link to="/our-culture" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Culture <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
