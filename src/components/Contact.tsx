import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    // Create a mailto link with the form details
    const subject = encodeURIComponent(
      `New Contact Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    // Open Gmail web compose directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mohammed.jaseem.a.2002@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 sm:py-28">
      {/* Subtle background ambient lighting */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-100 w-100 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Outer framed container with dashed border matching the design */}
        <div className="relative border-x border-dashed border-slate-800/80 px-4 py-8 sm:px-12 sm:py-12 md:px-16">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Contact us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              We offer tailored solutions to meet your unique needs. Whether
              it&apos;s web development, IT support, or technical troubleshooting,
              we&apos;re here to bring your ideas to life.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10"
          >
            {/* Two Column Inputs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 text-sm text-white placeholder-slate-500 transition-all outline-none focus:border-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-slate-600"
              />

              <input
                type="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 text-sm text-white placeholder-slate-500 transition-all outline-none focus:border-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-slate-600"
              />
            </div>

            {/* Message Textarea */}
            <div className="mt-4 sm:mt-5">
              <textarea
                rows={6}
                placeholder="Write a message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-white placeholder-slate-500 transition-all outline-none focus:border-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-slate-600"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-2xl bg-white py-4 text-center text-sm font-semibold text-slate-950 shadow-sm transition-all hover:bg-slate-200 active:scale-[0.99]"
              >
                {isSubmitted ? 'Message Sent' : 'Send'}
              </button>
            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
}
