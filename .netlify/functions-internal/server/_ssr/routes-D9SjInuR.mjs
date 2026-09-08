import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Building2, G as CircleUser, O as Layers, Q as Car, Z as ChartColumn, _ as Quote, a as User, f as Shield, i as Users, rt as ArrowRight, s as TrendingUp } from "../_libs/lucide-react.mjs";
import { i as getImage, n as Header, t as Footer } from "./Footer-D623qjDX.mjs";
import { t as founder_default } from "./founder-B69IMx1z.mjs";
import { t as driver_png_asset_default } from "./driver.png.asset-BvpdJ_LQ.mjs";
import { n as holdingphone_png_asset_default, t as hero_cars_jpg_asset_default } from "./holdingphone.png.asset-C5wXcL0u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9SjInuR.js
var import_jsx_runtime = require_jsx_runtime();
var city_skyline_default = "/assets/city-skyline-DZ4gGByn.jpg";
var driver = getImage("home", "system-lease", driver_png_asset_default.url);
var phoneApp = getImage("home", "system-manage", holdingphone_png_asset_default.url);
var whoWeServe = [
	{
		icon: Car,
		title: "For Vehicle Owners",
		desc: "Predictable income through professional asset management.",
		color: "bg-brand-green"
	},
	{
		icon: CircleUser,
		title: "For Drivers",
		desc: "Access to reliable vehicles and sustainable income opportunities.",
		color: "bg-brand-blue"
	},
	{
		icon: Users,
		title: "For Communities",
		desc: "Safer, more efficient and sustainable mobility.",
		color: "bg-brand-dark"
	},
	{
		icon: TrendingUp,
		title: "For the Future",
		desc: "Building scalable systems for a better tomorrow.",
		color: "bg-brand-green"
	}
];
var pillars = [
	{
		icon: Layers,
		title: "Structured Operations",
		desc: "Processes that ensure consistency and control."
	},
	{
		icon: User,
		title: "Professional Management",
		desc: "Experts managing assets and people."
	},
	{
		icon: ChartColumn,
		title: "Technology & Transparency",
		desc: "Real-time insights and transparent reporting."
	},
	{
		icon: Shield,
		title: "Trust & Accountability",
		desc: "Built on compliance, standards and integrity."
	}
];
var stats = [
	{
		icon: Car,
		value: "100+",
		label: "Mobility Assets Managed"
	},
	{
		icon: Users,
		value: "1,500+",
		label: "Active Drivers Connected"
	},
	{
		icon: CircleUser,
		value: "300+",
		label: "Asset Owners Earning"
	},
	{
		icon: ChartColumn,
		value: "95%+",
		label: "Vehicle Utilization Rate"
	},
	{
		icon: Shield,
		value: "100%",
		label: "Compliance & Safety Standard"
	},
	{
		icon: Building2,
		value: "1+",
		label: "Cities of Operation"
	}
];
var ecosystem = [
	{
		icon: User,
		title: "Vehicle Owner",
		desc: "Provides vehicle as an asset",
		color: "bg-brand-green"
	},
	{
		icon: Layers,
		title: "ZEKMANAGE",
		desc: "Manages, maintains and optimizes the asset",
		color: "bg-brand-green"
	},
	{
		icon: Car,
		title: "Managed Vehicle",
		desc: "Vehicle is ready for productive use",
		color: "bg-brand-dark"
	},
	{
		icon: Users,
		title: "ZEKLEASE",
		desc: "Provides access to qualified drivers",
		color: "bg-brand-blue"
	},
	{
		icon: CircleUser,
		title: "Qualified Driver",
		desc: "Uses the vehicle to earn income",
		color: "bg-brand-blue"
	},
	{
		icon: ChartColumn,
		title: "Income Generated",
		desc: "Owner earns predictable income. Driver earns sustainable income.",
		color: "bg-brand-green"
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "zekano-hero relative bg-brand-dark overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zekano-hero-bg absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("home", "hero", hero_cars_jpg_asset_default.url),
						alt: "Vehicles on highway",
						className: "h-full w-full object-cover opacity-70",
						width: 1600,
						height: 900
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "zekano-hero-content relative mx-auto max-w-none px-4 py-[15px] lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-hero-grid grid lg:grid-cols-[1fr_auto] gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zekano-hero-text max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "zekano-hero-title text-[40px] font-bold text-white leading-tight",
									children: [
										"Structured Mobility.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "zekano-gold-text",
											children: "Professionally Managed."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-hero-subtitle mt-6 text-base sm:text-lg text-white/85 max-w-xl",
									children: "ZEKANO designs, operates, and continuously improves systems that connect mobility assets with qualified mobility professionals for productive use."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-hero-buttons mt-8 flex flex-col sm:flex-row flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/our-systems",
											className: "zekano-hero-btn inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark transition",
											children: ["Explore Our Systems ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "zekano-hero-btn inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition",
											children: ["Become an Asset Owner ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "zekano-hero-btn inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition",
											children: ["Become a Driver ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zekano-hero-pillars lg:w-[340px] rounded-xl bg-brand-dark/85 backdrop-blur border border-white/10 p-6 space-y-5",
							children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-hero-pillar flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-6 w-6 text-brand-green shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-white",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/70 mt-0.5",
									children: p.desc
								})] })]
							}, p.title))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-who-we-serve py-14 lg:py-16 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zekano-who-we-serve-inner mx-auto max-w-none px-4 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "zekano-who-we-serve-title text-center text-2xl lg:text-3xl font-bold text-brand-dark",
						children: ["Who We Serve", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block mx-auto mt-2 h-0.5 w-12 bg-brand-green" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-serve-grid mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-border p-4 lg:p-6",
						children: whoWeServe.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zekano-serve-card flex items-start gap-4 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `zekano-serve-icon grid h-12 w-12 shrink-0 place-items-center rounded-full ${item.color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-6 w-6 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-serve-text min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "zekano-serve-title text-base font-bold text-brand-dark",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-serve-desc mt-1 text-sm text-muted-foreground",
									children: item.desc
								})]
							})]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-who-we-are py-8 lg:py-10 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zekano-who-we-are-inner mx-auto max-w-none px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-who-we-are-card rounded-2xl border border-border p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zekano-who-we-are-text",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-section-label text-xs font-bold tracking-wider text-brand-green",
									children: "WHO WE ARE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "zekano-who-we-are-title mt-3 text-2xl lg:text-3xl font-bold text-brand-dark leading-snug",
									children: ["Building the systems that move ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-green",
										children: "Africa forward."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-who-we-are-desc mt-4 text-sm text-muted-foreground",
									children: "ZEKANO is a structured mobility company that creates value by designing, operating, and continuously improving systems that connect mobility assets with qualified mobility professionals for productive use."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/company",
									className: "zekano-who-we-are-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:gap-3 transition-all",
									children: ["Learn More About Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zekano-stats-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zekano-stats-grid grid grid-cols-3 gap-y-8 gap-x-4",
								children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-stat-item text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "zekano-stat-icon mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-brand-green" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "zekano-stat-value mt-3 text-xl lg:text-2xl font-bold text-brand-green",
											children: s.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "zekano-stat-label mt-1 text-xs text-muted-foreground leading-tight",
											children: s.label
										})
									]
								}, s.label))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-stats-note mt-6 text-xs text-muted-foreground",
								children: "*Data updated as of May 2025"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-purpose-card relative rounded-2xl overflow-hidden min-h-[280px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: getImage("home", "city-skyline", city_skyline_default),
								alt: "City skyline",
								className: "absolute inset-0 h-full w-full object-cover",
								width: 1200,
								height: 700,
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-purpose-overlay absolute bottom-6 right-6 left-6 sm:left-auto sm:w-64 rounded-lg bg-white p-5 shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-brand-green text-xl",
											children: "✳"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "zekano-purpose-title text-base font-bold text-brand-dark",
											children: "Our Purpose"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "zekano-purpose-desc mt-2 text-sm text-muted-foreground",
										children: "Bring order. Create value. Improve mobility. Impact lives."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-0.5 w-8 bg-brand-green" })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-what-we-do py-8 lg:py-10 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zekano-what-we-do-inner mx-auto max-w-none px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-systems-card rounded-2xl border border-border p-5 lg:p-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-section-label text-xs font-bold tracking-wider text-brand-green",
								children: "WHAT WE DO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-system-card grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-system-text",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "zekano-system-title text-2xl font-bold text-brand-green",
											children: "ZEKMANAGE"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-system-subtitle text-base font-semibold text-brand-dark",
											children: "Structured Mobility Management System"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-system-desc mt-2 text-base text-muted-foreground",
											children: "Enables vehicle owners to earn predictable income through the professional management of their mobility assets."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/our-systems",
											className: "zekano-system-link mt-3 inline-flex items-center gap-2 text-base font-semibold text-brand-green",
											children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: phoneApp,
									alt: "ZEKMANAGE app",
									className: "zekano-system-img h-64 w-auto object-contain justify-self-end",
									width: 600,
									height: 700,
									loading: "lazy"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-system-card border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-system-text",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "zekano-system-title text-2xl font-bold text-brand-blue",
											children: "ZEKLEASE"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-system-subtitle text-base font-semibold text-brand-dark",
											children: "Structured Mobility Access System"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-system-desc mt-2 text-base text-muted-foreground",
											children: "Enables responsible, vetted drivers to earn sustainable income through access to professionally managed vehicles."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/our-systems",
											className: "zekano-system-link mt-3 inline-flex items-center gap-2 text-base font-semibold text-brand-blue",
											children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: driver,
									alt: "ZEKLEASE driver",
									className: "zekano-system-img h-56 w-56 object-cover rounded-lg justify-self-end",
									width: 700,
									height: 700,
									loading: "lazy"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-ecosystem rounded-2xl border border-border p-5 lg:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "zekano-ecosystem-title text-center text-xs font-bold tracking-wider text-brand-green",
								children: "HOW OUR SYSTEMS WORK TOGETHER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zekano-ecosystem-grid mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10",
								children: ecosystem.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-ecosystem-step flex flex-col items-center text-center relative px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `zekano-ecosystem-icon grid h-14 w-14 lg:h-16 lg:w-16 place-items-center rounded-full ${step.color}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "h-7 w-7 lg:h-8 lg:w-8 text-white" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: `zekano-ecosystem-step-title mt-4 text-sm sm:text-base lg:text-lg font-bold ${step.color === "bg-brand-blue" ? "text-brand-blue" : step.color === "bg-brand-dark" ? "text-brand-dark" : "text-brand-green"}`,
											children: step.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "zekano-ecosystem-step-desc mt-2 text-sm leading-snug text-muted-foreground",
											children: step.desc
										}),
										i < ecosystem.length - 1 && (i + 1) % 3 !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "zekano-ecosystem-arrow hidden sm:block absolute -right-5 lg:-right-7 top-5 lg:top-6 h-5 w-5 text-muted-foreground" })
									]
								}, step.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-ecosystem-footer mt-6 flex items-center gap-2 rounded-lg bg-brand-green/10 px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-brand-green shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-ecosystem-footer-text text-xs sm:text-sm font-medium text-brand-dark",
									children: "ZEKANO manages the entire ecosystem with structure, technology, and accountability."
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zekano-founder-cta py-8 lg:py-10 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zekano-founder-cta-inner mx-auto max-w-none px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-founder rounded-2xl border border-border overflow-hidden grid grid-cols-1 sm:grid-cols-[auto_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("home", "founder", founder_default),
							alt: "Founder",
							className: "zekano-founder-img h-full w-full sm:w-48 object-cover",
							width: 600,
							height: 600,
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zekano-founder-text p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "zekano-founder-quote h-6 w-6 text-brand-green" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "zekano-founder-title mt-2 text-lg font-bold text-brand-dark",
									children: "A Message from Our Founder"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-founder-message mt-3 text-sm text-muted-foreground italic",
									children: "\"At ZEKANO, we believe in building more than a company—we are building systems that create trust, opportunity, and sustainable value.\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/company",
									className: "zekano-founder-link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
									children: ["Read the Full Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zekano-cta rounded-2xl border border-border bg-secondary/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zekano-cta-icon grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-7 w-7 text-brand-green" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zekano-cta-text flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "zekano-cta-title text-lg font-bold text-brand-dark",
									children: "Ready to Join the ZEKANO Ecosystem?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "zekano-cta-desc mt-1 text-sm text-muted-foreground",
									children: "Whether you own a vehicle or want to become a professional driver, our structured systems are designed to help you succeed."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zekano-cta-buttons mt-4 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "zekano-cta-btn inline-flex items-center gap-2 rounded-md bg-brand-green px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-green-dark transition",
											children: ["Become an Asset Owner ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "zekano-cta-btn inline-flex items-center gap-2 rounded-md bg-brand-blue px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition",
											children: ["Become a Driver ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "zekano-cta-btn inline-flex items-center gap-2 rounded-md bg-brand-dark px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition",
											children: ["Contact Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})
									]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HomePage as component };
