import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Facebook, M as ChevronRight, R as ArrowRight, S as Instagram, _ as Mail, g as MapPin, m as MessageCircle, p as Phone, v as Linkedin } from "../_libs/lucide-react.mjs";
import { n as Header, r as getImage, t as Footer } from "./Footer-DAG4i2k1.mjs";
import { t as contact_office_default } from "./contact-office-BkSTKci4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-A6kksNPh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var channels = [
	{
		icon: Mail,
		title: "Email Us",
		lines: ["hello@zekano.co"]
	},
	{
		icon: Phone,
		title: "Call Us",
		lines: ["+234 800 600 0000"]
	},
	{
		icon: MessageCircle,
		title: "WhatsApp",
		lines: ["Chat with us on WhatsApp"]
	},
	{
		icon: MapPin,
		title: "Office Address",
		lines: [
			"ZEKANO Mobility Limited",
			"3rd Floor, Mobility Hub,",
			"Idu Industrial Area,",
			"Abuja, Nigeria."
		]
	}
];
var fields = [
	{
		label: "Full Name",
		name: "name",
		placeholder: "Your full name",
		type: "text"
	},
	{
		label: "Email Address",
		name: "email",
		placeholder: "Your email address",
		type: "email"
	},
	{
		label: "Subject",
		name: "subject",
		placeholder: "What is this regarding?",
		type: "text"
	}
];
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "zekano-contact min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "zekano-contact-hero relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-contact-photo pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("contact", "hero", contact_office_default),
							alt: "ZEKANO head office building exterior",
							width: 1024,
							height: 1280,
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative px-5 pt-6 pb-12 sm:px-8 lg:px-12 lg:pb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Breadcrumb",
							className: "zekano-contact-breadcrumbs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "hover:text-brand-green",
										children: "Home"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-brand-dark",
										children: "Contact Us"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "zekano-contact-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "text-4xl font-bold leading-tight text-brand-dark sm:text-5xl",
										children: ["Contact ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-brand-green",
											children: "Us"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base",
										children: "We're here to help. Reach out to us through any of the channels below and our team will get back to you as soon as possible."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-6",
										children: channels.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "zekano-contact-channel flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "mt-0.5 h-5 w-5 shrink-0 text-brand-dark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-bold text-brand-dark",
													children: c.title
												}), c.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm leading-relaxed text-muted-foreground",
													children: l
												}, l))]
											})]
										}, c.title))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-brand-dark",
											children: "Follow Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "zekano-contact-social mt-3 flex items-center gap-4",
											children: [[
												Linkedin,
												Instagram,
												Facebook
											].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												"aria-label": "ZEKANO social profile",
												className: "text-brand-dark transition-colors hover:text-brand-green",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
											}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												"aria-label": "ZEKANO on X",
												className: "text-brand-dark transition-colors hover:text-brand-green",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													className: "h-5 w-5",
													fill: "currentColor",
													"aria-hidden": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2H21.5l-7.09 8.104L22.5 22h-6.9l-4.4-5.86L5.9 22H2.64l7.36-8.4L1.5 2h6.9l4.16 5.55L18.244 2Zm-1.2 18h1.8L7.02 3.84H5.1l11.944 16.16Z" })
												})
											})]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zekano-contact-form-wrap lg:pr-[8%]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "zekano-contact-form rounded-lg border border-border bg-white p-6 shadow-xl sm:p-8 lg:p-10",
									onSubmit: (e) => {
										e.preventDefault();
										setSent(true);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-bold text-brand-dark sm:text-2xl",
											children: "Send Us a Message"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: "Please fill out the form and we'll get back to you."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 space-y-5",
											children: [
												fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: f.name,
													className: "block text-sm font-medium text-brand-dark",
													children: f.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: f.name,
													name: f.name,
													type: f.type,
													required: true,
													placeholder: f.placeholder,
													className: "mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
												})] }, f.name)),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "message",
													className: "block text-sm font-medium text-brand-dark",
													children: "Message"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "message",
													name: "message",
													rows: 5,
													required: true,
													placeholder: "How can we help you?",
													className: "mt-2 w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "submit",
													className: "zekano-contact-submit inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark",
													children: ["Send Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												}),
												sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"aria-live": "polite",
													className: "text-sm font-medium text-brand-green",
													children: "Thanks — your message has been noted. We'll be in touch shortly."
												})
											]
										})
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zekano-contact-photo-mobile lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getImage("contact", "hero", contact_office_default),
							alt: "ZEKANO head office building exterior",
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "h-56 w-full object-cover sm:h-72"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
