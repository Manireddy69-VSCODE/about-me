import { useEffect, useState } from 'react'
import { siteIdentity } from '../data/siteContent.js'

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
        <span className="logo-bracket">[</span>
        {siteIdentity.shortLogo}
        <span className="logo-bracket">]</span>
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
