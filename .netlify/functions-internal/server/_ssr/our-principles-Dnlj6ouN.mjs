import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as MapPin, F as Handshake, H as Clock, L as GraduationCap, Z as ChartColumn, d as Sparkles, i as Users, m as Settings, p as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as PhilosophyGrid, r as PhilosophyLayout, t as GuidingPurpose } from "./PhilosophyPage-CLj_ZRtU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-principles-Dnlj6ouN.js
var import_jsx_runtime = require_jsx_runtime();
var principles = [
	{
		number: "01",
		icon: MapPin,
		title: "Philosophy Before Geography",
		body: "Our purpose is defined by the problems we solve, not the places we operate."
	},
	{
		number: "02",
		icon: Handshake,
		title: "Trust Before Growth",
		body: "Growth without trust is unsustainable. Every decision must strengthen trust."
	},
	{
		number: "03",
		icon: Settings,
		title: "System Over Shortcuts",
		body: "We build disciplined systems that produce consistent results, not temporary fixes."
	},
	{
		number: "04",
		icon: ChartColumn,
		title: "Opportunity Through Structure",
		body: "Structure removes barriers and creates opportunity for more people."
	},
	{
		number: "05",
		icon: Users,
		title: "People, Process, Then Technology",
		body: "We solve human problems first, support them with processes, and strengthen them with technology."
	},
	{
		number: "06",
		icon: Sparkles,
		title: "Excellence Is Built Daily",
		body: "Consistent improvement in small things creates extraordinary outcomes."
	},
	{
		number: "07",
		icon: Clock,
		title: "Long-Term Thinking",
		body: "We make decisions that strengthen ZEKANO for decades, not just for today."
	},
	{
		number: "08",
		icon: ShieldCheck,
		title: "Stewardship",
		body: "We treat everything entrusted to us as our own and leave it better than we found it."
	},
	{
		number: "09",
		icon: GraduationCap,
		title: "Continuous Learning",
		body: "Every challenge is an opportunity to learn, improve, and evolve."
	}
];
function OurPrinciplesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhilosophyLayout, {
		page: "our-principles",
		current: "Our Principles",
		title: "Our Principles",
		tagline: ["Principles are the architecture of", "enduring institutions."],
		body: ["Our principles guide our decisions, shape our culture, and influence our systems. They define how we serve the communities and stakeholders who place their trust in us."],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuidingPurpose, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pt-8 sm:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhilosophyGrid, {
				items: principles,
				columns: 3,
				numbered: true
			})
		})]
	});
}
//#endregion
export { OurPrinciplesPage as component };
