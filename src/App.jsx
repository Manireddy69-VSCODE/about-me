import './App.css'

const skills = [
  'Python',
  'SQL',
  'R',
  'Pandas',
  'Machine Learning',
  'Statistics',
  'Power BI',
  'Tableau',
  'EDA',
  'Data Visualization',
]

const highlights = [
  { label: 'Primary Field', value: 'Data Science' },
  { label: 'Practice', value: 'LeetCode + Typing' },
  { label: 'Strength', value: 'Math + Analysis' },
]

const projects = [
  {
    title: 'Walmart Retail Analysis',
    summary: 'Analyzed sales from 45 stores and used regression for forecasting and trend interpretation.',
    tags: ['Python', 'Pandas', 'Regression'],
    link: '#',
  },
  {
    title: 'Image Text Extraction',
    summary: 'Built OCR workflow to localize and extract text from images using Python and Tesseract.',
    tags: ['OCR', 'Pytesseract', 'Automation'],
    link: '#',
  },
  {
    title: 'FLUX AI Project',
    summary: 'AI-assisted build and deployment practice to convert ideas into a working product quickly.',
    tags: ['AI Tools', 'Prompting', 'Deployment'],
    link: 'https://github.com/Manireddy69-VSCODE/flux-tracker',
  },
]

const socials = [
  {
    name: 'Monkeytype',
    detail: 'Typing speed profile',
    href: 'https://monkeytype.com/profile/manireddy',
  },
  {
    name: 'LeetCode',
    detail: 'Problem solving profile',
    href: 'https://leetcode.com/u/Mani_reddy69/',
  },
  {
    name: 'X',
    detail: 'Updates and thoughts',
    href: 'https://x.com/Mani_reddy69',
  },
  {
    name: 'GitHub',
    detail: 'Code and projects',
    href: 'https://github.com/manireddy7989',
  },
]

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

function App() {
  return (
    <div className="shell">
      <div className="noise" />

      <header className="topbar reveal-1">
        <a className="brand" href="#home">
          <span className="brand-main">Manikanth Reddy</span>
          <span className="brand-sub">Data Science</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero reveal-2">
          <div className="hero-left">
            <p className="hero-kicker">ANALYTICS | ML | PROBLEM SOLVING</p>
            <h1>Building confidence in Data Science through daily practice.</h1>
            <p>
              I am focused on data science and analytics. I strengthen my thinking with LeetCode,
              typing discipline, and hands-on projects based on real datasets.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
              <a className="btn btn-ghost" href={resumeUrl} download>Download Resume</a>
            </div>
          </div>

          <div className="hero-right">
            {highlights.map((item) => (
              <article key={item.label} className="pulse-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="panel reveal-3">
          <h2>About</h2>
          <p>
            My foundation comes from strong preparation in mathematics, probability, and statistics.
            I am interested in extracting insight from data and presenting it clearly for decision-making.
          </p>
          <p>
            I use AI tools for faster execution and deployment, while continuously improving my data science core.
          </p>
        </section>

        <section id="skills" className="panel reveal-4">
          <h2>Skill Stack</h2>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="work" className="panel reveal-5">
          <h2>Selected Work</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">Open Project</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel reveal-6">
          <h2>Social Accounts</h2>
          <div className="social-grid">
            {socials.map((social) => (
              <a key={social.name} href={social.href} className="social-card" target="_blank" rel="noreferrer">
                <strong>{social.name}</strong>
                <span>{social.detail}</span>
              </a>
            ))}
          </div>

          <div className="mail-row">
            <a href="mailto:manireddy032003@gmail.com">manireddy032003@gmail.com</a>
          </div>
        </section>
      </main>

      <footer>
        <p>Copyright {new Date().getFullYear()} Manikanth Reddy</p>
      </footer>
    </div>
  )
}

export default App
