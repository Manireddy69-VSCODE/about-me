import './App.css'

const skills = [
  'Python',
  'SQL',
  'R',
  'Pandas',
  'Tableau',
  'Power BI',
  'Machine Learning',
  'Statistics',
  'React',
  'FastAPI',
]

const projects = [
  {
    title: 'FLUX AI Tracker',
    summary: 'Full-stack AI tracker for chat journaling, vocabulary, books, quotes, and workouts.',
    stack: ['React', 'FastAPI', 'Anthropic API'],
    link: 'https://github.com/Manireddy69-VSCODE/flux-tracker',
  },
  {
    title: 'Image Text Extraction & Localization',
    summary: 'OCR workflow using Python and Tesseract to detect and extract text from images.',
    stack: ['Python', 'Pytesseract', 'Computer Vision'],
    link: '#',
  },
  {
    title: 'Walmart Retail Analysis',
    summary: 'Sales analysis across 45 stores with trend analysis and linear regression forecasting.',
    stack: ['Python', 'Pandas', 'Regression'],
    link: '#',
  },
]

const profiles = [
  {
    label: 'Monkeytype',
    value: 'Speed Typing Profile',
    href: 'https://monkeytype.com/profile/manireddy',
    sub: 'Practicing consistency, speed, and accuracy',
  },
  {
    label: 'LeetCode',
    value: 'Problem Solving Profile',
    href: 'https://leetcode.com/u/Mani_reddy69/',
    sub: 'DSA and interview-focused coding practice',
  },
  {
    label: 'GitHub',
    value: 'Code Portfolio',
    href: 'https://github.com/manireddy7989',
    sub: 'Projects, experiments, and full-stack builds',
  },
]

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <a className="logo" href="#home">MR</a>
        <nav>
          <a href="#about">About</a>
          <a href="#profiles">Profiles</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero card">
          <p className="eyebrow">Data Science + Full Stack</p>
          <h1>Manikanth Reddy</h1>
          <p>
            I enjoy building useful products, solving coding problems, and improving speed typing discipline.
            My focus is practical engineering with strong analytical thinking.
          </p>

          <div className="metric-row">
            <div>
              <span>Focus</span>
              <strong>Typing Speed</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>LeetCode Practice</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Product Building</strong>
            </div>
          </div>

          <div className="cta-row">
            <a className="btn primary" href={resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
            <a className="btn" href={resumeUrl} download>Download Resume</a>
          </div>
        </section>

        <section id="about" className="card">
          <h2>About Me</h2>
          <p>
            Strong mathematical background from GATE preparation with practical experience in data analysis,
            statistics, and machine learning. I have worked on OCR systems, retail data forecasting, and modern
            web applications with API integrations.
          </p>
          <p>
            I also maintain disciplined skill-building habits through daily typing practice and coding challenges.
          </p>

          <div className="chips">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="profiles" className="card">
          <h2>Coding & Typing Profiles</h2>
          <div className="profile-grid">
            {profiles.map((item) => (
              <a key={item.label} className="profile-card" href={item.href} target="_blank" rel="noreferrer">
                <div className="profile-top">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
                <p>{item.sub}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">Open</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="card contact-card">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:manireddy032003@gmail.com">manireddy032003@gmail.com</a>
            <a href="https://github.com/manireddy7989" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Manikanth Reddy</p>
      </footer>
    </div>
  )
}

export default App
