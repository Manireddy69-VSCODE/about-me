import { siteIdentity } from './site.js'

export const heroSection = {
  eyebrow: 'Portfolio for data and AI opportunities',
  greeting: 'Hello, I am',
  rotatingWords: ['Analyst.', 'Data Scientist.', 'Builder.', 'Problem Solver.'],
  description:
    'I build practical data projects that move from analysis to implementation, with a strong interest in systems that are useful, readable, and ready to ship.',
  primaryAction: {
    label: 'See selected work',
    href: '#projects',
  },
  secondaryActionLabel: 'Open resume',
  quickFacts: [
    { label: 'Based in', value: siteIdentity.location },
    { label: 'Focus', value: 'Data science, analytics, and AI products' },
    { label: 'Current mode', value: 'Building practical portfolio projects' },
  ],
  signals: [
    {
      value: '10+',
      label: 'portfolio projects',
      note: 'Built across analytics, machine learning, and product-focused workflows.',
    },
    {
      value: '3',
      label: 'core strengths',
      note: 'Data analysis, machine learning, and clean implementation.',
    },
    {
      value: '2025',
      label: 'key milestone',
      note: 'Qualified GATE in Data Science and AI.',
    },
  ],
  statusTitle: 'Focused on roles where analytics, machine learning, and execution all matter.',
  statusText:
    'I like projects that begin with messy information and end with something people can actually use.',
}

export const highlightsSection = {
  items: heroSection.signals,
}
