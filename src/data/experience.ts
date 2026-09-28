export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isLatest?: boolean;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'noukha-technologies',
    role: 'Software Developer',
    company: 'Noukha Technologies',
    location: 'Coimbatore',
    period: 'Jan 2025 — Jun 2026',
    isLatest: true,
    summary:
      'Engineered production web applications, administrative dashboards, and data-driven reporting systems with modern React/Next.js frameworks and backend API services.',
    contributions: [
      'Engineered production web applications using React.js, Next.js, TypeScript, Tailwind CSS, and MUI, delivering responsive interfaces.',
      'Designed and developed reusable UI components, tables, forms, filters, modals, and responsive layouts across customer, admin, super-admin, and reporting dashboards.',
      'Integrated REST APIs with Node.js, Nest.js, and PostgreSQL services to deliver end-to-end application features and data-driven workflows.',
      'Developed reporting systems with hierarchy-based filtering, data map pinning, report generation, and standardized Excel export workflows for structured business data.',
      'Implemented authentication flows, notifications, search and sorting, payment-related interfaces, and mobile-responsive experiences.',
      'Applied web optimization and SEO fundamentals, including semantic page structure, metadata, and responsive performance practices.',
      'Debugged and resolved frontend, backend, API integration, SQL, and deployment issues across development workflows while collaborating with team members to deliver production-ready features.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'Node.js',
      'Nest.js',
      'PostgreSQL',
    ],
  },
  {
    id: 'gyanmatrix',
    role: 'Software Developer Intern',
    company: 'Gyanmatrix',
    location: 'Coimbatore',
    period: 'Jan 2023 — Dec 2024',
    isLatest: false,
    summary:
      'Contributed to frontend web application development, UI enhancements, and API integration while learning production software workflows and Git collaboration.',
    contributions: [
      'Developed frontend features for web applications while gaining practical experience with React-based interfaces, responsive design, API integration, debugging, and software development workflows.',
      'Implemented UI changes and application enhancements based on product requirements while following Git-based development and team collaboration practices.',
      'Built a foundational understanding of website structure, accessibility, and SEO-friendly frontend practices through hands-on web development work.',
    ],
    technologies: ['React', 'Responsive Design', 'API Integration', 'Git'],
  },
];
