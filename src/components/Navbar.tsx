import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicConfig';
import { ClinicLogo } from './ClinicLogo';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Doctor' },
  { href: '#services', label: 'Services' },
  { href: '#branches', label: 'Branches' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-6">
        <a
          href="#home"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A] rounded-sm"
        >
          <ClinicLogo className="w-9 h-9" variant="dark" />
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#0F2942] whitespace-nowrap">
            {CLINIC_INFO.name}
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#0F2942] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#1E3A8A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={CLINIC_INFO.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1E3A8A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-2 text-base font-medium text-slate-700 hover:text-[#0F2942] hover:bg-blue-50/60 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={CLINIC_INFO.phoneHref}
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1E3A8A] rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now · {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
