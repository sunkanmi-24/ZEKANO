import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Layers, Shield, Award, Heart, Users, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/what-we-do-hero.jpg";
import { getImage } from "@/lib/site-images";


export const Route = createFileRoute("/why-zekano")({ component: Page });

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
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Why ZEKANO</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>WHY ZEKANO</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structure With Purpose. Responsibility With Trust.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Mobility involves assets, people, relationships, and opportunity. How those elements are managed determines whether potential becomes productive value or whether uncertainty and mistrust take its place. At ZEKANO Mobility, we believe better mobility requires more than activity — it requires structure.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("why","hero",heroImg)} alt="Why Zekano" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white">WHY ZEKANO</p><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
          <h2 className="mt-3 text-2xl font-bold text-white">Structure. Stewardship. Accountability.</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Layers, eyebrow: "STRUCTURE", title: "We Bring Structure to Mobility", desc: "Structure around relationships, responsibilities, processes, and systems." },
            { icon: Heart, eyebrow: "STEWARDSHIP", title: "We Treat Assets as Responsibilities", desc: "We keep their potential alive." },
            { icon: Shield, eyebrow: "ACCOUNTABILITY", title: "We Make Responsibility Clear", desc: "Defined standards from the start." },
            { icon: Award, eyebrow: "PURPOSE", title: "We Build for More Than Activity", desc: "Asset is infrastructure. Impact is purpose." },
            { icon: Users, eyebrow: "COMMUNITY", title: "We Build With People in Mind", desc: "We belong before we build." },
            { icon: TrendingUp, eyebrow: "RESPONSIBLE GROWTH", title: "We Grow With Responsibility", desc: "Structure must grow with responsibility." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <c.icon className="mx-auto h-7 w-7 text-white" />
              <p className="mt-3 text-xs font-bold tracking-widest text-white">{c.eyebrow}</p>
              <h3 className="mt-1 font-bold text-white text-sm">{c.title}</h3>
              <p className="mt-2 text-xs text-white/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10 bg-white" aria-hidden />

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-secondary/40 border border-border p-8 text-center">
            <Eyebrow>WHAT THIS MEANS FOR YOU</Eyebrow><span aria-hidden className="mx-auto mt-2 block h-0.5 w-12 bg-[#BF953F]" />
            <h2 className="mt-3 text-xl font-bold text-brand-dark">Clearer Relationships. Defined Responsibilities. Professional Management.</h2>
            <p className="mt-3 text-sm text-muted-foreground">We cannot eliminate every uncertainty within mobility. But we can build better structures for managing it. We take responsibility for how we manage the relationships and assets entrusted to us.</p>
          </div>
          <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
            <h2 className="text-xl font-bold text-white">Why ZEKANO</h2>
            <p className="mt-2 mx-auto max-w-xl text-sm text-white">We bring structure to mobility so that mobility can better serve people.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/our-solutions" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore Our Solutions <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/our-commitment" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white">Explore Our Commitment <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="h-10 bg-white" aria-hidden />

      <Footer />
    </div>
  );
}
