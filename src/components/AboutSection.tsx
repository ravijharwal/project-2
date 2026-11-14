import { Users } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicConfig';
import { ClinicPhoto } from './ClinicPhoto';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <ClinicPhoto
                src={CLINIC_INFO.aboutPhotoUrl}
                alt="Dr. Jaypee Kumawat with colleagues at Dr. Jaypee Dental Hospital"
                fallbackIcon={<Users className="w-6 h-6" />}
                fallbackLabel="Dr. Jaypee Kumawat & Colleagues"
                fallbackSublabel="BDS, MDS (Oral & Maxillofacial Surgery)"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
              About the Doctor
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2942]">
              Meet Dr. Jaypee Kumawat
            </h2>
            <p className="text-sm font-semibold text-[#1E3A8A]">
              BDS, MDS (Oral &amp; Maxillofacial Surgery) · Implantologist
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Dr. Jaypee Kumawat leads clinical care at Dr. Jaypee Dental Hospital across our Hatoj
              and Jobner branches, providing thoughtful diagnosis and treatment alongside our dental
              care team.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Every visit focuses on clear explanation, comfortable chairside procedures, and
              dependable dental care for individuals and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
