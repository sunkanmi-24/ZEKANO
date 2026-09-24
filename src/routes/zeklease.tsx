import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import zekleaseHero from "@/assets/zekmanage-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/zeklease")({ component: Page });

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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">ZEKLEASE</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>ZEKLEASE</Eyebrow>
            <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structured Mobility Access</h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKLEASE is ZEKANO Mobility's structured mobility access solution. It provides responsible Mobility Professionals with structured access to mobility assets for productive use. We create the framework through which Mobility Professionals can access mobility assets, operate within defined responsibilities, and participate with greater clarity and accountability.</p>
            <p className="mt-3 text-sm font-semibold text-brand-dark italic">Access creates opportunity. Opportunity carries responsibility. Responsibility creates trust.</p>
          </div>
          <div className="overflow-hidden rounded-2xl"><img src={getImage("zeklease", "hero", zekleaseHero)} alt="ZEKLEASE" className="h-72 w-full object-cover lg:h-[380px]" width={1200} height={800} /></div>
        </div>
      </section>

      <Section eyebrow="ACCESS IS MORE THAN A VEHICLE" title="We Structure Access" altBg>
        <p>For a Mobility Professional, access to a reliable mobility asset can create an opportunity to work, earn, and build a livelihood. But access without structure can create uncertainty. Who is responsible for the asset? What is expected of the person using it? How are operational issues handled? ZEKLEASE is designed to bring structure to these relationships.</p>
      </Section>

      <Section eyebrow="WHAT ZEKLEASE PROVIDES" title="A Pathway for Productive Mobility Participation">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { t: "Structured Access", d: "Defined pathway to gain access for productive use." },
            { t: "Clear Responsibilities", d: "Responsibilities for operating and caring for the asset are established." },
            { t: "Defined Standards", d: "Expectations for professional conduct, asset care, and responsible use." },
            { t: "Operational Support", d: "Structured framework providing clarity when issues arise." },
            { t: "Professional Accountability", d: "Access comes with responsibility and accountability." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border p-5 bg-white">
              <h3 className="text-sm font-bold text-brand-dark">{c.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="WHO IS ZEKLEASE FOR?" title="People Prepared to Take Responsibility" altBg>
        <p>ZEKLEASE is designed for Mobility Professionals who want structured access to mobility assets and are prepared to take responsibility for the opportunity they receive. Access is not based simply on the desire to have a vehicle. It is based on the ability and willingness to operate within the standards and responsibilities of the ZEKANO Mobility System.</p>
      </Section>

      <Section eyebrow="ELIGIBILITY" title="Requirements for ZEKLEASE Access">
        <ul className="list-disc pl-5 space-y-1">
          <li>Holding a valid professional driver's licence</li>
          <li>Meeting age and driving experience requirements</li>
          <li>Residing within our current operating area</li>
          <li>Providing required identification and guarantor information</li>
          <li>Meeting security deposit requirements</li>
          <li>Demonstrating ability to meet financial and operational obligations</li>
          <li>Passing onboarding and verification process</li>
          <li>Agreeing to ZEKLEASE terms, standards, and responsibilities</li>
        </ul>
        <p className="font-semibold text-brand-dark">Access is not granted simply because someone needs a vehicle. It is granted when the person, asset, and arrangement can responsibly work together.</p>
      </Section>

      <Section eyebrow="OPPORTUNITY AND RESPONSIBILITY" title="Care. Operate Responsibly. Meet Obligations." altBg>
        <p>ZEKLEASE provides access; the Mobility Professional is responsible for using it properly — caring for the asset, following operating requirements, meeting financial obligations, communicating appropriately, and maintaining professional standards.</p>
      </Section>

      <Section eyebrow="HOW THE RELATIONSHIP WORKS" title="Assets Enable People. People Enable Assets. Structure Connects Them.">
        <p>The mobility asset provides infrastructure for productive mobility. ZEKANO provides the structure through which access is organized and managed. The Mobility Professional puts the asset to productive use while carrying the responsibilities associated with that access.</p>
      </Section>

      <Section eyebrow="WHAT WE EXPECT" title="Stewardship Is Earned" altBg>
        <div className="grid sm:grid-cols-2 gap-4">
          {["Care for the Asset — treat the vehicle with care expected of someone entrusted with another person's asset.","Operate Responsibly — use the vehicle within the agreed operating framework.","Meet Their Obligations — fulfil financial and operational responsibilities.","Communicate Honestly — raise issues promptly.","Maintain Professional Standards — protect the trust placed in them."].map((t) => (
            <div key={t} className="rounded-xl border border-border p-5 bg-white text-sm text-muted-foreground">{t}</div>
          ))}
        </div>
      </Section>

      <Section eyebrow="WHAT ZEKLEASE DOES NOT GUARANTEE" title="Structure Creates Conditions — Not Guaranteed Outcomes">
        <p>ZEKLEASE does not promise guaranteed income, earnings, demand, profitability, utilization, or elimination of operational risk. Mobility Professionals operate in a real-world environment where demand, operating conditions, costs, and downtime affect outcomes.</p>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <Eyebrow>ACCESS WITH A PATHWAY</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">The Opportunity Grows With Responsibility Carried</h2>
        <p className="mt-3 text-sm text-muted-foreground">For the right Mobility Professional, structured access can provide a pathway to participate with clearer expectations, defined responsibilities, and an opportunity to build trust through consistent performance.</p>
        <Link to="/our-systems" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Explore the ZEKANO Mobility System <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Apply for ZEKLEASE</h2>
          <p className="mt-2 text-sm text-white/70">Interested in structured access? Email us at <a href="mailto:admin.mobility@zekano.co" className="underline">admin.mobility@zekano.co</a></p>
          <a href="mailto:admin.mobility@zekano.co" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Apply for ZEKLEASE <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
