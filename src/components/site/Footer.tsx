import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { ZekanoLogo } from "./ZekanoLogo";

const columns = [
  {
    title: "COMPANY",
    links: [
      { label: "About Us", to: "/company" },
      { label: "Our Story", to: "/company" },
      { label: "Mission & Vision", to: "/company" },
      { label: "Leadership", to: "/company" },
      { label: "Careers", to: "/company" },
    ],
  },
  {
    title: "WHAT WE DO",
    links: [
      { label: "Our Approach", to: "/what-we-do" },
      { label: "Solutions", to: "/what-we-do" },
      { label: "Our Impact", to: "/what-we-do" },
      { label: "Sustainability", to: "/what-we-do" },
    ],
  },
  {
    title: "OUR SYSTEMS",
    links: [
      { label: "ZEKMANAGE", to: "/our-systems" },
      { label: "ZEKLEASE", to: "/our-systems" },
      { label: "See the Big Picture", to: "/our-systems" },
      { label: "Choose Your Path", to: "/our-systems" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Guides", to: "/resources" },
      { label: "Insights", to: "/resources" },
      { label: "News", to: "/resources" },
      { label: "FAQs", to: "/resources" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <ZekanoLogo variant="light" />
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Building the future of mobility through structure, people, and technology.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="p-2 rounded-md border border-white/20 hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-brand-green tracking-wider">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/80 hover:text-brand-green transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-green shrink-0" /> Privacy Policy</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-green shrink-0" /> +234 800 600 0000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-green shrink-0" /> hello@zekano.co</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2025 ZEKANO Mobility Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
