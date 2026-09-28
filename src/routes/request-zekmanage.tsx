import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/request-zekmanage")({ component: Page });

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li><Link to="/zekmanage" className="hover:text-brand-green">ZEKMANAGE</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Request</li></ol></nav>
      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-green">REQUEST ZEKMANAGE</p>
          <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-brand-dark">Let's Discuss Your Mobility Asset.</h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Interested in having ZEKANO Mobility manage your mobility asset through ZEKMANAGE? At this stage, we invite you to express your interest by email. Send us a message at:</p>
          <a href="mailto:zekmanage@zekano.co" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-4 text-lg font-bold text-brand-dark hover:shadow-md transition"><Mail className="h-6 w-6 text-brand-green" />zekmanage@zekano.co</a>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">In your email, let us know that you are interested in ZEKMANAGE and provide any initial information you would like us to know about your mobility asset.</p>
          <p className="mt-3 text-sm text-muted-foreground">Our ZEKMANAGE team will review your enquiry and reach out to you with the next steps.</p>
          <p className="mt-6 text-sm font-semibold italic text-brand-dark">Your asset deserves a management structure built around responsibility, accountability, and stewardship.</p>
          <Link to="/zekmanage" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-green"><ArrowLeft className="h-4 w-4" /> Back to ZEKMANAGE</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
