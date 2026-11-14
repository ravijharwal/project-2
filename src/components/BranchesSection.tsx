import { Building2, ExternalLink, MapPin } from 'lucide-react';
import { BRANCHES } from '../data/clinicConfig';
import { ClinicPhoto } from './ClinicPhoto';

export function BranchesSection() {
  return (
    <section id="branches" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-10 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            Visit Our Clinics
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2942]">
            Our Branches
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRANCHES.map((branch) => (
            <article
              key={branch.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] w-full bg-slate-100 border-b border-slate-200">
                <ClinicPhoto
                  src={branch.imageUrl}
                  alt={branch.imageAlt}
                  fallbackIcon={<Building2 className="w-6 h-6" />}
                  fallbackLabel={branch.name}
                  fallbackSublabel={branch.badge}
                  className={`w-full h-full object-cover ${
                    branch.id === 'hatoj' ? 'object-[50%_38%]' : 'object-center'
                  }`}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#1E3A8A]">{branch.badge}</div>
                  <h3 className="text-xl font-bold text-[#0F2942]">{branch.name}</h3>
                  <div className="flex items-start gap-2 text-sm text-slate-600 pt-1">
                    <MapPin className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                </div>

                <div>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1E3A8A] rounded-lg transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
