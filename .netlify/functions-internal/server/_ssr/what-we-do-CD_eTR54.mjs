import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, F as ArrowRight, M as Car, N as Building2, i as Users, k as ChevronRight, o as TrendingUp, s as Target, w as Handshake, x as Layers, y as Lightbulb } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as city_skyline_default } from "./city-skyline-CqF1ITA4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-we-do-CD_eTR54.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
	});
}
function Section({ eyebrow, title, children, altBg }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `px-5 sm:px-8 lg:px-12 py-10 ${altBg ? "bg-secondary/40" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-2xl font-bold text-brand-dark",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3",
				children
			})
		]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "A SYSTEM BUILT AROUND RELATIONSHIPS",
				title: "Structure Connects Assets with Communities",
				altBg: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A mobility asset does not create meaningful value in isolation. Its potential depends on how it is positioned, who uses it, how it is managed, and the relationships surrounding it. The ZEKANO Mobility System organizes these relationships so participants can contribute to and benefit from productive mobility." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose",
					children: [
						{
							icon: Car,
							t: "Assets",
							d: "Mobility assets provide infrastructure and potential for mobility activity."
						},
						{
							icon: Users,
							t: "Communities",
							d: "People and communities bring needs, capabilities, responsibilities, and opportunities."
						},
						{
							icon: Layers,
							t: "Structure",
							d: "Organizes relationships, responsibilities, processes, and standards."
						},
						{
							icon: Target,
							t: "Productive Mobility",
							d: "When elements work together responsibly, assets serve meaningful needs."
						},
						{
							icon: Heart,
							t: "Value",
							d: "Created through relationships connecting owners, professionals, customers, partners."
						},
						{
							icon: TrendingUp,
							t: "Impact",
							d: "Contributes to our purpose: positively impacting lives."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl border border-border p-5 bg-white hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6 text-brand-green group-hover:scale-110 transition-transform" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-sm font-bold text-brand-dark",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: c.d
							})
						]
					}, c.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "HOW THE SYSTEM CONNECTS",
				title: "Each Part Affects the Others",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An Asset Owner provides a mobility asset. A Mobility Professional puts that asset to productive use. ZEKANO provides the structure through which the relationship is managed. Customers and communities participate in and benefit from the activity. Each relationship carries responsibility." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark",
					children: "Assets enable people. People enable assets. Structure connects them responsibly."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR SOLUTIONS WITHIN THE SYSTEM" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid lg:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white border border-border p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-brand-green",
									children: "ZEKMANAGE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Structured Mobility Asset Management — professional management, oversight, coordination, and stewardship."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/zekmanage",
									className: "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
									children: ["Explore ZEKMANAGE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white border border-border p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-brand-blue",
									children: "ZEKLEASE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Structured Mobility Access — responsible access for Mobility Professionals."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/zeklease",
									className: "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue",
									children: ["Explore ZEKLEASE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Together they organize important relationships, but they are not the entire system — they are ways through which the system creates value."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "THE SYSTEM IN MOTION",
				title: "Structure → Connect → Utilize → Create Value → Learn → Improve",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We define relationships and standards, bring assets and people together, put them to productive use, generate value, learn from reality, and improve the systems based on what we learn. We preserve what must endure while improving what should evolve." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "BUILT TO GROW RESPONSIBLY",
				title: "Structure Must Grow With Responsibility",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As the system grows, responsibility grows with it. Our structure must be capable of growing alongside the relationships and assets entrusted to it. We seek to build systems that become more capable without losing the principles that make them trustworthy." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "THE PURPOSE BEHIND THE SYSTEM",
				title: "The Asset Is Infrastructure. Impact Is Purpose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Mobility System exists for a reason — it is not an end in itself. Purpose → Mobility → Assets + Communities → Structure → Productive Use → Value → Positive Impact. The mobility asset is the infrastructure; the impact on lives is the purpose." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHERE DO YOU FIT?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm",
					children: [
						{
							icon: Building2,
							t: "Asset Owners",
							d: "Provide assets and entrust them to responsible management."
						},
						{
							icon: Users,
							t: "Mobility Professionals",
							d: "Put assets to productive use while carrying responsibilities."
						},
						{
							icon: Heart,
							t: "Customers",
							d: "Experience outcomes created by the system."
						},
						{
							icon: Handshake,
							t: "Strategic Partners",
							d: "Contribute capabilities that strengthen the ecosystem."
						},
						{
							icon: Users,
							t: "Communities",
							d: "Environment in which mobility creates value."
						},
						{
							icon: Lightbulb,
							t: "Future Builders",
							d: "Bring skills and ideas to strengthen mobility over time."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl bg-white border border-border p-5 hover:shadow-md hover:-translate-y-1 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-brand-green group-hover:scale-110 transition-transform" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-bold text-brand-dark text-sm",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: c.d
							})
						]
					}, c.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/70",
							children: "The ZEKANO Mobility System"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm mt-1",
							children: "Assets + Communities + Structure → Productive Mobility → Value → Impact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/our-systems",
								className: "inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
								style: {
									backgroundImage: "var(--brand-gold-gradient)",
									color: "oklch(0.24 0.07 255.27)"
								},
								children: ["Explore Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/why-zekano",
								className: "inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white",
								children: ["Why ZEKANO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
