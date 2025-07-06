import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingAnimation from '@/components/LoadingAnimation';
import CursorTrail from '@/components/CursorTrail';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
// import ProjectsSection from '@/components/ProjectsSection'; // Commented out for now
import UnderDevelopment from '@/components/UnderDevelopment';
import ExperienceSection from '@/components/ExperienceSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import InProcessSection from '@/components/InProcessSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Simulate initial loading with proper cleanup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Preload critical resources
    const preloadResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    preloadResources();

    return () => clearTimeout(timer);
  }, []);

  const handleNavigateToContact = () => {
    setCurrentSection('contact');
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection onNavigateToContact={handleNavigateToContact} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <UnderDevelopment 
          title="Projects Section" 
          showBackButton={true} 
          onBack={() => setCurrentSection('home')} 
        />;
      case 'experience':
        return <ExperienceSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigateToContact={handleNavigateToContact} />;
    }
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorTrail />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Main Content with proper spacing for fixed nav */}
      <div className="pt-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </div>
  );
};

export default Index;
