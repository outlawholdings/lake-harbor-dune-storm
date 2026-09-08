import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Phone, c as FileText, d as Columns2, i as Plus, l as Download, n as SwatchBook, o as Minus, r as Printer, s as Mail, u as Copy } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DcMVw607.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-[var(--radius-sm)] bg-foreground px-2.5 py-1.5 text-xs text-background shadow-[var(--shadow-border)] animate-in fade-in-0 zoom-in-95", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var profile = {
	given: "April",
	family: "Outlaw",
	name: "April Outlaw",
	credential: "Certified Surgical Technologist",
	focus: "Health Information Management",
	location: "McMinnville, TN 37110",
	city: "McMinnville, TN",
	phone: "601-529-0841",
	phoneHref: "tel:+16015290841",
	email: "april.outlaw@gmail.com",
	emailHref: "mailto:april.outlaw@gmail.com",
	summary: "Detail-oriented healthcare professional and Certified Surgical Technologist (CST) with clinical experience supporting high-volume surgical teams across multiple specialties. Currently completing a Bachelor of Science in Health Information Management at Southern New Hampshire University (two semesters remaining) with the goal of advancing to a Master’s degree in the same field. Proven strengths in organization, documentation accuracy, aseptic compliance, team collaboration, and multi-priority coordination in fast-paced clinical environments. Eager to apply these transferable skills to administrative, operational, and program-support functions within public health settings."
};
var competencyGroups = [{
	id: "operations",
	label: "Operations",
	items: [
		"Organizational & Time Management",
		"Records & Documentation Accuracy",
		"Microsoft Office Suite (Word, Excel, Outlook)",
		"Meeting Coordination & Scheduling",
		"Multi-Priority Task Management",
		"Attention to Detail & Quality Control"
	]
}, {
	id: "clinical",
	label: "Clinical",
	items: [
		"Aseptic / Infection Control Protocols",
		"Surgical Instrumentation & Sterilization",
		"Medical Terminology & Anatomy",
		"Patient Safety & Confidentiality (HIPAA)",
		"Cross-Functional Team Collaboration",
		"Clinical Workflow Support"
	]
}];
var experience = [{
	id: "cumberland",
	title: "Surgical Technologist Intern",
	org: "Cumberland Medical Center",
	place: "Crossville, TN",
	start: "June 2024",
	end: "September 2024",
	dates: "June 2024 – September 2024",
	bullets: [
		"Supported all phases of surgical care (preoperative, intraoperative, and postoperative), ensuring seamless workflow and adherence to hospital protocols.",
		"Managed comprehensive inventory of surgical instruments, supplies, and equipment; prepared sterile trays and verified readiness for scheduled procedures.",
		"Maintained strict aseptic technique and infection-control standards, contributing to zero preventable contamination events during assigned cases.",
		"Anticipated surgeon and team needs in real time, reducing procedural delays and supporting efficient operating-room turnover.",
		"Documented case-related details and equipment usage with precision to support accurate records and continuous quality improvement."
	]
}, {
	id: "vanderbilt",
	title: "Surgical Technologist Intern",
	org: "Vanderbilt Wilson County Hospital",
	place: "Lebanon, TN",
	start: "April 2024",
	end: "June 2024",
	dates: "April 2024 – June 2024",
	bullets: [
		"Assisted in 95+ surgical procedures spanning general surgery, orthopedics, ENT, and additional specialties, demonstrating adaptability across diverse case types.",
		"Established and preserved sterile fields; performed instrument counts and verified equipment functionality to uphold patient safety standards.",
		"Collaborated closely with surgeons, nurses, and anesthesia providers to coordinate care, communicate critical information, and maintain operational efficiency.",
		"Handled delicate instrumentation and specialized equipment with meticulous attention to detail, minimizing risk of damage or procedural interruption.",
		"Supported postoperative room turnover and restocking, ensuring readiness for subsequent cases and consistent adherence to departmental protocols."
	]
}];
var education = [{
	id: "snhu",
	degree: "Bachelor of Science in Health Information Management",
	school: "Southern New Hampshire University (SNHU)",
	dates: "Expected 2027",
	note: "Two semesters remaining. Career objective: pursue a Master of Science in Health Information Management upon completion of the bachelor’s degree."
}, {
	id: "fortis",
	degree: "Associate of Science in Surgical Technology",
	school: "Fortis Institute — Cookeville, TN",
	dates: "2023 – 2024",
	note: null
}];
var certifications = [{
	id: "cst",
	name: "Certified Surgical Technologist (CST)",
	issuer: "National Board of Surgical Technology and Surgical Assisting (NBSTSA)"
}, {
	id: "cpr",
	name: "CPR Certification",
	issuer: "American Red Cross"
}];
var marks = [
	"CST · NBSTSA",
	"95+ assisted procedures",
	"B.S. HIM in progress",
	"HIPAA-fluent"
];
var templates = [
	{
		id: "atelier",
		name: "Atelier",
		blurb: "Editorial serif. Quiet rules. Two-column skills."
	},
	{
		id: "lumen",
		name: "Lumen",
		blurb: "Ink rail. Credentials first. Operations on the page."
	},
	{
		id: "ledger",
		name: "Ledger",
		blurb: "Classic ATS hierarchy. Centered mast. Dense and clean."
	}
];
var papers = [
	{
		id: "ivory",
		name: "Ivory",
		blurb: "Warm cotton stock"
	},
	{
		id: "porcelain",
		name: "Porcelain",
		blurb: "Cool gallery white"
	},
	{
		id: "fog",
		name: "Fog",
		blurb: "Soft mineral gray"
	}
];
function buildAtsText() {
	const skills = competencyGroups.flatMap((group) => group.items).join(" · ");
	const roles = experience.map((role) => {
		const bullets = role.bullets.map((b) => `• ${b}`).join("\n");
		return `${role.title}\n${role.org} — ${role.place} | ${role.dates}\n${bullets}`;
	}).join("\n\n");
	const edu = education.map((item) => {
		const note = item.note ? `\n${item.note}` : "";
		return `${item.degree}\n${item.school} | ${item.dates}${note}`;
	}).join("\n\n");
	const certs = certifications.map((c) => `${c.name} — ${c.issuer}`).join("\n");
	return [
		profile.name.toUpperCase(),
		`${profile.location}  |  ${profile.phone}  |  ${profile.email}`,
		"",
		"PROFESSIONAL SUMMARY",
		profile.summary,
		"",
		"CORE COMPETENCIES",
		skills,
		"",
		"PROFESSIONAL EXPERIENCE",
		roles,
		"",
		"EDUCATION",
		edu,
		"",
		"CERTIFICATIONS & LICENSES",
		certs,
		""
	].join("\n");
}
async function copy(text, ok) {
	try {
		await navigator.clipboard.writeText(text);
		toast.success(ok);
	} catch {
		toast.error("Clipboard is blocked in this browser.");
	}
}
function printResume() {
	window.print();
}
function copyAts() {
	return copy(buildAtsText(), "ATS text copied");
}
function copyEmail() {
	return copy(profile.email, "Email copied");
}
function copyPhone() {
	return copy(profile.phone, "Phone copied");
}
function copyContact() {
	return copy(`${profile.name}\n${profile.location}\n${profile.phone}\n${profile.email}`, "Contact block copied");
}
function downloadAts() {
	const blob = new Blob([buildAtsText()], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "April_Outlaw_ATS.txt";
	a.click();
	URL.revokeObjectURL(url);
	toast.success("ATS file downloaded");
}
var useStudio = create((set, get) => ({
	template: "atelier",
	paper: "ivory",
	zoom: 1,
	flow: false,
	setTemplate: (template) => set({ template }),
	setPaper: (paper) => set({ paper }),
	setZoom: (zoom) => set({ zoom: Math.min(1.35, Math.max(.7, zoom)) }),
	nudgeZoom: (delta) => get().setZoom(get().zoom + delta),
	setFlow: (flow) => set({ flow }),
	toggleFlow: () => set({ flow: !get().flow })
}));
function MobileDock() {
	const template = useStudio((s) => s.template);
	const setTemplate = useStudio((s) => s.setTemplate);
	const paper = useStudio((s) => s.paper);
	const setPaper = useStudio((s) => s.setPaper);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dock no-print",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dock-row",
			role: "tablist",
			"aria-label": "Layouts",
			children: templates.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "tab",
				"aria-selected": item.id === template,
				className: item.id === template ? "is-active" : void 0,
				onClick: () => setTemplate(item.id),
				children: item.name
			}, item.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dock-tools",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dock-papers",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchBook, { className: "size-3.5" }), papers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dock-swatch",
						"data-paper": item.id,
						"aria-label": item.name,
						"aria-pressed": item.id === paper,
						onClick: () => setPaper(item.id)
					}, item.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: copyAts,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), "ATS"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "dock-print",
					onClick: printResume,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Print"]
				})
			]
		})]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "r-label",
		children
	});
}
function SummaryBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "r-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Professional Summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "r-summary",
			children: profile.summary
		})]
	});
}
function CompetencyGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "r-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Core Competencies" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "r-skills",
			children: competencyGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "r-skill-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "r-skill-head",
					children: group.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "r-skill-list",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})]
			}, group.id))
		})]
	});
}
function ExperienceList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "r-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Professional Experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "r-roles",
			children: experience.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "r-role",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "r-role-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "r-role-title",
						children: role.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "r-role-org",
						children: [
							role.org,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "r-dot",
								"aria-hidden": "true",
								children: "·"
							}),
							role.place
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "r-role-dates",
						children: role.dates
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "r-bullets",
					children: role.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: bullet }, bullet))
				})]
			}, role.id))
		})]
	});
}
function EducationList({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "r-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "r-edu",
			children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "r-edu-item",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "r-role-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "r-role-title",
							children: item.degree
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "r-role-org",
							children: item.school
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "r-role-dates",
							children: item.dates
						})]
					}),
					item.note && !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "r-note",
						children: item.note
					}) : null,
					item.note && compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "r-note",
						children: item.note
					}) : null
				]
			}, item.id))
		})]
	});
}
function CertificationList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "r-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Certifications & Licenses" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "r-certs",
			children: certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "r-cert-name",
					children: cert.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "r-dot",
					"aria-hidden": "true",
					children: "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "r-cert-issuer",
					children: cert.issuer
				})
			] }, cert.id))
		})]
	});
}
function ContactLine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "r-contact",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.location }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "r-rule-dot",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: profile.phoneHref,
				children: profile.phone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "r-rule-dot",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: profile.emailHref,
				children: profile.email
			})
		]
	});
}
function Atelier() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "r-mast",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "r-eyebrow",
					children: [
						profile.credential,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "r-dot",
							"aria-hidden": "true",
							children: "·"
						}),
						profile.focus
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "r-name",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "r-given",
							children: profile.given
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "r-family",
							children: profile.family
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLine, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "r-marks",
					children: marks.map((mark) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: mark }, mark))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompetencyGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceList, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationList, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationList, {})
	] });
}
function Ledger() {
	const skills = competencyGroups.flatMap((group) => group.items);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "ledger-mast",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "r-name",
					children: [
						profile.given,
						" ",
						profile.family
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "ledger-line",
					children: [
						profile.credential,
						" · ",
						profile.focus
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLine, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "r-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Core Competencies" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ledger-skills",
				children: skills.join("  ·  ")
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceList, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationList, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationList, {})
	] });
}
function Lumen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lumen-grid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lumen-rail",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lumen-brand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lumen-mono",
							"aria-hidden": "true",
							children: "AO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "r-name lumen-name",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "r-given",
								children: profile.given
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "r-family",
								children: profile.family
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lumen-cred",
							children: profile.credential
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lumen-focus",
							children: profile.focus
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "lumen-block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "r-label",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "lumen-meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: profile.city }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.phoneHref,
								children: profile.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.emailHref,
								children: profile.email
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "lumen-block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "r-label",
						children: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "lumen-edu",
						children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lumen-degree",
								children: item.degree
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lumen-school",
								children: item.school
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lumen-dates",
								children: item.dates
							})
						] }, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "lumen-block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "r-label",
						children: "Licenses"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "lumen-certs",
						children: certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lumen-degree",
							children: cert.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lumen-school",
							children: cert.issuer
						})] }, cert.id))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lumen-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "r-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Core Competencies" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lumen-skills",
						children: competencyGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "r-skill-head",
							children: group.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "r-skill-list",
							children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
						})] }, group.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceList, {}),
				education[0]?.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "r-note lumen-objective",
					children: education[0].note
				}) : null
			]
		})]
	});
}
var TEMPLATES = {
	atelier: Atelier,
	lumen: Lumen,
	ledger: Ledger
};
function ResumeDocument({ mode = "page" }) {
	const template = useStudio((s) => s.template);
	const paper = useStudio((s) => s.paper);
	const Template = TEMPLATES[template];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "page",
		"data-template": template,
		"data-paper": paper,
		"data-mode": mode,
		"aria-label": `${template} resume on ${paper} paper`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Template, {})
	});
}
var PAGE_W = 816;
var PAGE_H = 1056;
function Stage() {
	const frameRef = (0, import_react.useRef)(null);
	const [fit, setFit] = (0, import_react.useState)(.86);
	const [narrow, setNarrow] = (0, import_react.useState)(false);
	const zoom = useStudio((s) => s.zoom);
	const flow = useStudio((s) => s.flow);
	const template = useStudio((s) => s.template);
	const paper = useStudio((s) => s.paper);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 720px)");
		const apply = () => setNarrow(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = frameRef.current;
		if (!el) return;
		const measure = () => {
			const pad = 48;
			const w = Math.max(el.clientWidth - pad, 240);
			const h = Math.max(el.clientHeight - pad, 320);
			const next = Math.min(w / PAGE_W, h / PAGE_H);
			setFit(Math.max(.28, Math.min(next, 1.2)));
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const scale = fit * zoom;
	if (flow || narrow) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: frameRef,
		className: "stage stage-flow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeDocument, { mode: "flow" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: frameRef,
		className: "stage",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-slot",
			style: {
				width: PAGE_W * scale,
				height: PAGE_H * scale
			},
			"data-template": template,
			"data-paper": paper,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-scale",
				style: { transform: `scale(${scale})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeDocument, { mode: "page" })
			})
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "text-foreground hover:bg-muted",
			outline: "bg-transparent text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			subtle: "bg-muted text-foreground hover:bg-muted/80"
		},
		size: {
			default: "h-10 px-4 text-sm rounded-[var(--radius-md)]",
			sm: "h-8 px-3 text-xs rounded-[var(--radius-sm)]",
			lg: "h-11 px-5 text-sm rounded-[var(--radius-md)]",
			icon: "size-10 rounded-[var(--radius-md)]",
			"icon-sm": "size-8 rounded-[var(--radius-sm)]"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function PaperSwatches() {
	const paper = useStudio((s) => s.paper);
	const setPaper = useStudio((s) => s.setPaper);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "paper-row",
		children: papers.map((item) => {
			const active = item.id === paper;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("paper-chip", active && "is-active"),
				onClick: () => setPaper(item.id),
				"aria-pressed": active,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "paper-swatch",
					"data-paper": item.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "paper-name",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "paper-blurb",
					children: item.blurb
				})] })]
			}, item.id);
		})
	});
}
function ThumbArt({ id }) {
	if (id === "lumen") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "thumb-art thumb-lumen",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-side" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "thumb-lines",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
			]
		})]
	});
	if (id === "ledger") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "thumb-art thumb-ledger",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "thumb-art thumb-atelier",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-name" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "thumb-split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
		]
	});
}
function TemplateThumbs() {
	const template = useStudio((s) => s.template);
	const setTemplate = useStudio((s) => s.setTemplate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tool-grid",
		children: templates.map((item) => {
			const active = item.id === template;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("thumb-card", active && "is-active"),
				onClick: () => setTemplate(item.id),
				"aria-pressed": active,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbArt, { id: item.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "thumb-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "thumb-name-label",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "thumb-blurb",
						children: item.blurb
					})]
				})]
			}, item.id);
		})
	});
}
function ToolRail() {
	const zoom = useStudio((s) => s.zoom);
	const nudgeZoom = useStudio((s) => s.nudgeZoom);
	const setZoom = useStudio((s) => s.setZoom);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rail no-print",
		"aria-label": "Resume tools",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rail-brand",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rail-kicker",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rail-title",
						children: "Atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rail-sub",
						children: "Letter · one page · print-true"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rail-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Layout" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateThumbs, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rail-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Paper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperSwatches, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rail-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Scale" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "zoom-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "icon-sm",
							onClick: () => nudgeZoom(-.08),
							"aria-label": "Zoom out",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "zoom-value",
							onClick: () => setZoom(1),
							title: "Reset scale",
							children: [Math.round(zoom * 100), "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "icon-sm",
							onClick: () => nudgeZoom(.08),
							"aria-label": "Zoom in",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rail-section rail-export",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Export" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						className: "w-full",
						onClick: printResume,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print / Save PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "export-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: copyAts,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copy ATS"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: downloadAts,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), ".txt"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								onClick: copyEmail,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Email"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								onClick: copyPhone,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Phone"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "contact-copy",
						onClick: copyContact,
						children: "Copy full contact block"
					})
				]
			})
		]
	});
}
function TopBar() {
	const flow = useStudio((s) => s.flow);
	const toggleFlow = useStudio((s) => s.toggleFlow);
	const template = useStudio((s) => s.template);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "topbar no-print",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "topbar-id",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "topbar-mark",
				"aria-hidden": "true",
				children: "AO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "topbar-name",
				children: profile.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "topbar-meta",
				children: [
					profile.credential,
					" · ",
					profile.city
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "topbar-actions",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "topbar-chip",
					children: template
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "flow-toggle",
					onClick: toggleFlow,
					"aria-pressed": flow,
					children: [flow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { className: "size-3.5" }), flow ? "Page" : "Flow"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					onClick: printResume,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Print"]
				})
			]
		})]
	});
}
function Studio() {
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const target = event.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "p") {
				event.preventDefault();
				printResume();
			}
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "c" && event.shiftKey) {
				event.preventDefault();
				copyAts();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
		delayDuration: 200,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "studio",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "studio-grain",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "studio-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolRail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "bottom-right",
			toastOptions: { className: "atelier-toast" }
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
