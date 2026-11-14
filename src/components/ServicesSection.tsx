import type { ReactNode } from 'react';
import { ShieldCheck, Sparkles, Stethoscope, Wrench, Smile } from 'lucide-react';
import { SERVICES } from '../data/clinicConfig';

const SERVICE_ICONS: Record<string, ReactNode> = {
  'general-dental-care': <Stethoscope className="w-5 h-5" />,
  'dental-implants': <Wrench className="w-5 h-5" />,
  'root-canal-treatment': <ShieldCheck className="w-5 h-5" />,
  'braces-and-aligners': <Smile className="w-5 h-5" />,
  'cosmetic-dentistry': <Sparkles className="w-5 h-5" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-10 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            Our Treatments
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2942]">
            Dental Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white border border-slate-200 rounded-xl space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#1E3A8A] flex items-center justify-center">
                {SERVICE_ICONS[service.id] ?? <Stethoscope className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-semibold text-[#0F2942]">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
