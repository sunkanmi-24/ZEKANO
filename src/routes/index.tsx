import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, User, BarChart3, Shield, Building2, Handshake, Users, Lightbulb, Heart } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroCars from "@/assets/hero-cars.jpg.asset.json";
import citySkyline from "@/assets/city-skyline.jpg";
import aboutHq from "@/assets/about-hq.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/")({ component: HomePage });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.18em] text-brand-green">{children}</p>;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1 HERO */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={getImage("home", "hero", heroCars.url)} alt="Mobility" className="h-full w-full object-cover opacity-50" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/30" />
        </div>
        <div className="relative mx-auto max-w-none px-4 lg:px-8 py-20 lg:py-28">
          <p className="text-xs font-bold tracking-[0.2em] text-white/70">ZEKANO MOBILITY</p>
          <h1 className="mt-4 max-w-3xl text-4xl lg:text-5xl font-bold text-white leading-tight">We Bring Structure to Mobility.</h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-white/80 leading-relaxed">
            ZEKANO Mobility is an expression of ZEKANO's purpose. We bring structure to the mobility industry by managing and connecting mobility assets with mobility communities to maximize their potential.
          </p>
          <Link to="/our-systems" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark transition">
            Explore Our Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 2 WHAT IS ZEKANO MOBILITY */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-none px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>ZEKANO MOBILITY</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark leading-tight">A Structured Mobility Solutions Company.</h2>
            <p className="mt-4 text-sm lg:text-base text-muted-foreground leading-relaxed">
              ZEKANO Mobility is an expression of ZEKANO's purpose in the mobility industry. We build trusted systems that bring structure to the relationships between mobility assets, people, and opportunities — creating the conditions for responsible use, productive value, and positive impact.
            </p>
            <Link to="/company" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Learn More About Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={getImage("home", "city-skyline", citySkyline)} alt="City" className="h-72 w-full object-cover" width={800} height={500} loading="lazy" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-14 lg:py-16 bg-secondary/40">
        <div className="mx-auto max-w-none px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark">Building the systems that move Africa forward.</h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
              ZEKANO is a structured mobility company that creates value by designing, operating, and continuously improving systems that connect mobility assets with qualified mobility professionals for productive use.
            </p>
            <Link to="/company" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Learn More About Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={getImage("home", "who-we-are", aboutHq)} alt="ZEKANO team and mobility" className="h-72 w-full object-cover" width={800} height={500} loading="lazy" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Structure. Manage. Connect. Maximize.</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">We manage and connect mobility assets with mobility communities, creating the structure through which assets can be responsibly and productively used.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Structure", d: "We organize the relationships, responsibilities, processes, and systems surrounding mobility." },
              { n: "02", t: "Manage", d: "We provide structured management and professional oversight for mobility assets." },
              { n: "03", t: "Connect", d: "We connect mobility assets with the people and communities that can put them to productive use." },
              { n: "04", t: "Maximize", d: "We seek to maximize the responsible and productive potential of mobility assets." },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-border p-6">
                <span className="text-2xl font-bold text-brand-green">{s.n}</span>
                <h3 className="mt-2 text-base font-bold text-brand-dark">{s.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STRUCTURE MATTERS */}
      <section className="py-14 lg:py-16 bg-secondary/40">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>WHY STRUCTURE MATTERS</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Mobility Assets Have Potential. Structure Helps Unlock It Responsibly.</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            A mobility asset is more than a vehicle. It can represent capital, opportunity, livelihood, and the ability to serve people and communities. Its potential is realized through responsible positioning, management, utilization, and stewardship. When the relationships surrounding an asset are poorly structured, potential can be lost and trust becomes difficult to maintain. We bring structure to mobility so that assets can be responsibly managed, people can participate with greater clarity, and productive value can be created across the ecosystem.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Layers, title: "Structured Operations", desc: "Clear processes and responsibilities that create consistency and control." },
              { icon: User, title: "Professional Management", desc: "Responsible oversight of mobility assets and the relationships surrounding them." },
              { icon: BarChart3, title: "Technology & Transparency", desc: "Information and systems that support visibility, coordination, and informed decisions." },
              { icon: Shield, title: "Trust & Accountability", desc: "Clear standards and responsibilities that strengthen confidence across the mobility ecosystem." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl bg-white border border-border p-6">
                <c.icon className="h-7 w-7 text-brand-green" />
                <h3 className="mt-3 text-sm font-bold text-brand-dark">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ZEKANO MOBILITY SYSTEM - also "OUR SYSTEM" */}
      <section className="py-14 lg:py-16 bg-brand-dark text-white">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] text-brand-green">THE ZEKANO MOBILITY SYSTEM</p>
          <h2 className="mt-3 text-3xl font-bold">A System Designed to Create Productive Mobility.</h2>
          <p className="mt-3 max-w-3xl text-sm text-white/70">Mobility works through relationships between assets, people, and opportunities. Our system brings these elements together through structure, enabling mobility assets to be put to responsible and productive use.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Assets", d: "Mobility assets provide the potential to create value." },
              { t: "Communities", d: "People and communities bring needs, capabilities, and opportunities into the system." },
              { t: "Structure", d: "We organize the relationships, responsibilities, and processes that connect assets with communities." },
              { t: "Productive Mobility", d: "When these elements work together responsibly, mobility assets can serve meaningful needs and create productive value." },
              { t: "Value", d: "Value is created across the relationships connecting asset owners, mobility professionals, customers, partners, and the wider community." },
              { t: "Impact", d: "The value created through mobility ultimately contributes to our purpose: positively impacting the lives of the communities we serve." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-bold text-white">{c.t}</h3>
                <p className="mt-2 text-xs text-white/60">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-4 text-center text-sm font-mono text-white/80">
            Assets + Communities + Structure → Productive Mobility → Value → Impact
          </div>
          <Link to="/our-systems" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore Our System <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* 6 OUR SOLUTIONS */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>OUR SOLUTIONS</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Structured Solutions for Mobility.</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Our solutions are practical expressions of the ZEKANO Mobility System. Each is designed to address a specific mobility need while creating responsible value.</p>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-brand-green">ZEKMANAGE</h3>
              <p className="text-sm font-semibold text-brand-dark">Structured Mobility Asset Management</p>
              <p className="mt-3 text-sm text-muted-foreground">ZEKMANAGE provides Asset Owners with professional management, oversight, coordination, and accountability for their mobility assets.</p>
              <Link to="/zekmanage" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Explore ZEKMANAGE <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-brand-blue">ZEKLEASE</h3>
              <p className="text-sm font-semibold text-brand-dark">Structured Mobility Access</p>
              <p className="mt-3 text-sm text-muted-foreground">ZEKLEASE provides responsible Mobility Professionals with structured access to mobility assets for productive use.</p>
              <Link to="/zeklease" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">Explore ZEKLEASE <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 STEWARDSHIP */}
      <section className="py-14 lg:py-16 bg-secondary/40">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>STEWARDSHIP</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Responsibility Before Opportunity.</h2>
          <p className="mt-2 text-sm text-muted-foreground">An asset entrusted to us is a responsibility before it is an opportunity.</p>
          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            {[
              { t: "Responsible Use", d: "Putting mobility assets to productive use without compromising their purpose or long-term potential." },
              { t: "Professional Oversight", d: "Managing assets and relationships with the care, standards, and accountability they require." },
              { t: "Sustainable Value", d: "Creating value today while protecting the asset's ability to continue serving its purpose tomorrow." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl bg-white border border-border p-6">
                <h3 className="text-sm font-bold text-brand-dark">{c.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-brand-dark italic">We do not simply seek to keep assets productive. We seek to keep their potential alive.</p>
          <Link to="/stewardship" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Learn About Our Approach to Stewardship <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* 8 THE COMMUNITIES WE SERVE */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>THE COMMUNITIES WE SERVE</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">There Are People Behind Every Mobility Asset.</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">Mobility is ultimately about people. Behind every mobility asset, transaction, and journey is a person, business, or community with a need, responsibility, opportunity, or aspiration.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Building2, t: "Asset Owners", d: "People and institutions entrusting mobility assets to be managed responsibly." },
              { icon: Users, t: "Mobility Professionals", d: "Responsible professionals seeking structured access to mobility assets." },
              { icon: Heart, t: "Customers", d: "People and organizations who depend on reliable mobility." },
              { icon: Handshake, t: "Strategic Partners", d: "Organizations whose capabilities strengthen the mobility ecosystem." },
              { icon: Users, t: "Communities", d: "The wider communities in which mobility operates." },
              { icon: Lightbulb, t: "Future Builders", d: "People developing the skills and leadership for tomorrow's mobility." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border p-6">
                <c.icon className="h-6 w-6 text-brand-green" />
                <h3 className="mt-3 text-sm font-bold text-brand-dark">{c.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-brand-green">We build systems around people, not simply around assets.</p>
        </div>
      </section>

      {/* 9 WHY ZEKANO */}
      <section className="py-14 lg:py-16 bg-secondary/40">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>WHY ZEKANO</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Structure Built on Responsibility.</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Structure", d: "Clarity and organization across mobility relationships." },
              { t: "Stewardship", d: "Responsibility as fundamental to every opportunity." },
              { t: "Accountability", d: "Clear responsibilities and standards that support trust." },
              { t: "Purpose", d: "Positively impacting lives through order, trust, and opportunity." },
              { t: "Community", d: "Considering the wider communities within which mobility operates." },
              { t: "Responsible Growth", d: "Growth follows capability, responsibility, and ability to serve well." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl bg-white border border-border p-6">
                <h3 className="text-sm font-bold text-brand-dark">{c.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-bold text-brand-dark">Trust before growth.</p>
          <Link to="/why-zekano" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Why ZEKANO <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* 10 OUR COMMITMENT */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-none px-4 lg:px-8">
          <Eyebrow>OUR COMMITMENT</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Building Trust Through How We Work.</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Building Trusted Systems",
              "Responsible Stewardship",
              "Clear Accountability",
              "Continuous Improvement",
              "Creating Meaningful Value",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-border p-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-brand-green shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">We are committed to building systems that people can trust and that communities can benefit from.</p>
          <Link to="/our-commitment" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Our Commitment <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* 11 CLOSING CTA */}
      <section className="py-14 lg:py-16 bg-brand-dark text-white">
        <div className="mx-auto max-w-none px-4 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-brand-green">FIND YOUR PLACE IN THE SYSTEM</p>
          <h2 className="mt-3 text-3xl font-bold">Where Do You Fit Within the ZEKANO Mobility System?</h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white/70">Whether you own a mobility asset, seek structured access to one, or want to contribute to the mobility ecosystem, there is a place for you within the system we are building.</p>
          <div className="mt-8 grid lg:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-bold">I Own a Mobility Asset</h3>
              <p className="mt-2 text-xs text-white/60">Put your asset under a structured management system designed for responsible and productive use.</p>
              <Link to="/zekmanage" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-xs font-semibold text-white">Explore ZEKMANAGE <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-bold">I Need Mobility Access</h3>
              <p className="mt-2 text-xs text-white/60">Explore structured access to mobility assets for productive use.</p>
              <Link to="/zeklease" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-semibold text-brand-dark">Explore ZEKLEASE <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
