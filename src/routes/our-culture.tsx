import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Users, MessageCircle, Heart, Eye, Lightbulb, Shield } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/about-hq.jpg";
import { getImage } from "@/lib/site-images";


export const Route = createFileRoute("/our-culture")({ component: Page });

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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our Culture</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR CULTURE</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">How We Choose to Work.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Culture is how our principles become visible in the way we think, work, communicate, and take responsibility. At ZEKANO Mobility, we believe a strong culture is not created by statements on a wall. It is built through everyday actions, decisions, and standards.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("culture","hero",heroImg)} alt="Culture" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, eyebrow: "WE TAKE RESPONSIBILITY", title: "What Is Our Responsibility?", body: "We ask: What happened? What is our responsibility? What needs to be done?" },
            { icon: Eye, eyebrow: "WE WORK WITH STRUCTURE", title: "Systems Support Responsible Action", body: "Clear processes and defined responsibilities give clarity to do work well." },
            { icon: MessageCircle, eyebrow: "WE COMMUNICATE HONESTLY", title: "Clarity Builds Trust", body: "We communicate what people need to know, especially when difficult." },
            { icon: Heart, eyebrow: "WE TREAT PEOPLE WITH RESPECT", title: "Clear Expectations, Fair Accountability", body: "Dignity and fairness while holding people accountable." },
            { icon: Lightbulb, eyebrow: "WE THINK BEYOND TODAY", title: "What Does This Create for Later?", body: "Create value today without compromising tomorrow." },
            { icon: Users, eyebrow: "WE LEARN & IMPROVE", title: "Preserve & Evolve", body: "We preserve what must endure while improving what should evolve." },
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

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <Eyebrow>ONE CULTURE. ONE STANDARD.</Eyebrow>
        <h2 className="mt-3 text-xl font-bold">We do our work with purpose, take responsibility, and continually improve the systems through which we serve.</h2>
        <p className="mt-3 text-sm text-white/70">Take responsibility. Work with structure. Communicate honestly. Treat people with respect. Think beyond today. Learn continuously. Improve deliberately.</p>
        <Link to="/stewardship" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Stewardship <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <Footer />
    </div>
  );
}
