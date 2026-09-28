import { motion } from 'framer-motion';
import {
  Cpu,
  Headphones,
  Monitor,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import {
  itSupportCategories,
  type ITSupportCategory,
} from '../data/itSupportSkills';

function getCategoryIcon(iconName: ITSupportCategory['iconName']) {
  switch (iconName) {
    case 'monitor':
      return <Monitor size={20} />;
    case 'hardware':
      return <Cpu size={20} />;
    case 'network':
      return <Network size={20} />;
    case 'itsm':
      return <Headphones size={20} />;
    case 'microsoft':
      return <Users size={20} />;
    case 'security':
      return <ShieldCheck size={20} />;
    default:
      return <Monitor size={20} />;
  }
}

interface SkillCardProps {
  category: ITSupportCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-sm sm:p-7"
    >
      <div>
        {/* Header Icon + Title */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {getCategoryIcon(category.iconName)}
          </div>
          <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            {category.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-3.5 text-sm leading-relaxed text-slate-600">
          {category.description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors group-hover:border-slate-300 group-hover:bg-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ITSupportLearning() {
  return (
    <section
      id="it-support"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                Currently Learning
              </span>
              <span className="h-px w-8 bg-blue-600" />
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Expanding my technical foundation into IT Support.
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Alongside my software development experience, I&apos;m building
              practical knowledge in IT Support, troubleshooting, systems,
              networking and IT service management.
            </p>
          </motion.div>
        </div>


        {/* 6-Category Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {itSupportCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Context Message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex items-center justify-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-5 py-3 text-xs font-medium text-slate-600 shadow-xs sm:text-sm">
            <Sparkles size={15} className="shrink-0 text-blue-600" />
            <span>
              Learning through structured study, practical troubleshooting
              exercises and hands-on exploration.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
