import SectionLabel from '../components/SectionLabel.jsx'
import { aboutSection } from '../data/siteContent.js'

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionLabel number={aboutSection.labelNumber} label={aboutSection.label} />

        <div className="about-shell">
          <div className="about-copy">
            <h2 className="section-title reveal">
              {aboutSection.titleLines[0]}
              <br />
              <em>{aboutSection.titleLines[1]}</em>
            </h2>

            {aboutSection.story.map((paragraph) => (
              <p key={paragraph} className="reveal">
                {paragraph}
              </p>
            ))}

            <div className="about-badges reveal">
              {aboutSection.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="about-side">
            <article className="about-card reveal">
              <span className="panel-kicker">{aboutSection.valueTitle}</span>
              <ul className="value-list">
                {aboutSection.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </article>

            <article className="journey-card reveal">
              <span className="panel-kicker">{aboutSection.journeyTitle}</span>
              <div className="journey-list">
                {aboutSection.journey.map((item) => (
                  <div key={item.title} className="journey-item">
                    <span className="journey-year">{item.year}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
