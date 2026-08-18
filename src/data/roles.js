// Mock product data. This is illustrative sample data for the assignment demo —
// not real user data, and it's labeled as such in the UI (see ProductPreview).
export const ROLES = [
  {
    id: 'fullstack',
    label: 'Full Stack Developer',
    readiness: 78,
    skills: [
      { name: 'React', value: 82 },
      { name: 'Node.js', value: 70 },
      { name: 'DSA', value: 64 },
      { name: 'System Design', value: 51 },
    ],
    recommendation:
      'Focus on system design next. Build one API architecture project and practice designing services that scale.',
    nextSteps: ['Build a REST API', 'Complete 20 DSA problems', 'Practice one system design case study'],
  },
  {
    id: 'ai',
    label: 'AI Engineer',
    readiness: 61,
    skills: [
      { name: 'Python', value: 85 },
      { name: 'ML Fundamentals', value: 58 },
      { name: 'DSA', value: 64 },
      { name: 'MLOps', value: 33 },
    ],
    recommendation:
      'Your fundamentals are solid — the gap is deployment. Ship one model behind a real API before adding more theory.',
    nextSteps: ['Fine-tune a small open model', 'Deploy one model with an API', 'Learn vector databases'],
  },
  {
    id: 'frontend',
    label: 'Frontend Developer',
    readiness: 84,
    skills: [
      { name: 'React', value: 82 },
      { name: 'CSS & Layout', value: 88 },
      { name: 'Accessibility', value: 46 },
      { name: 'Performance', value: 60 },
    ],
    recommendation:
      'Craft is strong. Accessibility is the gap that will show up in interviews — start auditing your own projects.',
    nextSteps: ['Run an a11y audit on a project', 'Learn keyboard-nav patterns', 'Study Core Web Vitals'],
  },
]
