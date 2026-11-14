import { useState, type ReactNode } from 'react';

interface ClinicPhotoProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon: ReactNode;
  fallbackLabel: string;
  fallbackSublabel?: string;
  priority?: boolean;
}

export function ClinicPhoto({
  src,
  alt,
  className = '',
  fallbackIcon,
  fallbackLabel,
  fallbackSublabel,
  priority = false,
}: ClinicPhotoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 text-center p-6 ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-blue-100/80 border border-blue-200 text-[#0F2942] flex items-center justify-center mb-3">
          {fallbackIcon}
        </div>
        <div className="text-sm font-semibold text-[#0F2942]">{fallbackLabel}</div>
        {fallbackSublabel && (
          <div className="text-xs text-slate-500 mt-1 max-w-xs">{fallbackSublabel}</div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
