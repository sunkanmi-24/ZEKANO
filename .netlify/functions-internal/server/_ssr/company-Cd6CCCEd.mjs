import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Header, t as Footer } from "./Footer-D623qjDX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-Cd6CCCEd.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./company-irTD4Sef.mjs");
var Route = createFileRoute("/company")({
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function PlaceholderPage({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "zekano-placeholder-page min-h-screen bg-white flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "zekano-placeholder-main flex-1 mx-auto max-w-none w-full px-4 lg:px-8 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "zekano-placeholder-title text-4xl lg:text-5xl font-bold text-brand-dark",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "zekano-placeholder-subtitle mt-4 text-lg text-muted-foreground max-w-2xl",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "zekano-placeholder-note mt-8 text-sm text-muted-foreground",
						children: "This page is coming soon."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Route as n, PlaceholderPage as t };
