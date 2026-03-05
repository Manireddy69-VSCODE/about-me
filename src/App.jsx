import './App.css'

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

const stats = [
  { label: 'Primary Domain', value: 'Data Science' },
  { label: 'Exam Milestone', value: 'GATE 2025 Qualified (DA)' },
  { label: 'Practice Mode', value: 'LeetCode + Monkeytype' },
]

const skills = [
  'Python',
  'SQL',
  'R',
  'Pandas',
  'Statistics',
  'Machine Learning',
  'Data Visualization',
  'Tableau',
  'Power BI',
  'BigQuery',
]

const projects = [
  {
    title: 'FLUX Tracker',
    summary: 'Primary project. AI-assisted app workflow and deployment practice with structured tracking features.',
    tags: ['Primary', 'AI-assisted', 'Deployment'],
    link: 'https://github.com/Manireddy69-VSCODE/flux-tracker',
    featured: true,
  },
  {
    title: 'Walmart Retail Analysis',
    summary: 'Analyzed sales trends from 45 stores and applied regression techniques for forecasting.',
    tags: ['Pandas', 'Regression', 'EDA'],
    link: '#',
  },
  {
    title: 'Image Text Extraction',
    summary: 'Built OCR pipeline to localize and extract text from images using Python and Tesseract.',
    tags: ['OCR', 'Python', 'Automation'],
    link: '#',
  },
]

const socials = [
  { name: 'LeetCode', href: 'https://leetcode.com/u/Mani_reddy69/', desc: 'Problem-solving profile' },
  { name: 'Monkeytype', href: 'https://monkeytype.com/profile/manireddy', desc: 'Typing speed profile' },
  { name: 'X', href: 'https://x.com/Mani_reddy69', desc: 'Public updates' },
  { name: 'GitHub', href: 'https://github.com/manireddy7989', desc: 'Code portfolio' },
]

function App() {
  return (
    <div className="page">
      <div className="bg-grid" />

      <header className="topbar shell">
        <div className="identity">
          <p className="name">Manikanth Reddy</p>
          <p className="role">Data Science Portfolio</p>
        </div>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#social">Social</a>
        </nav>
      </header>

      <main className="shell layout">
        <section id="overview" className="hero card">
          <div className="hero-head">
            <p className="pill">OPEN TO DATA ROLES</p>
            <h1>Data-focused builder with strong analytical discipline.</h1>
            <p>
              I focus on data science, practical analysis, and continuous improvement through daily coding and typing practice.
              I use AI tools to speed up execution while strengthening core data fundamentals.
            </p>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
            <a className="btn btn-secondary" href={resumeUrl} download>Download Resume</a>
          </div>

          <div className="stat-grid">
            {stats.map((item) => (
              <article key={item.label} className="stat-box">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="card">
          <div className="section-head">
            <h2>Skill Matrix</h2>
            <p>Core tools and concepts I use for analytics and modeling.</p>
          </div>
          <div className="chip-wrap">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <div className="section-head">
            <h2>Projects</h2>
            <p>Selected work with FLUX tracker as the primary showcase.</p>
          </div>
          <div className="project-grid">
            {[...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).map((project) => (
              <article key={project.title} className={`project ${project.featured ? 'featured' : ''}`}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">Open Link</a>
              </article>
            ))}
          </div>
        </section>

        <section id="social" className="card">
          <div className="section-head">
            <h2>Social Accounts</h2>
            <p>Practice profiles and public links.</p>
          </div>
          <div className="social-grid">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="social-card">
                <strong>{s.name}</strong>
                <span>{s.desc}</span>
              </a>
            ))}
          </div>
          <p className="mail">Contact: <a href="mailto:manireddy032003@gmail.com">manireddy032003@gmail.com</a></p>
        </section>
      </main>

      <footer className="shell footer">
        <p>© {new Date().getFullYear()} Manikanth Reddy</p>
      </footer>
    </div>
  )
}

export default App
