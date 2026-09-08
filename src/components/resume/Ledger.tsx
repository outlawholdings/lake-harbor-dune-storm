import { competencyGroups, profile } from "@/lib/resume-data";
import {
  CertificationList,
  ContactLine,
  EducationList,
  ExperienceList,
  SectionLabel,
  SummaryBlock,
} from "./shared";

export function Ledger() {
  const skills = competencyGroups.flatMap((group) => group.items);

  return (
    <>
      <header className="ledger-mast">
        <h1 className="r-name">
          {profile.given} {profile.family}
        </h1>
        <p className="ledger-line">
          {profile.credential} · {profile.focus}
        </p>
        <ContactLine />
      </header>
      <SummaryBlock />
      <section className="r-section">
        <SectionLabel>Core Competencies</SectionLabel>
        <p className="ledger-skills">{skills.join("  ·  ")}</p>
      </section>
      <ExperienceList />
      <EducationList />
      <CertificationList />
    </>
  );
}
