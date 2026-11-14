import { useEffect, useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/clinicConfig';
import type { GalleryPhoto } from '../data/clinicConfig';
import { ClinicPhoto } from './ClinicPhoto';

export function GallerySection() {
  const [enlargedPhoto, setEnlargedPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!enlargedPhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEnlargedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enlargedPhoto]);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-10 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            Clinic Interior
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2942]">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <article
              key={photo.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col"
            >
              <button
                type="button"
                onClick={() => setEnlargedPhoto(photo)}
                aria-label={`Enlarge ${photo.title}`}
                className="relative aspect-[4/3] w-full bg-slate-100 block text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1E3A8A]"
              >
                <ClinicPhoto
                  src={photo.imageUrl}
                  alt={photo.imageAlt}
                  fallbackIcon={<Camera className="w-6 h-6" />}
                  fallbackLabel={photo.title}
                  fallbackSublabel={photo.caption}
                  className={`w-full h-full object-cover ${photo.objectPosition ?? 'object-center'}`}
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F2942]/85 text-white text-xs font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </span>
              </button>

              <div className="p-5 space-y-1">
                <h3 className="text-base font-semibold text-[#0F2942]">{photo.title}</h3>
                <p className="text-sm text-slate-600">{photo.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {enlargedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={enlargedPhoto.title}
          onClick={() => setEnlargedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-xl max-w-4xl w-full overflow-hidden border border-slate-200 shadow-xl"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200">
              <h3 className="text-base font-semibold text-[#0F2942]">{enlargedPhoto.title}</h3>
              <button
                type="button"
                onClick={() => setEnlargedPhoto(null)}
                aria-label="Close enlarged photo"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/10] w-full bg-slate-900">
              <ClinicPhoto
                src={enlargedPhoto.imageUrl}
                alt={enlargedPhoto.imageAlt}
                fallbackIcon={<Camera className="w-7 h-7" />}
                fallbackLabel={enlargedPhoto.title}
                fallbackSublabel={enlargedPhoto.caption}
                className="w-full h-full object-contain bg-slate-900"
              />
            </div>

            <div className="px-5 py-4 text-sm text-slate-600 border-t border-slate-200">
              {enlargedPhoto.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
