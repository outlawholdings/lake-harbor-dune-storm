import {
  certifications,
  competencyGroups,
  education,
  profile,
} from "@/lib/resume-data";
import { ExperienceList, SectionLabel, SummaryBlock } from "./shared";

export function Lumen() {
  return (
    <div className="lumen-grid">
      <aside className="lumen-rail">
        <div className="lumen-brand">
          <p className="lumen-mono" aria-hidden="true">
            AO
          </p>
          <h1 className="r-name lumen-name">
            <span className="r-given">{profile.given}</span>
            <span className="r-family">{profile.family}</span>
          </h1>
          <p className="lumen-cred">{profile.credential}</p>
          <p className="lumen-focus">{profile.focus}</p>
        </div>

        <section className="lumen-block">
          <h2 className="r-label">Contact</h2>
          <ul className="lumen-meta">
            <li>{profile.city}</li>
            <li>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.emailHref}>{profile.email}</a>
            </li>
          </ul>
        </section>

        <section className="lumen-block">
          <h2 className="r-label">Education</h2>
          <ul className="lumen-edu">
            {education.map((item) => (
              <li key={item.id}>
                <p className="lumen-degree">{item.degree}</p>
                <p className="lumen-school">{item.school}</p>
                <p className="lumen-dates">{item.dates}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="lumen-block">
          <h2 className="r-label">Licenses</h2>
          <ul className="lumen-certs">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <p className="lumen-degree">{cert.name}</p>
                <p className="lumen-school">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      <div className="lumen-main">
        <SummaryBlock />
        <section className="r-section">
          <SectionLabel>Core Competencies</SectionLabel>
          <div className="lumen-skills">
            {competencyGroups.map((group) => (
              <div key={group.id}>
                <p className="r-skill-head">{group.label}</p>
                <ul className="r-skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <ExperienceList />
        {education[0]?.note ? (
          <p className="r-note lumen-objective">{education[0].note}</p>
        ) : null}
      </div>
    </div>
  );
}
