import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { I as Hand, V as Cpu, Z as ChartColumn, i as Users, j as House, l as Star, p as ShieldCheck, u as Sprout } from "../_libs/lucide-react.mjs";
import { n as PhilosophyGrid, r as PhilosophyLayout, t as GuidingPurpose } from "./PhilosophyPage-CLj_ZRtU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-philosophy-DBo2m0Yo.js
var import_jsx_runtime = require_jsx_runtime();
var beliefs = [
	{
		icon: ChartColumn,
		title: "Structure Creates Trust",
		body: "Sustainable businesses are built on systems, not improvisation."
	},
	{
		icon: Sprout,
		title: "Every Asset Has Potential",
		body: "Every asset, system, and resource can create lasting value when responsibly stewarded."
	},
	{
		icon: Users,
		title: "People Deserve Trusted Systems",
		body: "Communities deserve order, trust, and opportunity, not uncertainty and broken systems."
	},
	{
		icon: Cpu,
		title: "Technology Strengthens Relationships",
		body: "We use technology to improve transparency, accountability, and efficiency."
	},
	{
		icon: ShieldCheck,
		title: "Discipline Builds Long-Term Value",
		body: "We create long-term value through discipline, not shortcuts."
	},
	{
		icon: Star,
		title: "We Measure Impact, Not Just Growth",
		body: "Our success is measured by the lives we positively impact, not just numbers."
	},
	{
		icon: House,
		title: "Opportunity Through Responsible Stewardship",
		body: "We create opportunity by stewarding assets, people, and systems responsibly."
	},
	{
		icon: Hand,
		title: "Purpose Over Profit",
		body: "Money is an outcome of doing the right things consistently and faithfully."
	}
];
function OurPhilosophyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhilosophyLayout, {
		page: "our-philosophy",
		current: "Our Philosophy",
		title: "Our Philosophy",
		tagline: ["The beliefs that shape everything we do."],
		body: ["Our philosophy defines how we think, decide, and act. These beliefs guide our systems, shape our culture, and influence every decision we make."],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuidingPurpose, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-8 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyGrid, {
				items: beliefs,
				columns: 4
			})
		})]
	});
}
//#endregion
export { OurPhilosophyPage as component };
