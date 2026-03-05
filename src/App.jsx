import './App.css'

const skills = [
  'React',
  'FastAPI',
  'Python',
  'JavaScript',
  'SQL',
  'Netlify',
  'Vercel',
  'Git & GitHub',
]

const projects = [
  {
    title: 'FLUX AI Tracker',
    summary: 'AI-driven personal dashboard for journaling, words, books, quotes, and workout tracking.',
    stack: ['React', 'FastAPI', 'Anthropic API'],
    link: '#',
  },
  {
    title: 'Portfolio Site',
    summary: 'This personal website with a clean, bold visual style and clear project storytelling.',
    stack: ['React', 'Vite', 'Responsive UI'],
    link: '#',
  },
  {
    title: 'API Playground',
    summary: 'Experimental backend sandbox for testing endpoints, payloads, and deployment workflows.',
    stack: ['Python', 'FastAPI', 'Netlify Functions'],
    link: '#',
  },
]

function App() {
  return (
    <div className="site-shell">
      <div className="bg-glow glow-left" />
      <div className="bg-glow glow-right" />

      <header className="topbar">
        <a className="brand" href="#home">MR</a>
        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="kicker">Software Developer</p>
          <h1>Manikanth Reddy</h1>
          <p className="hero-copy">
            I build practical web products with clean frontend experiences and reliable backend systems.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-outline" href="#contact">Contact Me</a>
          </div>
        </section>

        <section id="about" className="panel reveal">
          <h2>About Me</h2>
          <p>
            I focus on full-stack development with React on the frontend and Python/FastAPI on the backend.
            I enjoy turning ideas into working products, then improving them through iteration, testing, and deployment.
          </p>
        </section>

        <section id="skills" className="panel reveal">
          <h2>Skills</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="panel reveal">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="mini-chip-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="mini-chip">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">Case Study</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel reveal contact-panel">
          <h2>Contact</h2>
          <p>Open to internships, freelance work, and collaborative projects.</p>
          <div className="contact-row">
            <a href="mailto:manikanth.banswada@gmail.com">manikanth.banswada@gmail.com</a>
            <a href="https://github.com/Manireddy69-VSCODE" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Manikanth Reddy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
