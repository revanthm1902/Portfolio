import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingAnimation from '@/components/LoadingAnimation';
import CursorTrail from '@/components/CursorTrail';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

// Page transition variants for smoother animations
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
};

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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateToContact = useCallback(() => {
    setCurrentSection('contact');
    scrollToTop();
  }, [scrollToTop]);

  const handleExperienceSelect = useCallback((experience: any) => {
    setSelectedExperience(experience);
    setCurrentSection('experience-detail');
    scrollToTop();
  }, [scrollToTop]);

  const handleBackToExperience = useCallback(() => {
    setSelectedExperience(null);
    setCurrentSection('experience');
    scrollToTop();
  }, [scrollToTop]);

  // Scroll to top on section change
  useEffect(() => {
    scrollToTop();
  }, [currentSection, scrollToTop]);

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
      case 'experience':
        return <ExperienceSection onExperienceSelect={handleExperienceSelect} />;
      case 'experience-detail':
        return selectedExperience ? (
          <ExperienceDetailPage 
            experience={selectedExperience} 
            onBack={handleBackToExperience} 
          />
        ) : <ExperienceSection onExperienceSelect={handleExperienceSelect} />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigateToContact={handleNavigateToContact} />;
    }
  };

  if (isLoading || !themeReady) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorTrail />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollProgress />
    </div>
  );
};

export default Index;
