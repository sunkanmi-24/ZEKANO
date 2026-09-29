import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight, Heart, Shield, Users, TrendingUp } from "lucide-react";
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
            <Eyebrow>ABOUT ZEKANO MOBILITY</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h1 className="mt-3 text-3xl lg:text-[44px] font-bold leading-tight text-brand-dark">Building Trusted Systems for Mobility.</h1>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKANO Mobility is a structured mobility solutions company and an expression of ZEKANO's purpose. ZEKANO exists to positively impact lives by bringing order, trust, and opportunity to the communities we serve. In mobility, we express this purpose by building trusted systems that bring structure to the relationships between mobility assets, people, and opportunities.</p>
            <p className="mt-3 text-sm text-muted-foreground">We manage and connect mobility assets with mobility communities, creating the structure through which assets can be responsibly and productively used.</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={getImage("about-us", "hero", aboutHq)} alt="ZEKANO HQ" className="h-80 w-full object-cover lg:h-[420px]" width={1280} height={912} />
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE - blue */}
      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHAT WE BELIEVE</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Structure Creates the Conditions for Trust</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Shield, t: "Responsibility First", d: "Assets managed as responsibilities before opportunities." },
            { icon: Users, t: "Opportunity With Responsibility", d: "Meaningful access with the responsibility to sustain it." },
            { icon: TrendingUp, t: "Responsible Growth", d: "Growth follows capability and ability to serve well." },
            { icon: Heart, t: "Value for Tomorrow", d: "Create value today and for communities of tomorrow." },
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

      {/* PURPOSE + ROLE side by side */}
      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8">
            <Heart className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>OUR PURPOSE</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Exist to Positively Impact Lives.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">ZEKANO Mobility is one expression of that purpose. Through mobility, we seek to create systems that enable assets to serve meaningful needs, people to participate responsibly, and productive value to be created.</p>
          </div>
          <div className="rounded-2xl bg-secondary/40 border border-border p-8">
            <Shield className="h-7 w-7 text-brand-green" />
            <div className="mt-3"><Eyebrow>OUR ROLE IN MOBILITY</Eyebrow></div><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">We Bring Structure to Mobility.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Our role is not simply to own, operate, or connect vehicles. We build the structures through which mobility assets, people, and opportunities can work together responsibly.</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-secondary/40 border border-border p-8 text-center">
            <Eyebrow>BUILDING FOR LONG TERM</Eyebrow><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-2xl font-bold text-brand-dark">Preserve what must endure. Improve what should evolve.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">ZEKANO Mobility is being built with a long-term perspective. We seek to build the capability, trust, and responsibility required to serve better as we grow. Because the systems we build today should be capable of creating value tomorrow.</p>
          </div>
          <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
            <h2 className="text-xl font-bold text-white">Our Identity</h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">ZEKANO is a purpose-driven institution that builds trusted systems to positively impact lives by bringing order, trust, and opportunity to the communities it serves. ZEKANO Mobility is the current expression of that purpose in mobility.</p>
            <Link to="/our-philosophy" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore Our Philosophy <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
