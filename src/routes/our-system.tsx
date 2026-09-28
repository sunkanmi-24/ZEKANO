import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Car, Users, Layers, TrendingUp, Heart, Building2, Handshake, Lightbulb, Target, Shield } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/city-skyline.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/our-system")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our System</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR SYSTEM</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">The ZEKANO Mobility System</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Mobility works through relationships between assets, people, and opportunities. The ZEKANO Mobility System brings these elements together through structure, enabling mobility assets to be responsibly and productively used.</p>
        <div className="mt-4 rounded-xl bg-brand-dark text-white p-4 text-center text-sm font-mono">Assets + Communities + Structure → Productive Mobility → Value → Impact</div>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("system","hero",heroImg)} alt="Our System" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      {/* RELATIONSHIPS - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">A SYSTEM BUILT AROUND RELATIONSHIPS</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Structure Connects Assets with Communities</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Car, t: "Assets", d: "Infrastructure and potential for mobility activity." },
            { icon: Users, t: "Communities", d: "Needs, capabilities, responsibilities, and opportunities." },
            { icon: Layers, t: "Structure", d: "Organizes relationships, responsibilities, and standards." },
            { icon: Target, t: "Productive Mobility", d: "Assets serve meaningful needs when working responsibly." },
            { icon: Heart, t: "Value", d: "Created across owners, professionals, customers, partners." },
            { icon: TrendingUp, t: "Impact", d: "Positively impacting lives of communities we serve." },
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

      {/* CONNECTS + SOLUTIONS side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Shield className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>HOW THE SYSTEM CONNECTS</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Each Part Affects the Others</h2>
            <p className="mt-3 text-sm text-muted-foreground">An Asset Owner provides an asset. A Mobility Professional puts it to productive use. ZEKANO provides the structure. Customers and communities benefit. Each relationship carries responsibility.</p>
            <p className="mt-3 text-sm font-semibold text-brand-dark">Assets enable people. People enable assets. Structure connects them responsibly.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Layers className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>OUR SOLUTIONS WITHIN THE SYSTEM</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <div className="mt-4 grid gap-3">
              <Link to="/zekmanage" className="rounded-xl bg-white border border-border p-4 text-sm font-bold text-brand-dark hover:shadow-md transition">ZEKMANAGE — Asset Management <ArrowRight className="inline h-4 w-4 ml-1" /></Link>
              <Link to="/zeklease" className="rounded-xl bg-white border border-border p-4 text-sm font-bold text-brand-dark hover:shadow-md transition">ZEKLEASE — Mobility Access <ArrowRight className="inline h-4 w-4 ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* IN MOTION + GROW side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Eyebrow>THE SYSTEM IN MOTION</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Structure → Connect → Utilize → Create Value → Learn → Improve</h2>
            <p className="mt-3 text-sm text-muted-foreground">We preserve what must endure while improving what should evolve.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Eyebrow>BUILT TO GROW RESPONSIBLY</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Structure Must Grow With Responsibility</h2>
            <p className="mt-3 text-sm text-muted-foreground">More capable without losing the principles that make us trustworthy.</p>
          </div>
        </div>
      </section>

      {/* WHERE DO YOU FIT - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHERE DO YOU FIT?</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">A Role for Everyone in the System</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Building2, t: "Asset Owners", d: "Entrust assets to responsible management." },
            { icon: Users, t: "Mobility Professionals", d: "Put assets to productive use." },
            { icon: Heart, t: "Customers", d: "Experience outcomes created by the system." },
            { icon: Handshake, t: "Strategic Partners", d: "Strengthen the ecosystem." },
            { icon: Users, t: "Communities", d: "Environment where value is created." },
            { icon: Lightbulb, t: "Future Builders", d: "Bring skills to strengthen mobility." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <c.icon className="mx-auto h-6 w-6 text-white" />
              <h3 className="mt-2 font-bold text-white text-sm">{c.t}</h3><p className="mt-1 text-xs text-white/60">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-white">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
          <p className="font-mono text-sm text-white">Assets + Communities + Structure → Productive Mobility → Value → Impact</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/our-solutions" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore Solutions <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/why-zekano" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Why ZEKANO <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
