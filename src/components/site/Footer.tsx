import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { ZekanoLogo } from "./ZekanoLogo";

const columns = [
  {
    title: "COMPANY",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Our Story", to: "/our-story" },
      { label: "Leadership", to: "/leadership" },
      { label: "Our Philosophy", to: "/our-philosophy" },
      { label: "Our Principles", to: "/our-principles" },
      { label: "Our Culture", to: "/our-culture" },
      { label: "Stewardship", to: "/stewardship" },
      { label: "Our Commitment", to: "/our-commitment" },
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
];

export function Footer() {
  return (
    <footer className="zekano-footer bg-brand-dark text-white">
      <div className="zekano-footer-inner mx-auto max-w-none px-4 py-14 lg:px-8">
        <div className="zekano-footer-grid grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="zekano-footer-brand lg:col-span-1">
            <ZekanoLogo variant="light" />
            <p className="zekano-footer-tagline mt-4 text-sm text-white/70 max-w-xs">
              Building the future of mobility through structure, people, and technology.
            </p>
            <div className="zekano-footer-social mt-6 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="zekano-footer-social-link p-2 rounded-md border border-white/20 hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="zekano-footer-col">
              <h4 className="zekano-footer-col-title text-sm font-bold text-white tracking-wider">{col.title}</h4>
              <ul className="zekano-footer-link-list mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="zekano-footer-link text-sm text-white/80 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="zekano-footer-contact">
            <ul className="space-y-3 text-sm text-white/80">
              <li className="zekano-footer-contact-item flex items-center gap-2"><Phone className="h-4 w-4 text-white shrink-0" /> Privacy Policy</li>
              <li className="zekano-footer-contact-item flex items-center gap-2"><Mail className="h-4 w-4 text-white shrink-0" /> +234 800 600 0000</li>
              <li className="zekano-footer-contact-item flex items-center gap-2"><MapPin className="h-4 w-4 text-white shrink-0" /> hello@zekano.co</li>
            </ul>
          </div>
        </div>

        <div className="zekano-footer-copy mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2025 ZEKANO Mobility Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
