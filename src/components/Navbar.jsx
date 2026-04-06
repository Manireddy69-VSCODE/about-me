import { useEffect, useState } from 'react'
import { siteIdentity } from '../data/index.js'

export default function Navbar({ links, resumeUrl }) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 24)

    window.addEventListener('scroll', updateScrollState)
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={closeMenu}>
        <svg className="logo-chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`
              .chevron-stroke { stroke: #d4620a; fill: none; stroke-width: 2.5; }
              .chevron-glow { filter: drop-shadow(0 0 6px rgba(212, 98, 10, 0.5)); }
            `}</style>
          </defs>
          <polyline points="5,5 12,12 5,19" className="chevron-stroke chevron-glow"/>
          <polyline points="17,5 12,12 17,19" className="chevron-stroke chevron-glow" opacity="0.5"/>
        </svg>
        <span className="logo-text">{siteIdentity.shortLogo}</span>
      </a>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={closeMenu}>
              {link}
            </a>
          </li>
        ))}
        <li>
          <a href={resumeUrl} className="nav-cta" target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume
          </a>
        </li>
      </ul>

      <button
        type="button"
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
