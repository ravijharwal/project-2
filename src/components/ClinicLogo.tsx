import { CLINIC_INFO } from '../data/clinicConfig';

interface ClinicLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function ClinicLogo({ className = 'w-10 h-10', variant = 'dark' }: ClinicLogoProps) {
  const strokeColor = variant === 'light' ? '#FFFFFF' : '#1E3A8A';
  const accentColor = variant === 'light' ? '#93C5FD' : '#2563EB';
  const bgColor = variant === 'light' ? 'rgba(255,255,255,0.12)' : '#EFF6FF';
  const borderColor = variant === 'light' ? 'rgba(255,255,255,0.28)' : '#BFDBFE';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-label={`${CLINIC_INFO.name} logo`}
      className={`${className} shrink-0`}
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="9"
        fill={bgColor}
        stroke={borderColor}
        strokeWidth="1.5"
      />
      <path
        d="M14.5 11.5C12.2 11.5 10.5 13.4 10.5 16.2C10.5 19.6 12.1 22.8 13.4 27.6C13.8 29.1 15.6 29.3 16.3 27.9L18.4 23.8C19.1 22.5 20.9 22.5 21.6 23.8L23.7 27.9C24.4 29.3 26.2 29.1 26.6 27.6C27.9 22.8 29.5 19.6 29.5 16.2C29.5 13.4 27.8 11.5 25.5 11.5C23.6 11.5 22.1 12.5 20 12.5C17.9 12.5 16.4 11.5 14.5 11.5Z"
        stroke={strokeColor}
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path d="M20 15.5V19.5M18 17.5H22" stroke={accentColor} strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}
