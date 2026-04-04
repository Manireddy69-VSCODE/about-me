import { useEffect, useState } from 'react'
import Cursor from './components/Cursor.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { navigationLinks, siteIdentity } from './data/index.js'
import useScrollReveal from './hooks/useScrollReveal.js'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import HeroSection from './sections/HeroSection.jsx'
import HighlightsSection from './sections/HighlightsSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import './styles/site.css'

const THEME_STORAGE_KEY = 'about-me-theme'

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const resumeUrl = `${import.meta.env.BASE_URL}${siteIdentity.resumeFileName}`

  useScrollReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <>
      <Cursor />
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />

      <Navbar links={navigationLinks} resumeUrl={resumeUrl} />

      <main>
        <HeroSection resumeUrl={resumeUrl} />
        <HighlightsSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
