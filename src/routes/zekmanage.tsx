import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Shield, Eye, Users, Wallet, Car, ClipboardCheck, Layers, Heart } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import zekmanageHero from "@/assets/zekmanage-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/zekmanage")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">ZEKMANAGE</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>ZEKMANAGE</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structured Mobility Asset Management.</h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKMANAGE is ZEKANO Mobility's structured mobility asset management solution. It provides Asset Owners with professional management, oversight, coordination, and accountability for their mobility assets. We create the management structure through which mobility assets can be responsibly positioned, operated, monitored, and stewarded toward their productive potential.</p>
            <p className="mt-3 text-sm font-semibold italic text-brand-dark">Ownership gives responsibility. Management provides structure. Stewardship protects potential.</p>
          </div>
          <div className="overflow-hidden rounded-2xl"><img src={getImage("zekmanage", "hero", zekmanageHero)} alt="ZEKMANAGE" className="h-72 w-full object-cover lg:h-[380px]" width={1200} height={800} /></div>
        </div>
      </section>

      {/* WHAT ZEKMANAGE PROVIDES - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHAT ZEKMANAGE PROVIDES</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">A Management Framework Built Around Stewardship</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, t: "Professional Management", d: "Structured management of the asset and surrounding activities." },
            { icon: Eye, t: "Operational Oversight", d: "Ongoing oversight for visibility, consistency, and responsible operation." },
            { icon: Users, t: "Coordination", d: "Coordination between asset, Mobility Professionals, and ecosystem." },
            { icon: ClipboardCheck, t: "Accountability", d: "Defined responsibilities and standards that make the relationship clear." },
            { icon: Heart, t: "Responsible Stewardship", d: "Protecting the asset's ability to continue creating value." },
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

      {/* OWNERSHIP + THINKING side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Car className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>YOUR ASSET DESERVES MORE THAN OWNERSHIP</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">Ownership Gives Responsibility</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Owning a mobility asset creates responsibility. The asset needs to be properly managed, its use coordinated, its condition monitored, and relationships responsibly maintained. ZEKMANAGE provides the framework through which Asset Owners entrust day-to-day management to a structured system.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Layers className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>HOW WE THINK ABOUT ASSET MANAGEMENT</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Steward Potential, Not Just Vehicles</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">We do not view a mobility asset simply as a vehicle. It can represent capital, savings, investment, opportunity, livelihood, and future plans. We seek to maximize what the asset can responsibly create while protecting its ability to continue creating value.</p>
          </div>
        </div>
      </section>

      {/* ESTIMATOR + REQUEST side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="text-center">
            <Eyebrow>ESTIMATE YOUR MONTHLY PAYOUT</Eyebrow><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">See Your Estimated Monthly Payout</h2>
            <p className="mt-2 mx-auto max-w-xl text-sm text-muted-foreground">Every asset has a different operating profile. Enter your vehicle details for an initial indication.</p>
            <div className="mt-6 rounded-2xl border border-border bg-white p-6 grid sm:grid-cols-2 gap-4 text-left">
              <label className="text-sm">Vehicle Value<input placeholder="₦ Enter value" className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm" /></label>
              <label className="text-sm">Vehicle Model<input placeholder="Enter model" className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm" /></label>
              <label className="text-sm">Vehicle Year<select className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"><option value="">Select year range</option><option>2008 - 2011</option><option>2012 upward</option></select></label>
              <label className="text-sm">Vehicle Condition<select className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"><option>Foreign Used</option><option>Nigerian Used</option></select></label>
              <button className="sm:col-span-2 mt-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Calculate Estimated Payout</button>
            </div>
            <div className="mt-4 mx-auto max-w-md rounded-xl bg-brand-dark text-white p-6 text-center">
              <p className="text-xs tracking-widest text-white">ESTIMATED MONTHLY PAYOUT</p>
              <p className="mt-2 text-3xl font-bold text-white">₦XXX,XXX</p>
              <p className="mt-2 text-xs text-white/70">This is an estimate based on the information provided and the applicable ZEKMANAGE arrangement. Final terms, applicable deductions, and the management arrangement are determined during onboarding.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center flex flex-col justify-center">
            <h2 className="text-xl font-bold text-white">Request ZEKMANAGE</h2>
            <p className="mt-2 mx-auto max-w-xl text-sm text-white/70">Let's Discuss Your Mobility Asset.</p>
            <Link to="/request-zekmanage" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Request ZEKMANAGE <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* STEWARDSHIP VALUES - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">BUILT AROUND STEWARDSHIP</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Productivity. Protection. Accountability. Sustainability.</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Wallet, t: "Productivity", d: "Putting the asset to meaningful and productive use." },
            { icon: Shield, t: "Protection", d: "Protecting condition, purpose, and long-term potential." },
            { icon: Eye, t: "Accountability", d: "Maintaining clear responsibilities." },
            { icon: Users, t: "Sustainability", d: "Creating value today while considering tomorrow." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <c.icon className="mx-auto h-6 w-6 text-white" />
              <h3 className="mt-2 text-sm font-bold text-white">{c.t}</h3>
              <p className="text-xs text-white/60">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-white">An asset entrusted to us is a responsibility before it is an opportunity.</p>
      </section>

      <div className="h-10 bg-white" aria-hidden />

      {/* RESPONSIBLE / CANNOT CONTROL side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Eyebrow>WHAT WE ARE RESPONSIBLE FOR</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Quality of Management</h2>
            <p className="mt-3 text-sm text-muted-foreground">Our responsibility is to manage within the agreed structure — maintaining standards, coordinating parties, and acting with care and accountability.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Eyebrow>WHAT WE CANNOT CONTROL</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Structure Improves Conditions — Not Guarantees</h2>
            <p className="mt-3 text-sm text-muted-foreground">We cannot guarantee every outcome produced by the environment in which the asset operates.</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="font-mono text-sm text-brand-dark">Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition</p>
          <Link to="/our-system" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white">Explore Our Mobility System <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
