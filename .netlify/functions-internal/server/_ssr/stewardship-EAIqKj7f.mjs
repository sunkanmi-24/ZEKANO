import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { K as CircleQuestionMark, et as Briefcase, i as Users, m as Settings, p as ShieldCheck, tt as Award, u as Sprout } from "../_libs/lucide-react.mjs";
import { n as PhilosophyGrid, r as PhilosophyLayout } from "./PhilosophyPage-CLj_ZRtU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stewardship-EAIqKj7f.js
var import_jsx_runtime = require_jsx_runtime();
var stewardOf = [
	{
		icon: ShieldCheck,
		title: "Trust",
		body: "Earned through consistency and protected through integrity."
	},
	{
		icon: Settings,
		title: "Systems",
		body: "Every system we inherit should become stronger because we managed it."
	},
	{
		icon: Sprout,
		title: "Opportunity",
		body: "Every opportunity entrusted to us should create value for more than one person."
	},
	{
		icon: Briefcase,
		title: "Assets",
		body: "We care for every asset entrusted to us as if it were our own."
	},
	{
		icon: Users,
		title: "People",
		body: "We invest in people because institutions are built by them."
	},
	{
		icon: Award,
		title: "Reputation",
		body: "Our reputation is built one decision at a time and protected by all."
	}
];
var questions = [
	"Does this protect trust?",
	"Does this improve the system?",
	"Does this expand opportunity?",
	"Would I make the same decision if it were my own?",
	"Will those who come after me inherit something better?"
];
function StewardshipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhilosophyLayout, {
		page: "stewardship",
		current: "Stewardship",
		title: "Stewardship",
		tagline: ["Leadership gives authority.", "Stewardship gives responsibility."],
		body: ["We are called to faithfully protect, improve, and preserve everything entrusted to us for the benefit of those we serve today and those who will come after us."],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-8 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold text-brand-dark sm:text-xl",
					children: "What We Are Stewards Of"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyGrid, {
						items: stewardOf,
						columns: 6
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-6 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-brand-dark p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-white sm:text-xl",
						children: "The Steward's Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-white/70",
						children: "Before making any significant decision, we ask:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5",
						children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:items-center sm:text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 shrink-0 text-brand-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold leading-snug text-white",
								children: q
							})]
						}, q))
					})
				]
			})
		})]
	});
}
//#endregion
export { StewardshipPage as component };
