export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
  highlights: string[];
  icon: 'frontend' | 'backend' | 'database' | 'tools' | 'engineering' | 'seo';
  featured?: boolean;
}

export const technicalSkillsData: {
  frontend: SkillCategory;
  backend: SkillCategory;
  database: SkillCategory;
  tools: SkillCategory;
  engineering: SkillCategory;
  seo: SkillCategory;
} = {
  frontend: {
    id: 'frontend',
    number: '01',
    title: 'Frontend Architecture',
    badge: 'Core Specialization',
    description:
      'Building responsive, accessible, and high-performance user interfaces with modern React ecosystems, modular state management, and type-safe workflows.',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'MUI',
      'Redux',
      'Vite',
    ],
    highlights: [
      'Interactive multi-role dashboards and admin systems',
      'Modular component hierarchies with reusable design tokens',
      'Performance-tuned rendering, memoization & bundle splitting',
      'Cross-browser responsive styling with Tailwind CSS & MUI',
    ],
    icon: 'frontend',
    featured: true,
  },
  backend: {
    id: 'backend',
    number: '02',
    title: 'Backend & APIs',
    badge: 'Services & Integration',
    description:
      'Developing secure, API-driven backend services, role-based authentication flows, middleware, and third-party platform integrations.',
    skills: [
      'Node.js',
      'Nest.js',
      'REST APIs',
      'Authentication',
      'Authorization',
    ],
    highlights: [
      'Structured REST API design with clean endpoint architecture',
      'JWT authentication, session handling & role-based permissions',
      'Business logic validation and resilient error handling',
      'Seamless frontend-to-backend data synchronization',
    ],
    icon: 'backend',
  },
  database: {
    id: 'database',
    number: '03',
    title: 'Database & SQL',
    badge: 'Relational Data',
    description:
      'Designing relational schemas, crafting optimized SQL queries, and handling transactional integrity for enterprise applications.',
    skills: ['PostgreSQL', 'SQL', 'pgAdmin'],
    highlights: [
      'Relational schema modeling and foreign key relationship design',
      'Complex query optimization, indexing, and join operations',
      'Database administration and inspection with pgAdmin',
      'Data normalization and migration management',
    ],
    icon: 'database',
  },
  tools: {
    id: 'tools',
    number: '04',
    title: 'Development Tools',
    badge: 'Workflow & Tooling',
    description:
      'Leveraging industry-standard version control, API testing suites, modern IDE configurations, and deployment pipelines.',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
    highlights: [
      'Collaborative Git workflows with feature branches and pull requests',
      'Comprehensive REST endpoint testing and automation in Postman',
      'Continuous deployment and preview branch pipelines on Vercel',
      'Configured developer environments with linting and formatters',
    ],
    icon: 'tools',
  },
  engineering: {
    id: 'engineering',
    number: '05',
    title: 'Software Engineering',
    badge: 'Core Capabilities',
    description:
      'Practical engineering methodologies honed through production deliverables, reporting dashboards, and complex enterprise requirements.',
    skills: [
      'Responsive Design',
      'Reusable Components',
      'Role-Based Access',
      'API Integration',
      'Debugging',
      'Data Map Pinning',
      'Reporting Systems',
    ],
    highlights: [
      'Hierarchy-based reporting engines with automated Excel export',
      'Interactive geo/data map pinning with coordinate mapping',
      'Granular Role-Based Access Control (RBAC) permission matrices',
      'Root-cause debugging across client, server, and database layers',
    ],
    icon: 'engineering',
  },
  seo: {
    id: 'seo',
    number: '06',
    title: 'SEO & Web Optimization',
    badge: 'Performance & Discoverability',
    description:
      'Implementing technical SEO foundations and Core Web Vitals optimization to maximize search engine discoverability and fast page loads.',
    skills: [
      'Semantic HTML',
      'Meta Tags',
      'Heading Structure',
      'Canonical URLs',
      'Sitemap',
      'Robots.txt',
      'Image Optimization',
      'Internal Linking',
      'Core Web Vitals',
      'Technical SEO Fundamentals',
    ],
    highlights: [
      'Semantic HTML document outlining and structured metadata',
      'Robots.txt, dynamic sitemaps, and canonical tag configuration',
      'Asset optimization and lazy loading for high Lighthouse scores',
      'Core Web Vitals tuning (LCP, FID/INP, CLS optimization)',
    ],
    icon: 'seo',
    featured: true,
  },
};

export const technicalSkillsList: SkillCategory[] = [
  technicalSkillsData.frontend,
  technicalSkillsData.backend,
  technicalSkillsData.database,
  technicalSkillsData.tools,
  technicalSkillsData.engineering,
  technicalSkillsData.seo,
];

