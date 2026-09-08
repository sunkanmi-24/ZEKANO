import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as MailOpen, Y as ChevronDown, h as Search, rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as getImage, n as Header, t as Footer } from "./Footer-D623qjDX.mjs";
import { t as philosophy_hero_default } from "./philosophy-hero-QT6gP1zo.mjs";
import { t as story_city_road_default } from "./story-city-road-CGR7lKnA.mjs";
import { t as driver_png_asset_default } from "./driver.png.asset-BvpdJ_LQ.mjs";
import { n as holdingphone_png_asset_default, t as hero_cars_jpg_asset_default } from "./holdingphone.png.asset-C5wXcL0u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DSo0tyap.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var resources_hero_default = "/assets/resources-hero-DrsQinlE.jpg";
var tabs = [
	"All Resources",
	"Guides",
	"Insights",
	"News",
	"Downloads",
	"Videos"
];
var sortOptions = [
	"Newest",
	"A–Z",
	"Z–A"
];
var items = [
	{
		tag: "GUIDE",
		category: "Guides",
		title: "A Guide for Vehicle Owners",
		body: "Everything you need to know about partnering with ZEKANO and maximizing your vehicle's income.",
		cta: "Read More",
		image: getImage("resources", "card-1", hero_cars_jpg_asset_default.url),
		order: 1
	},
	{
		tag: "GUIDE",
		category: "Guides",
		title: "A Guide for Mobility Professionals",
		body: "Learn how our systems support drivers to build sustainable income and grow.",
		cta: "Read More",
		image: getImage("resources", "card-2", driver_png_asset_default.url),
		order: 2
	},
	{
		tag: "INSIGHT",
		category: "Insights",
		title: "The Future of Structured Mobility in Africa",
		body: "Key trends shaping the mobility industry and how structured solutions drive the future.",
		cta: "Read More",
		image: getImage("resources", "card-3", story_city_road_default),
		order: 3
	},
	{
		tag: "DOWNLOAD",
		category: "Downloads",
		title: "Operational Standards Overview",
		body: "Download our operational standards summary.",
		cta: "Download PDF",
		image: getImage("resources", "card-4", philosophy_hero_default),
		order: 4
	},
	{
		tag: "NEWS",
		category: "News",
		title: "ZEKANO Milestones & Updates",
		body: "Stay up to date with our latest news and milestones.",
		cta: "Read More",
		image: getImage("resources", "card-5", holdingphone_png_asset_default.url),
		order: 5
	}
];
function ResourcesPage() {
	const [active, setActive] = (0, import_react.useState)("All Resources");
	const [query, setQuery] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("Newest");
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		let list = items.filter((i) => {
			const inCategory = active === "All Resources" || i.category === active;
			const inQuery = q === "" || i.title.toLowerCase().includes(q) || i.body.toLowerCase().includes(q) || i.tag.toLowerCase().includes(q) || i.category.toLowerCase().includes(q);
			return inCategory && inQuery;
		});
		if (sort === "A–Z") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
		else if (sort === "Z–A") list = [...list].sort((a, b) => b.title.localeCompare(a.title));
		else list = [...list].sort((a, b) => a.order - b.order);
		return list;
	}, [
		active,
		query,
		sort
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "zekano-resources min-h-screen bg-white flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "zekano-resources-hero relative border-b border-border bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-resources-hero-content px-5 py-12 sm:px-8 lg:px-12 lg:py-20 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold tracking-widest text-brand-green",
										children: "RESOURCES"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark",
										children: [
											"Knowledge. Insights.",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-brand-green",
												children: "Better Decisions."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-base sm:text-lg text-muted-foreground",
										children: "Access helpful resources, guides, and updates to keep you informed about mobility, our systems, and industry trends."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActive("All Resources"),
											className: "zekano-resources-hero-btn inline-flex items-center rounded-md bg-brand-green px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-green-dark transition-colors",
											children: "All Resources"
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zekano-resources-hero-image relative min-h-[240px] lg:min-h-[420px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: getImage("resources", "hero", resources_hero_default),
									alt: "ZEKANO insights dashboard on a laptop beside a branded mug",
									width: 1280,
									height: 960,
									className: "absolute inset-0 h-full w-full object-cover"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "zekano-resources-tabs border-b border-border px-5 sm:px-8 lg:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-x-8 gap-y-2 py-4 lg:justify-center",
							children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActive(t),
								className: `zekano-resources-tab pb-2 text-base font-semibold transition-colors ${active === t ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark hover:text-brand-green border-b-2 border-transparent"}`,
								children: t
							}, t))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "zekano-resources-controls px-5 sm:px-8 lg:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-resources-search relative w-full sm:max-w-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "search",
									value: query,
									onChange: (e) => setQuery(e.target.value),
									placeholder: "Search resources by keyword…",
									"aria-label": "Search resources",
									className: "w-full rounded-md border border-border bg-white py-2.5 pl-10 pr-4 text-base text-brand-dark placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-resources-sort relative w-full sm:w-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "sort-select",
										className: "sr-only",
										children: "Sort resources"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "sort-select",
										value: sort,
										onChange: (e) => setSort(e.target.value),
										"aria-label": "Sort resources",
										className: "w-full appearance-none rounded-md border border-border bg-white py-2.5 pl-4 pr-10 text-base font-semibold text-brand-dark focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30 sm:w-44",
										children: sortOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: o,
											children: o
										}, o))
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "zekano-resources-list px-5 py-2 sm:px-8 lg:px-12 lg:py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 lg:grid-cols-2",
							children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "zekano-resource-card flex flex-col gap-4 rounded-xl border border-border bg-card p-3 shadow-sm sm:flex-row sm:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.title,
									loading: "lazy",
									className: "zekano-resource-card-img h-44 w-full shrink-0 rounded-lg object-cover sm:h-40 sm:w-56"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-1 sm:py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "zekano-resource-card-tag inline-flex w-fit rounded-md border border-brand-green px-2.5 py-1 text-xs font-bold tracking-wide text-brand-green",
											children: item.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 text-xl font-bold text-brand-dark",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-base text-muted-foreground",
											children: item.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#",
											className: "zekano-resource-card-link mt-3 inline-flex items-center gap-1.5 text-base font-semibold text-brand-green hover:text-brand-green-dark",
											children: [
												item.cta,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											]
										})
									]
								})]
							}, item.title))
						}), visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "py-10 text-center text-muted-foreground",
							children: [
								"No resources found",
								query.trim() ? ` for "${query.trim()}"` : ` in ${active.toLowerCase()}`,
								". Try a different keyword or filter."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "zekano-resources-newsletter px-5 pb-14 sm:px-8 lg:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-secondary p-6 sm:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailOpen, {
										className: "h-12 w-12 shrink-0 text-brand-green",
										strokeWidth: 1.5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-bold text-brand-dark sm:text-2xl",
										children: "Want the latest insights delivered to you?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-base text-muted-foreground",
										children: "Subscribe to our newsletter and never miss an update."
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:hello@zekano.co?subject=Newsletter%20Subscription",
									className: "zekano-newsletter-btn inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-green px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-green-dark transition-colors lg:w-auto",
									children: ["Subscribe Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ResourcesPage as component };
