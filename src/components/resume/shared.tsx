import {
  competencyGroups,
  education,
  experience,
  profile,
  certifications,
} from "@/lib/resume-data";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="r-label">{children}</h2>;
}

export function SummaryBlock() {
  return (
    <section className="r-section">
      <SectionLabel>Professional Summary</SectionLabel>
      <p className="r-summary">{profile.summary}</p>
    </section>
  );
}

export function CompetencyGrid() {
  return (
    <section className="r-section">
      <SectionLabel>Core Competencies</SectionLabel>
      <div className="r-skills">
        {competencyGroups.map((group) => (
          <div key={group.id} className="r-skill-col">
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
  );
}

export function ExperienceList() {
  return (
    <section className="r-section">
      <SectionLabel>Professional Experience</SectionLabel>
      <div className="r-roles">
        {experience.map((role) => (
          <article key={role.id} className="r-role">
            <header className="r-role-head">
              <div>
                <h3 className="r-role-title">{role.title}</h3>
                <p className="r-role-org">
                  {role.org}
                  <span className="r-dot" aria-hidden="true">
                    ·
                  </span>
                  {role.place}
                </p>
              </div>
              <p className="r-role-dates">{role.dates}</p>
            </header>
            <ul className="r-bullets">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationList({ compact = false }: { compact?: boolean }) {
  return (
    <section className="r-section">
      <SectionLabel>Education</SectionLabel>
      <div className="r-edu">
        {education.map((item) => (
          <article key={item.id} className="r-edu-item">
            <header className="r-role-head">
              <div>
                <h3 className="r-role-title">{item.degree}</h3>
                <p className="r-role-org">{item.school}</p>
              </div>
              <p className="r-role-dates">{item.dates}</p>
            </header>
            {item.note && !compact ? <p className="r-note">{item.note}</p> : null}
            {item.note && compact ? <p className="r-note">{item.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function CertificationList() {
  return (
    <section className="r-section">
      <SectionLabel>Certifications & Licenses</SectionLabel>
      <ul className="r-certs">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <span className="r-cert-name">{cert.name}</span>
            <span className="r-dot" aria-hidden="true">
              —
            </span>
            <span className="r-cert-issuer">{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ContactLine() {
  return (
    <p className="r-contact">
      <span>{profile.location}</span>
      <span className="r-rule-dot" aria-hidden="true" />
      <a href={profile.phoneHref}>{profile.phone}</a>
      <span className="r-rule-dot" aria-hidden="true" />
      <a href={profile.emailHref}>{profile.email}</a>
    </p>
  );
}
