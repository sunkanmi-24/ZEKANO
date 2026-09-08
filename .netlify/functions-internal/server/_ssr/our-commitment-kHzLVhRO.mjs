import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as Eye, F as Handshake, M as Heart, Z as ChartColumn, d as Sparkles, et as Briefcase, m as Settings } from "../_libs/lucide-react.mjs";
import { n as PhilosophyGrid, r as PhilosophyLayout } from "./PhilosophyPage-CLj_ZRtU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-commitment-kHzLVhRO.js
var import_jsx_runtime = require_jsx_runtime();
var promises = [
	{
		icon: Heart,
		title: "We Promise Trust",
		body: "We earn trust through honesty, consistency, and accountability."
	},
	{
		icon: Settings,
		title: "We Promise Order",
		body: "We create clarity through strong systems, thoughtful processes, and responsible governance."
	},
	{
		icon: Eye,
		title: "We Promise Transparency",
		body: "We communicate openly and ensure everyone understands how our systems work."
	},
	{
		icon: Briefcase,
		title: "We Promise Stewardship",
		body: "We care for every responsibility entrusted to us with professionalism and diligence."
	},
	{
		icon: Sparkles,
		title: "We Promise Improvement",
		body: "We constantly refine our systems so tomorrow's experience is better than today's."
	},
	{
		icon: ChartColumn,
		title: "We Promise Impact",
		body: "We measure our success by the positive impact we have on the lives and communities we serve."
	}
];
function OurCommitmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhilosophyLayout, {
		page: "our-commitment",
		current: "Our Commitment",
		title: "Our Commitment",
		tagline: ["A promise is only meaningful", "when it is consistently kept."],
		body: ["We promise to bring order, trust, and opportunity to the communities we serve through every system we build, every decision we make, and every relationship we steward."],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-8 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyGrid, {
					items: promises,
					columns: 6
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-6 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4 rounded-xl border border-brand-accent/25 bg-brand-accent/5 p-5 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "h-6 w-6 shrink-0 text-brand-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-brand-dark sm:text-lg",
						children: "Our Institutional Promise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm italic leading-relaxed text-muted-foreground sm:text-base",
						children: "We promise to bring order, trust, and opportunity to the communities we serve through every system we build, every decision we make, and every relationship we steward."
					})]
				})]
			})
		})]
	});
}
//#endregion
export { OurCommitmentPage as component };
