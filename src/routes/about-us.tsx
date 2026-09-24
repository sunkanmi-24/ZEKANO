import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import aboutHq from "@/assets/about-hq.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/about-us")({ component: AboutUsPage });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav aria-label="Breadcrumb" className="px-5 pt-6 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li><Link to="/company" className="hover:text-brand-green">Company</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li className="text-brand-dark">About Us</li>
        </ol>
      </nav>

      <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <Eyebrow>ABOUT ZEKANO MOBILITY</Eyebrow>
            <h1 className="mt-3 text-3xl lg:text-[44px] font-bold leading-tight text-brand-dark">Building Trusted Systems for Mobility.</h1>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKANO Mobility is a structured mobility solutions company and an expression of ZEKANO's purpose. ZEKANO exists to positively impact lives by bringing order, trust, and opportunity to the communities we serve. In mobility, we express this purpose by building trusted systems that bring structure to the relationships between mobility assets, people, and opportunities.</p>
            <p className="mt-3 text-sm text-muted-foreground">We manage and connect mobility assets with mobility communities, creating the structure through which assets can be responsibly and productively used.</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={getImage("about-us", "hero", aboutHq)} alt="ZEKANO HQ" className="h-80 w-full object-cover lg:h-[420px]" width={1280} height={912} />
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <Eyebrow>OUR PURPOSE</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Exist to Positively Impact Lives.</h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKANO exists to positively impact lives by bringing order, trust, and opportunity to the communities we serve. ZEKANO Mobility is one expression of that purpose. Through mobility, we seek to create systems that enable assets to serve meaningful needs, people to participate responsibly, and productive value to be created across the communities connected to our work.</p>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <Eyebrow>WHAT WE BELIEVE</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">Structure Creates the Conditions for Trust</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Assets should be managed as responsibilities before they are treated as opportunities.","People should have access to meaningful opportunities with the responsibility required to sustain them.","Growth should follow capability, responsibility, and the ability to continue serving well.","The systems we build should create value not only today, but for the communities and people they will affect tomorrow."].map((t) => (
            <div key={t} className="rounded-xl border border-border p-5 text-sm text-muted-foreground">We believe {t.toLowerCase()}</div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <Eyebrow>OUR ROLE IN MOBILITY</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Bring Structure to Mobility.</h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Our role is not simply to own, operate, or connect vehicles. We build the structures through which mobility assets, people, and opportunities can work together responsibly. This means managing assets, connecting them with mobility communities, organizing relationships and responsibilities, and continuously improving the systems through which productive mobility is created.</p>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <Eyebrow>BUILDING FOR LONG TERM</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-brand-dark">Preserve what must endure. Improve what should evolve.</h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKANO Mobility is being built with a long-term perspective. We are not seeking growth simply for the sake of becoming larger. We seek to build the capability, trust, and responsibility required to serve better as we grow. Because the systems we build today should be capable of creating value tomorrow.</p>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Our Identity</h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">ZEKANO is a purpose-driven institution that builds trusted systems to positively impact lives by bringing order, trust, and opportunity to the communities it serves. ZEKANO Mobility is the current expression of that purpose in mobility.</p>
          <Link to="/our-philosophy" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Philosophy <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
