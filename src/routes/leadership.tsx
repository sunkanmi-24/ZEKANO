import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, CheckCircle2, Target, Shield, Crown, Users, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import ceoAsset from "@/assets/leader-ceo.jpg.asset.json";
import cooAsset from "@/assets/leader-coo.jpg.asset.json";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/leadership")({ component: LeadershipPage });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav aria-label="Breadcrumb" className="px-5 pt-6 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li><Link to="/company" className="hover:text-brand-green">Company</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li className="text-brand-dark">Leadership</li>
        </ol>
      </nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>LEADERSHIP</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark leading-tight">Leadership With Purpose. Responsibility With Trust.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">ZEKANO is built on the belief that leadership is not simply about directing an organization. It is about carrying responsibility for its purpose, its people, its decisions, and the communities it serves. Our leaders are responsible for ensuring that ZEKANO remains faithful to its purpose while building the capability, systems, and culture required to serve well.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("leadership","hero","https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200")} alt="Leadership" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white text-center">
        <div className="flex justify-center"><p className="text-xs font-bold tracking-[0.2em] text-white">LEADERSHIP AT ZEKANO</p></div>
        <h2 className="mt-3 text-2xl font-bold text-white">Purpose Before Position</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          {[
            { icon: Target, t: "Purpose Before Position", d: "Protect the purpose, decide with integrity, consider long-term consequences." },
            { icon: Shield, t: "Responsibility Before Authority", d: "Authority enables responsible action. Leaders are accountable for standards they build." },
            { icon: Crown, t: "Principles Before Convenience", d: "Preserve trust even when convenience suggests otherwise." },
            { icon: Users, t: "People and Institution", d: "Responsible for people and systems, not just results." },
            { icon: TrendingUp, t: "Long-Term Stewardship", d: "Strengthen what we have been entrusted with for the future." },
          ].map((c) => (
            <div key={c.t} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <c.icon className="mx-auto h-7 w-7 text-white group-hover:scale-110 transition-transform" />
              <h3 className="mt-3 text-sm font-bold text-white">{c.t}</h3>
              <p className="mt-2 text-xs text-white/60">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <Eyebrow>OUR LEADERSHIP</Eyebrow>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          {[
            { name: "ALIU AZEEZ ADEKUNLE", role: "Founder & CEO", img: getImage("leadership", "leader-1", ceoAsset.url), desc: "Provides overall direction, guiding purpose, long-term vision, strategic development, and institutional growth.", points: ["Institutional Vision & Direction", "Strategic Development", "Business Development", "Strategic Partnerships", "Institutional Governance"] },
            { name: "BELLO WALIU LANRE", role: "Co-Founder & COO", img: getImage("leadership", "leader-2", cooAsset.url), desc: "Translates direction into effective day-to-day operations, ensuring systems, processes, and teams work together consistently.", points: ["Operations Management", "Operational Excellence", "System Implementation", "Team Leadership", "Quality & Compliance"] },
          ].map((m) => (
            <div key={m.name} className="group rounded-2xl border border-border bg-secondary/40 p-6 grid sm:grid-cols-[160px_1fr] gap-6 hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all">
              <img src={m.img} alt={m.name} className="h-64 w-full object-cover rounded-xl" width={400} height={500} loading="lazy" />
              <div>
                <h3 className="text-lg font-bold text-brand-dark">{m.name}</h3>
                <p className="text-sm font-semibold text-brand-green">{m.role}</p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                <ul className="mt-4 space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs text-brand-dark"><CheckCircle2 className="h-4 w-4 text-brand-green shrink-0" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">One Leadership Philosophy</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">Leadership at ZEKANO is ultimately about stewardship. We believe those entrusted with responsibility should leave the institution stronger, more capable, and better prepared for what comes next. We preserve what must endure while improving what should evolve.</p>
          <Link to="/our-philosophy" className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Philosophy <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
