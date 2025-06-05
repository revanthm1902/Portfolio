
import { useState, useEffect } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import CursorTrail from '@/components/CursorTrail';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InProcessSection from '@/components/InProcessSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Show loading animation when changing sections (except initial load)
    if (currentSection !== 'home') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
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
      <div className="pt-24">
        {renderSection()}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
