import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ZekanoLogo } from "./ZekanoLogo";

const nav = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/company", hasMenu: true },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Our Systems", to: "/our-systems", hasMenu: true },
  { label: "Why ZEKANO", to: "/why-zekano" },
  { label: "Resources", to: "/resources", hasMenu: true },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="zekano-header sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="zekano-header-inner mx-auto flex max-w-none items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="zekano-logo-wrap flex items-center shrink-0">
          <ZekanoLogo />
        </Link>

        <nav className="zekano-nav hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="zekano-nav-link flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-green transition-colors"
              activeProps={{ className: "text-brand-green border-b-2 border-brand-green pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              {item.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="zekano-contact-btn inline-flex items-center rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="zekano-mobile-menu-btn lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="zekano-mobile-menu lg:hidden border-t border-border bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="zekano-mobile-nav-link py-3 px-2 text-base font-medium text-brand-dark hover:text-brand-green"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="zekano-mobile-contact-btn mt-2 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
