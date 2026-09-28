import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  Building2,
} from 'lucide-react';

interface TimelineStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  scopeHighlight: string;
  description: string;
  tags: string[];
  companyBadge?: {
    company: string;
    period: string;
  };
}

const timelineSteps: TimelineStep[] = [
  {
    number: '01',
    icon: <Code2 size={18} />,
    title: 'Frontend Foundations & UI Development',
    scopeHighlight: 'ROLE: SOFTWARE DEVELOPER INTERN · GYANMATRIX (2023 — 2024)',
    description:
      'Developed frontend features for web applications with React.js, responsive layouts, API integration, and collaborative Git workflows with emphasis on clean structure.',
    tags: ['React', 'Responsive Design', 'API Integration', 'Git'],
    companyBadge: {
      company: 'Gyanmatrix',
      period: 'Jan 2023 — Dec 2024',
    },
  },
  {
    number: '02',
    icon: <Layers size={18} />,
    title: 'Production Web Apps & UI Architecture',
    scopeHighlight: 'ROLE: SOFTWARE DEVELOPER · NOUKHA TECHNOLOGIES (2025 — 2026)',
    description:
      'Engineered scalable web applications, client portals, and multi-tier admin/super-admin dashboards with React.js, Next.js, TypeScript, Tailwind CSS, and MUI.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MUI'],
    companyBadge: {
      company: 'Noukha Technologies',
      period: 'Jan 2025 — Jun 2026',
    },
  },
  {
    number: '03',
    icon: <Database size={18} />,
    title: 'REST API Integration & Backend Services',
    scopeHighlight: 'STACK: NODE.JS, NEST.JS, POSTGRESQL & AUTH FLOWS',
    description:
      'Integrated robust REST APIs with Node.js and Nest.js services, handled secure authentication flows, PostgreSQL relational models, and notifications.',
    tags: ['Node.js', 'Nest.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    number: '04',
    icon: <FileSpreadsheet size={18} />,
    title: 'Data Reporting & Excel Export Automation',
    scopeHighlight: 'DELIVERABLES: MAP PINNING, FILTERS & STRUCTURED EXPORTS',
    description:
      'Developed hierarchy-based reporting dashboards, interactive map pinning, advanced data filters, and automated Excel export workflows for business intelligence.',
    tags: ['Hierarchy Filters', 'Data Maps', 'Excel Export', 'Analytics'],
  },
  {
    number: '05',
    icon: <ShieldCheck size={18} />,
    title: 'Production Debugging & Systems Support',
    scopeHighlight: 'EXPANSION: TROUBLESHOOTING, SEO, NETWORKING & IT SUPPORT',
    description:
      'Resolved frontend, backend, SQL, and deployment bugs while expanding practical expertise into IT troubleshooting, endpoint systems, and networking.',
    tags: ['SQL Optimization', 'System Debugging', 'SEO & Performance', 'IT Support'],
  },
];

export default function Experience() {
  const topRowSteps = timelineSteps.slice(0, 2); // 01, 02
  const bottomRowSteps = timelineSteps.slice(2); // 03, 04, 05

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* DESKTOP LAYOUT (lg and above: 2-Row Connected Process Grid)               */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          
          {/* TOP ROW: Header Column (Col 1) + Step 01 (Col 2) + Step 02 (Col 3) */}
          <div className="grid grid-cols-3 gap-8 items-stretch">
            
            {/* Column 1: Header / Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center pr-4"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Career Timeline
                </span>
                <span className="h-px w-8 bg-blue-600" />
              </div>

              {/* Main Heading */}
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 xl:text-4xl">
                Where I&apos;ve Built &amp; Scaled{' '}
                <span className="text-blue-600">Production Software</span>
              </h2>

              {/* Subtitle / Intro */}
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                From frontend engineering and dashboard architecture to full-stack
                API integration, reporting systems, and production debugging across
                Noukha Technologies and Gyanmatrix.
              </p>

              {/* Quick Company Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  <Building2 size={12} className="text-blue-600" />
                  Noukha Technologies
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  <Building2 size={12} className="text-blue-600" />
                  Gyanmatrix
                </span>
              </div>
            </motion.div>

            {/* Column 2: Step 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-300">
                    {topRowSteps[0].number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {topRowSteps[0].icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">
                  {topRowSteps[0].title}
                </h3>

                {/* Scope Highlight */}
                <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {topRowSteps[0].scopeHighlight}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {topRowSteps[0].description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                {topRowSteps[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Column 3: Step 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-300">
                    {topRowSteps[1].number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {topRowSteps[1].icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">
                  {topRowSteps[1].title}
                </h3>

                {/* Scope Highlight */}
                <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {topRowSteps[1].scopeHighlight}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {topRowSteps[1].description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                {topRowSteps[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* HORIZONTAL CONNECTOR TIMELINE (Center Divider with Nodes)                 */}
          {/* ========================================================================= */}
          <div className="relative my-8 py-4">
            {/* The Horizontal Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-slate-200" />

            {/* Milestone Nodes positioned to connect columns */}
            <div className="relative grid grid-cols-3 gap-8">
              {/* Node 1 */}
              <div className="flex justify-center">
                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-50 shadow-sm border border-slate-200">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
              </div>

              {/* Node 2 */}
              <div className="flex justify-center">
                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-50 shadow-sm border border-slate-200">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
              </div>

              {/* Node 3 */}
              <div className="flex justify-center">
                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-50 shadow-sm border border-slate-200">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Step 03 (Col 1) + Step 04 (Col 2) + Step 05 (Col 3) */}
          <div className="grid grid-cols-3 gap-8 items-stretch">
            {bottomRowSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  {/* Header: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold tracking-tight text-slate-300">
                      {step.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">
                    {step.title}
                  </h3>

                  {/* Scope Highlight */}
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    {step.scopeHighlight}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET LAYOUT (Below lg: Vertical Process Cards)                 */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                Career Timeline
              </span>
              <span className="h-px w-8 bg-blue-600" />
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Where I&apos;ve Built &amp; Scaled{' '}
              <span className="text-blue-600">Production Software</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From frontend engineering and dashboard architecture to full-stack
              API integration, reporting systems, and production debugging across
              Noukha Technologies and Gyanmatrix.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                <Building2 size={12} className="text-blue-600" />
                Noukha Technologies
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                <Building2 size={12} className="text-blue-600" />
                Gyanmatrix
              </span>
            </div>
          </motion.div>

          {/* Connected Vertical Steps */}
          <div className="relative mt-12 space-y-6 sm:mt-16">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-blue-200 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold tracking-tight text-slate-300">
                    {step.number}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mt-3 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {step.scopeHighlight}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

