import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingAnimation from '@/components/LoadingAnimation';
import CursorTrail from '@/components/CursorTrail';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import UnderDevelopment from '@/components/UnderDevelopment';
import ExperienceSection from '@/components/ExperienceSection';
import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import ResumeSection from '@/components/ResumeSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import InProcessSection from '@/components/InProcessSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [themeReady, setThemeReady] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  useEffect(() => {
    // Set theme as early as possible
    const setInitialTheme = () => {
      const userTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = userTheme || (systemPrefersDark ? 'dark' : 'light');
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(theme);
      setThemeReady(true);
    };
    setInitialTheme();
  }, []);

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
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExperienceSelect = (experience: any) => {
    setSelectedExperience(experience);
    setCurrentSection('experience-detail');
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExperience = () => {
    setSelectedExperience(null);
    setCurrentSection('experience');
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add effect to scroll to top when section changes
  useEffect(() => {
    // Scroll to top whenever section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection onNavigateToContact={handleNavigateToContact} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
          // title="Projects Section" 
          // showBackButton={true} 
          // onBack={() => setCurrentSection('home')} 
      case 'experience':
        return <ExperienceSection onExperienceSelect={handleExperienceSelect} />;
      case 'experience-detail':
        return selectedExperience ? (
          <ExperienceDetailPage 
            experience={selectedExperience} 
            onBack={handleBackToExperience} 
          />
        ) : <ExperienceSection onExperienceSelect={handleExperienceSelect} />;
      case 'resume':
        return <ResumeSection onBack={() => setCurrentSection('home')} />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigateToContact={handleNavigateToContact} />;
    }
  };

  // Only show the app when both loading and theme are ready
  if (isLoading || !themeReady) {
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
