import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Eye, J as ChevronRight, h as Search, i as Users, rt as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
import { i as getImage, n as Header, r as ZekanoLogo, t as Footer } from "./Footer-D623qjDX.mjs";
import { t as story_city_road_default } from "./story-city-road-CGR7lKnA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-story-3-45ytMT.js
var import_jsx_runtime = require_jsx_runtime();
var journey = [
	{
		icon: Search,
		title: "The Insight",
		body: "We identified the gaps in the mobility industry—fragmented operations, lack of transparency, and inefficient management of assets."
	},
	{
		icon: Eye,
		title: "The Vision",
		body: "We envisioned a future where mobility assets are professionally managed, drivers are empowered, and communities benefit from reliable mobility."
	},
	{
		icon: Zap,
		title: "The Action",
		body: "We designed ZEKMANAGE to manage assets with structure and accountability, and ZEKLEASE to connect those assets with qualified drivers."
	},
	{
		icon: Users,
		title: "The Impact",
		body: "Today, we are building a trusted mobility ecosystem that creates sustainable value for vehicle owners, drivers, and communities across Africa."
	}
];
function OurStoryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "zekano-our-story min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Breadcrumb",
				className: "zekano-story-breadcrumbs px-5 pt-6 sm:px-8 lg:px-12",
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
							children: "Our Story"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-story-hero px-5 py-10 sm:px-8 lg:px-12 lg:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-story-intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-story-eyebrow text-xs font-bold tracking-[0.2em] text-brand-green sm:text-sm",
								children: "OUR STORY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "zekano-story-title mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]",
								children: [
									"Built From a Real Problem.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "zekano-story-title-accent text-brand-green",
										children: "Driven by a Bigger Purpose."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-story-body mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZEKANO was born out of a simple observation—mobility assets are underutilized, operations are unstructured, and opportunities are lost because systems don't work for the people they should." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We saw vehicle owners struggling with unpredictable returns, drivers struggling to access reliable vehicles, and communities missing out on the full potential of mobility. We knew there had to be a better way." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-brand-dark",
										children: "So we decided to build it."
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-story-hero-media overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("our-story", "hero", story_city_road_default),
							alt: "Highway leading into a modern city skyline",
							width: 1280,
							height: 1024,
							className: "h-56 w-full object-cover sm:h-72 lg:h-[340px]"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-story-journey px-5 pb-12 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-muted/50 p-6 sm:p-8 lg:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "zekano-story-journey-eyebrow text-xs font-bold tracking-[0.2em] text-brand-green sm:text-sm",
							children: "OUR JOURNEY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "zekano-story-journey-title mt-3 text-2xl font-bold text-brand-dark sm:text-3xl",
							children: "Our Journey So Far"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-6",
								children: journey.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "zekano-story-step relative flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "zekano-story-step-icon relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "h-5 w-5 text-brand-green" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "zekano-story-step-title text-base font-bold text-brand-dark sm:text-lg",
											children: step.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-story-step-body mt-1.5 text-sm leading-relaxed text-muted-foreground",
											children: step.body
										})]
									})]
								}, step.title))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "zekano-story-card self-start rounded-2xl border border-border bg-background p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-[110px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZekanoLogo, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "zekano-story-card-title mt-6 text-xl font-bold text-brand-dark sm:text-2xl",
										children: "More Than a Company"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
										children: "ZEKANO is not just about mobility. We are building systems that create trust, opportunity, and lasting impact."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
										children: "Our story is still being written—and the best chapters are ahead of us."
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-story-promise px-5 pb-16 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-6 rounded-2xl bg-brand-dark p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background sm:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZekanoLogo, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "zekano-story-promise-title text-lg font-bold text-primary-foreground sm:text-xl",
								children: "Our Promise"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-story-promise-body mt-2 text-sm leading-relaxed text-primary-foreground/80 sm:text-base",
								children: "We are committed to delivering reliable, transparent, and scalable mobility solutions that create lasting value for everyone in our ecosystem."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/company",
							className: "zekano-story-promise-btn inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
							children: ["Learn More About Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { OurStoryPage as component };
