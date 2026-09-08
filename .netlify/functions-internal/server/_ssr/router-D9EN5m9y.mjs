import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getImage } from "./Footer-D623qjDX.mjs";
import { t as leadership_boardroom_jpg_asset_default } from "./leadership-boardroom.jpg.asset-DlRLBDrM.mjs";
import { n as Route$18 } from "./company-Cd6CCCEd.mjs";
import { t as driver_png_asset_default } from "./driver.png.asset-BvpdJ_LQ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D9EN5m9y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B0HKSGVY.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ZEKANO — Structured Mobility. Professionally Managed." },
			{
				name: "description",
				content: "ZEKANO designs, operates, and continuously improves systems that connect mobility assets with qualified mobility professionals for productive use."
			},
			{
				property: "og:title",
				content: "ZEKANO — Structured Mobility. Professionally Managed."
			},
			{
				property: "og:description",
				content: "ZEKANO designs, operates, and continuously improves systems that connect mobility assets with qualified mobility professionals for productive use."
			},
			{
				property: "og:site_name",
				content: "ZEKANO"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "ZEKANO — Structured Mobility. Professionally Managed."
			},
			{
				name: "twitter:description",
				content: "ZEKANO designs, operates, and continuously improves systems that connect mobility assets with qualified mobility professionals for productive use."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/iY6BltFdDCU1b4jWHqeSsKLH9WG2/social-images/social-1786344174019-social-image.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/iY6BltFdDCU1b4jWHqeSsKLH9WG2/social-images/social-1786344174019-social-image.webp"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$15 = () => import("./routes-D9SjInuR.mjs");
var Route$16 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./about-us-BCkSjiAa.mjs");
var Route$15 = createFileRoute("/about-us")({
	head: () => ({
		meta: [
			{ title: "About Us — Building the Future of Structured Mobility | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO is a structured mobility company that builds and operates integrated systems connecting mobility assets with qualified mobility professionals."
			},
			{
				property: "og:title",
				content: "About Us — Building the Future of Structured Mobility"
			},
			{
				property: "og:description",
				content: "Our mission, vision and a message from our Founder & CEO, A.A. Adekunle."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about-us"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about-us"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contact-CCJ0raae.mjs");
var Route$14 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us — Talk to the ZEKANO Team" },
			{
				name: "description",
				content: "Reach ZEKANO by email, phone, WhatsApp or visit our Abuja office. Send us a message and our team will get back to you as soon as possible."
			},
			{
				property: "og:title",
				content: "Contact Us — Talk to the ZEKANO Team"
			},
			{
				property: "og:description",
				content: "Email, call or WhatsApp ZEKANO, or send a message through our contact form."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./leadership-D076_RN_.mjs");
var Route$13 = createFileRoute("/leadership")({
	head: () => ({
		meta: [
			{ title: "Leadership — Experienced Leaders, Clear Vision | ZEKANO" },
			{
				name: "description",
				content: "Meet the ZEKANO leadership team — deep experience in mobility, operations, technology and finance, building systems that create sustainable value."
			},
			{
				property: "og:title",
				content: "Leadership — Experienced Leaders. Clear Vision."
			},
			{
				property: "og:description",
				content: "The ZEKANO leadership team building Africa's most trusted structured mobility ecosystem."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/leadership"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:image",
				content: getImage("leadership", "hero", leadership_boardroom_jpg_asset_default.url)
			},
			{
				name: "twitter:image",
				content: getImage("leadership", "hero", leadership_boardroom_jpg_asset_default.url)
			}
		],
		links: [{
			rel: "canonical",
			href: "/leadership"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./our-commitment-kHzLVhRO.mjs");
var Route$12 = createFileRoute("/our-commitment")({
	head: () => ({
		meta: [
			{ title: "Our Commitment — A Promise Consistently Kept | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO promises trust, order, transparency, stewardship, improvement, and impact in every system we build and every relationship we steward."
			},
			{
				property: "og:title",
				content: "Our Commitment — A promise is only meaningful when it is consistently kept"
			},
			{
				property: "og:description",
				content: "The six promises behind every ZEKANO system, decision, and relationship."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/our-commitment"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-commitment"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./our-culture-D1uXt1aj.mjs");
var Route$11 = createFileRoute("/our-culture")({
	head: () => ({
		meta: [
			{ title: "Our Culture — The Invisible System Behind Every Action | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO's culture turns philosophy into daily practice: we build systems, own problems completely, protect trust, and leave things better than we found them."
			},
			{
				property: "og:title",
				content: "Our Culture — The invisible system that shapes every visible action"
			},
			{
				property: "og:description",
				content: "How ZEKANO thinks, decides, and acts every day."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/our-culture"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-culture"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./our-philosophy-DBo2m0Yo.mjs");
var Route$10 = createFileRoute("/our-philosophy")({
	head: () => ({
		meta: [
			{ title: "Our Philosophy — The Beliefs That Shape Everything | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO's philosophy defines how we think, decide, and act — structure creates trust, every asset has potential, and purpose comes before profit."
			},
			{
				property: "og:title",
				content: "Our Philosophy — The beliefs that shape everything we do"
			},
			{
				property: "og:description",
				content: "The beliefs that guide ZEKANO's systems, culture, and every decision we make."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/our-philosophy"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-philosophy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./our-principles-Dnlj6ouN.mjs");
var Route$9 = createFileRoute("/our-principles")({
	head: () => ({
		meta: [
			{ title: "Our Principles — The Architecture of Enduring Institutions | ZEKANO" },
			{
				name: "description",
				content: "Nine principles guide ZEKANO's decisions, culture, and systems — from philosophy before geography to stewardship and continuous learning."
			},
			{
				property: "og:title",
				content: "Our Principles — The architecture of enduring institutions"
			},
			{
				property: "og:description",
				content: "The nine principles that guide how ZEKANO decides, builds, and serves."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/our-principles"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-principles"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./our-story-3-45ytMT.mjs");
var Route$8 = createFileRoute("/our-story")({
	head: () => ({
		meta: [
			{ title: "Our Story — Built From a Real Problem | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO was born out of a simple observation — mobility assets are underutilized and operations unstructured. Read the story behind our structured mobility systems."
			},
			{
				property: "og:title",
				content: "Our Story — Built From a Real Problem. Driven by a Bigger Purpose."
			},
			{
				property: "og:description",
				content: "How ZEKANO began and why we build structured mobility systems across Africa."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/our-story"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-story"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./our-systems-LG45--C8.mjs");
var Route$7 = createFileRoute("/our-systems")({
	head: () => ({
		meta: [
			{ title: "Our Systems — ZEKANO" },
			{
				name: "description",
				content: "Explore ZEKMANAGE and ZEKLEASE — the systems powering structured mobility."
			},
			{
				property: "og:title",
				content: "Our Systems — ZEKANO"
			},
			{
				property: "og:url",
				content: "/our-systems"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-systems"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./resources-DSo0tyap.mjs");
var Route$6 = createFileRoute("/resources")({
	head: () => ({
		meta: [
			{ title: "Resources — Knowledge, Insights, Better Decisions | ZEKANO" },
			{
				name: "description",
				content: "Search, filter and sort guides, insights, news, downloads and videos from ZEKANO to keep you informed about mobility, our systems, and industry trends."
			},
			{
				property: "og:title",
				content: "Resources — Knowledge. Insights. Better Decisions."
			},
			{
				property: "og:description",
				content: "Search, filter and sort helpful guides, insights and updates on structured mobility from ZEKANO."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/resources"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/resources"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0"
		},
		{
			path: "/company",
			priority: "0.8"
		},
		{
			path: "/about-us",
			priority: "0.8"
		},
		{
			path: "/our-story",
			priority: "0.8"
		},
		{
			path: "/leadership",
			priority: "0.8"
		},
		{
			path: "/what-we-do",
			priority: "0.8"
		},
		{
			path: "/our-systems",
			priority: "0.8"
		},
		{
			path: "/why-zekano",
			priority: "0.8"
		},
		{
			path: "/our-philosophy",
			priority: "0.8"
		},
		{
			path: "/our-principles",
			priority: "0.7"
		},
		{
			path: "/our-culture",
			priority: "0.7"
		},
		{
			path: "/stewardship",
			priority: "0.7"
		},
		{
			path: "/our-commitment",
			priority: "0.7"
		},
		{
			path: "/zeklease",
			priority: "0.8"
		},
		{
			path: "/zekmanage",
			priority: "0.8"
		},
		{
			path: "/resources",
			priority: "0.7"
		},
		{
			path: "/contact",
			priority: "0.7"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./stewardship-EAIqKj7f.mjs");
var Route$4 = createFileRoute("/stewardship")({
	head: () => ({
		meta: [
			{ title: "Stewardship — Leadership Gives Authority, Stewardship Gives Responsibility | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO stewards trust, systems, opportunity, assets, people, and reputation — protecting and improving everything entrusted to us."
			},
			{
				property: "og:title",
				content: "Stewardship — Leadership gives authority. Stewardship gives responsibility."
			},
			{
				property: "og:description",
				content: "What ZEKANO is a steward of, and the questions we ask before every significant decision."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/stewardship"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/stewardship"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./what-we-do-qrfoT02q.mjs");
var Route$3 = createFileRoute("/what-we-do")({
	head: () => ({
		meta: [
			{ title: "What We Do — Structured Mobility Systems | ZEKANO" },
			{
				name: "description",
				content: "ZEKANO builds and operates trusted mobility systems that connect assets with productive use, create opportunities, and deliver sustainable value."
			},
			{
				property: "og:title",
				content: "What We Do — ZEKANO"
			},
			{
				property: "og:description",
				content: "Building systems. Creating value. How ZEKANO designs and operates structured mobility."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/what-we-do"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/what-we-do"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./why-zekano-BgwTFX4D.mjs");
var Route$2 = createFileRoute("/why-zekano")({
	head: () => ({
		meta: [
			{ title: "Why ZEKANO — More Than Mobility" },
			{
				name: "description",
				content: "ZEKANO combines structured operations, professional management and technology to help mobility assets and mobility professionals succeed together."
			},
			{
				property: "og:title",
				content: "Why ZEKANO — More Than Mobility"
			},
			{
				property: "og:description",
				content: "Structure, people and technology: the unique combination that sets ZEKANO apart in structured mobility."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/why-zekano"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/why-zekano"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./zeklease-Du82vPTV.mjs");
var Route$1 = createFileRoute("/zeklease")({
	head: () => ({
		meta: [
			{ title: "ZEKLEASE — Structured Vehicle Access for Drivers | ZEKANO" },
			{
				name: "description",
				content: "ZEKLEASE is a structured mobility access system enabling responsible, vetted drivers to earn sustainable income through access to professionally managed vehicles."
			},
			{
				property: "og:title",
				content: "ZEKLEASE — Structured Vehicle Access for Drivers"
			},
			{
				property: "og:description",
				content: "Apply to ZEKLEASE and get access to a well-maintained vehicle with fair, transparent terms and dedicated driver support."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/zeklease"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:image",
				content: getImage("zeklease", "hero", driver_png_asset_default.url)
			},
			{
				name: "twitter:image",
				content: getImage("zeklease", "hero", driver_png_asset_default.url)
			}
		],
		links: [{
			rel: "canonical",
			href: "/zeklease"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./zekmanage-B9w5wcpj.mjs");
var Route = createFileRoute("/zekmanage")({
	head: () => ({
		meta: [
			{ title: "ZEKMANAGE — Professional Mobility Asset Management | ZEKANO" },
			{
				name: "description",
				content: "ZEKMANAGE is a structured mobility management system helping vehicle owners earn predictable income through professional management of their mobility assets."
			},
			{
				property: "og:title",
				content: "ZEKMANAGE — Professional Mobility Asset Management"
			},
			{
				property: "og:description",
				content: "Earn predictable income from your vehicle with ZEKANO's structured asset management, transparency and peace of mind."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/zekmanage"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/zekmanage"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$16.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$17
	}),
	AboutUsRoute: Route$15.update({
		id: "/about-us",
		path: "/about-us",
		getParentRoute: () => Route$17
	}),
	CompanyRoute: Route$18.update({
		id: "/company",
		path: "/company",
		getParentRoute: () => Route$17
	}),
	ContactRoute: Route$14.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$17
	}),
	LeadershipRoute: Route$13.update({
		id: "/leadership",
		path: "/leadership",
		getParentRoute: () => Route$17
	}),
	OurCommitmentRoute: Route$12.update({
		id: "/our-commitment",
		path: "/our-commitment",
		getParentRoute: () => Route$17
	}),
	OurCultureRoute: Route$11.update({
		id: "/our-culture",
		path: "/our-culture",
		getParentRoute: () => Route$17
	}),
	OurPhilosophyRoute: Route$10.update({
		id: "/our-philosophy",
		path: "/our-philosophy",
		getParentRoute: () => Route$17
	}),
	OurPrinciplesRoute: Route$9.update({
		id: "/our-principles",
		path: "/our-principles",
		getParentRoute: () => Route$17
	}),
	OurStoryRoute: Route$8.update({
		id: "/our-story",
		path: "/our-story",
		getParentRoute: () => Route$17
	}),
	OurSystemsRoute: Route$7.update({
		id: "/our-systems",
		path: "/our-systems",
		getParentRoute: () => Route$17
	}),
	ResourcesRoute: Route$6.update({
		id: "/resources",
		path: "/resources",
		getParentRoute: () => Route$17
	}),
	SitemapDotxmlRoute: Route$5.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$17
	}),
	StewardshipRoute: Route$4.update({
		id: "/stewardship",
		path: "/stewardship",
		getParentRoute: () => Route$17
	}),
	WhatWeDoRoute: Route$3.update({
		id: "/what-we-do",
		path: "/what-we-do",
		getParentRoute: () => Route$17
	}),
	WhyZekanoRoute: Route$2.update({
		id: "/why-zekano",
		path: "/why-zekano",
		getParentRoute: () => Route$17
	}),
	ZekleaseRoute: Route$1.update({
		id: "/zeklease",
		path: "/zeklease",
		getParentRoute: () => Route$17
	}),
	ZekmanageRoute: Route.update({
		id: "/zekmanage",
		path: "/zekmanage",
		getParentRoute: () => Route$17
	})
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
