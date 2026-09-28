import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, M as ChevronRight, R as ArrowRight, i as Users, l as Shield, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DAG4i2k1.mjs";
import { t as about_hq_default } from "./about-hq-DQPHf-xN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us-L4fGfu3J.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
	});
}
function AboutUsPage() {
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
							children: "About Us"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-10 sm:px-8 lg:px-12 lg:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2 lg:gap-14 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ABOUT ZEKANO MOBILITY" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl lg:text-[44px] font-bold leading-tight text-brand-dark",
							children: "Building Trusted Systems for Mobility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: "ZEKANO Mobility is a structured mobility solutions company and an expression of ZEKANO's purpose. ZEKANO exists to positively impact lives by bringing order, trust, and opportunity to the communities we serve. In mobility, we express this purpose by building trusted systems that bring structure to the relationships between mobility assets, people, and opportunities."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "We manage and connect mobility assets with mobility communities, creating the structure through which assets can be responsibly and productively used."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("about-us", "hero", about_hq_default),
							alt: "ZEKANO HQ",
							className: "h-80 w-full object-cover lg:h-[420px]",
							width: 1280,
							height: 912
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.2em] text-white",
						children: "WHAT WE BELIEVE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-white",
						children: "Structure Creates the Conditions for Trust"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: [
						{
							icon: Shield,
							t: "Responsibility First",
							d: "Assets managed as responsibilities before opportunities."
						},
						{
							icon: Users,
							t: "Opportunity With Responsibility",
							d: "Meaningful access with the responsibility to sustain it."
						},
						{
							icon: TrendingUp,
							t: "Responsible Growth",
							d: "Growth follows capability and ability to serve well."
						},
						{
							icon: Heart,
							t: "Value for Tomorrow",
							d: "Create value today and for communities of tomorrow."
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR PURPOSE" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold text-brand-dark",
								children: "We Exist to Positively Impact Lives."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: "ZEKANO Mobility is one expression of that purpose. Through mobility, we seek to create systems that enable assets to serve meaningful needs, people to participate responsibly, and productive value to be created."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-secondary/40 border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR ROLE IN MOBILITY" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold text-brand-dark",
								children: "We Bring Structure to Mobility."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: "Our role is not simply to own, operate, or connect vehicles. We build the structures through which mobility assets, people, and opportunities can work together responsibly."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "BUILDING FOR LONG TERM" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-brand-dark",
						children: "Preserve what must endure. Improve what should evolve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mx-auto max-w-2xl text-sm text-muted-foreground leading-relaxed",
						children: "ZEKANO Mobility is being built with a long-term perspective. We seek to build the capability, trust, and responsibility required to serve better as we grow. Because the systems we build today should be capable of creating value tomorrow."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-white",
							children: "Our Identity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 mx-auto max-w-2xl text-sm text-white/70 leading-relaxed",
							children: "ZEKANO is a purpose-driven institution that builds trusted systems to positively impact lives by bringing order, trust, and opportunity to the communities it serves. ZEKANO Mobility is the current expression of that purpose in mobility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-philosophy",
							className: "mt-6 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
							children: ["Explore Our Philosophy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
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
export { AboutUsPage as component };
