import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ZekanoLogo } from "./ZekanoLogo";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Company",
    to: "/company",
    children: [
      { label: "Our Story", to: "/our-story" },
      { label: "ZEKLEASE", to: "/zeklease" },
      { label: "ZEKMANAGE", to: "/zekmanage" },
    ],
  },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Our Systems", to: "/our-systems" },
  { label: "Why ZEKANO", to: "/why-zekano" },
  { label: "Resources", to: "/resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="zekano-header sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="zekano-header-inner mx-auto flex max-w-none items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="zekano-logo-wrap flex items-center shrink-0">
          <ZekanoLogo />
        </Link>

        <nav className="zekano-nav hidden lg:flex items-center gap-8">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="zekano-nav-dropdown relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.to}
                  className="zekano-nav-link flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-green transition-colors"
                  activeProps={{ className: "text-brand-green border-b-2 border-brand-green pb-1" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {activeMenu === item.label && (
                  <div className="zekano-nav-dropdown-menu absolute left-0 top-full z-50 w-48 pt-3">
                    <div className="rounded-lg border border-border bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setActiveMenu(null)}
                          className="zekano-nav-dropdown-link block px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-green/10 hover:text-brand-green"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="zekano-nav-link flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-green transition-colors"
                activeProps={{ className: "text-brand-green border-b-2 border-brand-green pb-1" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
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
              <div key={item.label} className="zekano-mobile-nav-group">
                <Link
                  to={item.to}
                  onClick={() => !item.children && setOpen(false)}
                  className="zekano-mobile-nav-link py-3 px-2 text-base font-medium text-brand-dark hover:text-brand-green"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="zekano-mobile-submenu flex flex-col pl-4 border-l border-border ml-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="zekano-mobile-submenu-link py-2 px-2 text-sm font-medium text-brand-dark hover:text-brand-green"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
