import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, E as Eye, F as ArrowRight, i as Users, k as ChevronRight, l as Shield, m as MessageCircle, y as Lightbulb } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as about_hq_default } from "./about-hq-DQPHf-xN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-culture-BFI-8ehs.js
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
							children: "Our Culture"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR CULTURE" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "How We Choose to Work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Culture is how our principles become visible in the way we think, work, communicate, and take responsibility. At ZEKANO Mobility, we believe a strong culture is not created by statements on a wall. It is built through everyday actions, decisions, and standards."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("culture", "hero", about_hq_default),
						alt: "Culture",
						className: "h-72 w-full object-cover",
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
							icon: Shield,
							eyebrow: "WE TAKE RESPONSIBILITY",
							title: "What Is Our Responsibility?",
							body: "We ask: What happened? What is our responsibility? What needs to be done?"
						},
						{
							icon: Eye,
							eyebrow: "WE WORK WITH STRUCTURE",
							title: "Systems Support Responsible Action",
							body: "Clear processes and defined responsibilities give clarity to do work well."
						},
						{
							icon: MessageCircle,
							eyebrow: "WE COMMUNICATE HONESTLY",
							title: "Clarity Builds Trust",
							body: "We communicate what people need to know, especially when difficult."
						},
						{
							icon: Heart,
							eyebrow: "WE TREAT PEOPLE WITH RESPECT",
							title: "Clear Expectations, Fair Accountability",
							body: "Dignity and fairness while holding people accountable."
						},
						{
							icon: Lightbulb,
							eyebrow: "WE THINK BEYOND TODAY",
							title: "What Does This Create for Later?",
							body: "Create value today without compromising tomorrow."
						},
						{
							icon: Users,
							eyebrow: "WE LEARN & IMPROVE",
							title: "Preserve & Evolve",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ONE CULTURE. ONE STANDARD." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-xl font-bold",
						children: "We do our work with purpose, take responsibility, and continually improve the systems through which we serve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/70",
						children: "Take responsibility. Work with structure. Communicate honestly. Treat people with respect. Think beyond today. Learn continuously. Improve deliberately."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/stewardship",
						className: "mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
						style: {
							backgroundImage: "var(--brand-gold-gradient)",
							color: "oklch(0.24 0.07 255.27)"
						},
						children: ["Explore Stewardship ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
