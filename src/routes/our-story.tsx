import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Quote, Search, Car, Wrench, Layers, Users, Lightbulb, Target } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import cityRoad from "@/assets/story-city-road.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/our-story")({ component: OurStoryPage });

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

function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav aria-label="Breadcrumb" className="px-5 pt-6 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li><Link to="/company" className="hover:text-brand-green">Company</Link></li><ChevronRight className="h-3.5 w-3.5" />
          <li className="text-brand-dark">Our Story</li>
        </ol>
      </nav>

      <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h1 className="mt-3 text-3xl lg:text-[44px] font-bold leading-tight text-brand-dark">It Started With a Conversation</h1>
            <div className="mt-5 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>When the founder first returned to Nigeria from the UK, he began experiencing the mobility industry from the passenger seat. During one of his Bolt rides, he had a conversation with the driver about his experience working in the industry.</p>
              <p>What began as an ordinary conversation revealed a deeper problem. Some Mobility Professionals were working within arrangements they did not necessarily choose because they had limited alternatives. They were sometimes given unreliable vehicles while still being expected to meet remittance expectations.</p>
              <p>People were being used to keep mobility moving, rather than being given the structure and opportunity to build their lives. But at the time, it was simply a conversation — and an observation that something could be better.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl"><img src={getImage("our-story", "hero", cityRoad)} alt="Highway" className="h-80 w-full object-cover lg:h-[380px]" width={1280} height={1024} /></div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Search, eyebrow: "SEEING A BIGGER PROBLEM", title: "A Question of Trust", body: "Asset Owners needed confidence their assets would be properly managed." },
            { icon: Car, eyebrow: "WHERE WE STARTED — 26 MAY 2025", title: "From Vehicles to a System", body: "Having the assets was not enough — we needed a system." },
            { icon: Wrench, eyebrow: "EARLY LESSONS", title: "We Need to Build the System First", body: "Maintenance, misuse, downtime exposed need for consistent structure." },
            { icon: Layers, eyebrow: "FROM VEHICLE TO SYSTEM", title: "Structure Through Which Mobility Works", body: "Foundation of the ZEKANO Mobility System." },
            { icon: Users, eyebrow: "PEOPLE BEHIND PURPOSE", title: "Mobility Is Ultimately About People", body: "Creating conditions for people to participate and move forward." },
            { icon: Lightbulb, eyebrow: "WHAT ZEKANO MEANS", title: "Put Yourself in Their Position", body: "Every system affects real people. Responsibility before opportunity." },
          ].map((c) => (
            <div key={c.title} className="group rounded-xl border border-border p-6 bg-white hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all">
              <c.icon className="h-7 w-7 text-brand-green group-hover:scale-110 transition-transform" />
              <p className="mt-3 text-xs font-bold tracking-widest text-brand-green">{c.eyebrow}</p>
              <h3 className="mt-1 text-sm font-bold text-brand-dark">{c.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3 rounded-xl bg-secondary/40 border border-border p-5">
          <Quote className="h-6 w-6 text-brand-green shrink-0" />
          <p className="text-sm font-semibold italic text-brand-dark">We cannot continue acquiring vehicles and trying to solve problems as they arise. We need to build the system first. — That was the turning point.</p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-14">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10">
          <h2 className="text-xl font-bold">Our Story Is Still Being Written</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">ZEKANO started with a conversation. That conversation led to a question. The question led to a business. The business taught us lessons. Those lessons led us to build a system. And the system continues to evolve.</p>
          <p className="mt-2 text-sm text-white/70">We preserve what must endure while improving what should evolve.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/our-philosophy" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold" style={{ backgroundImage: "var(--brand-gold-gradient)", color: "oklch(0.24 0.07 255.27)" }}>Explore Our Philosophy <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/our-systems" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white">Explore the ZEKANO Mobility System <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
