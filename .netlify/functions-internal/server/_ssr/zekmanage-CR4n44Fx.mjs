import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Eye, F as ArrowRight, i as Users, k as ChevronRight, l as Shield, r as Wallet } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as zekmanage_hero_default } from "./zekmanage-hero-5u9QfRJm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zekmanage-CR4n44Fx.js
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
							children: "ZEKMANAGE"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 lg:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ZEKMANAGE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl lg:text-[42px] font-bold text-brand-dark",
							children: "Structured Mobility Asset Management."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: "ZEKMANAGE is ZEKANO Mobility's structured mobility asset management solution. It provides Asset Owners with professional management, oversight, coordination, and accountability for their mobility assets. We create the management structure through which mobility assets can be responsibly positioned, operated, monitored, and stewarded toward their productive potential."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("zekmanage", "hero", zekmanage_hero_default),
							alt: "ZEKMANAGE",
							className: "h-72 w-full object-cover lg:h-[380px]",
							width: 1200,
							height: 800
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "YOUR ASSET DESERVES MORE THAN OWNERSHIP",
				title: "Ownership Gives Responsibility. Management Provides Structure.",
				altBg: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Owning a mobility asset creates responsibility. The asset needs to be properly managed, its use coordinated, its condition monitored, and relationships responsibly maintained. Without structure, ownership can become difficult to manage. ZEKMANAGE provides the management framework through which Asset Owners can entrust day-to-day management to a structured system." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark italic",
					children: "Ownership gives responsibility. Management provides structure. Stewardship protects potential."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT ZEKMANAGE PROVIDES",
				title: "A Management Framework Built Around Stewardship",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							t: "Professional Management",
							d: "Structured management of the asset and surrounding activities."
						},
						{
							t: "Operational Oversight",
							d: "Ongoing oversight for visibility, consistency, and responsible operation."
						},
						{
							t: "Coordination",
							d: "Coordination between asset, Mobility Professionals, and ecosystem relationships."
						},
						{
							t: "Accountability",
							d: "Defined responsibilities and standards that make the relationship clear."
						},
						{
							t: "Responsible Stewardship",
							d: "Protecting the asset's ability to continue creating value."
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
				eyebrow: "HOW WE THINK ABOUT ASSET MANAGEMENT",
				title: "We Steward Potential, Not Just Vehicles",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not view a mobility asset simply as a vehicle. It can represent capital, savings, investment, opportunity, livelihood, and future plans. That is why our responsibility extends beyond keeping an asset active. We seek to maximize what the asset can responsibly create while protecting its ability to continue creating value." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ESTIMATE YOUR MONTHLY PAYOUT" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-brand-dark",
						children: "See Your Estimated Monthly Payout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Every asset has a different operating profile. Enter your vehicle details for an initial indication."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 max-w-2xl rounded-2xl border border-border p-6 grid sm:grid-cols-2 gap-4 bg-secondary/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: ["Vehicle Value", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "₦ Enter value",
									className: "mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: ["Vehicle Model", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Enter model",
									className: "mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: ["Vehicle Year", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Select year",
									className: "mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: ["Vehicle Condition", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "mt-1 w-full rounded-md border border-border px-3 py-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Foreign Used" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Nigerian Used" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "sm:col-span-2 mt-2 rounded-md px-6 py-3 text-sm font-semibold",
								style: {
									backgroundImage: "var(--brand-gold-gradient)",
									color: "oklch(0.24 0.07 255.27)"
								},
								children: "Calculate Estimated Payout"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 max-w-2xl rounded-xl bg-brand-dark text-white p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-white/60",
								children: "ESTIMATED MONTHLY PAYOUT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-bold",
								children: "₦XXX,XXX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-white/60",
								children: "Estimate only — final terms determined during onboarding."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT THE RELATIONSHIP LOOKS LIKE",
				title: "Clear Framework, Clear Responsibilities",
				altBg: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Asset Owner retains ownership. ZEKANO provides the management structure, professional oversight, coordination, and accountability. The objective is a clear framework in which responsibilities are understood and the asset can be responsibly put to productive use." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "BUILT AROUND STEWARDSHIP",
				title: "Productivity. Protection. Accountability. Sustainability.",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: [
						{
							icon: Wallet,
							t: "Productivity",
							d: "Putting the asset to meaningful and productive use."
						},
						{
							icon: Shield,
							t: "Protection",
							d: "Protecting condition, purpose, and long-term potential."
						},
						{
							icon: Eye,
							t: "Accountability",
							d: "Maintaining clear responsibilities across the relationship."
						},
						{
							icon: Users,
							t: "Sustainability",
							d: "Creating value today while considering tomorrow."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-5 flex gap-3 bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6 text-brand-green shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-brand-dark",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: c.d
						})] })]
					}, c.t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark",
					children: "An asset entrusted to us is a responsibility before it is an opportunity."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "WHAT WE ARE RESPONSIBLE FOR",
				title: "Quality of Management",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When an Asset Owner entrusts an asset to ZEKMANAGE, our responsibility is to manage that asset within the agreed structure and operating scope — maintaining standards, coordinating relevant parties, and acting with care and accountability. Our role is not simply to keep an asset active. It is to responsibly manage the conditions through which that asset can create productive value." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "WHAT WE CANNOT CONTROL",
				title: "Structure Improves Conditions — It Does Not Guarantee Outcomes",
				altBg: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mobility operates in a real-world environment. Utilization, operating costs, market conditions, unforeseen events, downtime, and other external factors can affect outcomes. For that reason, ZEKMANAGE does not represent its management service as a guarantee of a particular income, return, utilization level, or financial outcome." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-brand-dark",
					children: "We are responsible for the quality of the management. We cannot honestly guarantee every outcome produced by the environment in which the asset operates."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "A STRUCTURED APPROACH" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-brand-dark",
						children: "Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "The objective is not simply to keep an asset active. It is to manage the asset responsibly throughout its useful life and continually consider how its potential can be protected and improved."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-systems",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
						children: ["Explore Our Mobility System ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
							children: "Request ZEKMANAGE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-white/70",
							children: ["Let's Discuss Your Mobility Asset. Interested in ZEKMANAGE? Send us an email at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:zekmanage@zekano.co",
								className: "underline",
								children: "zekmanage@zekano.co"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:zekmanage@zekano.co",
							className: "mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
							style: {
								backgroundImage: "var(--brand-gold-gradient)",
								color: "oklch(0.24 0.07 255.27)"
							},
							children: ["Request ZEKMANAGE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
