import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicConfig';
import { ClinicLogo } from './ClinicLogo';

export function Footer() {
  return (
    <footer className="bg-[#0F2942] text-white py-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <ClinicLogo className="w-10 h-10" variant="light" />
          <div>
            <div className="font-bold text-base text-white">{CLINIC_INFO.name}</div>
            <div className="text-xs text-blue-200 mt-0.5">
              Hatoj (Main Branch) · Jobner Branch
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm">
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center gap-2 font-medium text-blue-100 hover:text-white tabular-nums"
          >
            <Phone className="w-4 h-4 text-blue-300" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

          <span className="text-xs text-blue-200">
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
