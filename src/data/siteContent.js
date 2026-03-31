// Start here whenever you want to update the words on the portfolio.
// Most future edits should happen in this file instead of inside the React components.

export const siteIdentity = {
  fullName: 'Manikanth Reddy',
  firstName: 'Manikanth',
  lastName: 'Reddy',
  shortLogo: 'MR',
  location: 'Hyderabad, India',
  email: 'manireddy032003@gmail.com',
  resumeFileName: 'resume.pdf',
}

export const navigationLinks = ['About', 'Skills', 'Projects', 'Contact']

export const contactLinks = [
  {
    label: 'Email',
    value: siteIdentity.email,
    href: `mailto:${siteIdentity.email}`,
  },
  {
    label: 'GitHub',
    value: 'github.com/manireddy7989',
    href: 'https://github.com/manireddy7989',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/Mani_reddy69',
    href: 'https://leetcode.com/u/Mani_reddy69/',
  },
  {
    label: 'X',
    value: 'x.com/Mani_reddy69',
    href: 'https://x.com/Mani_reddy69',
  },
]

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/manireddy7989' },
  { label: 'X', href: 'https://x.com/Mani_reddy69' },
  { label: 'Monkeytype', href: 'https://monkeytype.com/profile/manireddy' },
]

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

export const aboutSection = {
  labelNumber: '01',
  label: 'About',
  titleLines: ['Building data work that feels', 'clear, practical, and deployable.'],
  story: [
    'I enjoy turning rough ideas into usable, polished experiences that feel grounded in real-world needs.',
    'My projects usually start with data understanding, then move into modeling, interface design, and deployment.',
    'I care about clarity just as much as capability, so the work has to be understandable as well as functional.',
  ],
  badges: ['Open to work', 'Remote-friendly', 'Portfolio-driven', 'Focused on data roles'],
  valueTitle: 'What I bring',
  values: [
    'Strong interest in analytics, experimentation, and ML workflows.',
    'Comfort moving from notebooks into structured project code.',
    'Attention to interface polish, not just model output.',
  ],
  journeyTitle: 'Journey',
  journey: [
    {
      year: 'Now',
      title: 'Portfolio and shipping mode',
      text: 'Building public-facing projects that connect data work with practical interfaces and deployment discipline.',
    },
    {
      year: '2025',
      title: 'Stronger technical foundation',
      text: 'Focused deeply on Python, SQL, statistics, machine learning, and competitive problem solving.',
    },
    {
      year: 'Next',
      title: 'Data and AI roles',
      text: 'Looking for opportunities where I can contribute to analytics, ML workflows, and user-facing data products.',
    },
  ],
}

export const skillsSection = {
  labelNumber: '02',
  label: 'Skills',
  title: 'A stack built around thoughtful execution.',
  intro:
    'I am strongest when analysis, modeling, and presentation all need to work together in one flow.',
  groups: [
    {
      category: 'Data Science',
      summary: 'Exploring data, finding patterns, and translating them into decisions.',
      items: ['Python', 'Pandas', 'NumPy', 'Statistics', 'EDA'],
    },
    {
      category: 'Machine Learning',
      summary: 'Building models with attention to feature quality and evaluation.',
      items: ['Scikit-learn', 'Regression', 'Classification', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      category: 'Analytics',
      summary: 'Framing business questions and turning analysis into insight.',
      items: ['SQL', 'Tableau', 'Power BI', 'BigQuery', 'Data Storytelling'],
    },
    {
      category: 'Workflow',
      summary: 'Shipping projects with cleaner structure, version control, and iteration.',
      items: ['Git', 'Jupyter', 'VS Code', 'Google Colab', 'AI-assisted Workflow'],
    },
  ],
}

export const projectsSection = {
  labelNumber: '03',
  label: 'Projects',
  title: 'Selected work with a stronger product feel.',
  intro:
    'These projects reflect the direction I want my portfolio to move: practical, well-presented, and easy to understand.',
  items: [
    {
      number: '01',
      title: 'FLUX Tracker',
      tag: 'Featured Build',
      description:
        'A structured execution tracker designed around momentum, visibility, and iterative delivery across projects.',
      outcome: 'Turns planning into a visible, interactive workflow.',
      tech: ['React', 'Vite', 'UI Systems', 'Frontend Architecture'],
      year: '2026',
      accentColor: '#d7ff64',
      href: 'https://manireddy69-vscode.github.io/flux-tracker/',
    },
    {
      number: '02',
      title: 'Walmart Retail Analysis',
      tag: 'Analytics Case Study',
      description:
        'Explored sales behavior across 45 stores, combining EDA and regression-based forecasting for business-oriented recommendations.',
      outcome: 'Focused on patterns that support inventory and revenue decisions.',
      tech: ['Python', 'Pandas', 'Regression', 'Visualization'],
      year: '2025',
      accentColor: '#ff8e5c',
      href: '',
    },
    {
      number: '03',
      title: 'Image Text Extraction',
      tag: 'Automation Utility',
      description:
        'An OCR workflow for detecting and extracting text from images using Python automation and computer vision tooling.',
      outcome: 'Built to reduce repetitive manual extraction work.',
      tech: ['Python', 'OCR', 'Automation', 'Tesseract'],
      year: '2025',
      accentColor: '#85b7ff',
      href: '',
    },
  ],
}

export const contactSection = {
  labelNumber: '04',
  label: 'Contact',
  titleLines: ['Let\'s build something', 'useful and ambitious.'],
  intro:
    'I am open to internships, entry-level roles, freelance collaborations, and project conversations in data, analytics, or AI.',
  formSuccessMessage: 'Your email app should open with the drafted message.',
  formNote: 'This opens your default email app with your message prefilled.',
  availabilityTitle: 'I care about momentum, clarity, and follow-through.',
  availabilityText:
    'If your team values ownership, curiosity, and someone who enjoys making the final result feel polished, I would love to talk.',
}
