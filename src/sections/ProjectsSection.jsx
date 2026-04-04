import SectionLabel from '../components/SectionLabel.jsx'
import { projectsSection } from '../data/index.js'

function ProjectCard({ project, index }) {
  const cardContent = (
    <>
      <div className="project-topline">
        <span className="project-num" style={{ color: project.accentColor }}>
          {project.number}
        </span>
        <span className="project-year">{project.year}</span>
      </div>

      <div className="project-main">
        <span className="project-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <p className="project-outcome">{project.outcome}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-pill" style={{ '--pill-color': project.accentColor }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-cta-wrap">
        <span className="project-cta" style={{ color: project.accentColor }}>
          {project.href ? 'Open project ->' : 'Details on request'}
        </span>
      </div>
    </>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="project-card reveal"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {cardContent}
      </a>
    )
  }

  return (
    <article className="project-card project-card-static reveal" style={{ animationDelay: `${index * 0.08}s` }}>
      {cardContent}
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <SectionLabel number={projectsSection.labelNumber} label={projectsSection.label} />

        <div className="projects-heading">
          <h2 className="section-title reveal">{projectsSection.title}</h2>
          <p className="section-intro reveal">{projectsSection.intro}</p>
        </div>

        <div className="projects-list">
          {projectsSection.items.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
