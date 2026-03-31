import { footerLinks, siteIdentity } from '../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">
            <span className="logo-bracket">[</span>
            {siteIdentity.shortLogo}
            <span className="logo-bracket">]</span>
          </div>
          <p className="footer-copy">
            Portfolio for {siteIdentity.fullName}. Built with React, Vite, and a structure that is easy to update later.
          </p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
