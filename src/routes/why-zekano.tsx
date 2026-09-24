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
        <Eyebrow>WHY ZEKANO</Eyebrow>
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Structure With Purpose. Responsibility With Trust.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Mobility involves assets, people, relationships, and opportunity. How those elements are managed determines whether potential becomes productive value or whether uncertainty and mistrust take its place. At ZEKANO Mobility, we believe better mobility requires more than activity — it requires structure.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("why","hero",heroImg)} alt="Why Zekano" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Layers, eyebrow: "STRUCTURE", title: "We Bring Structure to Mobility", desc: "We create structure around relationships, responsibilities, processes, and systems." },
            { icon: Heart, eyebrow: "STEWARDSHIP", title: "We Treat Assets as Responsibilities", desc: "We do not simply keep assets productive. We keep their potential alive." },
            { icon: Shield, eyebrow: "ACCOUNTABILITY", title: "We Make Responsibility Clear", desc: "Defined standards, oversight, and communication from the start." },
            { icon: Award, eyebrow: "PURPOSE", title: "We Build for More Than Activity", desc: "The asset is infrastructure. The impact on lives is purpose." },
            { icon: Users, eyebrow: "COMMUNITY", title: "We Build With People in Mind", desc: "We belong before we build." },
            { icon: TrendingUp, eyebrow: "RESPONSIBLE GROWTH", title: "We Grow With Responsibility", desc: "Structure must grow with responsibility." },
          ].map((c) => (
            <div key={c.title} className="group rounded-xl border border-border p-6 bg-white hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all">
              <c.icon className="h-7 w-7 text-brand-green group-hover:scale-110 transition-transform" />
              <p className="mt-3 text-xs font-bold tracking-widest text-brand-green">{c.eyebrow}</p>
              <h3 className="mt-1 font-bold text-brand-dark text-sm">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40">
        <Eyebrow>WHAT THIS MEANS FOR YOU</Eyebrow>
        <h2 className="mt-3 text-xl font-bold text-brand-dark">Clearer Relationships. Defined Responsibilities. Professional Management.</h2>
        <p className="mt-3 text-sm text-muted-foreground">We cannot eliminate every uncertainty within mobility. But we can build better structures for managing it. We cannot guarantee every outcome. But we can take responsibility for how we manage the relationships and assets entrusted to us.</p>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Why ZEKANO</h2>
          <p className="mt-2 text-sm text-white/70">We bring structure to mobility so that mobility can better serve people.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/our-systems" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Solutions <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/our-commitment" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white">Explore Our Commitment <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
