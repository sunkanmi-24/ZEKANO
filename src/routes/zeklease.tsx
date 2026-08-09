import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  User,
  ShieldCheck,
  Car,
  Scale,
  Headphones,
  BarChart3,
  MessageCircle,
  KeyRound,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import driverAsset from "@/assets/driver.png.asset.json";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/zeklease")({
  head: () => ({
    meta: [
      { title: "ZEKLEASE — Structured Vehicle Access for Drivers | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKLEASE is a structured mobility access system enabling responsible, vetted drivers to earn sustainable income through access to professionally managed vehicles.",
      },
      { property: "og:title", content: "ZEKLEASE — Structured Vehicle Access for Drivers" },
      {
        property: "og:description",
        content:
          "Apply to ZEKLEASE and get access to a well-maintained vehicle with fair, transparent terms and dedicated driver support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/zeklease" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: getImage("zeklease", "hero", driverAsset.url) },
      { name: "twitter:image", content: getImage("zeklease", "hero", driverAsset.url) },
    ],
    links: [{ rel: "canonical", href: "/zeklease" }],
  }),
  component: ZekleasePage,
});

const steps = [
  { icon: Mail, num: "1", title: "Send Email", desc: "Send us an email expressing your interest." },
  { icon: Phone, num: "2", title: "We'll Contact You", desc: "Our team will reach out within one business day." },
  { icon: User, num: "3", title: "We Guide You", desc: "We'll guide you through the onboarding process." },
  {
    icon: ShieldCheck,
    num: "4",
    title: "Complete Verification",
    desc: "Document verification, guarantor process and interview.",
  },
  {
    icon: KeyRound,
    num: "5",
    title: "Welcome to ZEKLEASE",
    desc: "Get access to a vehicle and start earning.",
  },
];

const experience = [
  { icon: Car, title: "Reliable Vehicles", desc: "Access well-maintained, road-ready vehicles." },
  { icon: Scale, title: "Fair & Transparent", desc: "Clear terms, no hidden charges or surprises." },
  { icon: Headphones, title: "Driver Support", desc: "We support you every step of the way." },
  { icon: BarChart3, title: "Growth Opportunities", desc: "Earn consistently and grow your income." },
];

function ZekleasePage() {
  return (
    <div className="zeklease-page min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="zeklease-hero relative bg-secondary overflow-hidden">
          <div className="zeklease-hero-media absolute inset-y-0 right-0 hidden lg:block w-1/2">
            <img
              src={getImage("zeklease", "hero", driverAsset.url)}
              alt="Smiling ZEKLEASE driver giving a thumbs up from a vehicle"
              className="h-full w-full object-cover"
              width={1200}
              height={912}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />
          </div>

          <div className="zeklease-hero-inner relative mx-auto max-w-none w-full px-4 lg:px-8 py-12 lg:py-20">
            <div className="lg:max-w-[52%]">
              <p className="zeklease-eyebrow text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
                ZEKLEASE
              </p>
              <h1 className="zeklease-title mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-[1.15]">
                Thank You for Your Interest
                <br />
                in <span className="text-brand-dark">ZEKLEASE</span>
              </h1>
              <div className="mt-6 h-0.5 w-24 bg-brand-green" />
              <p className="zeklease-hero-desc mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
                Thank you for choosing ZEKLEASE.
              </p>
              <p className="zeklease-hero-desc mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
                ZEKLEASE is a structured mobility access system that enables responsible, vetted drivers to earn
                sustainable income through access to professionally managed vehicles.
              </p>
            </div>

            <div className="zeklease-hero-image mt-8 lg:hidden rounded-xl overflow-hidden">
              <img
                src={getImage("zeklease", "hero", driverAsset.url)}
                alt="Smiling ZEKLEASE driver giving a thumbs up from a vehicle"
                className="h-56 w-full object-cover"
                width={1200}
                height={912}
              />
            </div>
          </div>
        </section>

        {/* GET STARTED CARD */}
        <section className="zeklease-start mx-auto max-w-none w-full px-4 lg:px-8 -mt-4 lg:-mt-10 relative z-10">
          <div className="zeklease-start-card rounded-xl border border-border bg-white p-6 lg:p-8 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:divide-x divide-border">
              <div className="flex items-start gap-5 lg:pr-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-green">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl lg:text-2xl font-bold text-brand-dark">Ready to get started?</h2>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    Send us an email expressing your interest and one of our{" "}
                    <span className="font-bold text-brand-dark">Driver Success Officers</span> will contact you within
                    one business day and guide you through the next steps.
                  </p>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">Email Us</span>
                </div>
                <a
                  href="mailto:lease@zekano.co"
                  className="mt-3 block text-xl lg:text-2xl font-bold text-brand-green break-all hover:underline"
                >
                  lease@zekano.co
                </a>
                <p className="mt-3 text-sm text-brand-dark">
                  <span className="font-bold">Subject:</span> Driver Application – ZEKLEASE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="zeklease-steps mx-auto max-w-none w-full px-4 lg:px-8 py-14 lg:py-20">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block h-0.5 w-16 lg:w-28 bg-brand-green/40" />
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark text-center">What Happens Next?</h2>
            <span className="hidden sm:block h-0.5 w-16 lg:w-28 bg-brand-green/40" />
          </div>

          <div className="zeklease-steps-grid mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <div key={s.title} className="zeklease-step relative text-center">
                <div className="relative mx-auto w-fit">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-border bg-white">
                    <s.icon className="h-7 w-7 text-brand-green" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 grid h-6 w-6 place-items-center rounded-full bg-brand-green text-[11px] font-bold text-white">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 text-sm lg:text-base font-bold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed px-2">{s.desc}</p>

                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute top-8 left-full -translate-x-1/2 w-10 border-t-2 border-dotted border-brand-green/60"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU'LL EXPERIENCE */}
        <section className="zeklease-experience mx-auto max-w-none w-full px-4 lg:px-8 pb-14">
          <div className="rounded-2xl bg-secondary px-6 py-10 lg:px-10">
            <h2 className="text-xl lg:text-2xl font-bold text-brand-dark text-center">What You&apos;ll Experience</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-border">
              {experience.map((e) => (
                <div key={e.title} className="flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                  <e.icon className="h-7 w-7 shrink-0 text-brand-green" strokeWidth={1.75} />
                  <div className="min-w-0">
                    <h3 className="text-sm lg:text-base font-bold text-brand-dark">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ASSISTANCE BAND */}
        <section className="zeklease-assist mx-auto max-w-none w-full px-4 lg:px-8 pb-20">
          <div className="rounded-2xl bg-brand-dark px-6 py-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-center">
              <div className="min-w-0">
                <h2 className="text-lg lg:text-xl font-bold text-white">Need immediate assistance?</h2>
                <p className="mt-1 text-sm text-white/70">Our team is here to help you.</p>
              </div>

              <a
                href="tel:+2348006000000"
                className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4 hover:bg-white/10 transition"
              >
                <Phone className="h-6 w-6 shrink-0 text-brand-green" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">Call Us</span>
                  <span className="block text-sm text-white/70">+234 800 600 0000</span>
                </span>
              </a>

              <a
                href="https://wa.me/2348006000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4 hover:bg-white/10 transition"
              >
                <MessageCircle className="h-6 w-6 shrink-0 text-brand-green" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-brand-green">WhatsApp Us</span>
                  <span className="block text-sm text-white/70">Chat on WhatsApp</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <div className="sr-only">
          <Link to="/contact">Contact ZEKANO</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
