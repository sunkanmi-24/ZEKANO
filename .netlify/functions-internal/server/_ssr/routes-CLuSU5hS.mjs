import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, F as ArrowRight, N as Building2, a as User, i as Users, j as ChartColumn, l as Shield, w as Handshake, x as Layers, y as Lightbulb } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DpUl0FgZ.mjs";
import { t as about_hq_default } from "./about-hq-DQPHf-xN.mjs";
import { t as city_skyline_default } from "./city-skyline-CqF1ITA4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLuSU5hS.js
var import_jsx_runtime = require_jsx_runtime();
var hero_cars_jpg_asset_default = {
	version: 1,
	asset_id: "4290a60b-f8f7-4705-9cd2-d14bdd496b5a",
	project_id: "1965e32e-8e6d-441d-a944-ee2376e83ab9",
	url: "/__l5e/assets-v1/4290a60b-f8f7-4705-9cd2-d14bdd496b5a/hero-cars.jpg",
	r2_key: "a/v1/1965e32e-8e6d-441d-a944-ee2376e83ab9/4290a60b-f8f7-4705-9cd2-d14bdd496b5a/hero-cars.jpg",
	original_filename: "hero-cars.jpg",
	size: 921721,
	content_type: "image/jpeg",
	created_at: "2026-07-21T16:06:44Z"
};
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-bold tracking-[0.18em] text-brand-green",
		children
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative bg-brand-dark overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getImage("home", "hero", hero_cars_jpg_asset_default.url),
						alt: "Mobility",
						className: "h-full w-full object-cover opacity-50",
						width: 1600,
						height: 900
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/30" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-none px-4 lg:px-8 py-20 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.2em] text-white/70",
							children: "ZEKANO MOBILITY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl text-4xl lg:text-5xl font-bold text-white leading-tight",
							children: "We Bring Structure to Mobility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base lg:text-lg text-white/80 leading-relaxed",
							children: "ZEKANO Mobility is an expression of ZEKANO's purpose. We bring structure to the mobility industry by managing and connecting mobility assets with mobility communities to maximize their potential."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-systems",
							className: "mt-8 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark transition",
							children: ["Explore Our Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-20 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ZEKANO MOBILITY" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark leading-tight",
							children: "A Structured Mobility Solutions Company."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm lg:text-base text-muted-foreground leading-relaxed",
							children: "ZEKANO Mobility is an expression of ZEKANO's purpose in the mobility industry. We build trusted systems that bring structure to the relationships between mobility assets, people, and opportunities — creating the conditions for responsible use, productive value, and positive impact."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/company",
							className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
							children: ["Learn More About Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl overflow-hidden border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("home", "city-skyline", city_skyline_default),
							alt: "City",
							className: "h-72 w-full object-cover",
							width: 800,
							height: 500,
							loading: "lazy"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHO WE ARE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Building the systems that move Africa forward."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed",
							children: "ZEKANO is a structured mobility company that creates value by designing, operating, and continuously improving systems that connect mobility assets with qualified mobility professionals for productive use."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/company",
							className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
							children: ["Learn More About Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl overflow-hidden border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("home", "who-we-are", about_hq_default),
							alt: "ZEKANO team and mobility",
							className: "h-72 w-full object-cover",
							width: 800,
							height: 500,
							loading: "lazy"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHAT WE DO" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Structure. Manage. Connect. Maximize."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm text-muted-foreground",
							children: "We manage and connect mobility assets with mobility communities, creating the structure through which assets can be responsibly and productively used."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
							children: [
								{
									n: "01",
									t: "Structure",
									d: "We organize the relationships, responsibilities, processes, and systems surrounding mobility."
								},
								{
									n: "02",
									t: "Manage",
									d: "We provide structured management and professional oversight for mobility assets."
								},
								{
									n: "03",
									t: "Connect",
									d: "We connect mobility assets with the people and communities that can put them to productive use."
								},
								{
									n: "04",
									t: "Maximize",
									d: "We seek to maximize the responsible and productive potential of mobility assets."
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-bold text-brand-green",
										children: s.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-base font-bold text-brand-dark",
										children: s.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: s.d
									})
								]
							}, s.t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHY STRUCTURE MATTERS" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Mobility Assets Have Potential. Structure Helps Unlock It Responsibly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-sm text-muted-foreground leading-relaxed",
							children: "A mobility asset is more than a vehicle. It can represent capital, opportunity, livelihood, and the ability to serve people and communities. Its potential is realized through responsible positioning, management, utilization, and stewardship. When the relationships surrounding an asset are poorly structured, potential can be lost and trust becomes difficult to maintain. We bring structure to mobility so that assets can be responsibly managed, people can participate with greater clarity, and productive value can be created across the ecosystem."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
							children: [
								{
									icon: Layers,
									title: "Structured Operations",
									desc: "Clear processes and responsibilities that create consistency and control."
								},
								{
									icon: User,
									title: "Professional Management",
									desc: "Responsible oversight of mobility assets and the relationships surrounding them."
								},
								{
									icon: ChartColumn,
									title: "Technology & Transparency",
									desc: "Information and systems that support visibility, coordination, and informed decisions."
								},
								{
									icon: Shield,
									title: "Trust & Accountability",
									desc: "Clear standards and responsibilities that strengthen confidence across the mobility ecosystem."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-white border border-border p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-7 w-7 text-brand-green" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-sm font-bold text-brand-dark",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground leading-relaxed",
										children: c.desc
									})
								]
							}, c.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-brand-dark text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.18em] text-brand-green",
							children: "THE ZEKANO MOBILITY SYSTEM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold",
							children: "A System Designed to Create Productive Mobility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm text-white/70",
							children: "Mobility works through relationships between assets, people, and opportunities. Our system brings these elements together through structure, enabling mobility assets to be put to responsible and productive use."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
							children: [
								{
									t: "Assets",
									d: "Mobility assets provide the potential to create value."
								},
								{
									t: "Communities",
									d: "People and communities bring needs, capabilities, and opportunities into the system."
								},
								{
									t: "Structure",
									d: "We organize the relationships, responsibilities, and processes that connect assets with communities."
								},
								{
									t: "Productive Mobility",
									d: "When these elements work together responsibly, mobility assets can serve meaningful needs and create productive value."
								},
								{
									t: "Value",
									d: "Value is created across the relationships connecting asset owners, mobility professionals, customers, partners, and the wider community."
								},
								{
									t: "Impact",
									d: "The value created through mobility ultimately contributes to our purpose: positively impacting the lives of the communities we serve."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-white/10 bg-white/5 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-white",
									children: c.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-white/60",
									children: c.d
								})]
							}, c.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 rounded-xl bg-white/5 border border-white/10 p-4 text-center text-sm font-mono text-white/80",
							children: "Assets + Communities + Structure → Productive Mobility → Value → Impact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-systems",
							className: "mt-6 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white",
							children: ["Explore Our System ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR SOLUTIONS" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Structured Solutions for Mobility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm text-muted-foreground",
							children: "Our solutions are practical expressions of the ZEKANO Mobility System. Each is designed to address a specific mobility need while creating responsible value."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid lg:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-brand-green",
										children: "ZEKMANAGE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-brand-dark",
										children: "Structured Mobility Asset Management"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: "ZEKMANAGE provides Asset Owners with professional management, oversight, coordination, and accountability for their mobility assets."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/zekmanage",
										className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
										children: ["Explore ZEKMANAGE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-brand-blue",
										children: "ZEKLEASE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-brand-dark",
										children: "Structured Mobility Access"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: "ZEKLEASE provides responsible Mobility Professionals with structured access to mobility assets for productive use."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/zeklease",
										className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue",
										children: ["Explore ZEKLEASE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "STEWARDSHIP" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Responsibility Before Opportunity."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "An asset entrusted to us is a responsibility before it is an opportunity."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid lg:grid-cols-3 gap-4",
							children: [
								{
									t: "Responsible Use",
									d: "Putting mobility assets to productive use without compromising their purpose or long-term potential."
								},
								{
									t: "Professional Oversight",
									d: "Managing assets and relationships with the care, standards, and accountability they require."
								},
								{
									t: "Sustainable Value",
									d: "Creating value today while protecting the asset's ability to continue serving its purpose tomorrow."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-white border border-border p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-brand-dark",
									children: c.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: c.d
								})]
							}, c.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-semibold text-brand-dark italic",
							children: "We do not simply seek to keep assets productive. We seek to keep their potential alive."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/stewardship",
							className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
							children: ["Learn About Our Approach to Stewardship ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "THE COMMUNITIES WE SERVE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "There Are People Behind Every Mobility Asset."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm text-muted-foreground",
							children: "Mobility is ultimately about people. Behind every mobility asset, transaction, and journey is a person, business, or community with a need, responsibility, opportunity, or aspiration."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
							children: [
								{
									icon: Building2,
									t: "Asset Owners",
									d: "People and institutions entrusting mobility assets to be managed responsibly."
								},
								{
									icon: Users,
									t: "Mobility Professionals",
									d: "Responsible professionals seeking structured access to mobility assets."
								},
								{
									icon: Heart,
									t: "Customers",
									d: "People and organizations who depend on reliable mobility."
								},
								{
									icon: Handshake,
									t: "Strategic Partners",
									d: "Organizations whose capabilities strengthen the mobility ecosystem."
								},
								{
									icon: Users,
									t: "Communities",
									d: "The wider communities in which mobility operates."
								},
								{
									icon: Lightbulb,
									t: "Future Builders",
									d: "People developing the skills and leadership for tomorrow's mobility."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6 text-brand-green" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-sm font-bold text-brand-dark",
										children: c.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: c.d
									})
								]
							}, c.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-semibold text-brand-green",
							children: "We build systems around people, not simply around assets."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "WHY ZEKANO" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Structure Built on Responsibility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
							children: [
								{
									t: "Structure",
									d: "Clarity and organization across mobility relationships."
								},
								{
									t: "Stewardship",
									d: "Responsibility as fundamental to every opportunity."
								},
								{
									t: "Accountability",
									d: "Clear responsibilities and standards that support trust."
								},
								{
									t: "Purpose",
									d: "Positively impacting lives through order, trust, and opportunity."
								},
								{
									t: "Community",
									d: "Considering the wider communities within which mobility operates."
								},
								{
									t: "Responsible Growth",
									d: "Growth follows capability, responsibility, and ability to serve well."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-white border border-border p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-brand-dark",
									children: c.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: c.d
								})]
							}, c.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-bold text-brand-dark",
							children: "Trust before growth."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/why-zekano",
							className: "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
							children: ["Why ZEKANO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "OUR COMMITMENT" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-brand-dark",
							children: "Building Trust Through How We Work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
							children: [
								"Building Trusted Systems",
								"Responsible Stewardship",
								"Clear Accountability",
								"Continuous Improvement",
								"Creating Meaningful Value"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-6 w-6 text-brand-green shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-brand-dark",
									children: t
								})]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted-foreground",
							children: "We are committed to building systems that people can trust and that communities can benefit from."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-commitment",
							className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green",
							children: ["Our Commitment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 lg:py-16 bg-brand-dark text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-none px-4 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.18em] text-brand-green",
							children: "FIND YOUR PLACE IN THE SYSTEM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold",
							children: "Where Do You Fit Within the ZEKANO Mobility System?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 mx-auto max-w-2xl text-sm text-white/70",
							children: "Whether you own a mobility asset, seek structured access to one, or want to contribute to the mobility ecosystem, there is a place for you within the system we are building."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid lg:grid-cols-2 gap-6 text-left max-w-3xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/5 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold",
										children: "I Own a Mobility Asset"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-white/60",
										children: "Put your asset under a structured management system designed for responsible and productive use."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/zekmanage",
										className: "mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-xs font-semibold text-white",
										children: ["Explore ZEKMANAGE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/5 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold",
										children: "I Need Mobility Access"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-white/60",
										children: "Explore structured access to mobility assets for productive use."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/zeklease",
										className: "mt-4 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-semibold text-brand-dark",
										children: ["Explore ZEKLEASE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HomePage as component };
