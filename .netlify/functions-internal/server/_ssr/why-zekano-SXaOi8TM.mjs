import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, L as Award, M as ChevronRight, R as ArrowRight, i as Users, l as Shield, o as TrendingUp, x as Layers } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DAG4i2k1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-zekano-SXaOi8TM.js
var import_jsx_runtime = require_jsx_runtime();
var what_we_do_hero_default = "/assets/what-we-do-hero-DRQuWgzH.jpg";
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
							children: "Why ZEKANO"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHY ZEKANO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "Structure With Purpose. Responsibility With Trust."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Mobility involves assets, people, relationships, and opportunity. How those elements are managed determines whether potential becomes productive value or whether uncertainty and mistrust take its place. At ZEKANO Mobility, we believe better mobility requires more than activity — it requires structure."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("why", "hero", what_we_do_hero_default),
						alt: "Why Zekano",
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
						children: "WHY ZEKANO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-white",
						children: "Structure. Stewardship. Accountability."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							icon: Layers,
							eyebrow: "STRUCTURE",
							title: "We Bring Structure to Mobility",
							desc: "Structure around relationships, responsibilities, processes, and systems."
						},
						{
							icon: Heart,
							eyebrow: "STEWARDSHIP",
							title: "We Treat Assets as Responsibilities",
							desc: "We keep their potential alive."
						},
						{
							icon: Shield,
							eyebrow: "ACCOUNTABILITY",
							title: "We Make Responsibility Clear",
							desc: "Defined standards from the start."
						},
						{
							icon: Award,
							eyebrow: "PURPOSE",
							title: "We Build for More Than Activity",
							desc: "Asset is infrastructure. Impact is purpose."
						},
						{
							icon: Users,
							eyebrow: "COMMUNITY",
							title: "We Build With People in Mind",
							desc: "We belong before we build."
						},
						{
							icon: TrendingUp,
							eyebrow: "RESPONSIBLE GROWTH",
							title: "We Grow With Responsibility",
							desc: "Structure must grow with responsibility."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "mx-auto h-7 w-7 text-white" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-bold tracking-widest text-white",
								children: c.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-bold text-white text-sm",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-white/60",
								children: c.desc
							})
						]
					}, c.title))
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
						className: "rounded-2xl bg-secondary/40 border border-border p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHAT THIS MEANS FOR YOU" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-bold text-brand-dark",
								children: "Clearer Relationships. Defined Responsibilities. Professional Management."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "We cannot eliminate every uncertainty within mobility. But we can build better structures for managing it. We take responsibility for how we manage the relationships and assets entrusted to us."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-white",
								children: "Why ZEKANO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 mx-auto max-w-xl text-sm text-white",
								children: "We bring structure to mobility so that mobility can better serve people."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/our-solutions",
									className: "inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
									children: ["Explore Our Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/our-commitment",
									className: "inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
									children: ["Explore Our Commitment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
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
