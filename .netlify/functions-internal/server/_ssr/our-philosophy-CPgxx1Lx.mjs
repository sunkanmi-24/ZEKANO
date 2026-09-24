import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, F as ArrowRight, i as Users, k as ChevronRight, l as Shield, o as TrendingUp, x as Layers, y as Lightbulb } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as philosophy_hero_default } from "./philosophy-hero-QT6gP1zo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-philosophy-CPgxx1Lx.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
	});
}
function OurPhilosophyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Breadcrumb",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/company",
							className: "hover:text-brand-green",
							children: "Company"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-brand-dark",
							children: "Our Philosophy"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR PHILOSOPHY" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "Purpose Shapes What We Build."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZEKANO believes that an institution should exist for more than its own growth. It should create meaningful value for the people and communities it serves." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Our philosophy begins with a simple belief: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-brand-dark",
								children: "Business is a means through which purpose can be expressed."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We therefore do not begin by asking what we can build, what we can sell, or how quickly we can grow. We begin by asking:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc pl-5 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "What problem are we responsible for helping solve?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Who are we building for?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "How can we create meaningful value without compromising trust or responsibility?" })
								]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("philosophy", "hero", philosophy_hero_default),
						alt: "Philosophy",
						className: "h-80 w-full object-cover",
						width: 1200,
						height: 800
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							icon: TrendingUp,
							eyebrow: "PURPOSE BEFORE GROWTH",
							title: "Growth Should Follow Purpose",
							body: "We grow to carry greater responsibility."
						},
						{
							icon: Layers,
							eyebrow: "SYSTEMS",
							title: "Responsibility Made Practical",
							body: "Systems make responsibility easier to practise."
						},
						{
							icon: Shield,
							eyebrow: "TRUST",
							title: "Trust Before Growth",
							body: "Built through consistent responsible action."
						},
						{
							icon: Users,
							eyebrow: "PEOPLE",
							title: "Technology Serves People",
							body: "People are at the centre."
						},
						{
							icon: Heart,
							eyebrow: "STEWARDSHIP",
							title: "Responsibility Before Opportunity",
							body: "Protect potential while creating value."
						},
						{
							icon: Lightbulb,
							eyebrow: "BUILD FOR NEXT",
							title: "Preserve & Evolve",
							body: "Preserve what must endure, improve what should evolve."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl border border-border p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-7 w-7 text-brand-green group-hover:scale-110 transition-transform" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-bold tracking-widest text-brand-green",
								children: c.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-sm font-bold text-brand-dark",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: c.body
							})
						]
					}, c.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-widest text-brand-green",
							children: "THE ZEKANO APPROACH"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-sm",
							children: "Purpose → Responsibility → Structure → Trust → Value → Impact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-white/70",
							children: "Purpose determines why we exist. Responsibility determines how we act. Structure creates the systems. Trust is strengthened through responsible action. Value is created when systems serve people well."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold text-white",
							children: "We build with purpose. We operate with responsibility. We grow with discipline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-principles",
							className: "mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
							style: {
								backgroundImage: "var(--brand-gold-gradient)",
								color: "oklch(0.24 0.07 255.27)"
							},
							children: ["Explore Our Principles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { OurPhilosophyPage as component };
