import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
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
              Education
            </span>
            <span className="h-px w-8 bg-blue-600" />
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A foundation in computer applications.
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            My academic background provided the foundation for my software
            development journey.
          </p>
        </motion.div>

        {/* Education Card Container */}
        <div className="mt-12 max-w-3xl sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-sm sm:p-9"
          >
            {/* Subtle inner top accent line */}
            <div className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <GraduationCap size={24} />
                </div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    Bachelor of Computer Application (BCA)
                  </h3>

                  <p className="mt-2 text-base font-medium text-slate-600 sm:text-lg">
                    VLB Janakiammal College of Arts and Science
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={13} className="text-slate-400" />
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Period Badge */}
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
                  <Calendar size={13} className="text-blue-600" />
                  2020 — 2023
                </span>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
