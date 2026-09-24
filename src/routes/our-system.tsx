import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Car, Users, Layers, TrendingUp, Heart, Building2, Handshake, Lightbulb, Target, RefreshCw } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/city-skyline.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/our-system")({ component: Page });

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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our System</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>OUR SYSTEM</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">The ZEKANO Mobility System</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Mobility works through relationships between assets, people, and opportunities. The ZEKANO Mobility System brings these elements together through structure, enabling mobility assets to be responsibly and productively used.</p>
        <div className="mt-4 rounded-xl bg-brand-dark text-white p-4 text-center text-sm font-mono">Assets + Communities + Structure → Productive Mobility → Value → Impact</div>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("system","hero",heroImg)} alt="Our System" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <Section eyebrow="A SYSTEM BUILT AROUND RELATIONSHIPS" title="Structure Connects Assets with Communities" altBg>
        <p>A mobility asset does not create meaningful value in isolation. Its potential depends on how it is positioned, who uses it, how it is managed, and the relationships surrounding it. The ZEKANO Mobility System organizes these relationships so participants can contribute to and benefit from productive mobility.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          {[
            { icon: Car, t: "Assets", d: "Mobility assets provide infrastructure and potential for mobility activity." },
            { icon: Users, t: "Communities", d: "People and communities bring needs, capabilities, responsibilities, and opportunities." },
            { icon: Layers, t: "Structure", d: "Organizes relationships, responsibilities, processes, and standards." },
            { icon: Target, t: "Productive Mobility", d: "When elements work together responsibly, assets serve meaningful needs." },
            { icon: Heart, t: "Value", d: "Created through relationships connecting owners, professionals, customers, partners." },
            { icon: TrendingUp, t: "Impact", d: "Contributes to our purpose: positively impacting lives." },
          ].map((c) => (
            <div key={c.t} className="group rounded-xl border border-border p-5 bg-white hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all">
              <c.icon className="h-6 w-6 text-brand-green group-hover:scale-110 transition-transform" />
              <h3 className="mt-2 text-sm font-bold text-brand-dark">{c.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="HOW THE SYSTEM CONNECTS" title="Each Part Affects the Others">
        <p>An Asset Owner provides a mobility asset. A Mobility Professional puts that asset to productive use. ZEKANO provides the structure through which the relationship is managed. Customers and communities participate in and benefit from the activity. Each relationship carries responsibility.</p>
        <p className="font-semibold text-brand-dark">Assets enable people. People enable assets. Structure connects them responsibly.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <Eyebrow>OUR SOLUTIONS WITHIN THE SYSTEM</Eyebrow>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-border p-6">
            <h3 className="font-bold text-brand-green">ZEKMANAGE</h3><p className="text-sm text-muted-foreground">Structured Mobility Asset Management — professional management, oversight, coordination, and stewardship.</p>
            <Link to="/zekmanage" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Explore ZEKMANAGE <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6">
            <h3 className="font-bold text-brand-blue">ZEKLEASE</h3><p className="text-sm text-muted-foreground">Structured Mobility Access — responsible access for Mobility Professionals.</p>
            <Link to="/zeklease" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">Explore ZEKLEASE <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Together they organize important relationships, but they are not the entire system — they are ways through which the system creates value.</p>
      </section>

      <Section eyebrow="THE SYSTEM IN MOTION" title="Structure → Connect → Utilize → Create Value → Learn → Improve">
        <p>We define relationships and standards, bring assets and people together, put them to productive use, generate value, learn from reality, and improve the systems based on what we learn. We preserve what must endure while improving what should evolve.</p>
      </Section>

      <Section eyebrow="BUILT TO GROW RESPONSIBLY" title="Structure Must Grow With Responsibility" altBg>
        <p>As the system grows, responsibility grows with it. Our structure must be capable of growing alongside the relationships and assets entrusted to it. We seek to build systems that become more capable without losing the principles that make them trustworthy.</p>
      </Section>

      <Section eyebrow="THE PURPOSE BEHIND THE SYSTEM" title="The Asset Is Infrastructure. Impact Is Purpose">
        <p>The Mobility System exists for a reason — it is not an end in itself. Purpose → Mobility → Assets + Communities → Structure → Productive Use → Value → Positive Impact. The mobility asset is the infrastructure; the impact on lives is the purpose.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <Eyebrow>WHERE DO YOU FIT?</Eyebrow>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {[
            { icon: Building2, t: "Asset Owners", d: "Provide assets and entrust them to responsible management." },
            { icon: Users, t: "Mobility Professionals", d: "Put assets to productive use while carrying responsibilities." },
            { icon: Heart, t: "Customers", d: "Experience outcomes created by the system." },
            { icon: Handshake, t: "Strategic Partners", d: "Contribute capabilities that strengthen the ecosystem." },
            { icon: Users, t: "Communities", d: "Environment in which mobility creates value." },
            { icon: Lightbulb, t: "Future Builders", d: "Bring skills and ideas to strengthen mobility over time." },
          ].map((c) => (
            <div key={c.t} className="group rounded-xl bg-white border border-border p-5 hover:shadow-md hover:-translate-y-1 transition-all">
              <c.icon className="h-5 w-5 text-brand-green group-hover:scale-110 transition-transform" />
              <h3 className="mt-2 font-bold text-brand-dark text-sm">{c.t}</h3><p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <p className="text-sm text-white/70">The ZEKANO Mobility System</p>
          <p className="font-mono text-sm mt-1">Assets + Communities + Structure → Productive Mobility → Value → Impact</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/our-systems" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Solutions <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/why-zekano" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white">Why ZEKANO <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
