import { siteIdentity } from './site.js'

export const heroSection = {
  eyebrow: '// Classified — Sector 7 Field Operative',
  greeting: 'Hello, I am',
  roleTitle: 'Computer Science graduate focused on practical ML systems.',
  description:
    'I build machine learning projects around forecasting, predictive maintenance, and OCR, with hands-on experience across data pipelines, modeling, and API-backed systems.',
  primaryAction: {
    label: 'View projects',
    href: '#projects',
  },
  secondaryActionLabel: 'Download resume',
  metrics: [
    { label: 'Current', value: 'ML Intern at LogicVeda' },
    { label: 'GATE DA 2026', value: 'Rank 1716' },
    { label: 'Based in', value: siteIdentity.location },
  ],
  quickFacts: [
    { label: 'Focus', value: 'Predictive maintenance and forecasting' },
    { label: 'Stack', value: 'Python, SQL, FastAPI, Scikit-learn' },
    { label: 'Looking for', value: 'ML, data science, and analytics roles' },
  ],
  statusTitle: 'Currently building predictive maintenance and RUL forecasting systems.',
  statusText: 'Recent work includes anomaly detection, time-series forecasting, OCR automation, and end-to-end machine learning workflows.',
}
