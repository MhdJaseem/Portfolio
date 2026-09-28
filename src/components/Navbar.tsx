import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import faviconImg from '../assets/favicon.jpg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'IT Support', href: '#it-support' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-2.5 transition-transform duration-200"
        >
          <img
            src={faviconImg}
            alt="Mohammed Jaseem"
            className="h-8 w-8 rounded-lg object-cover ring-1 ring-slate-700/80 transition-all duration-200 group-hover:ring-blue-500/80 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]"
          />
          {/* <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
            MJ<span className="text-blue-500">.</span>
          </span> */}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}

          {/* <a
            href="#contact"
            className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:border-blue-400 hover:bg-blue-600"
          >
            Let&apos;s Talk
          </a> */}
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mx-4 mt-3 rounded-2xl border border-slate-800 bg-slate-900/95 p-6 backdrop-blur-2xl shadow-2xl lg:hidden">
          <div className="flex flex-col gap-3.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 border-t border-slate-800 pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-500"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}