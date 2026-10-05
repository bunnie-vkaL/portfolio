import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyHireMeSection from '@/components/WhyHireMeSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import SkillsMarquee from '@/components/SkillsMarquee';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* 2. Why Hire Me (About) */}
      <WhyHireMeSection />

      {/* 3. My Services (Dark Card, Radius 50px) */}
      <ServicesSection />

      {/* 4. My Work Experience */}
      <ExperienceSection />

      {/* 5. Selected Portfolio Works */}
      <PortfolioSection />

      {/* 6. Career Plan */}
      <BlogSection />

      {/* 7. Testimonials (Dark Card, Radius 50px) */}
      <TestimonialsSection />

      {/* 8. Contact & Project Discussion */}
      <ContactSection />

      {/* 9. Infinite Skills Marquee Ribbon (Orange Accent) */}
      <SkillsMarquee />

      {/* Footer */}
      <Footer />
    </main>
  );
}
