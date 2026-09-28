import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleQuestionMark, M as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DAG4i2k1.mjs";
import { a as resources_hero_default, i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./resources-hero-BKeEesC9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-CtX_MRtS.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
	});
}
var faqs = [
	{
		cat: "General",
		q: "What is ZEKANO Mobility?",
		a: "ZEKANO Mobility is a structured mobility solutions company and an expression of ZEKANO's purpose. We bring structure to the mobility industry by managing and connecting mobility assets with mobility communities to maximize their potential."
	},
	{
		cat: "General",
		q: "What does “We Bring Structure to Mobility” mean?",
		a: "It means we create frameworks, responsibilities, processes, oversight, and relationships through which mobility assets and people can work together responsibly and productively."
	},
	{
		cat: "General",
		q: "What is the ZEKANO Mobility System?",
		a: "Assets + Communities + Structure → Productive Mobility → Value → Impact"
	},
	{
		cat: "General",
		q: "Who does ZEKANO Mobility serve?",
		a: "Asset Owners, Mobility Professionals, Customers, Strategic Partners, Communities, Future Builders."
	},
	{
		cat: "ZEKMANAGE",
		q: "What is ZEKMANAGE?",
		a: "A structured mobility asset management solution providing professional management, oversight, coordination, and accountability."
	},
	{
		cat: "ZEKMANAGE",
		q: "Do I retain ownership of my vehicle?",
		a: "Yes. ZEKMANAGE provides management; it does not transfer ownership."
	},
	{
		cat: "ZEKMANAGE",
		q: "How does the payout calculator work?",
		a: "It provides an estimated monthly payout based on vehicle information — not a guarantee of financial outcome."
	},
	{
		cat: "ZEKMANAGE",
		q: "Does ZEKMANAGE guarantee my monthly payout?",
		a: "No. We are responsible for quality of management; outcomes are affected by operating conditions, utilization, costs, etc."
	},
	{
		cat: "ZEKMANAGE",
		q: "What happens after I request ZEKMANAGE?",
		a: "Email zekmanage@zekano.co — our team reviews and reaches out."
	},
	{
		cat: "ZEKLEASE",
		q: "What is ZEKLEASE?",
		a: "Structured mobility access solution for responsible Mobility Professionals."
	},
	{
		cat: "ZEKLEASE",
		q: "Who can apply for ZEKLEASE?",
		a: "Mobility Professionals able and willing to operate within ZEKANO standards and eligibility requirements."
	},
	{
		cat: "ZEKLEASE",
		q: "Does ZEKLEASE guarantee income?",
		a: "No. Structure creates conditions for opportunity; it does not guarantee outcome."
	},
	{
		cat: "ZEKLEASE",
		q: "How do I apply for ZEKLEASE?",
		a: "Email admin.mobility@zekano.co — our team reviews and guides next steps."
	},
	{
		cat: "Stewardship & Accountability",
		q: "What does stewardship mean to ZEKANO?",
		a: "Treating what is entrusted to us as responsibility before opportunity. We seek to keep potential alive."
	},
	{
		cat: "Stewardship & Accountability",
		q: "Does ZEKANO guarantee everything will go perfectly?",
		a: "No. Structure improves conditions; it does not guarantee a particular outcome. We respond responsibly when challenges arise."
	},
	{
		cat: "Stewardship & Accountability",
		q: "How does ZEKANO build trust?",
		a: "Through clear expectations, defined responsibilities, accountability, honest communication, and continuous improvement."
	}
];
function Page() {
	const cats = [...new Set(faqs.map((f) => f.cat))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-5 pt-6 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "flex items-center gap-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-brand-green",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-brand-dark",
							children: "FAQs"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQS" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
						children: "Questions. Clear Answers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm sm:text-base text-muted-foreground",
						children: "We believe trust is strengthened when people know what to expect."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("faqs", "hero", resources_hero_default),
						alt: "FAQs",
						className: "h-72 w-full object-cover",
						width: 1200,
						height: 800
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid lg:grid-cols-2 gap-6",
					children: cats.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-6 bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-brand-dark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-bold tracking-widest text-brand-dark",
								children: cat.toUpperCase()
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-4",
							children: faqs.filter((f) => f.cat === cat).map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: `${cat}-${i}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-sm font-semibold text-brand-dark text-left",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-sm text-muted-foreground",
									children: f.a
								})]
							}, i))
						})]
					}, cat))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-white",
						children: "Still Have a Question?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 mx-auto max-w-xl text-sm text-white",
						children: [
							"ZEKMANAGE: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:zekmanage@zekano.co",
								className: "underline text-white",
								children: "zekmanage@zekano.co"
							}),
							" — ZEKLEASE: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:admin.mobility@zekano.co",
								className: "underline text-white",
								children: "admin.mobility@zekano.co"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
