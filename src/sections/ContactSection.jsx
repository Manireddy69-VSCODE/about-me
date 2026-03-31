import { useState } from 'react'
import SectionLabel from '../components/SectionLabel.jsx'
import { contactLinks, contactSection, siteIdentity } from '../data/siteContent.js'

const EMPTY_FORM = {
  name: '',
  email: '',
  message: '',
}

export default function ContactSection() {
  const [formValues, setFormValues] = useState(EMPTY_FORM)
  const [hasOpenedEmailDraft, setHasOpenedEmailDraft] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${formValues.name}`)
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`
    )

    window.location.href = `mailto:${siteIdentity.email}?subject=${subject}&body=${body}`
    setHasOpenedEmailDraft(true)
    setFormValues(EMPTY_FORM)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionLabel number={contactSection.labelNumber} label={contactSection.label} />

        <div className="contact-shell">
          <div className="contact-copy">
            <h2 className="section-title reveal">
              {contactSection.titleLines[0]}
              <br />
              <em>{contactSection.titleLines[1]}</em>
            </h2>
            <p className="section-intro reveal">{contactSection.intro}</p>

            <div className="contact-links reveal">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                  <span className="contact-link-arrow">{'->'}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-stack">
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              {hasOpenedEmailDraft ? (
                <div className="form-success">
                  <span className="success-icon">OK</span>
                  <p>{contactSection.formSuccessMessage}</p>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formValues.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role, team, or project."
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary full-width">
                    Start the conversation
                  </button>
                  <p className="form-note">{contactSection.formNote}</p>
                </>
              )}
            </form>

            <article className="availability-card reveal">
              <span className="panel-kicker">Quick note</span>
              <h3>{contactSection.availabilityTitle}</h3>
              <p>{contactSection.availabilityText}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
