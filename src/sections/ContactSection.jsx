import SectionLabel from '../components/SectionLabel.jsx'
import { contactLinks, contactSection, siteIdentity } from '../data/index.js'

export default function ContactSection({ resumeUrl }) {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionLabel number={contactSection.labelNumber} label={contactSection.label} />

        <div className="contact-shell">
          <div className="contact-copy reveal">
            <h2 className="section-title reveal">
              {contactSection.titleLines[0]}
              <br />
              <em>{contactSection.titleLines[1]}</em>
            </h2>
            <p className="section-intro">{contactSection.intro}</p>

            <div className="contact-actions">
              <a href={`mailto:${siteIdentity.email}`} className="btn-primary">
                Email me
              </a>
              <a href={resumeUrl} className="btn-secondary" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                  <span className="contact-link-arrow">{'->'}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-stack reveal">
            <article className="availability-card">
              <span className="panel-kicker">Availability</span>
              <h3>{contactSection.availabilityTitle}</h3>
              <p>{contactSection.availabilityText}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
