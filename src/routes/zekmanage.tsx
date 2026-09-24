import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Shield, Eye, Users, Wallet, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import zekmanageHero from "@/assets/zekmanage-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/zekmanage")({ component: Page });

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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">ZEKMANAGE</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>ZEKMANAGE</Eyebrow>
            <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structured Mobility Asset Management.</h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKMANAGE is ZEKANO Mobility's structured mobility asset management solution. It provides Asset Owners with professional management, oversight, coordination, and accountability for their mobility assets. We create the management structure through which mobility assets can be responsibly positioned, operated, monitored, and stewarded toward their productive potential.</p>
          </div>
          <div className="overflow-hidden rounded-2xl"><img src={getImage("zekmanage", "hero", zekmanageHero)} alt="ZEKMANAGE" className="h-72 w-full object-cover lg:h-[380px]" width={1200} height={800} /></div>
        </div>
      </section>

      <Section eyebrow="YOUR ASSET DESERVES MORE THAN OWNERSHIP" title="Ownership Gives Responsibility. Management Provides Structure." altBg>
        <p>Owning a mobility asset creates responsibility. The asset needs to be properly managed, its use coordinated, its condition monitored, and relationships responsibly maintained. Without structure, ownership can become difficult to manage. ZEKMANAGE provides the management framework through which Asset Owners can entrust day-to-day management to a structured system.</p>
        <p className="font-semibold text-brand-dark italic">Ownership gives responsibility. Management provides structure. Stewardship protects potential.</p>
      </Section>

      <Section eyebrow="WHAT ZEKMANAGE PROVIDES" title="A Management Framework Built Around Stewardship">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { t: "Professional Management", d: "Structured management of the asset and surrounding activities." },
            { t: "Operational Oversight", d: "Ongoing oversight for visibility, consistency, and responsible operation." },
            { t: "Coordination", d: "Coordination between asset, Mobility Professionals, and ecosystem relationships." },
            { t: "Accountability", d: "Defined responsibilities and standards that make the relationship clear." },
            { t: "Responsible Stewardship", d: "Protecting the asset's ability to continue creating value." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border p-5 bg-white">
              <h3 className="text-sm font-bold text-brand-dark">{c.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="HOW WE THINK ABOUT ASSET MANAGEMENT" title="We Steward Potential, Not Just Vehicles" altBg>
        <p>We do not view a mobility asset simply as a vehicle. It can represent capital, savings, investment, opportunity, livelihood, and future plans. That is why our responsibility extends beyond keeping an asset active. We seek to maximize what the asset can responsibly create while protecting its ability to continue creating value.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <Eyebrow>ESTIMATE YOUR MONTHLY PAYOUT</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">See Your Estimated Monthly Payout</h2>
        <p className="mt-2 text-sm text-muted-foreground">Every asset has a different operating profile. Enter your vehicle details for an initial indication.</p>
        <div className="mt-6 max-w-2xl rounded-2xl border border-border p-6 grid sm:grid-cols-2 gap-4 bg-secondary/30">
          <label className="text-sm">Vehicle Value<input placeholder="₦ Enter value" className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm" /></label>
          <label className="text-sm">Vehicle Model<input placeholder="Enter model" className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm" /></label>
          <label className="text-sm">Vehicle Year<input placeholder="Select year" className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm" /></label>
          <label className="text-sm">Vehicle Condition<select className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"><option>Foreign Used</option><option>Nigerian Used</option></select></label>
          <button className="sm:col-span-2 mt-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Calculate Estimated Payout</button>
        </div>
        <div className="mt-4 max-w-2xl rounded-xl bg-brand-dark text-white p-6 text-center">
          <p className="text-xs tracking-widest text-white/60">ESTIMATED MONTHLY PAYOUT</p>
          <p className="mt-2 text-3xl font-bold">₦XXX,XXX</p>
          <p className="mt-2 text-xs text-white/60">Estimate only — final terms determined during onboarding.</p>
        </div>
      </section>

      <Section eyebrow="WHAT THE RELATIONSHIP LOOKS LIKE" title="Clear Framework, Clear Responsibilities" altBg>
        <p>The Asset Owner retains ownership. ZEKANO provides the management structure, professional oversight, coordination, and accountability. The objective is a clear framework in which responsibilities are understood and the asset can be responsibly put to productive use.</p>
      </Section>

      <Section eyebrow="BUILT AROUND STEWARDSHIP" title="Productivity. Protection. Accountability. Sustainability.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Wallet, t: "Productivity", d: "Putting the asset to meaningful and productive use." },
            { icon: Shield, t: "Protection", d: "Protecting condition, purpose, and long-term potential." },
            { icon: Eye, t: "Accountability", d: "Maintaining clear responsibilities across the relationship." },
            { icon: Users, t: "Sustainability", d: "Creating value today while considering tomorrow." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border p-5 flex gap-3 bg-white">
              <c.icon className="h-6 w-6 text-brand-green shrink-0" />
              <div><h3 className="text-sm font-bold text-brand-dark">{c.t}</h3><p className="text-xs text-muted-foreground">{c.d}</p></div>
            </div>
          ))}
        </div>
        <p className="font-semibold text-brand-dark">An asset entrusted to us is a responsibility before it is an opportunity.</p>
      </Section>

      <Section eyebrow="WHAT WE ARE RESPONSIBLE FOR" title="Quality of Management" >
        <p>When an Asset Owner entrusts an asset to ZEKMANAGE, our responsibility is to manage that asset within the agreed structure and operating scope — maintaining standards, coordinating relevant parties, and acting with care and accountability. Our role is not simply to keep an asset active. It is to responsibly manage the conditions through which that asset can create productive value.</p>
      </Section>

      <Section eyebrow="WHAT WE CANNOT CONTROL" title="Structure Improves Conditions — It Does Not Guarantee Outcomes" altBg>
        <p>Mobility operates in a real-world environment. Utilization, operating costs, market conditions, unforeseen events, downtime, and other external factors can affect outcomes. For that reason, ZEKMANAGE does not represent its management service as a guarantee of a particular income, return, utilization level, or financial outcome.</p>
        <p className="font-semibold text-brand-dark">We are responsible for the quality of the management. We cannot honestly guarantee every outcome produced by the environment in which the asset operates.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <Eyebrow>A STRUCTURED APPROACH</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition</h2>
        <p className="mt-3 text-sm text-muted-foreground">The objective is not simply to keep an asset active. It is to manage the asset responsibly throughout its useful life and continually consider how its potential can be protected and improved.</p>
        <Link to="/our-systems" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Explore Our Mobility System <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Request ZEKMANAGE</h2>
          <p className="mt-2 text-sm text-white/70">Let's Discuss Your Mobility Asset. Interested in ZEKMANAGE? Send us an email at <a href="mailto:zekmanage@zekano.co" className="underline">zekmanage@zekano.co</a></p>
          <a href="mailto:zekmanage@zekano.co" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Request ZEKMANAGE <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
