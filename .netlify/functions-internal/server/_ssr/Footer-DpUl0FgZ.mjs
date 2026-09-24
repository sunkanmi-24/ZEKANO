import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronDown, S as Instagram, T as Facebook, _ as Mail, g as MapPin, h as Menu, p as Phone, t as X, v as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-DpUl0FgZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var zekano_logo_png_asset_default = {
	version: 1,
	asset_id: "9f26e77f-fc42-4c27-9719-fee844e2f3ac",
	project_id: "1965e32e-8e6d-441d-a944-ee2376e83ab9",
	url: "/__l5e/assets-v1/9f26e77f-fc42-4c27-9719-fee844e2f3ac/zekano-logo.png",
	r2_key: "a/v1/1965e32e-8e6d-441d-a944-ee2376e83ab9/9f26e77f-fc42-4c27-9719-fee844e2f3ac/zekano-logo.png",
	original_filename: "zekano-logo.png",
	size: 4461,
	content_type: "image/png",
	created_at: "2026-07-21T23:08:38Z"
};
var site_images_default = {
	_readme: "Replace any image on the site by pasting a URL below. Keys are page -> position. Leave a value empty (\"\") to keep the built-in default image.",
	global: { "logo": "https://res.cloudinary.com/luhpnubn/image/upload/v1786365482/zekano-logo.png" },
	home: {
		"hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361844/hero-cars.jpg",
		"city-skyline": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361840/city-skyline-DZ4gGByn.jpg",
		"system-lease": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361843/driver.png",
		"system-manage": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361842/holdingphone.png",
		"founder": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361839/founder-Hupmuz7H.jpg"
	},
	"about-us": {
		"hero": "https://res.cloudinary.com/aremssy/image/upload/v1786310257/about-hq-CxEsscLx_v56ofh.jpg",
		"founder": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361839/founder-Hupmuz7H.jpg"
	},
	"our-story": { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786365483/story-city-road-BJP4Nb7r.jpg" },
	leadership: {
		"hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361840/leadership-boardroom.jpg",
		"leader-1": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361842/leader-ceo.jpg",
		"leader-2": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361841/leader-coo.jpg",
		"leader-3": "https://res.cloudinary.com/luhpnubn/image/upload/v1786360816/leader-finance.jpg"
	},
	zeklease: { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361843/driver.png" },
	zekmanage: { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786367349/zekmanage-hero-BPvQzKxe.jpg" },
	philosophy: { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg" },
	"our-philosophy": { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg" },
	"our-principles": { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg" },
	"our-culture": { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg" },
	stewardship: { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg" },
	"our-commitment": { "hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg" },
	resources: {
		"hero": "https://res.cloudinary.com/luhpnubn/image/upload/v1786369241/resources-hero-DrsQinlE.jpg",
		"card-1": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361844/hero-cars.jpg",
		"card-2": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361843/driver.png",
		"card-3": "https://res.cloudinary.com/luhpnubn/image/upload/v1786365483/story-city-road-BJP4Nb7r.jpg",
		"card-4": "https://res.cloudinary.com/luhpnubn/image/upload/v1786368758/philosophy-hero-DDyWwqrf.jpg",
		"card-5": "https://res.cloudinary.com/luhpnubn/image/upload/v1786361842/holdingphone.png"
	}
};
/**
* Resolve an image by page + position from src/data/site-images.json.
* If the JSON entry is empty/missing, the bundled fallback is used.
*
* Example: getImage("home", "hero", heroCarsFallback)
*/
function getImage(page, position, fallback) {
	const pageEntry = site_images_default[page];
	if (pageEntry && typeof pageEntry === "object") {
		const url = pageEntry[position];
		if (typeof url === "string" && url.trim().length > 0) return url.trim();
	}
	return fallback;
}
function ZekanoLogo({ variant = "dark" }) {
	const filterClass = variant === "light" ? "invert brightness-0" : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "zekano-logo flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: getImage("global", "logo", zekano_logo_png_asset_default.url),
			alt: "ZEKANO — Building the future, today.",
			className: `h-auto w-[140px] sm:w-[160px] object-contain ${filterClass}`,
			width: 300,
			height: 89
		})
	});
}
var nav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Company",
		to: "/company",
		children: [
			{
				label: "About Us",
				to: "/about-us"
			},
			{
				label: "Our Story",
				to: "/our-story"
			},
			{
				label: "Leadership",
				to: "/leadership"
			},
			{
				label: "Our Philosophy",
				to: "/our-philosophy"
			},
			{
				label: "Our Principles",
				to: "/our-principles"
			},
			{
				label: "Our Culture",
				to: "/our-culture"
			},
			{
				label: "Stewardship",
				to: "/stewardship"
			},
			{
				label: "Our Commitment",
				to: "/our-commitment"
			}
		]
	},
	{
		label: "Our System",
		to: "/our-system"
	},
	{
		label: "Our Solutions",
		to: "/our-solutions",
		children: [{
			label: "ZEKLEASE",
			to: "/zeklease"
		}, {
			label: "ZEKMANAGE",
			to: "/zekmanage"
		}]
	},
	{
		label: "Why ZEKANO",
		to: "/why-zekano"
	},
	{
		label: "FAQs",
		to: "/faqs"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeMenu, setActiveMenu] = (0, import_react.useState)(null);
	const [mobileOpenMenu, setMobileOpenMenu] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "zekano-header sticky top-0 z-50 w-full bg-white border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "zekano-header-inner mx-auto flex max-w-none items-center justify-between px-4 py-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "zekano-logo-wrap flex items-center shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZekanoLogo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "zekano-nav hidden lg:flex items-center gap-8",
					children: nav.map((item) => item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-nav-dropdown relative",
						onMouseEnter: () => setActiveMenu(item.label),
						onMouseLeave: () => setActiveMenu(null),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: "zekano-nav-link flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-green transition-colors",
							activeProps: { className: "text-brand-green border-b-2 border-brand-green pb-1" },
							activeOptions: { exact: item.to === "/" },
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), activeMenu === item.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zekano-nav-dropdown-menu absolute left-0 top-full z-50 w-48 pt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-border bg-white py-2 shadow-lg",
								children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: child.to,
									onClick: () => setActiveMenu(null),
									className: "zekano-nav-dropdown-link block px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-green/10 hover:text-brand-green",
									children: child.label
								}, child.label))
							})
						})]
					}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "zekano-nav-link flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-green transition-colors",
						activeProps: { className: "text-brand-green border-b-2 border-brand-green pb-1" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "zekano-contact-btn inline-flex items-center rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark transition-colors",
						children: "Contact Us"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "zekano-mobile-menu-btn lg:hidden p-2 -mr-2",
					onClick: () => setOpen(!open),
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "zekano-mobile-menu lg:hidden border-t border-border bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-4 py-4 gap-1",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zekano-mobile-nav-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "zekano-mobile-nav-link flex-1 py-3 px-2 text-base font-medium text-brand-dark hover:text-brand-green",
							children: item.label
						}), item.children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Toggle ${item.label} submenu`,
							"aria-expanded": mobileOpenMenu === item.label,
							onClick: () => setMobileOpenMenu(mobileOpenMenu === item.label ? null : item.label),
							className: "zekano-mobile-submenu-toggle p-3 text-brand-dark hover:text-brand-green",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${mobileOpenMenu === item.label ? "rotate-180" : ""}` })
						})]
					}), item.children && mobileOpenMenu === item.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-mobile-submenu flex flex-col pl-4 border-l border-border ml-4",
						children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: child.to,
							onClick: () => setOpen(false),
							className: "zekano-mobile-submenu-link py-2 px-2 text-sm font-medium text-brand-dark hover:text-brand-green",
							children: child.label
						}, child.label))
					})]
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "zekano-mobile-contact-btn mt-2 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white",
					children: "Contact Us"
				})]
			})
		})]
	});
}
var columns = [
	{
		title: "COMPANY",
		links: [
			{
				label: "About Us",
				to: "/about-us"
			},
			{
				label: "Our Story",
				to: "/our-story"
			},
			{
				label: "Leadership",
				to: "/leadership"
			},
			{
				label: "Our Philosophy",
				to: "/our-philosophy"
			},
			{
				label: "Our Principles",
				to: "/our-principles"
			},
			{
				label: "Our Culture",
				to: "/our-culture"
			},
			{
				label: "Stewardship",
				to: "/stewardship"
			},
			{
				label: "Our Commitment",
				to: "/our-commitment"
			}
		]
	},
	{
		title: "WHAT WE DO",
		links: [
			{
				label: "Our Approach",
				to: "/what-we-do"
			},
			{
				label: "Solutions",
				to: "/what-we-do"
			},
			{
				label: "Our Impact",
				to: "/what-we-do"
			},
			{
				label: "Sustainability",
				to: "/what-we-do"
			}
		]
	},
	{
		title: "OUR SYSTEMS",
		links: [
			{
				label: "ZEKMANAGE",
				to: "/our-systems"
			},
			{
				label: "ZEKLEASE",
				to: "/our-systems"
			},
			{
				label: "See the Big Picture",
				to: "/our-systems"
			},
			{
				label: "Choose Your Path",
				to: "/our-systems"
			}
		]
	},
	{
		title: "RESOURCES",
		links: [
			{
				label: "Guides",
				to: "/resources"
			},
			{
				label: "Insights",
				to: "/resources"
			},
			{
				label: "News",
				to: "/resources"
			},
			{
				label: "FAQs",
				to: "/resources"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "zekano-footer bg-brand-dark text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "zekano-footer-inner mx-auto max-w-none px-4 py-14 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "zekano-footer-grid grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-footer-brand lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZekanoLogo, { variant: "light" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-footer-tagline mt-4 text-sm text-white/70 max-w-xs",
								children: "Building the future of mobility through structure, people, and technology."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zekano-footer-social mt-6 flex gap-3",
								children: [
									Linkedin,
									Facebook,
									Instagram
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "social",
									className: "zekano-footer-social-link p-2 rounded-md border border-white/20 hover:bg-white/10 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, i))
							})
						]
					}),
					columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-footer-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "zekano-footer-col-title text-sm font-bold text-brand-green tracking-wider",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "zekano-footer-link-list mt-4 space-y-2.5",
							children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: "zekano-footer-link text-sm text-white/80 hover:text-brand-green transition",
								children: link.label
							}) }, link.label))
						})]
					}, col.title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-footer-contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "zekano-footer-contact-item flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand-green shrink-0" }), " Privacy Policy"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "zekano-footer-contact-item flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand-green shrink-0" }), " +234 800 600 0000"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "zekano-footer-contact-item flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-brand-green shrink-0" }), " hello@zekano.co"]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "zekano-footer-copy mt-12 border-t border-white/10 pt-6 text-xs text-white/50",
				children: "© 2025 ZEKANO Mobility Limited. All rights reserved."
			})]
		})
	});
}
//#endregion
export { Header as n, getImage as r, Footer as t };
