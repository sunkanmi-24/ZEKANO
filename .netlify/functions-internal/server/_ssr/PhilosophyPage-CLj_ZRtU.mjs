import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as getImage, n as Header, t as Footer } from "./Footer-D623qjDX.mjs";
import { t as philosophy_hero_default } from "./philosophy-hero-QT6gP1zo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PhilosophyPage-CLj_ZRtU.js
var import_jsx_runtime = require_jsx_runtime();
function PhilosophyBreadcrumbs({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "zekano-phil-breadcrumbs px-5 pt-6 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "hover:text-brand-accent",
					children: "Home"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/company",
					className: "hover:text-brand-accent",
					children: "Company"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/our-philosophy",
					className: "hover:text-brand-accent",
					children: "Our Philosophy"
				}) }),
				current !== "Our Philosophy" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-brand-accent",
					children: current
				})] })
			]
		})
	});
}
function PhilosophyHero({ title, tagline, body, page }) {
	const shared = getImage("philosophy", "hero", philosophy_hero_default);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "zekano-phil-hero relative overflow-hidden bg-brand-dark px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: page ? getImage(page, "hero", shared) : shared,
				alt: "ZEKANO vehicle on a highway at sunset with a city skyline",
				width: 1920,
				height: 912,
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-2xl border-l-2 border-brand-accent pl-5 sm:pl-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent sm:text-xs",
						children: "Our Philosophy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[52px]",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-1 text-base font-semibold leading-snug text-white sm:text-lg lg:text-xl",
						children: tagline.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-2 text-sm leading-relaxed text-white/75 sm:text-base",
						children: body.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
					})
				]
			})
		]
	});
}
function GuidingPurpose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "zekano-phil-purpose mx-auto -mt-6 max-w-none px-5 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4 rounded-xl border border-brand-accent/25 bg-brand-accent/5 p-5 shadow-sm sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-accent/40 text-brand-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetIcon, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold text-brand-dark sm:text-lg",
					children: "Our Guiding Purpose"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm italic leading-relaxed text-muted-foreground sm:text-base",
					children: "To positively impact lives by bringing order, trust, and opportunity to the communities we serve."
				})]
			})]
		})
	});
}
function TargetIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		className: "h-5 w-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "1.4",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function PhilosophyGrid({ items, columns = 4, numbered = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `zekano-phil-grid grid gap-4 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : columns === 6 ? "sm:grid-cols-3 lg:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-4"}`,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "zekano-phil-card rounded-xl border border-border bg-card p-5 transition hover:border-brand-accent/40 hover:shadow-md sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: numbered ? "flex items-start gap-3" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-6 w-6 shrink-0 text-brand-accent" }), numbered && item.number && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold text-brand-accent",
						children: item.number
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-sm font-bold leading-snug text-brand-dark sm:text-base",
					children: item.title
				}),
				item.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
					children: item.body
				})
			]
		}, item.title))
	});
}
function PhilosophyLayout({ current, title, tagline, body, page, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "zekano-phil-page min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyBreadcrumbs, { current }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyHero, {
				title,
				tagline,
				body,
				page
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-16",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PhilosophyGrid as n, PhilosophyLayout as r, GuidingPurpose as t };
