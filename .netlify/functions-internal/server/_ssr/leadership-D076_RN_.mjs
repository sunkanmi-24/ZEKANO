import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as ChevronRight, q as CircleCheck, rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as getImage, n as Header, r as ZekanoLogo, t as Footer } from "./Footer-D623qjDX.mjs";
import { t as leadership_boardroom_jpg_asset_default } from "./leadership-boardroom.jpg.asset-DlRLBDrM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-D076_RN_.js
var import_jsx_runtime = require_jsx_runtime();
var leader_ceo_jpg_asset_default = {
	version: 1,
	asset_id: "836659cc-986f-43b8-8c80-d4b37e79a219",
	project_id: "1965e32e-8e6d-441d-a944-ee2376e83ab9",
	url: "/__l5e/assets-v1/836659cc-986f-43b8-8c80-d4b37e79a219/leader-ceo.jpg",
	r2_key: "a/v1/1965e32e-8e6d-441d-a944-ee2376e83ab9/836659cc-986f-43b8-8c80-d4b37e79a219/leader-ceo.jpg",
	original_filename: "leader-ceo.jpg",
	size: 61864,
	content_type: "image/jpeg",
	created_at: "2026-08-05T09:35:10Z"
};
var leader_coo_jpg_asset_default = {
	version: 1,
	asset_id: "91afdbd1-2d24-4243-a440-c40eca3ee52c",
	project_id: "1965e32e-8e6d-441d-a944-ee2376e83ab9",
	url: "/__l5e/assets-v1/91afdbd1-2d24-4243-a440-c40eca3ee52c/leader-coo.jpg",
	r2_key: "a/v1/1965e32e-8e6d-441d-a944-ee2376e83ab9/91afdbd1-2d24-4243-a440-c40eca3ee52c/leader-coo.jpg",
	original_filename: "leader-coo.jpg",
	size: 35898,
	content_type: "image/jpeg",
	created_at: "2026-08-05T09:35:13Z"
};
var leader_finance_jpg_asset_default = {
	version: 1,
	asset_id: "c36145e6-ce1e-4326-9e0e-03264f652fa8",
	project_id: "1965e32e-8e6d-441d-a944-ee2376e83ab9",
	url: "/__l5e/assets-v1/c36145e6-ce1e-4326-9e0e-03264f652fa8/leader-finance.jpg",
	r2_key: "a/v1/1965e32e-8e6d-441d-a944-ee2376e83ab9/c36145e6-ce1e-4326-9e0e-03264f652fa8/leader-finance.jpg",
	original_filename: "leader-finance.jpg",
	size: 39219,
	content_type: "image/jpeg",
	created_at: "2026-08-05T09:35:17Z"
};
var ceo = {
	name: "A.A. Adekunle",
	role: "Founder & CEO",
	image: getImage("leadership", "leader-1", leader_ceo_jpg_asset_default.url),
	bio: "Visionary leader with a passion for building systems that solve real-world problems. A.A. drives ZEKANO's strategy, partnerships, and long-term vision for transforming mobility across Africa.",
	points: [
		"Strategic Vision & Direction",
		"Business Development",
		"Stakeholder Partnerships",
		"Innovation & Growth"
	]
};
var team = [{
	name: "BELLO WALIU LANRE",
	role: "Co-Founder & COO",
	image: getImage("leadership", "leader-2", leader_coo_jpg_asset_default.url),
	bio: "Leads day-to-day operations with a focus on efficiency, compliance, and excellence. Ensures our systems run smoothly and deliver value.",
	points: [
		"Operations Management",
		"Process Excellence",
		"Team Leadership",
		"Compliance & Risk"
	]
}, {
	name: "Head of Finance",
	role: "",
	image: getImage("leadership", "leader-3", leader_finance_jpg_asset_default.url),
	bio: "Responsible for financial strategy, planning, and controls. Ensures sustainability, transparency, and responsible growth.",
	points: [
		"Financial Planning",
		"Risk Management",
		"Reporting & Controls",
		"Investor Relations"
	]
}];
function Bullet({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "leadership-point flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			className: "leadership-point-icon mt-0.5 h-4 w-4 shrink-0 text-brand-green",
			strokeWidth: 2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "leadership-point-label min-w-0 text-sm text-brand-dark",
			children: label
		})]
	});
}
function LeadershipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "leadership-page min-h-screen bg-white flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Breadcrumb",
						className: "leadership-breadcrumb mx-auto max-w-none w-full px-4 lg:px-8 pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "flex items-center gap-2 text-xs sm:text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-brand-green",
									children: "Home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "h-3.5 w-3.5",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/company",
									className: "hover:text-brand-green",
									children: "Company"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "h-3.5 w-3.5",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "font-medium text-brand-dark",
									children: "Leadership"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "leadership-hero mx-auto max-w-none w-full px-4 lg:px-8 py-8 lg:py-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "leadership-eyebrow text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-green",
										children: "Leadership"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "leadership-title mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-[1.15]",
										children: [
											"Experienced Leaders.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-brand-green",
												children: "Clear Vision."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "leadership-hero-desc mt-6 text-base text-muted-foreground leading-relaxed max-w-xl",
										children: "Our leadership team brings together deep experience in mobility, operations, technology, and finance to build systems that create sustainable value for all stakeholders."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "leadership-hero-media overflow-hidden rounded-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: getImage("leadership", "hero", leadership_boardroom_jpg_asset_default.url),
									alt: "ZEKANO boardroom with branded wall and conference table",
									className: "h-56 sm:h-72 lg:h-[340px] w-full object-cover",
									width: 1280,
									height: 720
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "leadership-featured mx-auto max-w-none w-full px-4 lg:px-8 pb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "leadership-featured-card rounded-2xl border border-border bg-secondary/40 p-5 lg:p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ceo.image,
									alt: `Portrait of ${ceo.name}, ${ceo.role}`,
									loading: "lazy",
									className: "leadership-featured-photo h-72 sm:h-96 lg:h-[420px] w-full rounded-xl object-cover",
									width: 768,
									height: 1024
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 lg:py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "leadership-featured-name text-2xl lg:text-3xl font-bold text-brand-dark",
											children: ceo.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leadership-featured-role mt-2 text-base lg:text-lg font-semibold text-brand-green",
											children: ceo.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leadership-featured-bio mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl",
											children: ceo.bio
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "leadership-featured-points mt-6 grid gap-3",
											children: ceo.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, { label: p }, p))
										})
									]
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "leadership-team mx-auto max-w-none w-full px-4 lg:px-8 pb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "leadership-team-card rounded-2xl border border-border bg-secondary/40 p-5 lg:p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-[180px_1fr] sm:gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: m.image,
										alt: `Portrait of ${m.name}`,
										loading: "lazy",
										className: "leadership-team-photo h-64 sm:h-[260px] w-full rounded-xl object-cover",
										width: 768,
										height: 1024
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "leadership-team-name text-lg lg:text-xl font-bold text-brand-dark",
												children: m.name
											}),
											m.role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "leadership-team-role mt-1.5 text-sm font-semibold text-brand-green",
												children: m.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "leadership-team-bio mt-3 text-sm text-muted-foreground leading-relaxed",
												children: m.bio
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "leadership-team-points mt-4 grid gap-2.5",
												children: m.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, { label: p }, p))
											})
										]
									})]
								})
							}, m.name))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "leadership-cta mx-auto max-w-none w-full px-4 lg:px-8 py-10 lg:py-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "leadership-cta-band rounded-2xl border border-border bg-secondary/40 px-5 py-7 lg:px-10 lg:py-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "leadership-cta-logo grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "scale-[0.6]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZekanoLogo, {})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "leadership-cta-title text-xl lg:text-2xl font-bold text-brand-dark",
											children: "One Team. One Mission."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leadership-cta-desc mt-2 text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl",
											children: "Building Africa's most trusted structured mobility ecosystem — together with vehicle owners, drivers, and partners."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "leadership-cta-btn inline-flex items-center justify-center gap-2 rounded-lg bg-brand-dark px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition",
										children: ["Join Our Journey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { LeadershipPage as component };
