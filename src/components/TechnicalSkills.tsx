import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Code2,
  Database,
  Search,
  Server,
  Settings2,
  Terminal,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';
import {
  technicalSkillsList,
  type SkillCategory,
} from '../data/technicalSkills';

function getSkillIcon(icon: SkillCategory['icon'], size = 20) {
  switch (icon) {
    case 'frontend':
      return <Code2 size={size} className="text-blue-400" />;
    case 'backend':
      return <Server size={size} className="text-blue-400" />;
    case 'database':
      return <Database size={size} className="text-blue-400" />;
    case 'tools':
      return <Terminal size={size} className="text-blue-400" />;
    case 'engineering':
      return <Settings2 size={size} className="text-blue-400" />;
    case 'seo':
      return <Search size={size} className="text-blue-400" />;
    default:
      return <Code2 size={size} className="text-blue-400" />;
  }
}

export default function TechnicalSkills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const total = technicalSkillsList.length;
  const currentCategory = technicalSkillsList[currentIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => (prev + newDirection + total) % total);
    },
    [total]
  );

  const selectCategory = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 30 : -30,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    }),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 sm:py-28 lg:py-32"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-112.5 w-112.5 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-112.5 w-112.5 rounded-full bg-indigo-600/10 blur-[140px]" />

      {/* Grid pattern texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
                Technical Skills & Toolkit
              </span>
              <span className="h-px w-8 bg-blue-500" />
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Tools I use to build.
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-8">
              My development toolkit spans frontend architectures, backend
              services, relational databases, engineering methodologies, and
              modern web optimization.
            </p>
          </motion.div>

          {/* Carousel Arrow Controls (Desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 font-mono text-sm text-slate-400">
              <span className="font-bold text-white">0{currentIndex + 1}</span>
              <span className="text-slate-600">/</span>
              <span>0{total}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous skill category"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next skill category"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Skill Category Selector Tab Strip */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:gap-3">
          {technicalSkillsList.map((category, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={category.id}
                onClick={() => selectCategory(idx)}
                className={`group flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isActive
                    ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'border-slate-800/90 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    isActive ? 'text-blue-200' : 'text-slate-500 group-hover:text-slate-400'
                  }`}
                >
                  {category.number}
                </span>
                <span className="flex items-center gap-1.5">
                  {category.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Carousel Display Stage */}
        <div className="relative mt-6">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentCategory.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/70 p-6 backdrop-blur-xl transition-all sm:p-10 lg:p-12"
            >
              {/* Interactive Cursor Spotlight Glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.12), transparent 80%)`,
                }}
              />

              {/* Subtle top ambient accent line */}
              <div className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

              <div className="relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                
                {/* Left Side: Context, Story & Technical Discipline */}
                <div className="flex flex-col">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-bold text-blue-400">
                      DISCIPLINE #{currentCategory.number}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {currentCategory.badge}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/90 px-3 py-0.5 text-xs text-slate-300">
                      <Sparkles size={12} className="text-blue-400" />
                      {currentCategory.skills.length} Technologies
                    </span>
                  </div>

                  {/* Header Title with Icon */}
                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/90 text-blue-400 shadow-md">
                      {getSkillIcon(currentCategory.icon, 26)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                        Capability Area
                      </span>
                      <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {currentCategory.title}
                      </h3>
                    </div>
                  </div>

                  {/* Overview Description */}
                  <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
                    {currentCategory.description}
                  </p>

                  {/* Key Highlights & Strengths */}
                  <div className="mt-8">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <Layers size={15} className="text-blue-400" />
                      Core Engineering Strengths & Applications
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                      {currentCategory.highlights.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category Status Footer */}
                  <div className="mt-8 border-t border-slate-800/80 pt-5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        <span>Active Production Tooling</span>
                      </div>
                      <span className="font-mono text-slate-500">
                        Category {currentIndex + 1} of {total}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Interactive Skill Pills Grid Showcase */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-950/80 p-6 sm:p-8">
                  <div>
                    {/* Header Strip */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      </div>
                      <span className="font-mono text-xs font-medium text-slate-400">
                        {currentCategory.id}.stack
                      </span>
                    </div>

                    {/* Skill Pills Grid */}
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Stack & Proficiencies ({currentCategory.skills.length})
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2.5">
                        {currentCategory.skills.map((skill) => (
                          <div
                            key={skill}
                            className="group/pill flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-blue-400/50 hover:bg-slate-850 hover:text-white hover:shadow-md sm:text-sm"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70 transition-colors group-hover/pill:bg-blue-400" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables / Scope Note */}
                    <div className="mt-8 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Production Deliverables
                      </p>
                      <div className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-900/50 p-3.5 transition-colors hover:border-slate-700">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-blue-400"
                        />
                        <p className="text-xs font-medium text-slate-200 sm:text-sm">
                          Applied across enterprise dashboards, client portals, and production workflows.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card bottom footer */}
                  <div className="mt-8 border-t border-slate-800/80 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
                        <span>Production Verified</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-400">
                        Verified Expertise
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
            <span className="font-bold text-white">0{currentIndex + 1}</span>
            <span className="text-slate-600">/</span>
            <span>0{total}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous skill category"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next skill category"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Pagination Dots & Progress Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {technicalSkillsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectCategory(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-blue-500'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

