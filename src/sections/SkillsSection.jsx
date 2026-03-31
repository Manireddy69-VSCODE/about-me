import SectionLabel from '../components/SectionLabel.jsx'
import { skillsSection } from '../data/siteContent.js'

export default function SkillsSection() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionLabel number={skillsSection.labelNumber} label={skillsSection.label} />

        <div className="skills-heading">
          <h2 className="section-title reveal">{skillsSection.title}</h2>
          <p className="section-intro reveal">{skillsSection.intro}</p>
        </div>

        <div className="skills-grid">
          {skillsSection.groups.map((group, index) => (
            <article
              key={group.category}
              className="skill-group reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="skill-index">0{index + 1}</span>
              <div className="skill-header">
                <h3>{group.category}</h3>
                <p>{group.summary}</p>
              </div>

              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-arrow">{'->'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
