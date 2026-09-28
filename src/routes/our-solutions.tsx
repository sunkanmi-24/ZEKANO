import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Shield, Layers } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/city-skyline.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/our-solutions")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Our Solutions</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Eyebrow>OUR SOLUTIONS</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structured Solutions for Mobility.</h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKANO Mobility develops structured solutions that connect mobility assets, people, and opportunities in ways that create responsible and productive value. Our solutions are designed around real mobility needs while remaining grounded in the principles of structure, stewardship, accountability, and responsible value creation.</p>
          <p className="mt-3 text-sm text-muted-foreground">A mobility solution is more than a service — it is a structured response to a mobility need, designed to create clarity, establish responsibility, and enable productive use.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("solutions","hero",heroImg)} alt="Our Solutions" className="h-72 w-full object-cover lg:h-[380px]" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Shield className="h-5 w-5 text-white" /></div><h3 className="text-xl font-bold text-white">ZEKMANAGE</h3></div>
            <p className="mt-2 text-sm font-semibold text-white/80">Structured Mobility Asset Management</p>
            <p className="mt-3 text-sm text-white/60">ZEKMANAGE provides Asset Owners with professional management, oversight, coordination, and accountability for their mobility assets.</p>
            <p className="mt-2 text-xs font-semibold text-white">For: Asset Owners</p>
            <ul className="mt-3 space-y-1 text-xs text-white/60 list-disc pl-5">
              <li>Professional asset management</li><li>Operational oversight</li><li>Coordination</li><li>Accountability</li><li>Responsible stewardship</li>
            </ul>
            <p className="mt-4 text-xs font-semibold italic text-white">Ownership gives responsibility. Management provides structure. Stewardship protects potential.</p>
            <Link to="/zekmanage" className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore ZEKMANAGE <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Layers className="h-5 w-5 text-white" /></div><h3 className="text-xl font-bold text-white">ZEKLEASE</h3></div>
            <p className="mt-2 text-sm font-semibold text-white/80">Structured Mobility Access</p>
            <p className="mt-3 text-sm text-white/60">ZEKLEASE provides responsible Mobility Professionals with structured access to mobility assets for productive use.</p>
            <p className="mt-2 text-xs font-semibold text-white">For: Mobility Professionals</p>
            <ul className="mt-3 space-y-1 text-xs text-white/60 list-disc pl-5">
              <li>Structured access to mobility assets</li><li>Defined responsibilities</li><li>Clear operating expectations</li><li>Professional standards</li><li>Pathway for productive mobility participation</li>
            </ul>
            <p className="mt-4 text-xs font-semibold italic text-white">Access creates opportunity. Opportunity carries responsibility. Responsibility creates trust.</p>
            <Link to="/zeklease" className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore ZEKLEASE <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Eyebrow>ONE MOBILITY SYSTEM. DIFFERENT SOLUTIONS.</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Structure the Relationship</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">ZEKMANAGE provides the structure through which mobility assets are managed and stewarded. ZEKLEASE provides the structure through which responsible Mobility Professionals gain access to those assets. Together, they connect the key relationships between assets, people, and productive mobility.</p>
            <p className="mt-3 text-sm font-semibold text-brand-dark">We do not simply connect mobility assets with people. We structure the relationship between them.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Eyebrow>BUILT TO EVOLVE</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">Purpose. Structure. Stewardship. Accountability. Responsible Value.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Our solutions will continue to evolve as we learn from the mobility communities we serve. Any future solution must remain consistent with the principles that guide ZEKANO Mobility. We do not build solutions simply because they are possible. We build them when they can create meaningful value and responsibly strengthen the mobility system.</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Where Do You Fit?</h2>
          <p className="mt-2 text-sm text-white/70">Whether you own a mobility asset or are looking for structured access to one, there is a place for you within the ZEKANO Mobility System.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/zekmanage" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>I Own a Mobility Asset <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/zeklease" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">I Need Mobility Access <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
