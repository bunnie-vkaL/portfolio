import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SkillsMarquee from '@/components/SkillsMarquee';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* 3. My Services (Dark Card, Radius 50px) */}
      <ServicesSection />

      {/* 4. My Work Experience */}
      <ExperienceSection />

      {/* Selected Portfolio Works */}
      <PortfolioSection />

      {/* 7. Testimonials (Dark Card, Radius 50px) */}
      <TestimonialsSection />

      {/* Career Plan */}
      <BlogSection />

      {/* 8. Contact & Project Discussion */}
      <ContactSection />

      {/* 9. Infinite Skills Marquee Ribbon (Orange Accent) */}
      <SkillsMarquee />

      {/* Footer */}
      <Footer />
    </main>
  );
}
