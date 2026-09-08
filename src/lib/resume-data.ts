export const profile = {
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
  summary:
    "Detail-oriented healthcare professional and Certified Surgical Technologist (CST) with clinical experience supporting high-volume surgical teams across multiple specialties. Currently completing a Bachelor of Science in Health Information Management at Southern New Hampshire University (two semesters remaining) with the goal of advancing to a Master’s degree in the same field. Proven strengths in organization, documentation accuracy, aseptic compliance, team collaboration, and multi-priority coordination in fast-paced clinical environments. Eager to apply these transferable skills to administrative, operational, and program-support functions within public health settings.",
} as const;

export const competencyGroups = [
  {
    id: "operations",
    label: "Operations",
    items: [
      "Organizational & Time Management",
      "Records & Documentation Accuracy",
      "Microsoft Office Suite (Word, Excel, Outlook)",
      "Meeting Coordination & Scheduling",
      "Multi-Priority Task Management",
      "Attention to Detail & Quality Control",
    ],
  },
  {
    id: "clinical",
    label: "Clinical",
    items: [
      "Aseptic / Infection Control Protocols",
      "Surgical Instrumentation & Sterilization",
      "Medical Terminology & Anatomy",
      "Patient Safety & Confidentiality (HIPAA)",
      "Cross-Functional Team Collaboration",
      "Clinical Workflow Support",
    ],
  },
] as const;

export const experience = [
  {
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
      "Documented case-related details and equipment usage with precision to support accurate records and continuous quality improvement.",
    ],
  },
  {
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
      "Supported postoperative room turnover and restocking, ensuring readiness for subsequent cases and consistent adherence to departmental protocols.",
    ],
  },
] as const;

export const education = [
  {
    id: "snhu",
    degree: "Bachelor of Science in Health Information Management",
    school: "Southern New Hampshire University (SNHU)",
    dates: "Expected 2027",
    note: "Two semesters remaining. Career objective: pursue a Master of Science in Health Information Management upon completion of the bachelor’s degree.",
  },
  {
    id: "fortis",
    degree: "Associate of Science in Surgical Technology",
    school: "Fortis Institute — Cookeville, TN",
    dates: "2023 – 2024",
    note: null,
  },
] as const;

export const certifications = [
  {
    id: "cst",
    name: "Certified Surgical Technologist (CST)",
    issuer: "National Board of Surgical Technology and Surgical Assisting (NBSTSA)",
  },
  {
    id: "cpr",
    name: "CPR Certification",
    issuer: "American Red Cross",
  },
] as const;

export const marks = [
  "CST · NBSTSA",
  "95+ assisted procedures",
  "B.S. HIM in progress",
  "HIPAA-fluent",
] as const;

export const templates = [
  {
    id: "atelier",
    name: "Atelier",
    blurb: "Editorial serif. Quiet rules. Two-column skills.",
  },
  {
    id: "lumen",
    name: "Lumen",
    blurb: "Ink rail. Credentials first. Operations on the page.",
  },
  {
    id: "ledger",
    name: "Ledger",
    blurb: "Classic ATS hierarchy. Centered mast. Dense and clean.",
  },
] as const;

export const papers = [
  {
    id: "ivory",
    name: "Ivory",
    blurb: "Warm cotton stock",
  },
  {
    id: "porcelain",
    name: "Porcelain",
    blurb: "Cool gallery white",
  },
  {
    id: "fog",
    name: "Fog",
    blurb: "Soft mineral gray",
  },
] as const;

export type TemplateId = (typeof templates)[number]["id"];
export type PaperId = (typeof papers)[number]["id"];
