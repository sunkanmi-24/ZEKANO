import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, HelpCircle, Shield, Wallet, Car } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/resources-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/faqs")({ component: Page });

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-brand-green">{children}</p>;
}

const faqs = [
  { cat: "General", q: "What is ZEKANO Mobility?", a: "ZEKANO Mobility is a structured mobility solutions company and an expression of ZEKANO's purpose. We bring structure to the mobility industry by managing and connecting mobility assets with mobility communities to maximize their potential." },
  { cat: "General", q: "What does “We Bring Structure to Mobility” mean?", a: "It means we create frameworks, responsibilities, processes, oversight, and relationships through which mobility assets and people can work together responsibly and productively." },
  { cat: "General", q: "What is the ZEKANO Mobility System?", a: "Assets + Communities + Structure → Productive Mobility → Value → Impact" },
  { cat: "General", q: "Who does ZEKANO Mobility serve?", a: "Asset Owners, Mobility Professionals, Customers, Strategic Partners, Communities, Future Builders." },
  { cat: "ZEKMANAGE", q: "What is ZEKMANAGE?", a: "A structured mobility asset management solution providing professional management, oversight, coordination, and accountability." },
  { cat: "ZEKMANAGE", q: "Do I retain ownership of my vehicle?", a: "Yes. ZEKMANAGE provides management; it does not transfer ownership." },
  { cat: "ZEKMANAGE", q: "How does the payout calculator work?", a: "It provides an estimated monthly payout based on vehicle information — not a guarantee of financial outcome." },
  { cat: "ZEKMANAGE", q: "Does ZEKMANAGE guarantee my monthly payout?", a: "No. We are responsible for quality of management; outcomes are affected by operating conditions, utilization, costs, etc." },
  { cat: "ZEKMANAGE", q: "What happens after I request ZEKMANAGE?", a: "Email zekmanage@zekano.co — our team reviews and reaches out." },
  { cat: "ZEKLEASE", q: "What is ZEKLEASE?", a: "Structured mobility access solution for responsible Mobility Professionals." },
  { cat: "ZEKLEASE", q: "Who can apply for ZEKLEASE?", a: "Mobility Professionals able and willing to operate within ZEKANO standards and eligibility requirements." },
  { cat: "ZEKLEASE", q: "Does ZEKLEASE guarantee income?", a: "No. Structure creates conditions for opportunity; it does not guarantee outcome." },
  { cat: "ZEKLEASE", q: "How do I apply for ZEKLEASE?", a: "Email admin.mobility@zekano.co — our team reviews and guides next steps." },
  { cat: "Stewardship & Accountability", q: "What does stewardship mean to ZEKANO?", a: "Treating what is entrusted to us as responsibility before opportunity. We seek to keep potential alive." },
  { cat: "Stewardship & Accountability", q: "Does ZEKANO guarantee everything will go perfectly?", a: "No. Structure improves conditions; it does not guarantee a particular outcome. We respond responsibly when challenges arise." },
  { cat: "Stewardship & Accountability", q: "How does ZEKANO build trust?", a: "Through clear expectations, defined responsibilities, accountability, honest communication, and continuous improvement." },
];

function Page() {
  const cats = [...new Set(faqs.map((f) => f.cat))];
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <nav className="px-5 pt-6 sm:px-8 lg:px-12"><ol className="flex items-center gap-1 text-xs text-muted-foreground"><li><Link to="/" className="hover:text-brand-green">Home</Link></li><ChevronRight className="h-3.5 w-3.5" /><li className="text-brand-dark">FAQs</li></ol></nav>

      <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
        <Eyebrow>FAQS</Eyebrow><span aria-hidden className="mt-2 block h-0.5 w-12 bg-[#BF953F]" />
        <h1 className="mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark">Questions. Clear Answers.</h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">We believe trust is strengthened when people know what to expect.</p>
        </div>
        <div className="overflow-hidden rounded-2xl"><img src={getImage("faqs","hero",heroImg)} alt="FAQs" className="h-72 w-full object-cover" width={1200} height={800} /></div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {cats.map((cat) => (
            <div key={cat} className="rounded-2xl border border-border p-6 bg-white">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-dark"><HelpCircle className="h-5 w-5 text-white" /></div>
                <h2 className="text-sm font-bold tracking-widest text-brand-dark">{cat.toUpperCase()}</h2>
              </div>
              <Accordion type="single" collapsible className="mt-4">
                {faqs.filter((f) => f.cat === cat).map((f, i) => (
                  <AccordionItem key={i} value={`${cat}-${i}`}>
                    <AccordionTrigger className="text-sm font-semibold text-brand-dark text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <div className="rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center">
          <h2 className="text-xl font-bold text-white">Still Have a Question?</h2>
          <p className="mt-2 mx-auto max-w-xl text-sm text-white">ZEKMANAGE: <a href="mailto:zekmanage@zekano.co" className="underline text-white">zekmanage@zekano.co</a> — ZEKLEASE: <a href="mailto:admin.mobility@zekano.co" className="underline text-white">admin.mobility@zekano.co</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
