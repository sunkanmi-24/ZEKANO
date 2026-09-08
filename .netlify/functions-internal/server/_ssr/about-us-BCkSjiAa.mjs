import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Eye, J as ChevronRight, _ as Quote, i as Users } from "../_libs/lucide-react.mjs";
import { i as getImage, n as Header, t as Footer } from "./Footer-D623qjDX.mjs";
import { t as founder_default } from "./founder-B69IMx1z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us-BCkSjiAa.js
var import_jsx_runtime = require_jsx_runtime();
var about_hq_default = "/assets/about-hq-CxEsscLx.jpg";
var pillars = [{
	icon: Users,
	title: "Our Mission",
	body: "To build structured mobility systems that create trust, opportunity, and sustainable value."
}, {
	icon: Eye,
	title: "Our Vision",
	body: "To be Africa's most trusted structured mobility ecosystem company."
}];
function AboutUsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "zekano-about min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Breadcrumb",
				className: "zekano-about-breadcrumbs px-5 pt-6 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm",
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
				className: "zekano-about-hero px-5 py-10 sm:px-8 lg:px-12 lg:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-about-intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-about-eyebrow text-xs font-bold tracking-[0.2em] text-brand-green sm:text-sm",
								children: "ABOUT US"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "zekano-about-title mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]",
								children: [
									"Building the Future",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"of ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "zekano-about-title-accent text-brand-green",
										children: "Structured Mobility."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-about-desc mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: "ZEKANO is a structured mobility company that builds and operates integrated systems connecting mobility assets with qualified mobility professionals to create sustainable value for everyone in the ecosystem."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mt-6 block h-[3px] w-10 bg-brand-green"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-5",
								children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-about-pillar flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "zekano-about-pillar-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5 text-brand-green" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "zekano-about-pillar-title text-base font-bold text-brand-dark",
											children: p.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-about-pillar-body mt-1 text-sm leading-relaxed text-muted-foreground",
											children: p.body
										})]
									})]
								}, p.title))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-about-hero-media overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("about-us", "hero", about_hq_default),
							alt: "ZEKANO headquarters building with vehicles parked in front",
							width: 1280,
							height: 912,
							className: "h-56 w-full object-cover sm:h-80 lg:h-[420px]"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-about-founder px-5 pb-16 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-muted/50 p-6 sm:p-8 lg:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zekano-about-founder-photo overflow-hidden rounded-xl border border-border bg-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: getImage("about-us", "founder", founder_default),
								alt: "A.A. Adekunle, Founder & CEO of ZEKANO Mobility Limited",
								loading: "lazy",
								className: "h-80 w-full object-cover sm:h-[420px] lg:h-[440px]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "zekano-about-founder-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "zekano-about-founder-title text-xl font-bold text-brand-dark sm:text-2xl",
									children: ["A Message from Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-green",
										children: "Founder"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-about-founder-body mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\"At ZEKANO, we believe in building more than a company— we are building systems that create trust, opportunity, and sustainable value." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe the future of mobility is not defined by who owns the most vehicles, but by who builds the most trusted systems that connect mobility assets with qualified mobility professionals." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every decision we make is guided by structure, accountability, and long-term thinking. Our work in mobility is only the beginning of a broader vision to build systems that solve real-world challenges and create lasting value for people, businesses, and communities." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thank you for trusting us to be part of your journey.\"" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-about-founder-signoff mt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "zekano-about-founder-signature text-3xl italic font-serif text-brand-dark",
										children: "A.A. Adekunle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "zekano-about-founder-rule mt-1 block h-px w-40 bg-border"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "zekano-about-founder-name mt-3 text-sm font-bold text-brand-green",
										children: "A.A. Adekunle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "zekano-about-founder-role text-sm text-brand-dark",
										children: "Founder & CEO"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "zekano-about-founder-company text-sm text-brand-dark",
										children: "ZEKANO Mobility Limited"
									})
								]
							})
						] })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutUsPage as component };
