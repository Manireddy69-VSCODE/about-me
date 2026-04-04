import { siteIdentity } from './site.js'

export const heroSection = {
  eyebrow: 'Machine learning, data science, and analytics',
  greeting: 'Hello, I am',
  roleTitle: 'Computer Science graduate building end-to-end ML systems.',
  description:
    'I focus on predictive maintenance, OCR automation, and practical AI tools, backed by strong foundations in linear algebra, probability, algorithms, and statistical thinking.',
  primaryAction: {
    label: 'View projects',
    href: '#projects',
  },
  secondaryActionLabel: 'Download resume',
  quickFacts: [
    { label: 'Based in', value: siteIdentity.location },
    { label: 'Current role', value: 'Data Science & ML Intern at LogicVeda' },
    { label: 'Focus', value: 'ML systems, forecasting, and applied analytics' },
  ],
  signals: [
    {
      value: '1716',
      label: 'GATE 2026 rank',
      note: 'Ranked 1716 in Data Science and AI.',
    },
    {
      value: '2',
      label: 'internships',
      note: 'Experience across LogicVeda Technologies and Cognifyz Technologies.',
    },
    {
      value: '3',
      label: 'active project tracks',
      note: 'AI habit tracking, predictive maintenance, and OCR automation.',
    },
  ],
  statusTitle: 'Currently working on predictive maintenance and RUL forecasting systems.',
  statusText:
    'I enjoy building the full pipeline: data ingestion, feature engineering, model development, APIs, and production-minded workflows.',
}

export const highlightsSection = {
  items: heroSection.signals,
}
