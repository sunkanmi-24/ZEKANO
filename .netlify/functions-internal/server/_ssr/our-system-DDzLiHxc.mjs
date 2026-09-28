import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, F as Car, I as Building2, M as ChevronRight, R as ArrowRight, T as Handshake, i as Users, l as Shield, o as TrendingUp, s as Target, x as Layers, y as Lightbulb } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DAG4i2k1.mjs";
import { t as city_skyline_default } from "./city-skyline-CqF1ITA4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-system-DDzLiHxc.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
	});
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-5 pt-6 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "flex items-center gap-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-brand-green",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-brand-dark",
							children: "Our System"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR SYSTEM" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "The ZEKANO Mobility System"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Mobility works through relationships between assets, people, and opportunities. The ZEKANO Mobility System brings these elements together through structure, enabling mobility assets to be responsibly and productively used."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-xl bg-brand-dark text-white p-4 text-center text-sm font-mono",
						children: "Assets + Communities + Structure → Productive Mobility → Value → Impact"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("system", "hero", city_skyline_default),
						alt: "Our System",
						className: "h-72 w-full object-cover",
						width: 1200,
						height: 800
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.2em] text-white",
						children: "A SYSTEM BUILT AROUND RELATIONSHIPS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-white",
						children: "Structure Connects Assets with Communities"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							icon: Car,
							t: "Assets",
							d: "Infrastructure and potential for mobility activity."
						},
						{
							icon: Users,
							t: "Communities",
							d: "Needs, capabilities, responsibilities, and opportunities."
						},
						{
							icon: Layers,
							t: "Structure",
							d: "Organizes relationships, responsibilities, and standards."
						},
						{
							icon: Target,
							t: "Productive Mobility",
							d: "Assets serve meaningful needs when working responsibly."
						},
						{
							icon: Heart,
							t: "Value",
							d: "Created across owners, professionals, customers, partners."
						},
						{
							icon: TrendingUp,
							t: "Impact",
							d: "Positively impacting lives of communities we serve."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "mx-auto h-7 w-7 text-white" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-sm font-bold text-white",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-white/60",
								children: c.d
							})
						]
					}, c.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 bg-white",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "HOW THE SYSTEM CONNECTS" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-bold text-brand-dark",
								children: "Each Part Affects the Others"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "An Asset Owner provides an asset. A Mobility Professional puts it to productive use. ZEKANO provides the structure. Customers and communities benefit. Each relationship carries responsibility."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold text-brand-dark",
								children: "Assets enable people. People enable assets. Structure connects them responsibly."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-secondary/40 border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR SOLUTIONS WITHIN THE SYSTEM" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/zekmanage",
									className: "rounded-xl bg-white border border-border p-4 text-sm font-bold text-brand-dark hover:shadow-md transition",
									children: ["ZEKMANAGE — Asset Management ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "inline h-4 w-4 ml-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/zeklease",
									className: "rounded-xl bg-white border border-border p-4 text-sm font-bold text-brand-dark hover:shadow-md transition",
									children: ["ZEKLEASE — Mobility Access ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "inline h-4 w-4 ml-1" })]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "THE SYSTEM IN MOTION" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-bold text-brand-dark",
								children: "Structure → Connect → Utilize → Create Value → Learn → Improve"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "We preserve what must endure while improving what should evolve."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-secondary/40 border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "BUILT TO GROW RESPONSIBLY" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-bold text-brand-dark",
								children: "Structure Must Grow With Responsibility"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "More capable without losing the principles that make us trustworthy."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.2em] text-white",
						children: "WHERE DO YOU FIT?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-white",
						children: "A Role for Everyone in the System"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							icon: Building2,
							t: "Asset Owners",
							d: "Entrust assets to responsible management."
						},
						{
							icon: Users,
							t: "Mobility Professionals",
							d: "Put assets to productive use."
						},
						{
							icon: Heart,
							t: "Customers",
							d: "Experience outcomes created by the system."
						},
						{
							icon: Handshake,
							t: "Strategic Partners",
							d: "Strengthen the ecosystem."
						},
						{
							icon: Users,
							t: "Communities",
							d: "Environment where value is created."
						},
						{
							icon: Lightbulb,
							t: "Future Builders",
							d: "Bring skills to strengthen mobility."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 p-5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "mx-auto h-6 w-6 text-white" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-bold text-white text-sm",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-white/60",
								children: c.d
							})
						]
					}, c.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-white",
						children: "Assets + Communities + Structure → Productive Mobility → Value → Impact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-solutions",
							className: "inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
							children: ["Explore Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/why-zekano",
							className: "inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
							children: ["Why ZEKANO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 bg-white",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
