import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, F as ArrowRight, c as Star, d as RefreshCw, i as Users, k as ChevronRight, l as Shield, x as Layers } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as philosophy_hero_default } from "./philosophy-hero-QT6gP1zo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-principles-CzD-z6VX.js
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
							children: "Our Principles"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR PRINCIPLES" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "The Principles Behind How We Build."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Our principles guide how we make decisions, build relationships, manage mobility assets, and serve the communities connected to our work. They help us remain consistent as ZEKANO Mobility grows and as the systems around us evolve."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("principles", "hero", philosophy_hero_default),
						alt: "Principles",
						className: "h-72 w-full object-cover",
						width: 1200,
						height: 800
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
					children: [
						{
							icon: Star,
							eyebrow: "PURPOSE BEFORE PROFIT",
							title: "Profit Matters. Purpose Decides How",
							body: "We seek sustainable value while remaining faithful to our purpose."
						},
						{
							icon: Shield,
							eyebrow: "TRUST BEFORE GROWTH",
							title: "We Do Not Grow at Expense of Trust",
							body: "Trust is earned through consistency, transparency, accountability."
						},
						{
							icon: Heart,
							eyebrow: "RESPONSIBILITY BEFORE OPPORTUNITY",
							title: "An Asset Is a Responsibility",
							body: "Every opportunity carries responsibility."
						},
						{
							icon: Layers,
							eyebrow: "STRUCTURE CREATES CLARITY",
							title: "We Bring Structure to Mobility",
							body: "Clearer responsibilities, stronger accountability."
						},
						{
							icon: Users,
							eyebrow: "PEOPLE MATTER",
							title: "Dignity, Fairness, Respect",
							body: "Treat people with dignity while maintaining standards."
						},
						{
							icon: Heart,
							eyebrow: "STEWARDSHIP",
							title: "Keep Potential Alive",
							body: "Create value while protecting future potential."
						},
						{
							icon: Shield,
							eyebrow: "ACCOUNTABILITY",
							title: "Clear Expectations",
							body: "Shared responsibilities strengthen trust."
						},
						{
							icon: RefreshCw,
							eyebrow: "CONTINUOUS IMPROVEMENT",
							title: "Preserve & Improve",
							body: "We preserve what must endure while improving what should evolve."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl border border-border p-6 bg-white hover:shadow-lg hover:border-brand-green/20 hover:-translate-y-1 transition-all",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "HOW THESE PRINCIPLES WORK TOGETHER" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-xl font-bold",
						children: "A Way of Thinking"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/70 leading-relaxed",
						children: "Purpose gives us direction. Trust determines the foundation on which we grow. Responsibility shapes how we use opportunity. Structure creates clarity. People remain at the centre. Stewardship protects long-term potential. Accountability strengthens relationships. Continuous improvement keeps the system capable of serving well."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-semibold text-white",
						children: "These are not simply principles we communicate. They are standards we expect to live by."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-culture",
						className: "mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
						style: {
							backgroundImage: "var(--brand-gold-gradient)",
							color: "oklch(0.24 0.07 255.27)"
						},
						children: ["Explore Our Culture ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
