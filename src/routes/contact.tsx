import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Mail, Phone, MessageCircle, MapPin, ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import contactOffice from "@/assets/contact-office.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Talk to the ZEKANO Team" },
      {
        name: "description",
        content:
          "Reach ZEKANO by email, phone, WhatsApp or visit our Abuja office. Send us a message and our team will get back to you as soon as possible.",
      },
      { property: "og:title", content: "Contact Us — Talk to the ZEKANO Team" },
      {
        property: "og:description",
        content: "Email, call or WhatsApp ZEKANO, or send a message through our contact form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, title: "Email Us", lines: ["hello@zekano.co"] },
  { icon: Phone, title: "Call Us", lines: ["+234 800 600 0000"] },
  { icon: MessageCircle, title: "WhatsApp", lines: ["Chat with us on WhatsApp"] },
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["ZEKANO Mobility Limited", "3rd Floor, Mobility Hub,", "Idu Industrial Area,", "Abuja, Nigeria."],
  },
];

const fields = [
  { label: "Full Name", name: "name", placeholder: "Your full name", type: "text" },
  { label: "Email Address", name: "email", placeholder: "Your email address", type: "email" },
  { label: "Subject", name: "subject", placeholder: "What is this regarding?", type: "text" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="zekano-contact min-h-screen bg-background">
      <Header />

      <section className="zekano-contact-hero relative">
        {/* Right-side office image (desktop) */}
        <div className="zekano-contact-photo pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src={getImage("contact", "hero", contactOffice)}
            alt="ZEKANO head office building exterior"
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative px-5 pt-6 pb-12 sm:px-8 lg:px-12 lg:pb-20">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="zekano-contact-breadcrumbs">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm">
              <li>
                <Link to="/" className="hover:text-brand-green">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li className="text-brand-dark">Contact Us</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
            {/* Left column */}
            <div className="zekano-contact-info">
              <h1 className="text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
                Contact <span className="text-brand-green">Us</span>
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                We're here to help. Reach out to us through any of the channels below and our team will get back to you
                as soon as possible.
              </p>

              <ul className="mt-8 space-y-6">
                {channels.map((c) => (
                  <li key={c.title} className="zekano-contact-channel flex gap-4">
                    <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-dark">{c.title}</p>
                      {c.lines.map((l) => (
                        <p key={l} className="text-sm leading-relaxed text-muted-foreground">
                          {l}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-sm font-bold text-brand-dark">Follow Us</p>
                <div className="zekano-contact-social mt-3 flex items-center gap-4">
                  {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="ZEKANO social profile"
                      className="text-brand-dark transition-colors hover:text-brand-green"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                  <a href="#" aria-label="ZEKANO on X" className="text-brand-dark transition-colors hover:text-brand-green">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                      <path d="M18.244 2H21.5l-7.09 8.104L22.5 22h-6.9l-4.4-5.86L5.9 22H2.64l7.36-8.4L1.5 2h6.9l4.16 5.55L18.244 2Zm-1.2 18h1.8L7.02 3.84H5.1l11.944 16.16Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="zekano-contact-form-wrap lg:pr-[8%]">
              <form
                className="zekano-contact-form rounded-lg border border-border bg-white p-6 shadow-xl sm:p-8 lg:p-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 className="text-xl font-bold text-brand-dark sm:text-2xl">Send Us a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Please fill out the form and we'll get back to you.
                </p>

                <div className="mt-6 space-y-5">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="block text-sm font-medium text-brand-dark">
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-dark">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="How can we help you?"
                      className="mt-2 w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="zekano-contact-submit inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
                  >
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>

                  {sent && (
                    <p aria-live="polite" className="text-sm font-medium text-brand-green">
                      Thanks — your message has been noted. We'll be in touch shortly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile office image */}
        <div className="zekano-contact-photo-mobile lg:hidden">
          <img
            src={getImage("contact", "hero", contactOffice)}
            alt="ZEKANO head office building exterior"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
