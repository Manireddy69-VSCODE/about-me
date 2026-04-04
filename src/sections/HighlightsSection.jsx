import { highlightsSection } from '../data/index.js'

export default function HighlightsSection() {
  return (
    <section className="highlights section">
      <div className="container">
        <div className="highlights-grid">
          {highlightsSection.items.map((item, index) => (
            <article
              key={item.label}
              className="highlight-card reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="highlight-value">{item.value}</span>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
