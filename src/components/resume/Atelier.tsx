import { marks, profile } from "@/lib/resume-data";
import {
  CertificationList,
  CompetencyGrid,
  ContactLine,
  EducationList,
  ExperienceList,
  SummaryBlock,
} from "./shared";

export function Atelier() {
  return (
    <>
      <header className="r-mast">
        <p className="r-eyebrow">
          {profile.credential}
          <span className="r-dot" aria-hidden="true">
            ·
          </span>
          {profile.focus}
        </p>
        <h1 className="r-name">
          <span className="r-given">{profile.given}</span>{" "}
          <span className="r-family">{profile.family}</span>
        </h1>
        <ContactLine />
        <ul className="r-marks">
          {marks.map((mark) => (
            <li key={mark}>{mark}</li>
          ))}
        </ul>
      </header>
      <SummaryBlock />
      <CompetencyGrid />
      <ExperienceList />
      <EducationList />
      <CertificationList />
    </>
  );
}
