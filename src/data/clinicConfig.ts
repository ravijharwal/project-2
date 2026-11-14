export interface DentalService {
  id: string;
  title: string;
  description: string;
}

export interface ClinicBranch {
  id: 'hatoj' | 'jobner';
  badge: string;
  name: string;
  address: string;
  isAddressPlaceholder: boolean;
  mapsUrl: string;
  imageUrl: string;
  imageAlt: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
  objectPosition?: string;
}

export const CLINIC_INFO = {
  name: 'Dr. Jaypee Dental Hospital',
  domain: 'drjaypeedental.com',
  phoneDisplay: '+91 76655 56745',
  phoneHref: 'tel:+917665556745',
  whatsappHref: 'https://wa.me/917665556745',
  heroPhotoUrl: '/assets/aistudio/dr_jp_main_pic_ea0433e0.png',
  aboutPhotoUrl: '/assets/aistudio/dr_jp_pic_78a6899e.png',
};

export const SERVICES: DentalService[] = [
  {
    id: 'general-dental-care',
    title: 'General Dental Care',
    description:
      'Routine oral examinations, professional cleaning, fillings, and preventive care for all age groups.',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description:
      'Long-lasting tooth replacement solutions designed to restore comfortable chewing and a natural appearance.',
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    description:
      'Focused endodontic care to relieve tooth pain, treat infection, and preserve your natural tooth.',
  },
  {
    id: 'braces-and-aligners',
    title: 'Braces & Aligners',
    description:
      'Orthodontic alignment options to correct tooth spacing, crowding, and bite balance.',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description:
      'Smile enhancement procedures tailored for natural tooth shade, shape, and confidence.',
  },
];

export const BRANCHES: ClinicBranch[] = [
  {
    id: 'hatoj',
    badge: 'Main Branch',
    name: 'Dr. Jaypee Dental Hospital, Hatoj',
    address:
      'Main Kalwar Rd, near Ganesh e mitra, Hathoj, Jaipur, Rajasthan 302044 (near the Hathoj bus stand)',
    isAddressPlaceholder: false,
    mapsUrl: 'https://maps.app.goo.gl/iCuFKnZaPVkNavqw5',
    imageUrl: '/assets/aistudio/hatoj_clinic_b083e5df.png',
    imageAlt: 'Exterior storefront of Dr. Jaypee Dental Hospital, Hatoj main branch',
  },
  {
    id: 'jobner',
    badge: 'Branch',
    name: 'Dr. Jaypee Dental Hospital, Jobner',
    address:
      'M.G. Vaishnav Complex, Near Ramdev Mandir, Phulera Road, Naya Bazar, Jobner, Jaipur, Rajasthan 303328',
    isAddressPlaceholder: false,
    mapsUrl: 'https://share.google/ox7dJgHcvLkqn4ri9',
    imageUrl: '/assets/aistudio/jobner_clinic_181f4c6e.png',
    imageAlt: 'Exterior storefront of Dr. Jaypee Dental Hospital, Jobner branch',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'clinic-interior-operatory',
    title: 'Dental Treatment Suite',
    caption: 'Equipped clinical chair, overhead surgical light, and diagnostic X-ray unit.',
    imageUrl: '/assets/aistudio/clinic_inside_a1c84dff.png',
    imageAlt: 'Dental treatment chair and equipment inside Dr. Jaypee Dental Hospital',
    objectPosition: 'object-center',
  },
  {
    id: 'clinic-interior-consultation',
    title: 'Patient Consultation & Clinical Team',
    caption: 'Personalised chairside explanation and care coordination with patients.',
    imageUrl: '/assets/aistudio/dr_jp_gallery_9cd51888.png',
    imageAlt: 'Dr. Jaypee Kumawat consulting with a patient and clinic staff',
    objectPosition: 'object-top',
  },
];
