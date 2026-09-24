import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, P as Award, d as RefreshCw, i as Users, k as ChevronRight, l as Shield, m as MessageCircle, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as contact_office_default } from "./contact-office-BkSTKci4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-commitment-BuuXPZO2.js
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
							children: "Our Commitment"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR COMMITMENT" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "Built on Trust. Guided by Responsibility."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Our commitment is to build a mobility institution that people can rely on. We recognize that every asset, relationship, opportunity, and responsibility entrusted to ZEKANO Mobility carries expectations. We therefore commit ourselves to building systems that create clarity, protect trust, and enable responsible value creation across the Mobility System."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("commitment", "hero", contact_office_default),
						alt: "Commitment",
						className: "h-72 w-full object-cover",
						width: 1200,
						height: 800
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT WE COMMIT TO",
				title: "Standards We Expect to Live By",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							icon: Shield,
							t: "Building Trusted Systems",
							d: "Continually developing systems that bring structure, clarity, and consistency."
						},
						{
							icon: Heart,
							t: "Responsible Stewardship",
							d: "Treating assets and opportunities as responsibilities before opportunities."
						},
						{
							icon: Award,
							t: "Clear Accountability",
							d: "Making responsibilities clear and holding ourselves accountable."
						},
						{
							icon: MessageCircle,
							t: "Honest Communication",
							d: "Communicating honestly, not creating false expectations."
						},
						{
							icon: Users,
							t: "Respect for People",
							d: "Treating all participants with dignity and respect."
						},
						{
							icon: RefreshCw,
							t: "Continuous Improvement",
							d: "Learning from experience and improving the systems through which we operate."
						},
						{
							icon: TrendingUp,
							t: "Responsible Growth",
							d: "Growing in proportion to our ability to carry greater responsibility."
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
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "A COMMITMENT WE CAN BE HELD TO",
				title: "We Control How We Respond",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our commitment is not that every outcome will be perfect. It is that we will approach our responsibilities with purpose, honesty, structure, and accountability. We cannot control every circumstance within mobility. We can control how we respond to the circumstances we encounter. That is where our commitment begins." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Building Something Worth Trusting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-white/70 leading-relaxed",
							children: "We build trusted systems that bring order, trust, and opportunity to the communities we serve. That is the commitment behind the work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold text-brand-green",
							children: "Purpose. Trust. Responsibility. Stewardship. Accountability. Continuous improvement."
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
