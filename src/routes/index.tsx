import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  CircleUser,
  Users,
  TrendingUp,
  Layers,
  User,
  BarChart3,
  Shield,
  Building2,
  Quote,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroCars from "@/assets/hero-cars.jpg.asset.json";
import citySkyline from "@/assets/city-skyline.jpg";
import founder from "@/assets/founder.jpg";
import driver from "@/assets/driver.jpg";
import phoneApp from "@/assets/phone-app.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const whoWeServe = [
  {
    icon: Car,
    title: "For Vehicle Owners",
    desc: "Predictable income through professional asset management.",
    color: "bg-brand-green",
  },
  {
    icon: CircleUser,
    title: "For Drivers",
    desc: "Access to reliable vehicles and sustainable income opportunities.",
    color: "bg-brand-blue",
  },
  {
    icon: Users,
    title: "For Communities",
    desc: "Safer, more efficient and sustainable mobility.",
    color: "bg-brand-dark",
  },
  {
    icon: TrendingUp,
    title: "For the Future",
    desc: "Building scalable systems for a better tomorrow.",
    color: "bg-brand-green",
  },
];

const pillars = [
  { icon: Layers, title: "Structured Operations", desc: "Processes that ensure consistency and control." },
  { icon: User, title: "Professional Management", desc: "Experts managing assets and people." },
  { icon: BarChart3, title: "Technology & Transparency", desc: "Real-time insights and transparent reporting." },
  { icon: Shield, title: "Trust & Accountability", desc: "Built on compliance, standards and integrity." },
];

const stats = [
  { icon: Car, value: "100+", label: "Mobility Assets Managed" },
  { icon: Users, value: "1,500+", label: "Active Drivers Connected" },
  { icon: CircleUser, value: "300+", label: "Asset Owners Earning" },
  { icon: BarChart3, value: "95%+", label: "Vehicle Utilization Rate" },
  { icon: Shield, value: "100%", label: "Compliance & Safety Standard" },
  { icon: Building2, value: "1+", label: "Cities of Operation" },
];

const ecosystem = [
  { icon: User, title: "Vehicle Owner", desc: "Provides vehicle as an asset", color: "bg-brand-green" },
  { icon: Layers, title: "ZEKMANAGE", desc: "Manages, maintains and optimizes the asset", color: "bg-brand-green" },
  { icon: Car, title: "Managed Vehicle", desc: "Vehicle is ready for productive use", color: "bg-brand-dark" },
  { icon: Users, title: "ZEKLEASE", desc: "Provides access to qualified drivers", color: "bg-brand-blue" },
  { icon: CircleUser, title: "Qualified Driver", desc: "Uses the vehicle to earn income", color: "bg-brand-blue" },
  {
    icon: BarChart3,
    title: "Income Generated",
    desc: "Owner earns predictable income. Driver earns sustainable income.",
    color: "bg-brand-green",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="zekano-hero relative bg-brand-dark overflow-hidden">
        <div className="zekano-hero-bg absolute inset-0">
          <img
            src={heroCars.url}
            alt="Vehicles on highway"
            className="h-full w-full object-cover opacity-70"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="zekano-hero-content relative mx-auto max-w-none px-4 py-[15px] lg:px-8">
          <div className="zekano-hero-grid grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="zekano-hero-text max-w-2xl">
              <h1 className="zekano-hero-title text-[40px] font-bold text-white leading-tight">
                Structured Mobility.
                <br />
                <span className="text-brand-green">Professionally Managed.</span>
              </h1>
              <p className="zekano-hero-subtitle mt-6 text-base sm:text-lg text-white/85 max-w-xl">
                ZEKANO designs, operates, and continuously improves systems that connect mobility assets with qualified
                mobility professionals for productive use.
              </p>
              <div className="zekano-hero-buttons mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to="/our-systems"
                  className="zekano-hero-btn inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark transition"
                >
                  Explore Our Systems <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="zekano-hero-btn inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Become an Asset Owner <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="zekano-hero-btn inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Become a Driver <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="zekano-hero-pillars lg:w-[340px] rounded-xl bg-brand-dark/85 backdrop-blur border border-white/10 p-6 space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="zekano-hero-pillar flex gap-3">
                  <p.icon className="h-6 w-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-white/70 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="zekano-who-we-serve py-14 lg:py-16 bg-white">
        <div className="zekano-who-we-serve-inner mx-auto max-w-none px-4 lg:px-8">
          <h2 className="zekano-who-we-serve-title text-center text-2xl lg:text-3xl font-bold text-brand-dark">
            Who We Serve
            <span className="block mx-auto mt-2 h-0.5 w-12 bg-brand-green" />
          </h2>

          <div className="zekano-serve-grid mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-border p-4 lg:p-6">
            {whoWeServe.map((item) => (
              <div key={item.title} className="zekano-serve-card flex items-start gap-4 p-4">
                <div
                  className={`zekano-serve-icon grid h-12 w-12 shrink-0 place-items-center rounded-full ${item.color}`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="zekano-serve-text min-w-0">
                  <h3 className="zekano-serve-title text-base font-bold text-brand-dark">{item.title}</h3>
                  <p className="zekano-serve-desc mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE + STATS + PURPOSE */}
      <section className="zekano-who-we-are py-8 lg:py-10 bg-white">
        <div className="zekano-who-we-are-inner mx-auto max-w-none px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div className="zekano-who-we-are-card rounded-2xl border border-border p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
            <div className="zekano-who-we-are-text">
              <p className="zekano-section-label text-xs font-bold tracking-wider text-brand-green">WHO WE ARE</p>
              <h2 className="zekano-who-we-are-title mt-3 text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
                Building the systems that move <span className="text-brand-green">Africa forward.</span>
              </h2>
              <p className="zekano-who-we-are-desc mt-4 text-sm text-muted-foreground">
                ZEKANO is a structured mobility company that creates value by designing, operating, and continuously
                improving systems that connect mobility assets with qualified mobility professionals for productive use.
              </p>
              <Link
                to="/company"
                className="zekano-who-we-are-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="zekano-stats-wrap">
              <div className="zekano-stats-grid grid grid-cols-3 gap-y-8 gap-x-4">
                {stats.map((s) => (
                  <div key={s.label} className="zekano-stat-item text-center">
                    <div className="zekano-stat-icon mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary">
                      <s.icon className="h-5 w-5 text-brand-green" />
                    </div>
                    <div className="zekano-stat-value mt-3 text-xl lg:text-2xl font-bold text-brand-green">
                      {s.value}
                    </div>
                    <div className="zekano-stat-label mt-1 text-xs text-muted-foreground leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="zekano-stats-note mt-6 text-xs text-muted-foreground">*Data updated as of May 2025</p>
            </div>
          </div>

          <div className="zekano-purpose-card relative rounded-2xl overflow-hidden min-h-[280px]">
            <img
              src={citySkyline}
              alt="City skyline"
              className="absolute inset-0 h-full w-full object-cover"
              width={1200}
              height={700}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
            <div className="zekano-purpose-overlay absolute bottom-6 right-6 left-6 sm:left-auto sm:w-64 rounded-lg bg-white p-5 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-brand-green text-xl">✳</span>
                <h3 className="zekano-purpose-title text-base font-bold text-brand-dark">Our Purpose</h3>
              </div>
              <p className="zekano-purpose-desc mt-2 text-sm text-muted-foreground">
                Bring order. Create value. Improve mobility. Impact lives.
              </p>
              <div className="mt-3 h-0.5 w-8 bg-brand-green" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO + HOW SYSTEMS WORK */}
      <section className="zekano-what-we-do py-8 lg:py-10 bg-white">
        <div className="zekano-what-we-do-inner mx-auto max-w-none px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Systems cards */}
          <div className="zekano-systems-card rounded-2xl border border-border p-5 lg:p-6 space-y-5">
            <p className="zekano-section-label text-xs font-bold tracking-wider text-brand-green">WHAT WE DO</p>

            <div className="zekano-system-card grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center">
              <div className="zekano-system-text">
                <h3 className="zekano-system-title text-lg font-bold text-brand-green">ZEKMANAGE</h3>
                <p className="zekano-system-subtitle text-sm font-semibold text-brand-dark">
                  Structured Mobility Management System
                </p>
                <p className="zekano-system-desc mt-2 text-sm text-muted-foreground">
                  Enables vehicle owners to earn predictable income through the professional management of their
                  mobility assets.
                </p>
                <Link
                  to="/our-systems"
                  className="zekano-system-link mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <img
                src={phoneApp}
                alt="ZEKMANAGE app"
                className="zekano-system-img h-40 w-auto object-contain justify-self-end"
                width={600}
                height={700}
                loading="lazy"
              />
            </div>

            <div className="zekano-system-card border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center">
              <div className="zekano-system-text">
                <h3 className="zekano-system-title text-lg font-bold text-brand-blue">ZEKLEASE</h3>
                <p className="zekano-system-subtitle text-sm font-semibold text-brand-dark">
                  Structured Mobility Access System
                </p>
                <p className="zekano-system-desc mt-2 text-sm text-muted-foreground">
                  Enables responsible, vetted drivers to earn sustainable income through access to professionally
                  managed vehicles.
                </p>
                <Link
                  to="/our-systems"
                  className="zekano-system-link mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <img
                src={driver}
                alt="ZEKLEASE driver"
                className="zekano-system-img h-32 w-40 object-cover rounded-lg justify-self-end"
                width={700}
                height={512}
                loading="lazy"
              />
            </div>
          </div>

          {/* Ecosystem flow */}
          <div className="zekano-ecosystem rounded-2xl border border-border p-5 lg:p-6">
            <p className="zekano-ecosystem-title text-center text-xs font-bold tracking-wider text-brand-green">
              HOW OUR SYSTEMS WORK TOGETHER
            </p>

            <div className="zekano-ecosystem-grid mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-2">
              {ecosystem.map((step, i) => (
                <div key={step.title} className="zekano-ecosystem-step flex flex-col items-center text-center relative">
                  <div className={`zekano-ecosystem-icon grid h-12 w-12 place-items-center rounded-full ${step.color}`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4
                    className={`zekano-ecosystem-step-title mt-3 text-xs font-bold ${step.color === "bg-brand-blue" ? "text-brand-blue" : step.color === "bg-brand-dark" ? "text-brand-dark" : "text-brand-green"}`}
                  >
                    {step.title}
                  </h4>
                  <p className="zekano-ecosystem-step-desc mt-1 text-[11px] leading-tight text-muted-foreground">
                    {step.desc}
                  </p>
                  {i < ecosystem.length - 1 && (
                    <ArrowRight className="zekano-ecosystem-arrow hidden lg:block absolute -right-3 top-4 h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            <div className="zekano-ecosystem-footer mt-6 flex items-center gap-2 rounded-lg bg-brand-green/10 px-4 py-3">
              <Shield className="h-5 w-5 text-brand-green shrink-0" />
              <p className="zekano-ecosystem-footer-text text-xs sm:text-sm font-medium text-brand-dark">
                ZEKANO manages the entire ecosystem with structure, technology, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER + CTA */}
      <section className="zekano-founder-cta py-8 lg:py-10 bg-white">
        <div className="zekano-founder-cta-inner mx-auto max-w-none px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="zekano-founder rounded-2xl border border-border overflow-hidden grid grid-cols-1 sm:grid-cols-[auto_1fr]">
            <img
              src={founder}
              alt="Founder"
              className="zekano-founder-img h-full w-full sm:w-48 object-cover"
              width={600}
              height={600}
              loading="lazy"
            />
            <div className="zekano-founder-text p-6">
              <Quote className="zekano-founder-quote h-6 w-6 text-brand-green" />
              <h3 className="zekano-founder-title mt-2 text-lg font-bold text-brand-dark">
                A Message from Our Founder
              </h3>
              <p className="zekano-founder-message mt-3 text-sm text-muted-foreground italic">
                "At ZEKANO, we believe in building more than a company—we are building systems that create trust,
                opportunity, and sustainable value."
              </p>
              <Link
                to="/company"
                className="zekano-founder-link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green"
              >
                Read the Full Message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="zekano-cta rounded-2xl border border-border bg-secondary/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="zekano-cta-icon grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white">
              <Users className="h-7 w-7 text-brand-green" />
            </div>
            <div className="zekano-cta-text flex-1 min-w-0">
              <h3 className="zekano-cta-title text-lg font-bold text-brand-dark">
                Ready to Join the ZEKANO Ecosystem?
              </h3>
              <p className="zekano-cta-desc mt-1 text-sm text-muted-foreground">
                Whether you own a vehicle or want to become a professional driver, our structured systems are designed
                to help you succeed.
              </p>
              <div className="zekano-cta-buttons mt-4 flex flex-wrap gap-2">
                <Link
                  to="/contact"
                  className="zekano-cta-btn inline-flex items-center gap-2 rounded-md bg-brand-green px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-green-dark transition"
                >
                  Become an Asset Owner <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="zekano-cta-btn inline-flex items-center gap-2 rounded-md bg-brand-blue px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition"
                >
                  Become a Driver <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="zekano-cta-btn inline-flex items-center gap-2 rounded-md bg-brand-dark px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition"
                >
                  Contact Us <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10" />
      <Footer />
    </div>
  );
}
