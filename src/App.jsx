import { useState, useEffect, useRef } from 'react'
import './App.css'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
const HERO_WORDS = ['Analyst.', 'Data Scientist.', 'Builder.', 'Problem Solver.']
const THEME_KEY = 'about-me-theme'

const SKILLS = [
  { category: 'Data Science', items: ['Python', 'Pandas', 'NumPy', 'Statistics', 'EDA'] },
  { category: 'Machine Learning', items: ['Scikit-learn', 'Regression', 'Classification', 'Feature Engineering', 'Model Evaluation'] },
  { category: 'Analytics', items: ['SQL', 'Tableau', 'Power BI', 'BigQuery', 'Data Storytelling'] },
  { category: 'Tools', items: ['Git', 'Jupyter', 'VS Code', 'Google Colab', 'AI-assisted Workflow'] },
]

const PROJECTS = [
  {
    num: '01',
    title: 'FLUX Tracker',
    tag: 'Primary Project',
    desc: 'AI-assisted workflow tracker focused on structured execution, project tracking, and deployment practice.',
    tech: ['React', 'Vite', 'JS', 'UI Systems'],
    year: '2026',
    color: '#c8ff00',
    link: 'https://github.com/Manireddy69-VSCODE/flux-tracker',
  },
  {
    num: '02',
    title: 'Walmart Retail Analysis',
    tag: 'Data Analysis',
    desc: 'Sales trend analysis across 45 stores with EDA and regression-based forecasting for business decision support.',
    tech: ['Python', 'Pandas', 'Regression', 'Visualization'],
    year: '2025',
    color: '#ff6b35',
    link: null,
    cta: 'Case study available on request',
  },
  {
    num: '03',
    title: 'Image Text Extraction',
    tag: 'Computer Vision Utility',
    desc: 'OCR pipeline to localize and extract text from images using Python-based automation workflows.',
    tech: ['Python', 'OCR', 'Automation', 'Tesseract'],
    year: '2025',
    color: '#a78bfa',
    link: null,
    cta: 'Demo available on request',
  },
]

function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    const updateEnabled = () => setEnabled(media.matches)
    updateEnabled()
    media.addEventListener('change', updateEnabled)

    return () => media.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    window.addEventListener('mousemove', move)

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const hover = () => cursorRef.current?.classList.add('hovered')
    const unhover = () => cursorRef.current?.classList.remove('hovered')
    const interactiveElements = document.querySelectorAll('a, button, .project-card')

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', unhover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', hover)
        el.removeEventListener('mouseleave', unhover)
      })
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={cursorRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="logo-bracket">[</span>MR<span className="logo-bracket">]</span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </li>
      </ul>
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}

function Hero() {
  const [typed, setTyped] = useState('')
  const wIdx = useRef(0)
  const cIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer

    const tick = () => {
      const word = HERO_WORDS[wIdx.current]
      if (!deleting.current) {
        cIdx.current += 1
        setTyped(word.slice(0, cIdx.current))
        if (cIdx.current === word.length) {
          deleting.current = true
          timer = setTimeout(tick, 1600)
          return
        }
      } else {
        cIdx.current -= 1
        setTyped(word.slice(0, cIdx.current))
        if (cIdx.current === 0) {
          deleting.current = false
          wIdx.current = (wIdx.current + 1) % HERO_WORDS.length
        }
      }
      timer = setTimeout(tick, deleting.current ? 55 : 110)
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="grid-overlay" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="noise" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow reveal">
          <span className="eyebrow-dot" />
          Open to Data and AI Opportunities
        </div>
        <h1 className="hero-name reveal">
          <span className="name-line">Manikanth</span>
          <span className="name-line accent">Reddy</span>
        </h1>
        <div className="hero-title reveal">
          Data and AI <span className="typed">{typed}<span className="caret" /></span>
        </div>
        <p className="hero-desc reveal">
          I build practical, high-impact data solutions from exploratory analysis to deployable applications,
          combining analytical rigor with clean, user-focused interfaces.
        </p>
        <div className="hero-actions reveal">
          <a href={resumeUrl} className="btn-primary" target="_blank" rel="noreferrer">View Resume</a>
          <a href="#projects" className="btn-ghost">View My Work -&gt;</a>
          <a href="#contact" className="btn-ghost">Let's Talk -&gt;</a>
        </div>
        <div className="hero-stats reveal">
          {[['3+', 'Years Learning'], ['10+', 'Projects'], ['Daily', 'Practice Streak']].map(([n, l]) => (
            <div key={l} className="stat">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-ring">
          <div className="avatar-inner">
            <div className="avatar-initials">MR</div>
          </div>
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
          <div className="orbit-dot orbit-1" />
          <div className="orbit-dot orbit-2" />
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-label reveal">
          <span>01</span> About Me
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">
              Building data products with<br />
              <em>clarity and execution</em>
            </h2>
            <p className="reveal">
              I am Manikanth Reddy, focused on data science and AI-assisted product building.
              My work blends analytics, experimentation, and fast implementation.
            </p>
            <p className="reveal">
              I spend most of my time strengthening fundamentals in statistics and machine learning,
              while shipping projects that improve practical decision-making.
            </p>
            <div className="about-badges reveal">
              {['Open to work', 'Remote-friendly', 'Focused on Data Roles'].map((b) => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          </div>
          <div className="about-card reveal">
            <div className="card-inner">
              <div className="card-line"><span>Location</span><span>Hyderabad, India</span></div>
              <div className="card-line"><span>Focus</span><span>Data Science and AI</span></div>
              <div className="card-line"><span>Milestone</span><span>GATE 2025 Qualified (DA)</span></div>
              <div className="card-line"><span>Practice</span><span>LeetCode and Monkeytype</span></div>
              <div className="card-line"><span>Status</span><span className="status-dot-wrap"><span className="status-dot" />Available</span></div>
              <a href="#contact" className="card-cta">Get in touch -&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-label reveal"><span>02</span> Skills</div>
        <h2 className="section-title reveal">My stack</h2>
        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <div key={group.category} className="skill-group reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-category">{group.category}</div>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-arrow">-&gt;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-label reveal"><span>03</span> Projects</div>
        <h2 className="section-title reveal">Selected work</h2>
        <div className="projects-list">
          {PROJECTS.map((p) => {
            const content = (
              <>
                <div className="project-num" style={{ color: p.color }}>{p.num}</div>
                <div className="project-body">
                  <div className="project-header">
                    <div>
                      <span className="project-tag">{p.tag}</span>
                      <h3 className="project-title">{p.title}</h3>
                    </div>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-pill" style={{ '--pill-color': p.color }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={`project-arrow ${p.link ? '' : 'static-note'}`} style={{ color: p.color }}>
                  {p.link ? '->' : (p.cta ?? 'Details soon')}
                </div>
              </>
            )

            if (p.link) {
              return (
                <a key={p.num} className="project-card reveal" href={p.link} target="_blank" rel="noreferrer">
                  {content}
                </a>
              )
            }

            return (
              <div key={p.num} className="project-card project-card-static reveal">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:manireddy032003@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-label reveal"><span>04</span> Contact</div>
        <h2 className="section-title reveal">Let's build something<br /><em>impactful</em></h2>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p>I am open to data science, analytics, and AI-focused opportunities. If you have a project or role that matches my skill set, reach out.</p>
            <div className="contact-links">
              {[
                { label: 'Email', value: 'manireddy032003@gmail.com', href: 'mailto:manireddy032003@gmail.com' },
                { label: 'GitHub', value: 'github.com/manireddy7989', href: 'https://github.com/manireddy7989' },
                { label: 'LeetCode', value: 'leetcode.com/u/Mani_reddy69', href: 'https://leetcode.com/u/Mani_reddy69/' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="contact-link" target="_blank" rel="noreferrer">
                  <span className="contact-link-label">{c.label}</span>
                  <span className="contact-link-val">{c.value} -&gt;</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                <span className="success-icon">OK</span>
                <p>Message draft opened in your email app. I will get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="btn-primary full-width">Send Message -&gt;</button>
                <p className="form-note">Your default email app will open with this message.</p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">[</span>MR<span className="logo-bracket">]</span>
        </div>
        <p className="footer-copy">(c) {new Date().getFullYear()} Manikanth Reddy. Crafted with precision.</p>
        <div className="footer-links">
          <a href="https://github.com/manireddy7989" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com/Mani_reddy69" target="_blank" rel="noreferrer">X</a>
          <a href="https://monkeytype.com/profile/manireddy" target="_blank" rel="noreferrer">Monkeytype</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useScrollReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Cursor />
      <button type="button" className="theme-toggle theme-toggle-corner" onClick={toggleTheme} aria-label="Toggle color theme">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
