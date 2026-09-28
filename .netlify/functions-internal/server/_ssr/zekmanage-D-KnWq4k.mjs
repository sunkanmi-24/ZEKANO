import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, D as Eye, F as Car, M as ChevronRight, R as ArrowRight, i as Users, k as ClipboardCheck, l as Shield, r as Wallet, x as Layers } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DAG4i2k1.mjs";
import { t as zekmanage_hero_default } from "./zekmanage-hero-5u9QfRJm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zekmanage-D-KnWq4k.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.2em] text-brand-green",
		children
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold italic text-brand-dark",
							children: "Ownership gives responsibility. Management provides structure. Stewardship protects potential."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.2em] text-white",
						children: "WHAT ZEKMANAGE PROVIDES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold text-white",
						children: "A Management Framework Built Around Stewardship"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							icon: Shield,
							t: "Professional Management",
							d: "Structured management of the asset and surrounding activities."
						},
						{
							icon: Eye,
							t: "Operational Oversight",
							d: "Ongoing oversight for visibility, consistency, and responsible operation."
						},
						{
							icon: Users,
							t: "Coordination",
							d: "Coordination between asset, Mobility Professionals, and ecosystem."
						},
						{
							icon: ClipboardCheck,
							t: "Accountability",
							d: "Defined responsibilities and standards that make the relationship clear."
						},
						{
							icon: Heart,
							t: "Responsible Stewardship",
							d: "Protecting the asset's ability to continue creating value."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "mx-auto h-7 w-7 text-white" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-sm font-bold text-white",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-white/60",
								children: c.d
							})
						]
					}, c.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 bg-white",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "YOUR ASSET DESERVES MORE THAN OWNERSHIP" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold text-brand-dark",
								children: "Ownership Gives Responsibility"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: "Owning a mobility asset creates responsibility. The asset needs to be properly managed, its use coordinated, its condition monitored, and relationships responsibly maintained. ZEKMANAGE provides the framework through which Asset Owners entrust day-to-day management to a structured system."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-secondary/40 border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-7 w-7 text-brand-green" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "HOW WE THINK ABOUT ASSET MANAGEMENT" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold text-brand-dark",
								children: "We Steward Potential, Not Just Vehicles"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: "We do not view a mobility asset simply as a vehicle. It can represent capital, savings, investment, opportunity, livelihood, and future plans. We seek to maximize what the asset can responsibly create while protecting its ability to continue creating value."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ESTIMATE YOUR MONTHLY PAYOUT" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold text-brand-dark",
								children: "See Your Estimated Monthly Payout"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 mx-auto max-w-xl text-sm text-muted-foreground",
								children: "Every asset has a different operating profile. Enter your vehicle details for an initial indication."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-2xl border border-border bg-white p-6 grid sm:grid-cols-2 gap-4 text-left",
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
										children: ["Vehicle Year", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "mt-1 w-full rounded-md border border-border px-3 py-2 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select year range"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2008 - 2011" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2012 upward" })
											]
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
										className: "sm:col-span-2 mt-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
										children: "Calculate Estimated Payout"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 mx-auto max-w-md rounded-xl bg-brand-dark text-white p-6 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-white",
										children: "ESTIMATED MONTHLY PAYOUT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-3xl font-bold text-white",
										children: "₦XXX,XXX"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-white/70",
										children: "This is an estimate based on the information provided and the applicable ZEKMANAGE arrangement. Final terms, applicable deductions, and the management arrangement are determined during onboarding."
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-brand-dark text-white p-8 lg:p-10 text-center flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-white",
								children: "Request ZEKMANAGE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 mx-auto max-w-xl text-sm text-white/70",
								children: "Let's Discuss Your Mobility Asset."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/request-zekmanage",
								className: "mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
								children: ["Request ZEKMANAGE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10 bg-brand-dark text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.2em] text-white",
							children: "BUILT AROUND STEWARDSHIP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl font-bold text-white",
							children: "Productivity. Protection. Accountability. Sustainability."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
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
								d: "Maintaining clear responsibilities."
							},
							{
								icon: Users,
								t: "Sustainability",
								d: "Creating value today while considering tomorrow."
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/10 bg-white/5 p-5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "mx-auto h-6 w-6 text-white" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-sm font-bold text-white",
									children: c.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/60",
									children: c.d
								})
							]
						}, c.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-center text-sm font-semibold text-white",
						children: "An asset entrusted to us is a responsibility before it is an opportunity."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 bg-white",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 lg:px-12 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHAT WE ARE RESPONSIBLE FOR" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-bold text-brand-dark",
								children: "Quality of Management"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Our responsibility is to manage within the agreed structure — maintaining standards, coordinating parties, and acting with care and accountability."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-secondary/40 border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHAT WE CANNOT CONTROL" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-bold text-brand-dark",
								children: "Structure Improves Conditions — Not Guarantees"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "We cannot guarantee every outcome produced by the environment in which the asset operates."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-brand-dark",
						children: "Positioning → Utilization → Stewardship → Evaluation → Improvement → Transition"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-system",
						className: "mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white",
						children: ["Explore Our Mobility System ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 bg-white",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Page as component };
