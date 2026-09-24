import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DCbCVxxL.js
var router_DCbCVxxL_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CPq7OPPE.css";
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
var Route$21 = createRootRouteWithContext()({
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
	const { queryClient } = Route$21.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$19 = () => import("./routes-CLuSU5hS.mjs");
var Route$20 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./about-us-Bd-Ktjjd.mjs");
var Route$19 = createFileRoute("/about-us")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./company-S-6jjTPz.mjs");
var Route$18 = createFileRoute("/company")({
	head: () => ({
		meta: [
			{ title: "Company — ZEKANO" },
			{
				name: "description",
				content: "Learn about ZEKANO — our story, mission, leadership and careers in structured mobility."
			},
			{
				property: "og:title",
				content: "Company — ZEKANO"
			},
			{
				property: "og:description",
				content: "Our story, mission, leadership and careers."
			},
			{
				property: "og:url",
				content: "/company"
			}
		],
		links: [{
			rel: "canonical",
			href: "/company"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./contact-DMFgAGb7.mjs");
var Route$17 = createFileRoute("/contact")({
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
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./faqs-Dw0IL9vQ.mjs");
var Route$16 = createFileRoute("/faqs")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./leadership-DBPqP0E-.mjs");
var Route$15 = createFileRoute("/leadership")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./our-commitment-BuuXPZO2.mjs");
var Route$14 = createFileRoute("/our-commitment")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./our-culture-BFI-8ehs.mjs");
var Route$13 = createFileRoute("/our-culture")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./our-philosophy-CPgxx1Lx.mjs");
var Route$12 = createFileRoute("/our-philosophy")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./our-principles-CzD-z6VX.mjs");
var Route$11 = createFileRoute("/our-principles")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./our-solutions-D8wiv6vY.mjs");
var Route$10 = createFileRoute("/our-solutions")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./our-story-DVDtFfB2.mjs");
var Route$9 = createFileRoute("/our-story")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./our-system-jiwb-sqj.mjs");
var Route$8 = createFileRoute("/our-system")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./our-systems-ydQ_vH0D.mjs");
var Route$7 = createFileRoute("/our-systems")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./resources-BM9a7ZdA.mjs");
var Route$6 = createFileRoute("/resources")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
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
var $$splitComponentImporter$4 = () => import("./stewardship-BnjdopDz.mjs");
var Route$4 = createFileRoute("/stewardship")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./what-we-do-CD_eTR54.mjs");
var Route$3 = createFileRoute("/what-we-do")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./why-zekano-BM4ZfkjS.mjs");
var Route$2 = createFileRoute("/why-zekano")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./zeklease-DwPs0Mfb.mjs");
var Route$1 = createFileRoute("/zeklease")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./zekmanage-CR4n44Fx.mjs");
var Route = createFileRoute("/zekmanage")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$20.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$21
	}),
	AboutUsRoute: Route$19.update({
		id: "/about-us",
		path: "/about-us",
		getParentRoute: () => Route$21
	}),
	CompanyRoute: Route$18.update({
		id: "/company",
		path: "/company",
		getParentRoute: () => Route$21
	}),
	ContactRoute: Route$17.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$21
	}),
	FaqsRoute: Route$16.update({
		id: "/faqs",
		path: "/faqs",
		getParentRoute: () => Route$21
	}),
	LeadershipRoute: Route$15.update({
		id: "/leadership",
		path: "/leadership",
		getParentRoute: () => Route$21
	}),
	OurCommitmentRoute: Route$14.update({
		id: "/our-commitment",
		path: "/our-commitment",
		getParentRoute: () => Route$21
	}),
	OurCultureRoute: Route$13.update({
		id: "/our-culture",
		path: "/our-culture",
		getParentRoute: () => Route$21
	}),
	OurPhilosophyRoute: Route$12.update({
		id: "/our-philosophy",
		path: "/our-philosophy",
		getParentRoute: () => Route$21
	}),
	OurPrinciplesRoute: Route$11.update({
		id: "/our-principles",
		path: "/our-principles",
		getParentRoute: () => Route$21
	}),
	OurSolutionsRoute: Route$10.update({
		id: "/our-solutions",
		path: "/our-solutions",
		getParentRoute: () => Route$21
	}),
	OurStoryRoute: Route$9.update({
		id: "/our-story",
		path: "/our-story",
		getParentRoute: () => Route$21
	}),
	OurSystemRoute: Route$8.update({
		id: "/our-system",
		path: "/our-system",
		getParentRoute: () => Route$21
	}),
	OurSystemsRoute: Route$7.update({
		id: "/our-systems",
		path: "/our-systems",
		getParentRoute: () => Route$21
	}),
	ResourcesRoute: Route$6.update({
		id: "/resources",
		path: "/resources",
		getParentRoute: () => Route$21
	}),
	SitemapDotxmlRoute: Route$5.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$21
	}),
	StewardshipRoute: Route$4.update({
		id: "/stewardship",
		path: "/stewardship",
		getParentRoute: () => Route$21
	}),
	WhatWeDoRoute: Route$3.update({
		id: "/what-we-do",
		path: "/what-we-do",
		getParentRoute: () => Route$21
	}),
	WhyZekanoRoute: Route$2.update({
		id: "/why-zekano",
		path: "/why-zekano",
		getParentRoute: () => Route$21
	}),
	ZekleaseRoute: Route$1.update({
		id: "/zeklease",
		path: "/zeklease",
		getParentRoute: () => Route$21
	}),
	ZekmanageRoute: Route.update({
		id: "/zekmanage",
		path: "/zekmanage",
		getParentRoute: () => Route$21
	})
};
var routeTree = Route$21._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, router_DCbCVxxL_exports as t };
