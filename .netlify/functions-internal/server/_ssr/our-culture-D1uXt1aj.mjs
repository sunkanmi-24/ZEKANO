import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { H as Clock, W as ClipboardCheck, d as Sparkles, h as Search, i as Users, m as Settings, nt as ArrowUpRight, p as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as PhilosophyGrid, r as PhilosophyLayout } from "./PhilosophyPage-CLj_ZRtU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-culture-D1uXt1aj.js
var import_jsx_runtime = require_jsx_runtime();
var culture = [
	{
		icon: Settings,
		title: "We Build Systems, Not Dependence",
		body: "We build systems that enable people to deliver exceptional results consistently."
	},
	{
		icon: ClipboardCheck,
		title: "We Own Problems Completely",
		body: "We take full responsibility and solve problems rather than pass them around."
	},
	{
		icon: ShieldCheck,
		title: "We Protect Trust",
		body: "Trust is earned through thousands of consistent actions and protected with integrity."
	},
	{
		icon: Sparkles,
		title: "We Improve Every Day",
		body: "Perfection isn't the goal. Continuous improvement is our daily standard."
	},
	{
		icon: Clock,
		title: "We Think Long-Term",
		body: "We reject short-term wins that compromise long-term trust and value."
	},
	{
		icon: Users,
		title: "We Respect Every Person",
		body: "We treat every person with dignity, honesty, and fairness."
	},
	{
		icon: Search,
		title: "We Learn Before We Judge",
		body: "We seek to understand first, learn, and then improve the system."
	},
	{
		icon: ArrowUpRight,
		title: "We Leave Things Better",
		body: "We aim to leave every system, relationship, and asset better than we found it."
	}
];
function OurCulturePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyLayout, {
		page: "our-culture",
		current: "Our Culture",
		title: "Our Culture",
		tagline: ["The invisible system that shapes", "every visible action."],
		body: ["Our culture is how we think, decide, and act every day. It turns our philosophy and principles into reality."],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-8 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyGrid, {
					items: culture,
					columns: 4
				})
			})
		})
	});
}
//#endregion
export { OurCulturePage as component };
