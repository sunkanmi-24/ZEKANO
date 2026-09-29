import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/apply-zeklease")({ component: Page });

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li><Link to="/zeklease" className="hover:text-brand-green">ZEKLEASE</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">Apply</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-green">APPLY FOR ZEKLEASE</p>
          <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-brand-dark">Take the Next Step With ZEKLEASE.</h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">Interested in gaining structured access to a mobility asset through ZEKLEASE? At this stage, we invite you to express your interest by emailing:</p>
          <a href="mailto:admin.mobility@zekano.co" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-4 text-lg font-bold text-white hover:shadow-md transition"><Mail className="h-6 w-6 text-white" />admin.mobility@zekano.co</a>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">In your email, let us know that you are interested in ZEKLEASE and provide any initial information you would like us to know about yourself.</p>
          <p className="mt-3 text-sm text-muted-foreground">Our ZEKLEASE team will review your enquiry and reach out to you with the next steps.</p>
          <p className="mt-6 text-sm font-semibold italic text-brand-dark">Access creates opportunity. Opportunity carries responsibility. Responsibility creates trust.</p>
          <Link to="/zeklease" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white"><ArrowLeft className="h-4 w-4" /> Back to ZEKLEASE</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
