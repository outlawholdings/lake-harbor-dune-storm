import {
  certifications,
  competencyGroups,
  education,
  experience,
  profile,
} from "./resume-data";

export function buildAtsText(): string {
  const skills = competencyGroups.flatMap((group) => group.items).join(" · ");

  const roles = experience
    .map((role) => {
      const bullets = role.bullets.map((b) => `• ${b}`).join("\n");
      return `${role.title}\n${role.org} — ${role.place} | ${role.dates}\n${bullets}`;
    })
    .join("\n\n");

  const edu = education
    .map((item) => {
      const note = item.note ? `\n${item.note}` : "";
      return `${item.degree}\n${item.school} | ${item.dates}${note}`;
    })
    .join("\n\n");

  const certs = certifications
    .map((c) => `${c.name} — ${c.issuer}`)
    .join("\n");

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
    "",
  ].join("\n");
}
