import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, E as Eye, F as ArrowRight, b as Leaf, i as Users, k as ChevronRight, l as Shield } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as city_skyline_default } from "./city-skyline-CqF1ITA4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stewardship-BnjdopDz.js
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
							children: "Stewardship"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "STEWARDSHIP" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "Responsibility Before Opportunity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "An asset entrusted to us is a responsibility before it is an opportunity. At ZEKANO Mobility, stewardship means taking responsibility for what has been placed within our care and managing it in a way that protects its potential, creates responsible value, and considers the future."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("stewardship", "hero", city_skyline_default),
						alt: "Stewardship",
						className: "h-72 w-full object-cover",
						width: 1200,
						height: 800
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "WHAT STEWARDSHIP MEANS TO US",
				title: "Protecting Potential While Creating Value",
				altBg: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose",
					children: [
						{
							icon: Heart,
							t: "Responsible Use",
							d: "Put assets to productive use without compromising purpose or long-term potential."
						},
						{
							icon: Eye,
							t: "Professional Oversight",
							d: "Attention, coordination, monitoring, and informed decision-making to keep assets productive."
						},
						{
							icon: Shield,
							t: "Protection of Potential",
							d: "Consider condition, utilization, and viability to protect ability to create value tomorrow."
						},
						{
							icon: Users,
							t: "Accountability",
							d: "People understand what they are responsible for and what is expected of them."
						},
						{
							icon: Leaf,
							t: "Sustainable Value",
							d: "Create value without treating the present as though the future does not matter."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-white border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6 text-brand-green mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-brand-dark",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: c.d
							})
						]
					}, c.t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark",
					children: "Responsible stewardship protects tomorrow's potential while creating value today."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "STEWARDSHIP IS SHARED",
				title: "Opportunity and Responsibility Should Exist Together",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZEKANO does not carry every responsibility within the Mobility System alone. Asset Owners, Mobility Professionals, customers, partners, and ZEKANO each have responsibilities. A healthy mobility system works when each participant fulfils the responsibility attached to their role." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "STEWARDSHIP ACROSS THE ASSET LIFECYCLE",
				title: "Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition",
				altBg: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our approach extends beyond the moment an asset enters the system. At each stage, we consider how the asset can continue to create responsible value while protecting its longer-term potential." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark",
					children: "Asset management is the structured stewardship of mobility assets toward their responsible and productive potential."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "BEYOND THE ASSET",
				title: "Stewardship of People and Relationships",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We seek to treat people with respect, honour responsibilities, communicate honestly, protect trust, learn from experience, and improve what we are responsible for. The value of a mobility system is determined not only by its assets but by how responsibly people within that system relate to one another." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark italic",
					children: "We do not simply seek to keep assets productive. We seek to keep their potential alive. That is stewardship."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: "Our Commitment to Stewardship"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-commitment",
						className: "mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
						style: {
							backgroundImage: "var(--brand-gold-gradient)",
							color: "oklch(0.24 0.07 255.27)"
						},
						children: ["Explore Our Commitment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
