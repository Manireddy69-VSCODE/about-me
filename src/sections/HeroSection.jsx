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

          <div className="targeting-reticle reveal">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="reticle-svg">
              <defs>
                <style>{`
                  .reticle-amber { stroke: #d4620a; fill: none; }
                  .reticle-teal { stroke: #00ffe0; fill: none; }
                  .reticle-glow-amber { filter: drop-shadow(0 0 8px rgba(212, 98, 10, 0.6)); }
                  .reticle-glow-teal { filter: drop-shadow(0 0 8px rgba(0, 255, 224, 0.6)); }
                `}</style>
              </defs>
              
              {/* Outer hexagon */}
              <polygon points="100,30 165,65 165,135 100,170 35,135 35,65" className="reticle-amber reticle-glow-amber" strokeWidth="2"/>
              
              {/* Middle hexagon */}
              <polygon points="100,50 150,80 150,120 100,150 50,120 50,80" className="reticle-teal reticle-glow-teal" strokeWidth="1.5" opacity="0.8"/>
              
              {/* Inner hexagon */}
              <polygon points="100,70 130,85 130,115 100,130 70,115 70,85" className="reticle-amber reticle-glow-amber" strokeWidth="1" opacity="0.6"/>
              
              {/* Horizontal crosshair */}
              <line x1="30" y1="100" x2="170" y2="100" className="reticle-teal" strokeWidth="1" opacity="0.7"/>
              
              {/* Vertical crosshair */}
              <line x1="100" y1="30" x2="100" y2="170" className="reticle-amber" strokeWidth="1" opacity="0.7"/>
              
              {/* Corner targeting marks */}
              <line x1="55" y1="55" x2="75" y2="55" className="reticle-teal" strokeWidth="1" opacity="0.8"/>
              <line x1="55" y1="55" x2="55" y2="75" className="reticle-teal" strokeWidth="1" opacity="0.8"/>
              
              <line x1="145" y1="55" x2="125" y2="55" className="reticle-amber" strokeWidth="1" opacity="0.8"/>
              <line x1="145" y1="55" x2="145" y2="75" className="reticle-amber" strokeWidth="1" opacity="0.8"/>
              
              <line x1="55" y1="145" x2="75" y2="145" className="reticle-amber" strokeWidth="1" opacity="0.8"/>
              <line x1="55" y1="145" x2="55" y2="125" className="reticle-amber" strokeWidth="1" opacity="0.8"/>
              
              <line x1="145" y1="145" x2="125" y2="145" className="reticle-teal" strokeWidth="1" opacity="0.8"/>
              <line x1="145" y1="145" x2="145" y2="125" className="reticle-teal" strokeWidth="1" opacity="0.8"/>
              
              {/* Center dot */}
              <circle cx="100" cy="100" r="3" className="reticle-amber" fill="#d4620a" opacity="0.9"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
