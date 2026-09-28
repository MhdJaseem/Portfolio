import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import myImg from '../assets/my_img.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                IT Support · Web Development
              </span>
              <span className="h-px w-10 bg-blue-400" />
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Mohammed
              <br />
              <span className="text-slate-400">Jaseem.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              BCA graduate with professional experience in web development,
              currently expanding into IT Support with a focus on
              troubleshooting, systems, networking and user support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
              >
                View My Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/MOHAMMED_JASEEM.pdf"
                className="flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-900"
              >
                <Download size={17} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-[420px]">

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-slate-700/70" />

              <div className="absolute inset-8 rounded-full border border-slate-800" />

              {/* Center */}
              <div className="absolute inset-20 flex items-center justify-center overflow-hidden rounded-full bg-slate-900 shadow-2xl shadow-blue-900/30">
                <img
                  src={myImg}
                  alt="Mohammed Jaseem"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Orbiting Floating labels */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                className="pointer-events-none absolute inset-0"
              >
                {/* Badge 1: Focus */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                    className="pointer-events-auto rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2.5 shadow-xl backdrop-blur"
                  >
                    <p className="text-xs text-slate-400">Focus</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">IT Support</p>
                  </motion.div>
                </div>

                {/* Badge 2: Experience */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                    className="pointer-events-auto rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2.5 shadow-xl backdrop-blur"
                  >
                    <p className="text-xs text-slate-400">Experience</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">Web Development</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}