import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicConfig';
import { ClinicLogo } from './ClinicLogo';

export function HeroSection() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0F2942] via-[#173766] to-[#1E40AF] text-white"
    >
      {!heroImgFailed && (
        <img
          src={CLINIC_INFO.heroPhotoUrl}
          alt="Dr. Jaypee Kumawat seated at Dr. Jaypee Dental Hospital"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHeroImgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-[78%_20%] sm:object-center"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0F2942]/92 via-[#1E3A8A]/78 to-[#0F2942]/40"
      />

      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-3">
            <ClinicLogo className="w-11 h-11" variant="light" />
            <span className="text-sm font-semibold tracking-wide text-blue-100">
              {CLINIC_INFO.name}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-white [text-wrap:balance]">
            Your Smile, Our Priority
          </h1>

          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-lg">
            Professional dental care for healthier, happier smiles.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-[#0F2942] bg-white hover:bg-blue-50 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <a
              href={CLINIC_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] border border-blue-300/40 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
