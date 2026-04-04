import { contactLinks, heroSection, siteIdentity } from '../data/index.js'

export default function HeroSection({ resumeUrl }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-eyebrow reveal">
            <span className="eyebrow-dot" />
            {heroSection.eyebrow}
          </div>

          <p className="hero-intro reveal">{heroSection.greeting}</p>
          <h1 className="hero-name reveal">
            <span className="name-line">{siteIdentity.firstName}</span>
            <span className="name-line accent">{siteIdentity.lastName}</span>
          </h1>

          <div className="hero-title reveal">{heroSection.roleTitle}</div>

          <p className="hero-desc reveal">{heroSection.description}</p>

          <div className="hero-actions reveal">
            <a href={heroSection.primaryAction.href} className="btn-primary">
              {heroSection.primaryAction.label}
            </a>
            <a href={resumeUrl} className="btn-secondary" target="_blank" rel="noreferrer">
              {heroSection.secondaryActionLabel}
            </a>
          </div>

          <div className="hero-links reveal">
            {contactLinks.slice(0, 4).map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <span className="hero-link-arrow">{'->'}</span>
              </a>
            ))}
          </div>

          <div className="hero-metrics reveal">
            {heroSection.metrics.map((metric) => (
              <div key={metric.label} className="hero-metric">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-aside">
          <article className="hero-card hero-card-primary reveal">
            <div className="panel-card-head">
              <span className="panel-kicker">Current status</span>
              <span className="status-pill">Available</span>
            </div>
            <h2>{heroSection.statusTitle}</h2>
            <p>{heroSection.statusText}</p>
          </article>

          <article className="hero-card hero-card-secondary reveal">
            <span className="panel-kicker">At a glance</span>
            <div className="fact-list">
              {heroSection.quickFacts.map((fact) => (
                <div key={fact.label} className="fact-row">
                  <span>{fact.label}</span>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
