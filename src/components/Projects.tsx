import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
} from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = projects.length;
  const currentProject = projects[currentIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => (prev + newDirection + total) % total);
    },
    [total]
  );

  const selectProject = (index: number) => {
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


  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 sm:py-28 lg:py-32"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-450px w-450px rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-450px w-450px rounded-full bg-indigo-600/10 blur-[140px]" />

      {/* Grid texture */}
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
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
                Featured Projects
              </span>
              <span className="h-px w-8 bg-blue-500" />
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Things I&apos;ve worked on.
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Selected professional case studies I&apos;ve engineered across web
              applications, administrative platforms, learning systems, and reporting workflows.
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
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Tab Strip */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:gap-3">
          {projects.map((project, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={project.id}
                onClick={() => selectProject(idx)}
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
                  {project.number}
                </span>
                <span>{project.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Main Carousel Display Stage */}
        <div className="relative mt-6">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/70 p-6 backdrop-blur-xl transition-all sm:p-10 lg:p-12"
            >
              {/* Subtle top ambient accent line */}
              <div className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                
                {/* Left Side: Context, Story & Technical Contributions */}
                <div className="flex flex-col">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-bold text-blue-400">
                      CASE STUDY #{currentProject.number}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {currentProject.category}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/90 px-2.5 py-0.5 text-xs text-slate-300">
                      <Briefcase size={12} className="text-blue-400" />
                      {currentProject.roleContext}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {currentProject.title}
                  </h3>

                  {/* Overview Paragraph */}
                  <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
                    {currentProject.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="mt-7">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <Code2 size={15} className="text-blue-400" />
                      Core Engineering Work & Solutions
                    </h4>
                    <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-slate-300">
                      {currentProject.contributions.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Pills */}
                  <div className="mt-8 border-t border-slate-800/80 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Technologies & Tools
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: Interactive Technical Showcase & Snapshot */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-950/80 p-6 sm:p-7">
                  
                  <div>
                    {/* Mock Browser Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1 font-mono text-xs text-slate-400">
                        <Globe size={12} className="text-blue-400" />
                        <span>{currentProject.routePreview}</span>
                      </div>
                    </div>

                    {/* Highlights Cards */}
                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Architectural Deliverables
                      </p>
                      {currentProject.impactHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-900/50 p-3.5 transition-colors hover:border-slate-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-blue-400"
                          />
                          <p className="text-xs font-medium text-slate-200 sm:text-sm">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Case Study Card Footer */}
                  <div className="mt-8 border-t border-slate-800/80 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        <span>Production Case Study</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                        <span>Case Study Overview</span>
                      </div>
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
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Pagination Dots & Progress Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectProject(idx)}
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
