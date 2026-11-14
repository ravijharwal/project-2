import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { BRANCHES, CLINIC_INFO, SERVICES } from '../data/clinicConfig';

const PREFERRED_TIME_OPTIONS = [
  'Morning (09:30 AM – 01:30 PM)',
  'Afternoon (02:00 PM – 05:00 PM)',
  'Evening (05:00 PM – 08:00 PM)',
];

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function ContactSection() {
  const hatojBranch = BRANCHES[0];
  const jobnerBranch = BRANCHES[1];
  const minDate = getTodayIsoDate();

  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [branchName, setBranchName] = useState(hatojBranch.name);
  const [serviceTitle, setServiceTitle] = useState(SERVICES[0].title);
  const [preferredDate, setPreferredDate] = useState(minDate);
  const [preferredTime, setPreferredTime] = useState(PREFERRED_TIME_OPTIONS[0]);
  const [notes, setNotes] = useState('');

  const [formError, setFormError] = useState('');
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormError('');

    const cleanName = patientName.trim();
    const cleanPhone = phone.trim();
    const digitsOnly = cleanPhone.replace(/\D/g, '');

    if (cleanName.length < 2) {
      setFormError('Please enter the patient full name.');
      return;
    }
    if (digitsOnly.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!preferredDate) {
      setFormError('Please choose a preferred appointment date.');
      return;
    }

    const messageLines = [
      'Hello Dr. Jaypee Kumawat,',
      'I would like to request an appointment at Dr. Jaypee Dental Hospital.',
      '',
      `Patient Name: ${cleanName}`,
      `Mobile Number: ${cleanPhone}`,
      `Branch: ${branchName}`,
      `Service: ${serviceTitle}`,
      `Preferred Date: ${preferredDate}`,
      `Preferred Time: ${preferredTime}`,
      notes.trim() ? `Notes: ${notes.trim()}` : '',
    ].filter(Boolean);

    const formattedText = messageLines.join('\n');
    const whatsappUrl = `${CLINIC_INFO.whatsappHref}?text=${encodeURIComponent(formattedText)}`;

    setSubmittedSummary(formattedText);
    setSubmittedWhatsappUrl(whatsappUrl);

    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleReset = () => {
    setSubmittedWhatsappUrl('');
    setSubmittedSummary('');
    setPatientName('');
    setPhone('');
    setNotes('');
    setFormError('');
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-blue-50/70 border-b border-blue-100">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                Direct Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2942]">
                Call or Message Us Directly
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Reach Dr. Jaypee Kumawat directly by phone or WhatsApp for appointments across our
                Hatoj and Jobner clinics.
              </p>
              <div className="pt-1">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#0F2942] hover:text-[#1E3A8A] tabular-nums"
                >
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                  <span>{CLINIC_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1E3A8A] rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={hatojBranch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-medium text-[#0F2942] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                  <span>Hatoj Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>

                <a
                  href={jobnerBranch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-medium text-[#0F2942] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                  <span>Jobner Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          <div
            id="appointment"
            className="lg:col-span-7 bg-white border border-blue-100 rounded-2xl p-6 sm:p-8"
          >
            {submittedWhatsappUrl ? (
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#0F2942]">
                      Appointment Request Ready for WhatsApp
                    </h3>
                    <p className="text-sm text-slate-600">
                      Your details are formatted for Dr. Jaypee Kumawat (
                      <span className="font-semibold text-[#0F2942] tabular-nums">
                        {CLINIC_INFO.phoneDisplay}
                      </span>
                      ). If WhatsApp did not open automatically, click the button below to send.
                    </p>
                  </div>
                </div>

                <pre className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {submittedSummary}
                </pre>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={submittedWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors duration-150"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send on WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-3 min-h-[44px] text-sm font-medium text-slate-700 hover:text-[#0F2942] border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                    Appointment Request
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2942]">
                    Book an Appointment via WhatsApp
                  </h3>
                  <p className="text-sm text-slate-600">
                    Fill in your details below to send your appointment request directly to Dr.
                    Jaypee Kumawat on WhatsApp ({CLINIC_INFO.phoneDisplay}).
                  </p>
                </div>

                {formError && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-sm text-red-800"
                  >
                    <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Patient Name *</span>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </label>

                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Mobile Number *</span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98000 00000"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Select Branch *</span>
                    <select
                      value={branchName}
                      onChange={(e) => setBranchName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                    >
                      {BRANCHES.map((branch) => (
                        <option key={branch.id} value={branch.name}>
                          {branch.name} ({branch.badge})
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Dental Service *</span>
                    <select
                      value={serviceTitle}
                      onChange={(e) => setServiceTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Preferred Date *</span>
                    <input
                      type="date"
                      required
                      min={minDate}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </label>

                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Preferred Time *</span>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                    >
                      {PREFERRED_TIME_OPTIONS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-slate-700">
                    Concern or Notes (Optional)
                  </span>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe your dental concern or question..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors duration-150 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Appointment Request to Dr. Jaypee on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
