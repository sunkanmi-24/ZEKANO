import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Car, ClipboardCheck, Award, Headset, Shield, Users, Heart, MessageCircle, Wallet, Eye } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import zekleaseHero from "@/assets/zekmanage-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/zeklease")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">ZEKLEASE</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>ZEKLEASE</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structured Mobility Access</h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKLEASE is ZEKANO Mobility's structured mobility access solution. It provides responsible Mobility Professionals with structured access to mobility assets for productive use. We create the framework through which Mobility Professionals can access mobility assets, operate within defined responsibilities, and participate with greater clarity and accountability.</p>
            <p className="mt-3 text-sm font-semibold text-brand-dark italic">Access creates opportunity. Opportunity carries responsibility. Responsibility creates trust.</p>
          </div>
          <div className="overflow-hidden rounded-2xl"><img src={getImage("zeklease", "hero", zekleaseHero)} alt="ZEKLEASE" className="h-72 w-full object-cover lg:h-[380px]" width={1200} height={800} /></div>
        </div>
      </section>

      {/* WHAT ZEKLEASE PROVIDES - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHAT ZEKLEASE PROVIDES</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">A Pathway for Productive Mobility Participation</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Car, t: "Structured Access", d: "Defined pathway to gain access for productive use." },
            { icon: ClipboardCheck, t: "Clear Responsibilities", d: "Responsibilities for operating and caring for the asset are established." },
            { icon: Award, t: "Defined Standards", d: "Expectations for professional conduct, asset care, and responsible use." },
            { icon: Headset, t: "Operational Support", d: "Structured framework providing clarity when issues arise." },
            { icon: Shield, t: "Professional Accountability", d: "Access comes with responsibility and accountability." },
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

      {/* ACCESS + WHO - side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Car className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>ACCESS IS MORE THAN A VEHICLE</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Structure Access</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">For a Mobility Professional, access to a reliable mobility asset can create an opportunity to work, earn, and build a livelihood. But access without structure can create uncertainty. Who is responsible for the asset? What is expected of the person using it? How are operational issues handled? ZEKLEASE is designed to bring structure to these relationships.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Users className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>WHO IS ZEKLEASE FOR?</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">People Prepared to Take Responsibility</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">ZEKLEASE is designed for Mobility Professionals who want structured access to mobility assets and are prepared to take responsibility for the opportunity they receive. Access is based on the ability and willingness to operate within the standards of the ZEKANO Mobility System.</p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">ELIGIBILITY</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Requirements for ZEKLEASE Access</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Valid professional driver's licence","Meet age & driving experience requirements","Reside within operating area","Required ID & guarantor information","Meet security deposit requirements","Ability to meet financial obligations","Pass onboarding & verification","Agree to ZEKLEASE terms & standards"].map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center text-xs text-white/80">{t}</div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-white">Access is granted when the person, asset, and arrangement can responsibly work together.</p>
      </section>

      <div className="h-10 bg-white" aria-hidden />

      {/* EXPECTATIONS + RELATIONSHIP side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Eyebrow>WHAT WE EXPECT</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">Stewardship Is Earned</h2>
            <div className="mt-4 grid gap-3">
              {[
                { icon: Heart, t: "Care for the Asset" },
                { icon: Car, t: "Operate Responsibly" },
                { icon: Wallet, t: "Meet Their Obligations" },
                { icon: MessageCircle, t: "Communicate Honestly" },
                { icon: Award, t: "Maintain Professional Standards" },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm text-brand-dark font-semibold"><c.icon className="h-5 w-5 text-brand-green shrink-0" />{c.t}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8 flex flex-col">
            <Eyebrow>HOW THE RELATIONSHIP WORKS</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">Assets Enable People. People Enable Assets.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">The mobility asset provides infrastructure for productive mobility. ZEKANO provides the structure through which access is organized and managed. The Mobility Professional puts the asset to productive use while carrying the responsibilities associated with that access.</p>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white border border-border p-4 text-sm"><Eye className="h-5 w-5 text-brand-green shrink-0" /><span className="text-muted-foreground">Structure creates conditions for opportunity; it does not guarantee outcome.</span></div>
            <div className="mt-8 rounded-xl bg-brand-dark text-white p-6 text-center">
              <h3 className="text-base font-bold text-white">Apply for ZEKLEASE</h3>
              <p className="mt-1 text-xs text-white/70">Interested in structured access?</p>
              <Link to="/apply-zeklease" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white">Apply for ZEKLEASE <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40 text-center">
        <Eyebrow>ACCESS WITH A PATHWAY</Eyebrow><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">The Opportunity Grows With Responsibility Carried</h2>
        <p className="mt-3 mx-auto max-w-2xl text-sm text-muted-foreground">For the right Mobility Professional, structured access can provide a pathway to participate with clearer expectations, defined responsibilities, and an opportunity to build trust through consistent performance.</p>
        <Link to="/our-system" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white">Explore the ZEKANO Mobility System <ArrowRight className="h-4 w-4" /></Link>
      </section>
      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
