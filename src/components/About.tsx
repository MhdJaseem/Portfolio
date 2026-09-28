import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Headset } from 'lucide-react';

interface HighlightCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  subtitle: string;
  delay: number;
}

function HighlightCard({ icon, category, title, subtitle, delay }: HighlightCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-blue-300/60 hover:shadow-sm sm:p-6"
    >
      {/* React Bits Border Glow Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.4), transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1.5px',
        }}
      />

      {/* Subtle Inner Spotlight Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.05), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {category}
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const highlightData = [
  {
    icon: <Code2 size={20} />,
    category: 'Software Development',
    title: 'Production Experience',
    subtitle: 'React · Next.js · TypeScript · REST APIs',
  },
  {
    icon: <Database size={20} />,
    category: 'Technical Foundation',
    title: 'Full-Stack Experience',
    subtitle: 'APIs · PostgreSQL · Debugging · System Configuration',
  },
  {
    icon: <Headset size={20} />,
    category: 'Current Focus',
    title: 'IT Support',
    subtitle: 'Windows · Networking · Hardware · ITSM',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Left: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                About Me
              </span>
              <span className="h-px w-8 bg-blue-600" />
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Building software.
              <br />
              <span className="text-slate-500">
                Solving technical problems.
              </span>
            </h2>

            {/* Body Content */}
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              <p>
                I&apos;m Mohammed Jaseem, a BCA graduate and Software Developer
                with professional experience building web applications,
                dashboards, reporting systems and business platforms.
              </p>
              <p>
                My development experience has given me hands-on exposure to
                frontend development, APIs, databases, debugging, system
                configuration and resolving application-related issues.
              </p>
              <p>
                I&apos;m now expanding that technical foundation into IT
                Support, developing practical skills in Windows, hardware and
                software troubleshooting, networking, Microsoft 365, endpoint
                security and IT service management.
              </p>
            </div>
          </motion.div>

          {/* Right: Compact Highlight Cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {highlightData.map((item, index) => (
              <HighlightCard
                key={item.category}
                icon={item.icon}
                category={item.category}
                title={item.title}
                subtitle={item.subtitle}
                delay={0.15 + index * 0.1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
