import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowRight, k as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as zekmanage_hero_default } from "./zekmanage-hero-5u9QfRJm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zeklease-DwPs0Mfb.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
	});
}
function Section({ eyebrow, title, children, altBg }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `px-5 sm:px-8 lg:px-12 py-10 ${altBg ? "bg-secondary/40" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-2xl font-bold text-brand-dark",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3",
				children
			})
		]
	});
}
function Page() {
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
							children: "ZEKLEASE"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ZEKLEASE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
							children: "Structured Mobility Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: "ZEKLEASE is ZEKANO Mobility's structured mobility access solution. It provides responsible Mobility Professionals with structured access to mobility assets for productive use. We create the framework through which Mobility Professionals can access mobility assets, operate within defined responsibilities, and participate with greater clarity and accountability."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold text-brand-dark italic",
							children: "Access creates opportunity. Opportunity carries responsibility. Responsibility creates trust."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("zeklease", "hero", zekmanage_hero_default),
							alt: "ZEKLEASE",
							className: "h-72 w-full object-cover lg:h-[380px]",
							width: 1200,
							height: 800
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "ACCESS IS MORE THAN A VEHICLE",
				title: "We Structure Access",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For a Mobility Professional, access to a reliable mobility asset can create an opportunity to work, earn, and build a livelihood. But access without structure can create uncertainty. Who is responsible for the asset? What is expected of the person using it? How are operational issues handled? ZEKLEASE is designed to bring structure to these relationships." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT ZEKLEASE PROVIDES",
				title: "A Pathway for Productive Mobility Participation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							t: "Structured Access",
							d: "Defined pathway to gain access for productive use."
						},
						{
							t: "Clear Responsibilities",
							d: "Responsibilities for operating and caring for the asset are established."
						},
						{
							t: "Defined Standards",
							d: "Expectations for professional conduct, asset care, and responsible use."
						},
						{
							t: "Operational Support",
							d: "Structured framework providing clarity when issues arise."
						},
						{
							t: "Professional Accountability",
							d: "Access comes with responsibility and accountability."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-5 bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-brand-dark",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: c.d
						})]
					}, c.t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHO IS ZEKLEASE FOR?",
				title: "People Prepared to Take Responsibility",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZEKLEASE is designed for Mobility Professionals who want structured access to mobility assets and are prepared to take responsibility for the opportunity they receive. Access is not based simply on the desire to have a vehicle. It is based on the ability and willingness to operate within the standards and responsibilities of the ZEKANO Mobility System." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "ELIGIBILITY",
				title: "Requirements for ZEKLEASE Access",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Holding a valid professional driver's licence" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Meeting age and driving experience requirements" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Residing within our current operating area" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Providing required identification and guarantor information" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Meeting security deposit requirements" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Demonstrating ability to meet financial and operational obligations" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Passing onboarding and verification process" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Agreeing to ZEKLEASE terms, standards, and responsibilities" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark",
					children: "Access is not granted simply because someone needs a vehicle. It is granted when the person, asset, and arrangement can responsibly work together."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "OPPORTUNITY AND RESPONSIBILITY",
				title: "Care. Operate Responsibly. Meet Obligations.",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZEKLEASE provides access; the Mobility Professional is responsible for using it properly — caring for the asset, following operating requirements, meeting financial obligations, communicating appropriately, and maintaining professional standards." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "HOW THE RELATIONSHIP WORKS",
				title: "Assets Enable People. People Enable Assets. Structure Connects Them.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The mobility asset provides infrastructure for productive mobility. ZEKANO provides the structure through which access is organized and managed. The Mobility Professional puts the asset to productive use while carrying the responsibilities associated with that access." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT WE EXPECT",
				title: "Stewardship Is Earned",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						"Care for the Asset — treat the vehicle with care expected of someone entrusted with another person's asset.",
						"Operate Responsibly — use the vehicle within the agreed operating framework.",
						"Meet Their Obligations — fulfil financial and operational responsibilities.",
						"Communicate Honestly — raise issues promptly.",
						"Maintain Professional Standards — protect the trust placed in them."
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border p-5 bg-white text-sm text-muted-foreground",
						children: t
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT ZEKLEASE DOES NOT GUARANTEE",
				title: "Structure Creates Conditions — Not Guaranteed Outcomes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZEKLEASE does not promise guaranteed income, earnings, demand, profitability, utilization, or elimination of operational risk. Mobility Professionals operate in a real-world environment where demand, operating conditions, costs, and downtime affect outcomes." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ACCESS WITH A PATHWAY" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-brand-dark",
						children: "The Opportunity Grows With Responsibility Carried"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "For the right Mobility Professional, structured access can provide a pathway to participate with clearer expectations, defined responsibilities, and an opportunity to build trust through consistent performance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-systems",
						className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
						children: ["Explore the ZEKANO Mobility System ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Apply for ZEKLEASE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-white/70",
							children: ["Interested in structured access? Email us at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:admin.mobility@zekano.co",
								className: "underline",
								children: "admin.mobility@zekano.co"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:admin.mobility@zekano.co",
							className: "mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
							style: {
								backgroundImage: "var(--brand-gold-gradient)",
								color: "oklch(0.24 0.07 255.27)"
							},
							children: ["Apply for ZEKLEASE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
