import { AboutSection } from './components/AboutSection';
import { BranchesSection } from './components/BranchesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BranchesSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
