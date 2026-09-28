export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  routePreview: string;
  roleContext: string;
  description: string;
  contributions: string[];
  impactHighlights: string[];
  technologies: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 'trainery-lms',
    number: '01',
    title: 'Trainery LMS & Report Manager',
    category: 'LMS · Reporting Platform',
    routePreview: 'app.trainery.io/reports/hierarchy',
    roleContext: 'Noukha Technologies · Full-Stack Development',
    description:
      'A comprehensive learning management and business reporting system engineered to handle course enrollments, complex organizational hierarchies, and multi-tier data views.',
    impactHighlights: [
      'Hierarchy-based dataset filtering & map pinning',
      'Automated Excel report generation workflows',
      'PostgreSQL data structures & REST API integration',
    ],
    contributions: [
      'Implemented hierarchy filtering and reporting workflows across multi-level organizational datasets.',
      'Developed data map pinning functionality for quick access to critical business views.',
      'Implemented standardized Excel export workflows for formatted, structured business data.',
      'Engineered report generation features with real-time progress and status updates.',
      'Contributed to narrative-summary functionality and custom report view configurations.',
      'Integrated frontend reporting interfaces with backend services and PostgreSQL-backed data structures.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Spring Boot',
      'PostgreSQL',
      'REST APIs',
      'Excel Export',
    ],
  },
  {
    id: 'zerv-platforms',
    number: '02',
    title: 'Zerv Customer & Admin Platforms',
    category: 'Customer Platform · Admin Dashboards',
    routePreview: 'app.zerv.io/admin/dashboard',
    roleContext: 'Noukha Technologies · Frontend & Integration',
    description:
      'Multi-tier web applications spanning customer onboarding, payment-related flows, and granular admin/super-admin management dashboards with role-based access.',
    impactHighlights: [
      '3 distinct role-based portals (Customer, Admin, Super-Admin)',
      'Secure onboarding & payment-related UI workflows',
      'Notification triggers, sorting, and responsive layouts',
    ],
    contributions: [
      'Developed customer dashboard interfaces and customer management features.',
      'Engineered administrative and super-admin dashboard workflows with role-specific views.',
      'Built multi-step onboarding workflows with dynamic validation.',
      'Implemented payment-related interfaces and transaction status screens.',
      'Implemented real-time notification components and alert center functionality.',
      'Engineered responsive layouts delivering a consistent experience across desktop and mobile screens.',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'REST APIs',
    ],
  },
  {
    id: 'circles-admin',
    number: '03',
    title: 'Circles Admin Panel',
    category: 'Administration · Location Services',
    routePreview: 'admin.circles.app/venues/map-picker',
    roleContext: 'Noukha Technologies · Web Development',
    description:
      'Centralized administration platform designed to manage community users, interests, venue directories, notifications, and cloud asset storage.',
    impactHighlights: [
      'Interactive OpenStreetMap venue picker & geocoding search',
      'Complete CRUD workflows for users, venues, and interests',
      'AWS S3 direct file upload integration & reusable modals',
    ],
    contributions: [
      'Implemented user and permissions management with comprehensive CRUD workflows.',
      'Built interactive venue location features powered by OpenStreetMap integrations.',
      'Implemented debounced geocoding search for smooth location discovery without excessive API calls.',
      'Integrated S3-based cloud file upload pipelines for media and venue asset management.',
      'Developed reusable forms, data tables, filter bars, and modal components across the admin suite.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'MUI',
      'REST APIs',
      'AWS S3',
      'OpenStreetMap',
    ],
  },
  {
    id: 'noukha-website',
    number: '04',
    title: 'Noukha Technologies Corporate Website',
    category: 'Corporate Web · Frontend Engineering',
    routePreview: 'noukha.com/services/web-development',
    roleContext: 'Noukha Technologies · Next.js Engineering',
    description:
      'Production corporate website built to showcase company services, case studies, and interactive contact touchpoints with strong SEO optimization.',
    impactHighlights: [
      'Modern Next.js architecture with semantic HTML & metadata',
      'Responsive interactive components & fast load times',
      'SEO-friendly structure for optimal search indexing',
    ],
    contributions: [
      'Developed responsive website sections and dedicated service presentation pages.',
      'Engineered reusable UI component systems with fluid responsive transitions.',
      'Applied semantic HTML and complete page metadata structures for search engine visibility.',
      'Optimized asset delivery and frontend bundle performance across modern browsers.',
      'Ensured strict adherence to web accessibility and mobile-first layout practices.',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'SEO', 'Responsive Design'],
  },
  {
    id: 'startup-singam',
    number: '05',
    title: 'Startup Singam Platform Pages',
    category: 'Product Pages · Frontend Interface',
    routePreview: 'startupsingam.com/platform/features',
    roleContext: 'Noukha Technologies · Frontend Development',
    description:
      'Modern, highly-responsive frontend product pages created to present platform features, workflows, and user experiences with clean React components.',
    impactHighlights: [
      'Modern React-based product interface & landing flows',
      'Reusable UI design patterns tailored to product requirements',
      'Fully responsive cross-device layout engineering',
    ],
    contributions: [
      'Engineered responsive frontend interfaces tailored to core product requirements.',
      'Developed polished product showcase pages and interactive feature walkthroughs.',
      'Built consistent, reusable UI design patterns across all customer-facing views.',
      'Maintained cross-device responsive fidelity and clean component code structure.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
];
